var CMENGINE = {}

CMENGINE.Start = function (scene, renderer, camera) {
    for(var i = 0; i < scene.children.length; i++) {
        if(scene.children[i].Start != null) {
            scene.children[i].Start();
        }
    }

    CMENGINE.scene    = scene;
    CMENGINE.renderer = renderer;
    CMENGINE.camera   = camera;

    CMENGINE.camera.position.z = 1.0;
    CMENGINE.controls = new THREE.OrbitControls(CMENGINE.camera);
}

CMENGINE.Update = function () {
    for(var i = 0; i < CMENGINE.scene.children.length; i++) {
        if(CMENGINE.scene.children[i].Update != null) {
            CMENGINE.scene.children[i].Update();
        }
    }

    CMENGINE.controls.update();

    requestAnimationFrame(CMENGINE.Update);
    CMENGINE.renderer.render(CMENGINE.scene, CMENGINE.camera);
}
