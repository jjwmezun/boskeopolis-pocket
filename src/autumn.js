import Config from './config';
import Sprite from './sprite';

const JumpState =
{
	null: 0,
	startJump: 1,
	isJumping: 2,
	endJump: 3
}

class Autumn
{
	constructor( renderer )
	{
		this.x = 0;
		this.y = 0;
		this.vx = 0;
		this.vy = 0;
		this.accx = 0;
		this.accy = 0;
		this.width = 16;
		this.height = 25;
		this.bounce = 0.14;
		this.jumpState = JumpState.null;
		this.startSpeed = 0.16;
		this.topSpeed = 2;
		renderer.addSprite( 'autumn', new Sprite( 'img/autumn.png', 32, 32, this.width, this.height ) );
	}

	update( input, renderer, block )
	{
		this.updateX( input, block );
		this.updateY( input, block );
		this.updateGraphics( renderer );
	}

	updateX( input, block )
	{
		if ( this.testOnGround( block ) )
		{
			this.startSpeed = ( input.held.run ) ? 0.32 : 0.16;
			this.topSpeed = ( input.held.run ) ? 4 : 2;
		}

		if ( input.held.right )
		{
			this.accx = this.startSpeed;
		}
		else if ( input.held.left )
		{
			this.accx = -this.startSpeed;
		}
		else
		{
			this.accx = 0;
			this.vx /= 1.05;
		}
		this.vx = Math.max( Math.min( this.vx + this.accx, this.topSpeed ), -this.topSpeed );

		let nextX = this.x + this.vx;
		const xTest = ( this.vx < 0 ) ? nextX : nextX + this.width;
		if ( xTest < 0 || xTest >= Config.WindowWidthPixels || block.xInSolid( xTest, this.y, this.height ) )
		{
			this.vx *= -this.bounce;
			nextX = this.x + this.vx;
		}
		this.x = nextX;
	}

	updateY( input, block )
	{
		switch ( this.jumpState )
		{
			case ( JumpState.null ):
			{
				if ( input.pressed.jump && this.testOnGround( block ) )
				{
					this.jumpState = JumpState.startJump;
					this.accy = -1;
				}
				else
				{
					this.accy = 0.5;
				}
			}
			break;
			case ( JumpState.startJump ):
			{
				if ( block.yInSolid( this.y - 1, this.x, this.width ) )
				{
					this.jumpState = JumpState.null;
					this.accy = 0;
					this.vy = 0;
				}
				else if ( !input.held.jump || this.vy <= -6.5 )
				{
					this.jumpState = JumpState.null;
				}
				else
				{
					this.accy = -1;
				}
			}
			break;
		}

		this.vy = Math.max( Math.min( this.vy + this.accy, 4 ), -6.5 );

		this.handleYCollision( block );
	}

	testOnGround( block )
	{
		return block.yInSolid( this.y + this.height, this.x, this.width );
	}

	handleYCollision( block )
	{
		let nextY = this.y + this.vy;
		if ( this.vy > 0 )
		{
			const testY = nextY + this.height;
			if ( testY < Config.WindowHeightPixels && block.yInSolid( testY, this.x, this.width ) )
			{
				this.vy = 0;
				nextY = ( Math.ceil( nextY / Config.BlockSize ) + 1 ) * Config.BlockSize - this.height;
			}
		}
		else if ( this.vy < 0 )
		{
			if ( nextY >= 0 && block.yInSolid( nextY, this.x, this.width ) )
			{
				this.vy *= -this.bounce;
				nextY = this.y + this.vy;
			}
		}
		this.y = nextY;
	}

	updateGraphics( renderer )
	{
		const image = renderer.getSprite( 'autumn' );
		if ( image )
		{
			image.x = Math.floor( this.x );
			image.y = Math.floor( this.y );
		}
	}
};

export default Autumn;
