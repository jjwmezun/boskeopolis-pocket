import Config from './config';
import Camera from './camera';
import Input from './input';
import Renderer from './renderer';
import Autumn from './autumn';
import Map from './map';

const input = new Input();
const renderer = new Renderer( Config.WindowWidthPixels, Config.WindowHeightPixels );
const autumn = new Autumn( renderer );
const map = new Map( renderer );
const camera = new Camera( 0, 6 * Config.BlockSize );

renderer.bringSpriteToFront( 'autumn' );
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
	map.update( camera, renderer );
	autumn.update( input, renderer, map, camera );
	camera.update( autumn, map );
}

function render()
{
	renderer.render();
}
