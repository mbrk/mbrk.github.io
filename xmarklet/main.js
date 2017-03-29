let _d = window.document;
let _b = document.getElementsByTagName('body')[0];
let _h = document.getElementsByTagName('head')[0];
let _url = 'https://mbrk.github.io/xmarklet';
class XM {
    constructor() {

        this.init();

        this.identifierMap = {
            'http://spiegel.de':{
                ads: ['.adition','#spColumnAd'],
                videos: ['#js-video-slider'],
                meinung: ['.hpmeinungbox']
            }
        };
    }

    init() {
        this.injectCSS();
        this.createControlOverlay();
    }

    injectCSS(){
        let attr = {
            type: 'text/css',
            rel: 'stylesheet',
            href: _url + '/xm.css'
        };
        _h.appendChild(XM._createElement('link', attr));
    }

    getIdentifier(){

    }

    createControlOverlay() {
        let overlay = XM._createElement('div', {class: 'control-overlay'});
        let


        _b.appendChild(overlay);
    }

    static _createElement(type = 'div', attr = {}){
        let e = _d.createElement(type);
        for(let a in attr){
            e.setAttribute(a, attr[a]);
        }
        return e;
    }
}

new XM();