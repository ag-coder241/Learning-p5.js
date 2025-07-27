let distMouse = 50;
let size = 10;
let blocks = [];
let cols;
let rows;
let offset = 4;

function setup() {
  createCanvas(2000, 2000);
  rectMode(CENTER);
  angleMode(DEGREES);
  rows = width/size;
  cols = height/size; 
  
  for(let i = 0 ; i < rows ; i++){
    blocks[i] = [];
    for(let j = 0; j < cols ; j++){
      blocks[i][j] = new Block(size/2 + i*size, size/2 + j*size);
      
    }
  }
  
  b = new Block(width/2 , height/2);
}

function draw() {
  background(0);
  
   for(let i = 0 ; i < rows ; i++){
    for(let j = 0; j < cols ; j++){
      blocks[i][j].move();
      blocks[i][j].display();
      
    }
  }
  
//   print(pmouseX ,mouseX,  pmouseY , mouseY);
}

