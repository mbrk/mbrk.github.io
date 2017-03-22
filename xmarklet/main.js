
class XM {
    constructor() {

        this.d = window.document;
        this.b = document.getElementsByTagName('body')[0];
        this.h = document.getElementsByTagName('head')[0];
        this.url = 'https://mbrk.github.io/xmarktlet';
        this.init();


    }

    init() {
        this.injectCSS();
        this.createControlOverlay();
    }

    injectCSS(){
        let attr = {
            type: 'text/css',
            rel: 'stylesheet',
            href: this.url + '/xm.css'
        };
        this.h.appendChild(XM._createElement('link', attr));
    }

    createControlOverlay() {
        this.b.appendChild(XM._createElement('div', {class: 'control-overlay'}));
    }

    static _createElement(type = 'div', attr = {}){
        let e = this.d.createElement(type);
        for(let a in attr){
            e.setAttribute(a, attr[a]);
        }
        return e;
    }
}

let xm = new XM();