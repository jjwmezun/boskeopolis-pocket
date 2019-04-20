class Input
{
	constructor()
	{
		this.registerPress = function( e )
		{
			for ( const key in this.keys )
			{
				const keyCode = this.keys[ key ];
				if ( e.keyCode === keyCode )
				{
					if ( !this.held[ key ] )
					{
						this.setHeld[ key ] = true;
					}
				}
			}
		};

		this.registerRelease = function( e )
		{
			for ( const key in this.keys )
			{
				const keyCode = this.keys[ key ];
				if ( e.keyCode === keyCode )
				{
					if ( !this.setReleased[ key ] )
					{
						this.setReleased[ key ] = true;
					}
				}
			}
		};

		this.keys =
		{
			left: 37,
			up: 38,
			right: 39,
			down: 40,
			jump: 90,
			run: 88
		};

		this.held =
		{
			left: false,
			up: false,
			right: false,
			down: false,
			jump: false,
			run: false
		};

		this.pressed =
		{
			left: false,
			up: false,
			right: false,
			down: false,
			jump: false,
			run: false
		};

		this.setHeld =
		{
			left: false,
			up: false,
			right: false,
			down: false,
			jump: false,
			run: false
		};

		this.setReleased =
		{
			left: false,
			up: false,
			right: false,
			down: false,
			jump: false,
			run: false
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

	update()
	{
		for ( const key in this.keys )
		{
			if ( this.setHeld[ key ] )
			{
				this.held[ key ] = true;
			}
			else if ( this.setReleased[ key ] )
			{
				this.held[ key ] = false;
			}
			this.pressed[ key ] = this.setHeld[ key ] && !this.pressed[ key ] && !this.setReleased[ key ];
			this.setHeld[ key ] = false;
			this.setReleased[ key ] = false;
		}
	}

	reset()
	{
		for ( const key in this.keys )
		{
			this.pressed[ key ] = false;
			this.held[ key ] = false;
			this.setHeld[ key ] = false;
		}
	}
};

export default Input;
