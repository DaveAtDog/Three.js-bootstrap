// http://bit.ly/10olDK
window.log = function()
{
	if (this.console) console.log(Array.prototype.slice.call(arguments));
};

var Dog = Dog ||
{};

Dog.Main = (function()
{
	// scene vars
	var scene, camera, renderer, orbitControls;
	// canvas capture vars
	var canvasImageData, getCanvasImageData = false,
		ONCE = 'once';

	function setup()
	{
		// init scene
		scene = new THREE.Scene();

		// init camera
		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1000;

		// init renderer
		renderer = new THREE.WebGLRenderer(
		{
			antialias: true,
			alpha: true
		});
		renderer.setSize(window.innerWidth, window.innerHeight);
		renderer.autoClear = false;

		document.body.appendChild(renderer.domElement);

		// add controls
		orbitControls = new THREE.OrbitControls(camera, renderer.domElement);


		// add window resize handler
		window.addEventListener('resize', onWindowResize, false);

		// add content
		addLighting();
		addMesh();

		// init keyboard listener
		initKeyboard();
	}

	function initKeyboard()
	{
		// listen for keystrokes
		document.body.addEventListener("keyup", function(event)
		{
			// console.info('event.keyCode', event.keyCode);

			switch (event.keyCode)
			{
				case 80: // p
					exportCanvasImageDataToPNG();
					break;
			}
		});
	}

	// gets image data 
	function exportCanvasImageDataToPNG()
	{
		getCanvasImageData = true;
		render(ONCE);

		var win = window.open("", "Canvas Image");
		var canvas = renderer.domElement;
		var src = canvas.toDataURL("image/png");

		win.document.write("<img src='" + canvasImageData + "' width='" + canvas.width + "' height='" + canvas.height + "'/>");
	}

	function onWindowResize()
	{
		// Update camera and renderer
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function addLighting()
	{
		// Add a directional light
		var light = new THREE.DirectionalLight(0xffffff, 0.6);
		light.position.set(400, 400, 400);
		light.target.position.set(0, 0, 0);

		scene.add(light);

		// Add and additional AmbientLight
		scene.add(new THREE.AmbientLight(0x222222));
	}

	function addMesh()
	{
		// create a cube and add it to scene
		var geometry = new THREE.BoxGeometry(200, 200, 200);
		var material = new THREE.MeshPhongMaterial(
		{
			color: 0xff0000,
			shading: THREE.FlatShading
		});

		var mesh = new THREE.Mesh(geometry, material);

		// give it some random rotation
		mesh.rotation.y = Dog.Utils.degToRad(Dog.Utils.randomRange(45, 135));

		scene.add(mesh);
	}

	function render(howManyTimes)
	{
		/* If we are rendering for an exportCanvasImageDataToPNG then DO NOT requestAnimationFrame as can speed up animations that are called on render */
		
		if (howManyTimes !== ONCE) requestAnimationFrame(render);

		renderer.clear();
		renderer.render(scene, camera);
		orbitControls.update();

		if (getCanvasImageData === true)
		{
			canvasImageData = renderer.domElement.toDataURL();
			getCanvasImageData = false;
		}
	}

	return {
		init: function()
		{
			setup();
			render();
		}
	};
})();