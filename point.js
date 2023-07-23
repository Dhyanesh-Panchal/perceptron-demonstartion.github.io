class Point {
    constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.label = (this.x >= (this.y)) ? (-1) : (1); // --> Classifyer line x=y
    }

    show(perceptron) {
        if (perceptron.output([ this.x, this.y ]) == this.label) {
            fill('#41f06d')
        }
        else {
            fill('#f04141')
        }
        circle(this.x, -this.y, 7);
    }
}
