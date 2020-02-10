function setup() {
  createCanvas(700, 500);
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
  
   printA(50, 50)
  printB(100, 50)
  printC(150, 50)
  printD(205, 50)
  printE(250, 50)
  printF(300, 50)
  printG(350, 50)
  printH(400, 50)
  printI(450, 50)
  printJ(500, 50)
  printK(550, 50)
  printL(600, 50)
  
  printM(50, 200)
  printN(100, 200)
  printO(150, 200)
  printP(200, 200)
  printQ(250, 200)
  printR(300, 200)
  printS(350, 200)
  printT(400, 200)
  printU(450, 200)
  printV(500, 200)
  printW(550, 200)
  printX(600, 200)

  printY(50,350)
  printZ(100, 350)
  
}
