import Config from './config';

class Renderer
{
	constructor( width, height )
	{
		this.canvas = document.getElementById( 'canvas' );
		this.context = this.canvas.getContext( '2d' );
		this.canvas.setAttribute( 'width', width );
		this.canvas.setAttribute( 'height', height );
		this.spriteList = [];
		this.spriteMap = {};
	}

	addSprite( name, sprite )
	{
		this.spriteList.push( sprite );
		this.spriteMap[ name ] = this.spriteList.length - 1;
	}

	getSprite( name )
	{
		return this.spriteList[ this.spriteMap[ name ] ];
	}

	getSpriteNameByIndex( index )
	{
		for ( const name in this.spriteMap )
		{
			if ( this.spriteMap[ name ] === index )
			{
				return name;
			}
		}
		return null;
	}

	bringSpriteToFront( name )
	{
		if ( name in this.spriteMap )
		{
			const spriteIndex = this.spriteMap[ name ];
			const sprite = this.spriteList[ spriteIndex ];
			for ( let i = spriteIndex; i < this.spriteList.length - 1; i++ )
			{
				this.spriteList[ i ] = this.spriteList[ i + 1 ];
				this.spriteMap[ this.getSpriteNameByIndex[ i + 1 ] ] = i;
			}
			this.spriteList[ this.spriteList.length - 1 ] = sprite;
			this.spriteMap[ name ] = this.spriteList.length - 1;
		}
	}

	render()
	{
		this.context.clearRect( 0, 0, this.canvas.width, this.canvas.height );
		this.context.fillStyle = '#ccbbff';
		this.context.fillRect( 0, 0, this.canvas.width, this.canvas.height );
		for ( const sprite of this.spriteList )
		{
			this.context.drawImage
			(
				sprite.image,
				sprite.current_frame_x, sprite.current_frame_y, sprite.width, sprite.height,
				sprite.x, sprite.y, sprite.width, sprite.height
			);
		}
	}

	showGrid( block )
	{
		this.context.fillStyle = 'rgba( 0, 255, 0, 0.5 )';
		for ( let y = 0; y < block.blockGrid.length; y++ )
		{
			for ( let x = 0; x < block.blockGrid[ y ].length; x++ )
			{
				const blockValue = block.blockGrid[ y ][ x ];
				if ( blockValue > 0 )
				{
					this.context.fillRect( x * Config.BlockSize, y  * Config.BlockSize, Config.BlockSize, Config.BlockSize );
				}
			}
		}
	}
};

export default Renderer;
