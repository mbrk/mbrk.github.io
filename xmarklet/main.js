
class xMarklet {
    constructor() {

        this.d = window.document;
        this.b = document.getElementsByTagName('body')[0];
        this.init();


    }

    init() {
        this.createControlOverlay();
    }

    createControlOverlay() {
        let overlay = this.d.createElement('div');
        overlay.setAttribute('class', 'control-overlay');
        this.b.appendChild(overlay);
        console.log(overlay);
    }
}

let xm = new xMarklet();