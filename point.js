class Point {
    constructor(width, height) {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.label = (this.x >= (this.y)) ? (-1) : (1); // --> Classifyer line x=y
    }

    show(perceptron) {

        // ? perceptron guessed
        if (perceptron.output([ this.x, this.y ]) == 1) {
            fill('#41f06d')
        }
        else {
            fill('#f04141')
        }


        // ? Actual 
        // if (this.label == 1) {
        //     fill('#41f06d')
        // }
        // else {
        //     fill('#f04141')
        // }
        circle(this.x, -this.y, 3);
    }
}
