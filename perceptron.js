// --> The Relation between weighys and linear classification comesout to be:
// --> y = ( - w[0]/w[1] ) * x + bias           

class Perceptron {
    weights = [];
    lr = 0.0001; //--> learning rate
    bias = 0;

    constructor(bias) {
        // initialize the weights randomly between (-1,1)
        this.weights.push(2 * (Math.random() - 0.5), 2 * (Math.random() - 0.5));
        this.bias = bias;
    }


    // Activation function  
    #activation(x) {
        // ? sign function
        return x >= 0 ? (1) : (-1)


        // using different function as activation function
        // return x > 100 ? (1) : (-1)
    }


    // Output of the perceptron
    output(inputs) {
        let sum = this.bias;
        for (let i = 0; i < this.weights.length; i++) {
            sum += this.weights[ i ] * inputs[ i ];
        }
        return this.#activation(sum);
    }


    train(inputs, label, bias) {
        let output = this.output(inputs)
        let error = label - output;

        // console.log(inputs)
        // console.log("Label: ", label);
        // console.log("Output: ", output);

        if (error)  //--> error is -2 or +2
        {
            console.log("error for this point:");
            console.log("Label: ", label);
            console.log("Output: ", output);
            // Adjust weights
            for (let i = 0; i < this.weights.length; i++) {
                this.weights[ i ] += error * inputs[ i ] * this.lr;
            }
        }
        // Adjust bias
        bias = bias >= 0 ? bias : -bias;
        this.bias += error * bias * this.lr;

        // console.log("New Weights:", this.weights)
    }

    drawClassifierLine(xmax, ymax) {

        // let slope = - this.weights[ 0 ] / this.weights[ 1 ];

        let [ w1, w2 ] = this.weights;

        // console.log('the gussed slope is : ', slope);

        strokeWeight(3);
        stroke('#41e7f0')
        if (slope == 0) {
            line(-xmax, - this.bias, xmax, - this.bias);
        }
        else {
            // console.log("Drawing the line")
            line(-((-w2 * ymax + this.bias) / w1), -(ymax), ((-w2 * ymax - this.bias) / w1), ymax);
        }
    }
}