const generateRegistrar = function( value )
{
	return function( e )
	{
		for ( const key in this.keys )
		{
			const keyCode = this.keys[ key ];
			if ( e.keyCode === keyCode )
			{
				this.pressed[ key ] = value;
			}
		}
	}
};

class Input
{
	constructor()
	{
		this.registerPress = generateRegistrar( true );
		this.registerRelease = generateRegistrar( false );

		this.keys =
		{
			left: 37,
			up: 38,
			right: 39,
			down: 40
		};

		this.pressed =
		{
			left: false,
			up: false,
			right: false,
			down: false
		};

		window.addEventListener
		(
			'keydown',
			this.registerPress.bind( this )
		);
		window.addEventListener
		(
			'keyup',
			this.registerRelease.bind( this )
		);
	}
};

export default Input;
