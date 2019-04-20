class Sprite
{
	constructor( name, x, y, width, height, current_frame_x = 0, current_frame_y = 0 )
	{
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.current_frame_x = current_frame_x;
		this.current_frame_y = current_frame_y;
		this.draw = function( context ) {};
		this.image = new Image();
		this.image.src = name;
	}
};

export default Sprite;
