let p;
let points = new Array(1000);
let trainPoints = new Array(1000);


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
	line(0, 0, 500, -500);


	points.forEach(point => {
		point.show(p);
	});
}

function mouseClicked() {

	console.log("Training!!!")
	// Generating random points for training 
	for (let i = 0; i < trainPoints.length; i++) {
		trainPoints[ i ] = new Point(width - 200, height - 200);
	}
	// Train perceptron
	trainPoints.forEach(point => {
		p.train([ point.x, point.y ], point.label);
	});
}
