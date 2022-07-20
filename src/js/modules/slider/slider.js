export default class Slider {
    constructor({container = null,
        btns = null,
        next = null,
        prev = null,
        activeClass = '',
        animate,
        autolplay } = {}) {
        this.container = document.querySelector(container);
        try {this.slides = this.container.children;} catch(e) {}
        this.btns = document.querySelectorAll(btns);
        this.prev = document.querySelector(prev);
        this.next = document.querySelector(next);
        this.activeClass = activeClass;
        this.animate = animate;
        this.autolplay = autolplay;
        this.slideIndex = 1;
    }


}