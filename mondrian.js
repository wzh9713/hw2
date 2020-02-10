function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255, 0, 0)
  rect(mouseX, 0, 700, mouseY); 
  
  fill(255)
  rect(0, 0, mouseX-15, mouseY-170)
  
  fill(255)
  rect(0, mouseY-155, mouseX-15, 155)
  
  fill(0, 0, 255)
  rect(0, mouseY+15 , mouseX-15, 600)
  
  fill(255)
  rect(mouseX, mouseY+15, 260, 500)
  
  fill(255)
  rect(mouseX+275, mouseY+15, 500, 30)
  
  fill(255, 255, 0)
  rect(mouseX+275, mouseY+60, 500, 500)
}
