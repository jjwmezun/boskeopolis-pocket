import Config from './config';

const BlockTypes = Object.freeze
({
	ground: function( context, image, w, h )
	{
		for ( let y = 0; y < h; y += Config.BlockSize )
		{
			const frameX = ( y === 0 ) ? 0 : Config.BlockSize;
			for ( let x = 0; x < w; x += Config.BlockSize )
			{
				context.drawImage
				(
					image,
					frameX, 0, Config.BlockSize, Config.BlockSize,
					x, y, Config.BlockSize, Config.BlockSize
				);
			}
		}
	},
	block: function( context, image, w, h )
	{
		for ( let y = 0; y < h; y += Config.BlockSize )
		{
			for ( let x = 0; x < w; x += Config.BlockSize )
			{
				context.drawImage
				(
					image,
					32, 0, Config.BlockSize, Config.BlockSize,
					x, y, Config.BlockSize, Config.BlockSize
				);
			}
		}
	},
	brick1: function( context, image, w, h )
	{
		for ( let y = 0; y < h; y += Config.BlockSize )
		{
			const frameX = ( ( y === 0 ) ? 4 : ( ( y === h - Config.BlockSize ) ? 5 : 3 ) ) * Config.BlockSize;
			for ( let x = 0; x < w; x += Config.BlockSize )
			{
				context.drawImage
				(
					image,
					frameX, 0, Config.BlockSize, Config.BlockSize,
					x, y, Config.BlockSize, Config.BlockSize
				);
			}
		}
	}
});

export default BlockTypes;
