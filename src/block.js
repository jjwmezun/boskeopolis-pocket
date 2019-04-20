import Config from './config';
import Sprite from './sprite';

class Block
{
	constructor( x, y, w, h, renderer )
	{
		this.initializeImage( x, y, w, h, renderer );
		this.x = x;
		this.y = y;
		this.width = w;
		this.height = h;
		this.initializeBlockGrid( renderer.canvas.width, renderer.canvas.height );
	}

	initializeBlockGrid( width, height )
	{
		this.blockGrid = [];
		for ( let y = 0; y < height; y++ )
		{
			this.blockGrid.push( [] );
			for ( let x = 0; x < width; x++ )
			{
				let value = ( y >= this.y && y < this.y + this.height && x >= this.x && x < this.x + this.width ) ? 1 : 0;
				this.blockGrid[ y ].push( value );
			}
		}
	}

	initializeImage( xOrigin, yOrigin, wBlocks, hBlocks, renderer )
	{
		const width = wBlocks * Config.BlockSize;
		const height = hBlocks * Config.BlockSize;
		const tempCanvas = document.getElementById( 'tempCanvas' );
		const tempContext = tempCanvas.getContext( '2d' );
		tempCanvas.height = height;
		tempCanvas.width = width;
		const blockSprite = new Sprite( 'img/urban.png', 0, 0, Config.BlockSize, Config.BlockSize, 0, 0 );
		blockSprite.image.onload = function()
		{
			for ( let y = 0; y < tempCanvas.height; y += Config.BlockSize )
			{
				blockSprite.current_frame_x = ( y === 0 ) ? 0 : Config.BlockSize;
				for ( let i = 0; i < tempCanvas.width; i += Config.BlockSize )
				{
					blockSprite.x = i;
					blockSprite.y = y;
					tempContext.drawImage
					(
						blockSprite.image,
						blockSprite.current_frame_x, blockSprite.current_frame_y, blockSprite.width, blockSprite.height,
						blockSprite.x, blockSprite.y, blockSprite.width, blockSprite.height
					);
				}
			}
			const data = tempCanvas.toDataURL();
			renderer.addSprite( 'block0', new Sprite( data, xOrigin * Config.BlockSize, yOrigin * Config.BlockSize, width, height ) );
		}
	}

	xInSolid( x, y, height )
	{
		height -= 1;
		const xBlocks = Math.floor( x / Config.BlockSize );
		const yStartBlocks = Math.floor( y / Config.BlockSize );
		const yEndBlocks = Math.floor( ( y + height ) / Config.BlockSize );
		for ( let y = yStartBlocks; y <= yEndBlocks; y++ )
		{
			if ( this.blockGrid[ y ][ xBlocks ] === 1 )
			{
				return true;
			}
		}
		return false;
	}

	yInSolid( y, x, width )
	{
		const yBlocks = Math.floor( y / Config.BlockSize );
		const xStartBlocks = Math.floor( x / Config.BlockSize );
		const xEndBlocks = Math.ceil( ( x + width ) / Config.BlockSize );
		for ( let x = xStartBlocks; x < xEndBlocks; x++ )
		{
			if ( this.blockGrid[ yBlocks ][ x ] === 1 )
			{
				return true;
			}
		}
		return false;
	}
}

export default Block;
