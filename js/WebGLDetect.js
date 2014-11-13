var Dog = Dog ||
{};

Dog.WebGLDetect = (function()
{
	var canvas, ctx;

	var _canProceed = false;

	try
	{
		canvas = document.createElement('canvas');
		ctx = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
	}
	catch (error)
	{
		console.log(error);
	}

	if (ctx !== undefined && ctx !== null)
	{
		_canProceed = true;
	}
	else
	{
		console.info('WebGl unavailable or disabled.');
	}

	canvas = undefined;

	return {
		canProceed: _canProceed
	};
})();