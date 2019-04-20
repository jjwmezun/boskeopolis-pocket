const Config = ( function()
{
	const BlockSize = 16;
	const WindowWidthBlocks = 25;
	const WindowHeightBlocks = 14;

	return Object.freeze
	({
		BlockSize: BlockSize,
		WindowWidthBlocks: WindowWidthBlocks,
		WindowHeightBlocks: WindowHeightBlocks,
		WindowWidthPixels: WindowWidthBlocks * BlockSize,
		WindowHeightPixels: WindowHeightBlocks * BlockSize
	});
}
)();

export default Config;
