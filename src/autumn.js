import Config from './config';
import Sprite from './sprite';

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
		if ( input.pressed.right )
		{
			this.accx = 0.25;
		}
		else if ( input.pressed.left )
		{
			this.accx = -0.25;
		}
		else
		{
			this.accx = 0;
			this.vx /= 1.05;
		}
		this.vx = Math.max( Math.min( this.vx + this.accx, 4 ), -4 );

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
		if ( input.pressed.down )
		{
			this.accy = 0.25;
		}
		else if ( input.pressed.up )
		{
			this.accy = -0.25;
		}
		else
		{
			this.accy = 0;
			this.vy /= 1.05;
		}
		this.vy = Math.max( Math.min( this.vy + this.accy, 4 ), -4 );

		let nextY = this.y + this.vy;
		if ( this.vy > 0 )
		{
			const testY = nextY + this.height;
			if ( testY >= Config.WindowHeightPixels )
			{
				this.vy *= -this.bounce;
				nextY = this.y + this.vy;
			}
			else if ( block.yInSolid( testY, this.x, this.width ) )
			{
				this.vy = 0;
				nextY = ( Math.ceil( nextY / Config.BlockSize ) + 1 ) * Config.BlockSize - this.height;
			}
		}
		else if ( this.vy < 0 )
		{
			if ( nextY < 0 )
			{
				this.vy *= -this.bounce;
				nextY = this.y + this.vy;
			}
			else if ( block.yInSolid( nextY, this.x, this.width ) )
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
