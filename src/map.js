import Config from './config';
import BlockSystem from './block-system';
import BlockTypes from './block-types';

class Map
{
	constructor( renderer )
	{
		this.width = 50;
		this.height = 20;
		this.blocks =
		[
			{
				name: "ground",
				type: "ground",
				x: 0,
				y: 17,
				w: 50,
				h: 3
			},
			{
				name: "brick1",
				type: "brick1",
				x: 1,
				y: 12,
				w: 7,
				h: 5
			},
			{
				name: "hydrant1",
				type: "hydrant",
				x: 9,
				y: 16
			},
			{
				name: "brick2",
				type: "brick1",
				x: 11,
				y: 14,
				w: 9,
				h: 3
			},
			{
				name: "brick3",
				type: "brick1",
				x: 23,
				y: 11,
				w: 5,
				h: 6
			}
		];

		this.blockSystem = new BlockSystem( this, renderer );
	}

	widthPixels()
	{
		return this.width * Config.BlockSize;
	}

	heightPixels()
	{
		return this.height * Config.BlockSize;
	}

	update( camera, renderer )
	{
		for ( const block of this.blocks )
		{
			const blockGraphics = renderer.getSprite( block.name );
			if ( blockGraphics )
			{
				blockGraphics.x = block.x * Config.BlockSize - camera.x;
				blockGraphics.y = block.y * Config.BlockSize - camera.y;
			}
		}
	}

	testInteraction( autumn, nextPosition )
	{
		for ( const block of this.blocks )
		{
			const blockType = BlockTypes[ block.type ];
			if ( 'interaction' in blockType )
			{
				nextPosition = blockType.interaction( block, autumn, nextPosition );
			}
		}
		return nextPosition;
	}

	testOnGround( autumn )
	{
		if ( this.blockSystem.yInSolid( autumn.y + autumn.height, autumn.x, autumn.width ) )
		{
			return true;
		}
		for ( const block of this.blocks )
		{
			const blockType = BlockTypes[ block.type ];
			if ( 'testOnGround' in blockType )
			{
				if ( blockType.testOnGround( block, autumn ) )
				{
					return true;
				}
			}
		}
		return false;
	}
};

export default Map;
