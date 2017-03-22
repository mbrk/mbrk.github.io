/**
 * Created by malte on 22.03.17.
 */
class xMarklet {
    constructor() {

        this.d = window.document;
        this.init();


    }

    init() {

    }

    createControlOverlay() {
        let overlay = this.d.createElement('div');
        overlay.setAttribute('class', 'control-overlay');
        this.d.appendChild(overlay);
    }
}

let xm = new xMarklet();