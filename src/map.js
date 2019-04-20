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
				type: "ground",
				x: 0,
				y: 17,
				w: 25,
				h: 3
			},
			{
				type: "brick1",
				x: 1,
				y: 12,
				w: 7,
				h: 5
			},
			{
				type: "hydrant",
				x: 9,
				y: 16
			},
			{
				type: "brick1",
				x: 11,
				y: 14,
				w: 9,
				h: 3
			},
			{
				type: "brick1",
				x: 23,
				y: 11,
				w: 5,
				h: 6
			}
		];

		this.blockSystem = new BlockSystem( this, renderer );
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
