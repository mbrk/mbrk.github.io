
class xMarklet {
    constructor() {

        this.d = window.document;
        this.init();


    }

    init() {
        this.createControlOverlay();
    }

    createControlOverlay() {
        let overlay = this.d.createElement('div');
        overlay.setAttribute('class', 'control-overlay');
        this.d.appendChild(overlay);
    }
}

let xm = new xMarklet();