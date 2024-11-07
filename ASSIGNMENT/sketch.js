let elements = []; // Array to store Circle and Line elements for the tree
let raindrops = []; // Array to store Raindrop elements
let rainIntervalID; // ID for the rain animation interval
let shrinkFactor = 0.2;  // Initial shrink factor for tree growth
let intervalID; // ID for the tree growth animation interval
let offsetX;
let offsetY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  scaleFactor = min(windowWidth / 600, windowHeight / 700);  // Scale factor based on window size

   // Create buttons for controlling animations
  let startButton = createButton('Start Growth');
  startButton.position(800, 320);
  startButton.mousePressed(startGrowth);

  let stopButton = createButton('Pause Growth');
  stopButton.position(1000, 320);
  stopButton.mousePressed(stopGrowth);

  let rainButton = createButton('Start Rain');
  rainButton.position(800, 360);
  rainButton.mousePressed(startRain);

  let stopRainButton = createButton('Pause Rain');
  stopRainButton.position(1000, 360);
  stopRainButton.mousePressed(stopRain);

  background(255, 255, 240); // Set the background color of the canvas
  
//create the group of circlrs and lines
elements = [
    new Circle(280, 230, 20, color(255, 0, 0, 120)),//red
    new Circle(310, 230, 15, color(69, 131, 6, 230)),
    new Circle(272, 195, 24, color(255, 0, 0, 90)),
    new Circle(195, 105, 8, color(247, 208, 26, 240)),//yellow
    new Circle(220, 255, 8, color(247, 208, 26, 140)),
    new Circle(85, 255, 8, color(247, 208, 26, 180)),
    new Circle(65, 85, 10, color(247, 208, 26, 180)),
    new Circle(65, 165, 20, color(247, 208, 26, 180)),
    new Circle(130, 300, 5, color(247, 208, 26, 250)),
    new Circle(130, 315, 5, color(247, 208, 26, 250)),
    new Circle(130, 330, 5, color(247, 208, 26, 250)),
    new Circle(130, 345, 5, color(247, 208, 26, 80)),
    new Circle(130, 360, 5, color(247, 208, 26, 250)),
    new Circle(130, 375, 5, color(247, 208, 26, 180)),
    new Circle(175, 395, 5, color(247, 208, 26, 250)),
    new Circle(175, 410, 5, color(247, 208, 26, 150)),
    new Circle(175, 425, 5, color(247, 208, 26, 180)),
    new Circle(175, 440, 5, color(247, 208, 26, 80)),
    new Circle(175, 455, 5, color(247, 208, 26, 250)),
    new Circle(175, 310, 23, color(69, 131, 6, 190)),//green
    new Circle(330, 230, 15, color(69, 131, 6, 180)),
    new Circle(330, 206, 15, color(69, 131, 6, 180)),
    new Circle(302, 335, 38, color(255, 0, 0, 130)),
    new Circle(305, 380, 38, color(255, 0, 0, 80)),
    new Circle(305, 430, 42, color(0, 255, 0, 80)),
    new Circle(410, 630, 20, color(0, 255, 0, 80)),
    new Circle(360, 620, 40, color(255, 0, 0, 120)),
    new Circle(460, 630, 40, color(255, 0, 0, 120)),
    new Circle(305, 520, 40, color(255, 0, 0, 120)),
    new Circle(335, 565, 45, color(0, 255, 0, 80)),
    new Circle(270, 570, 40, color(255, 0, 0, 120)),
    new Circle(305, 478, 20, color(247, 208, 26, 180)),
    new Circle(499, 123, 13, color(255, 0, 0, 90)),
    new Circle(435, 105, 28, color(255, 0, 0, 90)),
    new Circle(455, 70, 18, color(247, 208, 26, 140)),
    new Circle(480, 105, 35, color(69, 131, 6, 120)),
    new Circle(490, 65, 35, color(255, 0, 0, 160)),
    new Circle(410, 210, 15, color(247, 208, 26, 190)),
    new Line(432, 340, 432, 410, color(75,73,138, 250), 3.5),//purple
    new Line(422, 352, 422, 400, color(75,73,138, 250), 3.5),
    new Line(365, 352, 422, 352, color(75,73,138, 250), 3.5),
    new Line(355, 340, 430, 340, color(75,73,138, 250), 3.5),
    new Circle(395, 250, 7, color(247, 208, 26, 160)),
    new Circle(358, 360, 7, color(247, 208, 26, 190)),
    new Circle(460, 180, 35, color(69, 131, 6, 120)),
    new Circle(425, 240, 18, color(69, 131, 6, 200)),
    new Circle(385, 315, 38, color(69, 131, 6, 120)),
    new Circle(515, 195, 15, color(255, 255, 0, 110)),
    new Circle(500, 380, 5, color(255, 255, 0, 250)),
    new Circle(500, 395, 5, color(255, 255, 0, 220)),
    new Circle(500, 410, 5, color(255, 255, 0, 180)),
    new Circle(500, 425, 5, color(255, 255, 0, 140)),
    new Circle(500, 440, 5, color(255, 255, 0, 90)),
    new Circle(245, 620, 20, color(255, 255, 0, 140)),
    new Circle(170, 605, 40, color(255, 0, 0, 120)),
    new Line(260, 330, 445, 330, color(247, 208, 26, 220), 3), 
    new Line(155, 300, 257, 300, color(247, 208, 26, 250), 4),  
    new Line(195, 150, 255, 150, color(247, 208, 26, 220), 1.5), 
    new Line(259, 160, 340, 160, color(247, 208, 26, 220), 1.5), 
    new Line(150, 580, 300, 580, color(247, 208, 26, 170), 3), 
    new Line(258, 150, 258, 540, color(247, 208, 26, 250), 2),  
    new Line(153, 200, 153, 440, color(247, 208, 26, 250), 2),
    new Circle(305, 205, 15, color(255, 0, 0, 180)),
    new Circle(250, 210, 15, color(255, 0, 0, 120)),
    new Circle(220, 315, 35, color(255, 0, 0, 120)),
    new Circle(170, 270, 28, color(255, 0, 0, 130)),
    new Circle(115, 150, 28, color(255, 0, 0, 90)),
    new Circle(100, 70, 38, color(255, 0, 0, 90)),
    new Circle(115, 100, 40, color(255, 0, 0, 230)),
    new Circle(115, 195, 40, color(255, 0, 0, 190)),
    new Circle(75, 195, 20, color(247, 208, 26, 180)),
    new Circle(135, 245, 20, color(69, 131, 6, 190)),
    new Circle(250, 330, 25, color(69, 131, 6, 230)),
    new Circle(295, 270, 38, color(255, 0, 0, 130)),
    new Circle(170, 225, 20, color(255, 0, 0, 220)),
    new Line(335, 195, 335, 330, color(247, 208, 26, 200), 3),
    new Line(225, 125, 225, 150, color(247, 208, 26, 200), 2),
    new Line(124, 60, 124, 362, color(247, 208, 26, 200), 1.5),
    new Line(98, 260, 98, 395, color(247, 208, 26, 200), 2.5),
    new Line(93, 270, 93, 438, color(247, 208, 26, 200), 1),
    new Line(87, 276, 87, 460, color(247, 208, 26, 200), 2.5),
    new Line(146, 380, 146, 470, color(247, 208, 26, 200), 1.5),
    new Line(165, 310, 165, 450, color(196, 212, 227, 250), 4),
    new Line(172, 310, 172, 380, color(75,73,138, 250), 2.5),
    new Line(178, 315, 178, 360, color(75,73,138, 250), 2.5),
    new Line(235, 315, 235, 380, color(75,73,138, 250), 2.5),
    new Line(240, 310, 240, 370, color(75,73,138, 250), 2.5),
    new Line(180, 315, 235, 315, color(75,73,138, 250), 2.5),
    new Line(174, 310, 238, 310, color(75,73,138, 250), 2.5),
    new Line(245, 310, 245, 340, color(75,73,138, 250), 2.5),
    new Line(252, 310, 252, 390, color(196, 212, 227, 250), 4),//grey
    new Line(248, 400, 248, 430, color(247, 208, 26, 250), 2.5),
    new Line(190, 330, 190, 440, color(247, 208, 26, 250), 2.5),
    new Line(205, 330, 205, 450, color(247, 208, 26, 250), 2.5),
    new Line(210, 330, 210, 430, color(247, 208, 26, 250), 1.5),
    new Line(55, 50, 55, 150, color(247, 208, 26, 250), 1.5),
    new Line(70, 40, 70, 170, color(247, 208, 26, 250), 1.5),
    new Line(160, 35, 160, 110, color(247, 208, 26, 250), 2.5),
    new Line(170, 30, 170, 80, color(247, 208, 26, 250), 1.5),
    new Line(292, 240, 292, 330, color(247, 208, 26, 250), 1.5),
    new Line(420, 40, 420, 210, color(247, 208, 26, 250), 1.5),
    new Line(428, 35, 428, 170, color(247, 208, 26, 250), 1.5),
    new Line(436, 50, 436, 100, color(247, 208, 26, 250), 2.5),
    new Line(448, 120, 448, 430, color(247, 208, 26, 250), 4),
    new Line(495, 80, 495, 410, color(247, 208, 26, 250), 3),
    new Line(509, 290, 509, 460, color(247, 208, 26, 250), 2),
    new Line(460, 380, 460, 480, color(247, 208, 26, 250), 1),
    new Line(510, 40, 510, 180, color(247, 208, 26, 250), 2),
    new Line(515, 60, 515, 200, color(247, 208, 26, 250), 3.5),
    new Line(523, 120, 523, 250, color(247, 208, 26, 250), 3.5),
    new Line(500, 90, 500, 350, color(196, 212, 227, 250), 3),
    new Line(455, 160, 455, 460, color(196, 212, 227, 250), 4),
    new Line(343, 195, 343, 320, color(196, 212, 227, 250), 3.5),
    new Line(265, 175, 265, 320, color(196, 212, 227, 250), 2.5),
    new Line(308, 225, 308, 320, color(196, 212, 227, 250), 2.5),
    new Line(118, 100, 118, 320, color(196, 212, 227, 250), 4),
    new Line(110, 205, 110, 270, color(2,173,150, 250), 2.5),
    new Line(85, 120, 85, 180, color(2,173,150, 250), 2.5),
    new Line(110, 110, 110, 380, color(120,13,190, 250), 2.5),//new purple
    new Line(105, 170, 105, 270, color(196, 212, 227, 250), 2.5),
    new Line(350, 205, 350, 270, color(75,73,138, 250), 2.5),
    new Circle(415, 315, 20, color(255, 0, 0, 120)),
    new Circle(410, 272, 16, color(255, 0, 0, 120)),
    new Circle(430, 282, 16, color(255, 0, 0, 120)),
    new Circle(420, 250, 15, color(255, 0, 0, 160)),
    new Circle(359, 320, 18, color(255, 0, 0, 120)),
    new Circle(445, 216, 25, color(255, 0, 0, 120)),
    new Circle(420, 165, 28, color(255, 0, 0, 120)),
    new Circle(480, 160, 25, color(255, 0, 0, 150)),
    new Circle(530, 140, 12, color(255, 0, 0, 180)),
    new Line(440, 125, 440, 290, color(75,73,138, 250), 2.5),
    new Line(440, 340, 440, 420, color(75,73,138, 250), 2.5),
    new Line(300, 230, 300, 650, color(247, 208, 26, 250), 4),  
    new Line(300, 600, 520, 600, color(247, 208, 26, 250), 3), 
    new Line(25, 650, 560, 650, color(247, 208, 26, 220), 3),  
    new Circle(80, 640, 30, color(69, 131, 6, 250)),
    new Circle(305, 436, 35, color(69, 131, 6, 250)),
    new Circle(304, 646, 30, color(69, 131, 6, 250)),
    new Circle(520, 630, 30, color(69, 131, 6, 250)),
    new Circle(118, 625, 20, color(69, 131, 6, 80)),
    new Circle(220, 595, 20, color(69, 131, 6, 80)), 
  ];
  
  drawElements();
}


function startGrowth() {  // Inspired by the external tutorial at https://youtu.be/lMJmtlp6Yus
  if (!intervalID) {  // Check if the growth animation is not already running
    intervalID = setInterval(() => {
      if (shrinkFactor < 1) {
        shrinkFactor += 0.01; // Gradually increase the shrink factor
        drawElements();  // Redraw the elements with updated scale
      } else {
        clearInterval(intervalID); // Stop the animation once fully grown
        intervalID = null;
      }
    }, 100); // Speed of growth
  }
}

function stopGrowth() {
  if (intervalID) {
    clearInterval(intervalID); // Clear the growth interval
    intervalID = null; // Reset the interval ID
  }
}

function startRain() {
  if (!rainIntervalID) {
    rainIntervalID = setInterval(() => {
      let rainX = random(20 * scaleFactor, (600 - 55) * scaleFactor); // Random x position for raindrops
      raindrops.push(new Raindrop(rainX, -10, 5, 15, color(100, 150, 255))); // Create a new raindrop
      drawElements(); // Redraw elements with updated raindrops
    }, 50); // Frequency of raindrop creation
  }
}

function stopRain() {
  if (rainIntervalID) {
    clearInterval(rainIntervalID);
    rainIntervalID = null;
  }
}

function drawElements() {
  background(255, 255, 240);

  // Drawing outer Borders
  stroke(150);
  strokeWeight(5 * scaleFactor); // Set border thickness
  noFill();
  rect(5 * scaleFactor, 5 * scaleFactor, (600 - 25) * scaleFactor, (700 - 10) * scaleFactor);
  //adjust the inner frame
  stroke(120);
  strokeWeight(3 * scaleFactor);
  rect(20 * scaleFactor, 20 * scaleFactor, (600 - 55) * scaleFactor, (700 - 40) * scaleFactor);

  // Calculate offsets for positioning tree elements based on growth shrink factor
  offsetX = (600 - 25) * scaleFactor / 2 - 300 * scaleFactor * shrinkFactor + 5 * scaleFactor;
  offsetY = (700 - 10) * scaleFactor - 700 * scaleFactor * shrinkFactor + 5 * scaleFactor;

  // Draw all elements in the elements array (Circle and Line objects)
  for (let element of elements) {
    element.draw(scaleFactor * shrinkFactor, offsetX, offsetY);  // Adjust each element's size and position
  }

  // Draw and animate raindrops
  // Inspired by the external tutorial at https://www.youtube.com/watch?v=KkyIDI6rQJI 
  for (let i = raindrops.length - 1; i >= 0; i--) {
    raindrops[i].draw(); // Draw each raindrop
    raindrops[i].move(); // Move each raindrop downwards
    if (raindrops[i].y > height) {  // Remove raindrop if it falls off the canvas
      raindrops.splice(i, 1); // Remove raindrop from array
    }
  }
}

// Adjusts the canvas size when the window is resized
function windowResized() {   
  resizeCanvas(windowWidth, windowHeight);
  scaleFactor = min(windowWidth / 600, windowHeight / 700);
  drawElements();
}

// Circle class definition
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  draw(scaleFactor, offsetX, offsetY) {
    fill(this.color);
    noStroke();
    ellipse(this.x * scaleFactor + offsetX, this.y * scaleFactor + offsetY, this.radius * 2 * scaleFactor);
  }
}

// Line class definition
class Line {
  constructor(x1, y1, x2, y2, color, weight) {
    this.x1 = x1;
    this.y1 = y1;
    this.x2 = x2;
    this.y2 = y2;
    this.color = color;
    this.weight = weight;
  }

  // Draw the line on the canvas with scaling and offset adjustments
  draw(scaleFactor, offsetX, offsetY) {
    stroke(this.color);
    strokeWeight(this.weight * scaleFactor);
    line(this.x1 * scaleFactor + offsetX, this.y1 * scaleFactor + offsetY, this.x2 * scaleFactor + offsetX, this.y2 * scaleFactor + offsetY);
  }
}

// Raindrop class definition
class Raindrop {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
  }

  // Draw the raindrop on the canvas
  draw() {
    fill(this.color);
    noStroke();
    rect(this.x, this.y, this.w, this.h, 5); // Draw rounded rectangle for raindrop
  }

  move() {
    this.y += 5; // Control drop speed
  }
}