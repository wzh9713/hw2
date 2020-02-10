function setup() {
  createCanvas(400, 400);
}

function printH(x, y) {
  // letter H
 // line(50, 50, 50, 150)
 // line(90, 50, 90, 150)
 // line(50, 100, 90, 100)
  line(x, y, x, y+100)
  line(x+40, y, x+40, y+100)
  line(x, y+50, x+40, y+50)
}

function printE(x, y) {
//letter E
  //line(100, 50, 100, 150)
  //line(100, 50, 140, 50)
  //line(100, 100, 140, 100)
  //line(100, 150, 140,150)  
  line(x, y, x, y+100)
  line(x, y+50, x+40, y+50)
  line(x, y+100, x+40, y+100)
  line(x, y, x+40, y)

}
  
function printL(x, y) {
 // letter L
  //line(150, 50, 150, 150)
  //line(150, 150, 190, 150)
  line(x, y, x, y+100)
  line(x, y+100, x+40, y+100)
}
  
function printA(x, y) {

  line(x, y, x, y+100)
  line(x, y, x+40, y)
  line(x, y+40, x+40, y+40)
  line(x+40, y, x+40, y+100)
}

function printB(x, y) {

  line(x, y, x, y+100)
  line(x, y, x+30, y)
  line(x, y+40, x+40, y+40)
  line(x+40, y+40, x+40, y+100)
  line(x, y+100, x+40, y+100)
  line(x+30, y, x+30, y+40)
}

function printC(x, y) {

  line(x, y, x, y+100)
  line(x, y+100, x+40, y+100)
  line(x, y, x+40, y)
}

function printD(x, y) {

  line(x, y, x, y+100)
  line(x-10, y+100, x+40, y+100)
  line(x-10, y, x+40, y)
  line(x+40, y, x+40, y+100)
}

function printF(x, y) {

  line(x, y, x, y+100)
  line(x, y+50, x+40, y+50)
  line(x, y, x+40, y)
}

function printG(x, y) {

  line(x, y, x, y+100)
  line(x, y+100, x+40, y+100)
  line(x, y, x+40, y)
  line(x+40, y+50, x+40, y+100)
  line(x+10, y+50, x+40, y+50)
}

function printI(x, y) {

  line(x+20, y, x+20, y+100)
}

function printJ(x, y) { 
 
  line(x+20, y, x+20, y+100)
  line(x, y+100, x+20, y+100)
  line(x, y, x+40, y)
}

function printK(x, y) {

  line(x, y, x, y+100)
  line(x, y+40, x+40, y+40)
  line(x+40, y+40, x+40, y+100)
  line(x+30, y, x+30, y+40)
}

function printM(x, y) {

  line(x, y, x, y+100)
  line(x, y, x+40, y)
 line(x+20, y, x+20, y+100)
  line(x+40, y, x+40, y+100)
}

function printN(x, y) {

  line(x, y, x, y+100)
  line(x, y, x+20, y)
  line(x+20, y, x+20, y+100)
  line(x+40, y, x+40, y+100)
  line(x+20, y+100, x+40, y+100)
}

function printO(x, y) {

  line(x, y, x, y+100)
  line(x, y+100, x+40, y+100)
  line(x, y, x+40, y)
  line(x+40, y, x+40, y+100)
}

function printP(x, y) {

  line(x, y, x, y+100)
  line(x, y, x+40, y)
  line(x, y+40, x+40, y+40)
  line(x+40, y, x+40, y+40)
}

function printQ(x, y) {

  line(x, y, x, y+100)
  line(x, y+100, x+50, y+100)
  line(x, y, x+40, y)
  line(x+40, y, x+40, y+100)
}

function printR(x, y) {

  line(x, y, x, y+100)
  line(x, y, x+30, y)
  line(x, y+40, x+40, y+40)
  line(x+40, y+40, x+40, y+100)
  
  line(x+30, y, x+30, y+40)
}

function printS(x, y) {

  line(x, y, x, y+40)
  line(x, y, x+40, y)
  line(x, y+40, x+40, y+40)
  line(x+40, y+40, x+40, y+100)
  line(x, y+100, x+40, y+100)
}

function printT(x, y) { 
 
  line(x+20, y, x+20, y+100)
  line(x, y, x+40, y)
}

function printU(x, y) {

  line(x, y, x, y+100)
  line(x, y+100, x+40, y+100)
  line(x+40, y, x+40, y+100)
}

function printV(x, y) {

  line(x, y, x+20, y+100)
  line(x+40, y, x+20, y+100)
}

function printW(x, y) {

  line(x, y, x, y+100)
  line(x, y+100, x+40, y+100)
  line(x+20, y+20, x+20, y+100)
  line(x+40, y, x+40, y+100)
}

function printX(x, y) {
  
  line(x, y, x+40, y+100)
  line(x+40, y, x, y+100)
}

function printY(x, y) {
  
  line(x, y, x+20, y+50)
  line(x+40, y, x+20, y+50)
  line(x+20, y+50, x+20, y+100)
}

function printZ(x, y) {
  
  line(x, y+100, x+40, y+100)
  line(x, y, x+40, y)
  line(x+40, y, x, y+100)
}


function draw() {
  background(220);
  
   printZ(50, 50)
  printI(100, 50)
  printH(150, 50)
  printA(200, 50)
  printO(250, 50)
  
  printW(50, 200)
  printA(100, 200)
  printN(150, 200)
  printG(200, 200)
}
