import Config from './config';

const BlockTypes = Object.freeze
({
	ground:
	{
		generator: function( context, image, w, h )
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
		solid: true
	},
	block:
	{
		generator: function( context, image, w, h )
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
		solid: true
	},
	brick1:
	{
		generator: function( context, image, w, h )
		{
			const middleBlock = Math.floor( w / Config.BlockSize / 2 ) * Config.BlockSize;
			for ( let y = 0; y < h; y += Config.BlockSize )
			{
				for ( let x = 0; x < w; x += Config.BlockSize )
				{
					let frameX = ( ( y === 0 ) ? 4 : ( ( y === h - Config.BlockSize ) ? 5 : 3 ) ) * Config.BlockSize;
					if ( x === middleBlock )
					{
						if ( y === h - Config.BlockSize )
						{
							frameX = 128;
						}
						else if ( y === h - Config.BlockSize * 2 )
						{
							frameX = 112;
						}
					}
					context.drawImage
					(
						image,
						frameX, 0, Config.BlockSize, Config.BlockSize,
						x, y, Config.BlockSize, Config.BlockSize
					);
				}
			}
		},
		interaction: function( block, autumn, nextPosition )
		{
			const xPixels = block.x * Config.BlockSize;
			const yPixels = block.y * Config.BlockSize;
			const wPixels = block.w * Config.BlockSize;
			if ( autumn.vy > 0 )
			{
				if ( this.testIsColliding( autumn, xPixels, yPixels, wPixels ) )
				{
					nextPosition.y = yPixels - autumn.height;
				}
			}
			return nextPosition;
		},
		testOnGround: function( block, autumn )
		{
			const xPixels = block.x * Config.BlockSize;
			const yPixels = block.y * Config.BlockSize;
			const wPixels = block.w * Config.BlockSize;
			return this.testIsColliding( autumn, xPixels, yPixels, wPixels );
		},
		testIsColliding: function( autumn, xPixels, yPixels, wPixels )
		{
			return autumn.x + autumn.width >= xPixels  &&
				   autumn.x < xPixels + wPixels        &&
				   autumn.y + autumn.height >= yPixels &&
				   autumn.y + autumn.height <= yPixels + 6;
		}
	},
	hydrant:
	{
		generator: function( context, image )
		{
			context.drawImage
			(
				image,
				96, 0, Config.BlockSize, Config.BlockSize,
				0, 0, Config.BlockSize, Config.BlockSize
			);
		},
		solid: true
	}
});

export default BlockTypes;
