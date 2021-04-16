let scene, camera, renderer;


function init(){
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xdddddd);

    camera = new THREE.PerspectiveCamera(40,window.innerWidth/innerHeight,1,5000);
    camera.rotation.y = 45/180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;

    var hlight = new THREE.AmbientLight(0x404040,100);
    scene.add(hlight);

    var directionallight = new THREE.DirectionalLight(0xffffff,100);
    directionallight.position.set(0,1,0);
    directionallight.castShadow = true;
    scene.add(directionallight);

    var light = new THREE.PointLight(0xc4c4c4,10);
    light.position.set(0,300,500);
    scene.add(light);

    var light2 = new THREE.PointLight(0xc4c4c4,10);
    light2.position.set(50,100,0);
    scene.add(light2);

    var light3 = new THREE.PointLight(0xc4c4c4,10);
    light3.position.set(0,100,-500);
    scene.add(light3);

    var light4 = new THREE.PointLight(0xc4c4c4,10);
    light4.position.set(-500,300,0);
    scene.add(light4);

    renderer = new THREE.WebGLRenderer({antialias:true});
    renderer.setSize(window.innerWidth,window.innerHeight);
    document.body.appendChild(renderer.domElement);

    let loader = new THREE.GLTFLoader();
        loader.load('scene.gltf', function(gltf){
            car = gltf.scene.children[0];
            car.scale.set(0.5, 0.5, 0.5);
            scene.add(gltf.scene);
            renderer.render(scene,camera);
        });
}

init();