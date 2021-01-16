export default class Component {
    constructor({selector, dimensions}) {
        this.element = document.querySelector(selector);
        this.element.classList.add('board');

        if(dimensions){
            this.element.style.width= dimensions.width;
            this.element.style.height = dimensions.height;
        } else {
            this.element.style.width= `90vmin`;
            this.element.style.height = `90vmin`;
        }
        
    }
}


