class Point {
    constructor(width, height, classifyer_slope = 1 , classifyer_c = 0) {
        this.x = (Math.random() - 0.5) * 2 * width;
        this.y = (Math.random() - 0.5) * 2 * height;
        this.label = (this.x * classifyer_slope  + classifyer_c >= (this.y)) ? (-1) : (1); // --> Classifyer line x=y
    }

    show(perceptron) {

        // ? perceptron guessed
        // if (perceptron.output([ this.x, this.y ]) == this.label) {
        //     fill('#41f06d')
        //     noStroke();
        // }
        // else {
        //     fill('#f04141')
        //     noStroke();
        // }


        if (perceptron.output([ this.x, this.y ]) == 1) {
            fill('#41f06d')
            noStroke();
        }
        else {
            fill('#f04141')
            noStroke();
        }


        // ? Actual 
        // if (this.label == 1) {
        //     stroke('white')
        //     strokeWeight(2)
        // }
        // else {
        //     stroke('white')
        //     strokeWeight(1)
        // }
        circle(this.x, this.y, 8);
    }
}
