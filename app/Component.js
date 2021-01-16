export default class Component {
    constructor({selector, size}) {
        this.size = size;
        this.element = document.querySelector(selector);
        this.element.classList.add('component');
        this.init();
    }

    init(){
        if(this.size){
            this.element.style.width= this.size;
            this.element.style.height = this.size;
        } else {
            const size = 'calc(90vmin)';
            this.element.style.width= `90vmin`;
            this.element.style.height = `90vmin`;
        }
            
    }
}


