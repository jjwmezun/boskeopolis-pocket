import Config from './config';
import Sprite from './sprite';
import BlockTypes from './block-types';

class BlockSystem
{
	constructor( map, renderer )
	{
		this.width = renderer.canvas.width;
		this.height = renderer.canvas.height;
		this.initializeBlockGrid( renderer.canvas.width, renderer.canvas.height );
		let image = new Image();
		image.src = 'img/tileset.png';
		image.onload = function()
		{
			let i = 0;
			for ( const block of map.blocks )
			{
				this.initializeImage( block, renderer, image, i );
				this.addToBlockGrid( block );
				i++;
			}
		}.bind( this );
	}

	initializeBlockGrid( width, height )
	{
		this.blockGrid = [];
		for ( let y = 0; y < height; y++ )
		{
			this.blockGrid.push( [] );
			for ( let x = 0; x < width; x++ )
			{
				this.blockGrid[ y ].push( 0 );
			}
		}
	}

	addToBlockGrid( block )
	{
		const blockType = BlockTypes[ block.type ];
		if ( 'solid' in blockType && blockType.solid )
		{
			const w = ( 'w' in block ) ? block.w : 1;
			const h = ( 'h' in block ) ? block.h : 1;
			const startX = Math.max( 0, block.x );
			const startY = Math.max( 0, block.y );
			const endX = Math.min( this.width, block.x + w );
			const endY = Math.min( this.height, block.y + h );
			for ( let y = startY; y < endY; y++ )
			{
				for ( let x = startX; x < endX; x++ )
				{
					this.blockGrid[ y ][ x ] = 1;
				}
			}
		}
	}

	initializeImage( block, renderer, image, i )
	{
		const wBlocks = ( 'w' in block ) ? block.w : 1;
		const hBlocks = ( 'h' in block ) ? block.h : 1;
		const xOrigin = block.x;
		const yOrigin = block.y;
		const width = wBlocks * Config.BlockSize;
		const height = hBlocks * Config.BlockSize;
		const tempCanvas = document.getElementById( 'tempCanvas' );
		const tempContext = tempCanvas.getContext( '2d' );
		tempCanvas.height = height;
		tempCanvas.width = width;
		BlockTypes[ block.type ].generator( tempContext, image, width, height );
		const data = tempCanvas.toDataURL();
		renderer.addSprite( 'block' + i, new Sprite( data, xOrigin * Config.BlockSize, yOrigin * Config.BlockSize, width, height ) );
	}

	xInSolid( x, y, height )
	{
		height -= 1;
		const xBlocks = Math.floor( x / Config.BlockSize );
		const yStartBlocks = Math.floor( y / Config.BlockSize );
		const yEndBlocks = Math.floor( ( y + height ) / Config.BlockSize );
		if ( xBlocks < 0 || yStartBlocks < 0 || yEndBlocks > this.blockGrid.length )
		{
			return false;
		}
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
		if ( yBlocks < 0 || xStartBlocks < 0 || xEndBlocks > this.blockGrid[ 0 ].length )
		{
			return false;
		}
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

export default BlockSystem;
