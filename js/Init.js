if (Dog.WebGLDetect.canProceed)
{
	// If WebGL is available to use then we load our libraries.
	LazyLoad.js(
		[
			"//cdnjs.cloudflare.com/ajax/libs/three.js/r69/three.min.js",
			"./js/Main.js"
		],
		function()
		{
			Dog.Main.init();
		});
}