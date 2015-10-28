Three.js-bootstrap
==================

Updated to use Three.js (r73).

Added a method for exporting canvas data as a PNG in a new window. Hit the "p" key while window focused.

Added a simple bump map.

Simple [Three.js](https://github.com/mrdoob/three.js) bootstrap based of their example code. Contains all the HTML, JS and CSS to run a basic example including WebGL detection (see below).

WebGLDetect.js detects if WebGL is useable (available and not disabled) then uses LazyLoad.js to load the large Three.js library and project code.
