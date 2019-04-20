import Config from './config';
import Input from './input';
import Renderer from './renderer';
import Autumn from './autumn';
import Block from './block';
import Map from './map';

const input = new Input();
const renderer = new Renderer( Config.WindowWidthPixels, Config.WindowHeightPixels );
const autumn = new Autumn( renderer );
const map = new Map();
const blocks = new Block( map, renderer );

window.requestAnimationFrame( execute );
function execute()
{
	update();
	render();
	window.requestAnimationFrame( execute );
}

function update()
{
	input.update();
	renderer.bringSpriteToFront( 'autumn' );
	autumn.update( input, renderer, blocks );
}

function render()
{
	renderer.render();
}
