let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(0);
    angleMode(DEGREES);
}

function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 360);
    console.log(alt);
    noFill();
    if (mouseIsPressed) {
        stroke(255);
    } else {
        stroke(237, 34, 93);
    }
    //stroke(255);
    strokeWeight(1);
    //ellipse(150, 150 + alt, 150 / alt);
    triangle(130, 175, 158 + alt, 120 + alt, 186 / alt, 175 / alt);
}

function draw() {
    translate(300, 300);
    rotate(rotateBy); 
    makeArm(rotateBy);
    rotateBy += 5;
}

//function mousePressed() {
//    noLoop();
//}