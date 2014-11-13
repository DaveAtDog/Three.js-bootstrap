var Dog = Dog ||
{};

/**
 * Protect window.console method calls, e.g. console is not defined on IE
 * unless dev tools are open, and IE doesn't define console.debug
 * http://stackoverflow.com/questions/3326650/console-is-undefined-error-for-internet-explorer
 */
(function()
{
	if (!window.console)
	{
		window.console = {};
	}
	// union of Chrome, FF, IE, and Safari console methods
	var m = [
		"log", "info", "warn", "error", "debug", "trace", "dir", "group",
		"groupCollapsed", "groupEnd", "time", "timeEnd", "profile", "profileEnd",
		"dirxml", "assert", "count", "markTimeline", "timeStamp", "clear"
	];
	// define undefined methods as noops to prevent errors
	for (var i = 0; i < m.length; i++)
	{
		if (!window.console[m[i]])
		{
			window.console[m[i]] = function() {};
		}
	}
})();

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
		console.log('Dog.WebGLDetect', error);
	}

	if (ctx !== undefined && ctx !== null)
	{
		_canProceed = true;
	}
	else
	{
		console.log('WebGl unavailable or disabled.');
	}

	canvas = undefined;

	return {
		canProceed: _canProceed
	};
})();