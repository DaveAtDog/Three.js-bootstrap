// http://bit.ly/10olDK
window.log = function()
{
	if (this.console) console.log(Array.prototype.slice.call(arguments));
};

var Dog = Dog ||
{};

Dog.Main = (function()
{

	var scene, camera, renderer;
	var geometry, material, mesh, light;

	function setup()
	{

		scene = new THREE.Scene();

		light = new THREE.DirectionalLight(0xffffff, 0.6);
		light.position.set(400, 400, 400);
		light.target.position.set(0, 0, 0);

		scene.add(new THREE.AmbientLight(0x222222));

		scene.add(light);

		camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
		camera.position.z = 1000;

		geometry = new THREE.BoxGeometry(200, 200, 200);
		material = new THREE.MeshPhongMaterial(
		{
			color: 0xff0000,
			shading: THREE.FlatShading
		});

		mesh = new THREE.Mesh(geometry, material);
		scene.add(mesh);

		renderer = new THREE.WebGLRenderer(
		{
			antialias: true,
			alpha: true
		});
		renderer.setSize(window.innerWidth, window.innerHeight);

		document.body.appendChild(renderer.domElement);

	}

	function animate()
	{

		requestAnimationFrame(animate);

		mesh.rotation.x += 0.01;
		mesh.rotation.y += 0.02;

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

document.addEventListener('DOMContentLoaded', function()
{
	Dog.Main.init();
});