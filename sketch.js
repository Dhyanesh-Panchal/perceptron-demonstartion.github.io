let p;
let points = new Array(1000);
let trainPoints = new Array(1000);
let classifyer_slope = 1;
let classifyer_c = 0;

let ymax, xmax;

let margin = 40;


function setup() {
	createCanvas(1000 + margin, 500 + margin);

	ymax = height / 2;
	xmax = width / 2;
	// put setup code here
	p = new Perceptron();
	// console.log("The weights are:", p.weights);
	// console.log(p.output(inputs));

	// Generating random points 
	for (let i = 0; i < points.length; i++) {
		points[ i ] = new Point(width - margin, height - margin, classifyer_slope, classifyer_c);
	}


	console.log("The Points are :", points)
}

function draw() {
	classifyer_slope = Number(document.getElementById('slope').value) ;
	classifyer_c = Number(document.getElementById('c').value);
	console.log(classifyer_slope);
	// console.log(classifyer_slope)
	background(20, 20, 20);
	translate(width / 2, height / 2);
	fill('white');
	stroke('white');
	strokeWeight(3);
	line(-(width + 20), 0, width + 20, 0);
	line(0, -(height + 20), 0, height + 20);
	strokeWeight(1);
	line(-((ymax - classifyer_c) / classifyer_slope), -(ymax), ((ymax + classifyer_c) / classifyer_slope), ymax);

	points.forEach(point => {
		point.show(p);
	});
}

// function mouseClicked() {

// 	console.log("Training!!!")

// 	// Generating random points for training 
// 	for (let i = 0; i < trainPoints.length; i++) {
// 		trainPoints[ i ] = new Point(width - 200, height - 200,classifyer_slope , classifyer_c);
// 	}


// 	// Train perceptron
// 	trainPoints.forEach(point => {
// 		p.train([ point.x, point.y ], point.label);
// 	});

// 	console.log("final weight:", p.weights)
// }
