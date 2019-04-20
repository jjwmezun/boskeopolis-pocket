import Config from './config';

class Camera
{
	constructor( x, y )
	{
		this.x = x;
		this.y = y;
		this.width = Config.WindowWidthPixels;
		this.height = Config.WindowHeightPixels;
	}

	update( autumn, map )
	{
		const rightBoundary = this.width * 3/4;
		const leftBoundary = this.width * 1/4;
		const topBoundary = this.height * 1/4;
		const bottomBoundary = this.height * 3/4;
		if ( autumn.right() > this.x + rightBoundary )
		{
			this.x = Math.min( map.widthPixels() - this.width, autumn.right() - rightBoundary );
		}
		else if ( autumn.x < this.x + leftBoundary )
		{
			this.x = Math.max( 0, autumn.x - leftBoundary );
		}
		if ( autumn.bottom() > this.y + bottomBoundary )
		{
			this.y = Math.min( map.heightPixels() - this.height, autumn.bottom() - bottomBoundary );
		}
		else if ( autumn.y < this.y + topBoundary )
		{
			this.y = Math.max( 0, autumn.y - topBoundary );
		}

		this.x = Math.floor( this.x );
		this.y = Math.floor( this.y );
	}
}

export default Camera;
