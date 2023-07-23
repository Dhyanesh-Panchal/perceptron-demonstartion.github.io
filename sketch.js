let p;
let points = new Array(100);

class Point {
	constructor(width, height) {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		this.label = (this.x > (this.y)) ? (-1) : (1);
	}

	show(perceptron) {
		// if (this.label == -1) {
		// 	fill('black');
		// }
		// else {
		// 	fill('white');
		// }
		if (perceptron.output([ this.x, this.y ]) == this.label) {
			fill('#41f06d')
		}
		else {
			fill('#f04141')
		}
		circle(this.x, -this.y, 7);
	}
}



function setup() {
	createCanvas(1200, 700);
	// put setup code here
	p = new Perceptron();
	inputs = [ 0.23, 0.45 ];
	// console.log("The weights are:", p.weights);
	// console.log(p.output(inputs));

	// Generating random points 
	for (let i = 0; i < points.length; i++) {
		points[ i ] = new Point(width - 200, height - 200);
	}
	console.log("The Points are :", points)
}

function draw() {
	background(20, 20, 20);
	translate(100, 600);
	fill('white');
	stroke('white');
	strokeWeight(3);
	line(0, 0, width - 200, 0);
	line(0, 0, 0, -(height - 200));
	strokeWeight(1);

	points.forEach(point => {
		point.show(p);
	});

}
