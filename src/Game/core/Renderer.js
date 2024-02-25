import * as THREE from "three";

export default class Renderer {
    constructor(_options) {
        // setup
        this.game = _options.game;
        this.scene = this.game.scene;
        this.config = this.game.contextVariables;
        this.camera = this.game.camera;
        this.sizes = this.game.sizes;

        this.setInstance();
    }

    // Sets renderer instance
    setInstance = () => {
        this.instance = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.instance.shadowMap.enabled = true;
        this.instance.setClearColor(0x000000, 0);
        this.instance.setSize(this.config.width, this.config.height);
        this.instance.setPixelRatio(this.config.pixelRatio, 2);
        this.instance.shadowMap.type = THREE.PCFSoftShadowMap;
    };

    // Update renderer instance
    update = () => {
        this.instance.render(this.scene, this.camera.instance);
    };

    // Resize renderer components
    resize = () => {
        this.instance.setSize(this.config.width, this.config.height);
        this.instance.setPixelRatio(this.config.pixelRatio);
    };
}
