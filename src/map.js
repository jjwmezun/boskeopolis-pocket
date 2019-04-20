class Map
{
	constructor()
	{
		this.blocks =
		[
			{
				type: "ground",
				solid: true,
				x: 0,
				y: 11,
				w: 25,
				h: 3
			},
			{
				type: "block",
				solid: true,
				x: 10,
				y: 7,
				w: 2,
				h: 2
			},
			{
				type: "brick1",
				x: 1,
				y: 5,
				w: 7,
				h: 6
			}
		]
	}
};

export default Map;
