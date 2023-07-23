class Perceptron {
    weights = []

    constructor() {
        // initialize the weights randomly
        this.weights.push(Math.random() - 0.5, Math.random() - 0.5)
    }


    // Activation function 
    sign(x) {
        return x >= 0 ? (1) : (-1)
    }

    output(inputs) {
        let sum = 0;
        for (let i = 0; i < this.weights.length; i++) {
            sum += this.weights[ i ] * inputs[ i ];
        }
        //--> using sign as activation function
        return this.sign(sum);
    }


    train(inputs, label) {
        let error = label - this.output(inputs);

        if (error)  //--> error is -2 or +2
        {
            // Adjust weights
            for (let i = 0; i < this.weights.length; i++) {
                this.weights[ i ] += this.weights[ i ] + error * inputs[ i ];
            }
        }
    }
}