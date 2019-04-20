import Config from './config';
import Input from './input';
import Renderer from './renderer';
import Autumn from './autumn';
import Block from './block';

const input = new Input();
const renderer = new Renderer( Config.WindowWidthPixels, Config.WindowHeightPixels );
const autumn = new Autumn( renderer );
const block = new Block( 8, 4, 4, 4, renderer );

window.requestAnimationFrame( execute );
function execute()
{
	update();
	render();
	window.requestAnimationFrame( execute );
}

function update()
{
	renderer.bringSpriteToFront( 'autumn' );
	autumn.update( input, renderer, block );
}

function render()
{
	renderer.render();
}
