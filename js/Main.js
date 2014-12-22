// http://bit.ly/10olDK
window.log = function()
{
	if (this.console) console.log(Array.prototype.slice.call(arguments));
};

var Dog = Dog ||
{};

Dog.Main = (function()
{

	var scene, camera, renderer, orbitControls;

	function setup()
	{
		scene = new THREE.Scene();

		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1000;

		renderer = new THREE.WebGLRenderer(
		{
			antialias: true,
			alpha: true
		});
		renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(renderer.domElement);

		orbitControls = new THREE.OrbitControls(camera, renderer.domElement);

		window.addEventListener('resize', onWindowResize, false);

		addLighting();

		addMesh();
	}

	function onWindowResize()
	{
		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize(window.innerWidth, window.innerHeight);
	}

	function addLighting()
	{
		var light = new THREE.DirectionalLight(0xffffff, 0.6);
		light.position.set(400, 400, 400);
		light.target.position.set(0, 0, 0);

		scene.add(light);

		scene.add(new THREE.AmbientLight(0x222222));
	}

	function addMesh()
	{
		var geometry = new THREE.BoxGeometry(200, 200, 200);
		var material = new THREE.MeshPhongMaterial(
		{
			color: 0xff0000,
			shading: THREE.FlatShading
		});

		var mesh = new THREE.Mesh(geometry, material);

		// give it some random rotation
		mesh.rotation.x = Dog.Utils.degToRad(Dog.Utils.randomRange(0, 60));
		mesh.rotation.y = Dog.Utils.degToRad(Dog.Utils.randomRange(0, 60));
		mesh.rotation.z = Dog.Utils.degToRad(Dog.Utils.randomRange(0, 60));

		scene.add(mesh);
	}

	function animate()
	{
		requestAnimationFrame(animate);
		renderer.render(scene, camera);
	}

	return {
		init: function()
		{
			setup();
			animate();
		}
	};
})();