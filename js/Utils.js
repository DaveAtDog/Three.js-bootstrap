// http://bit.ly/10olDK
window.log = function()
{
	if (this.console) console.log(Array.prototype.slice.call(arguments));
};

var Dog = Dog ||
{};

(function()
{
	'use strict';

	var Utils = function()
	{
		throw "Utils cannot be instantiated.";
	};

	Utils.norm = function(value, min, max)
	{
		return (value - min) / (max - min);
	};

	Utils.lerp = function(norm, min, max)
	{
		return (max - min) * norm + min;
	};

	Utils.map = function(value, sourceMin, sourceMax, destMin, destMax)
	{
		return Utils.lerp(Utils.norm(value, sourceMin, sourceMax), destMin, destMax);
	};

	Utils.clamp = function(value, min, max)
	{
		return Math.min(Math.max(value, min), max);
	};

	Utils.distance = function(p0, p1)
	{
		var dx = p1.x - p0.x,
			dy = p1.y - p0.y;

		return Math.sqrt(dx * dx + dy * dy);
	};

	Utils.angleBetweenPointsInRad = function(p0, p1)
	{
		return Math.atan2(p1.y - p0.y, p1.x - p0.x);
	};

	Utils.radToDeg = function(rad)
	{
		return rad * 180 / Math.PI;
	};

	Utils.degToRad = function(deg)
	{
		return deg * Math.PI / 180;
	};

	Utils.randomRange = function(min, max)
	{
		return min + Math.random() * (max - min);
	};

	Utils.randomInt = function(min, max)
	{
		return Math.floor(min + Math.random() * (max - min + 1));
	};

	Dog.Utils = Utils;
})();