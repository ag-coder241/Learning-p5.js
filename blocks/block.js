class Block{
  constructor(x, y){
    this.x = x;
    this.y = y;
    this.angle = 0;
    this.c = 70; 
  }
  
  display(){
    noFill();
    stroke(this.c);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    
    if (this.angle > 0 && this.angle < 45) {
      this.drawRect();
    } else {
      this.drawX();
    }
    
    // line(0 , 0 , size , size);
    pop();
  }
  
  move(){
    let distance;
    
    if(pmouseX - mouseX != 0 || pmouseY - mouseY != 0){
       distance = dist(mouseX, mouseY , this.x , this.y);
    if(distance < distMouse){
      this.angle += 1;
      this.c = 255;
    }
    }
   
      if(this.angle > 0 && this.angle < 90){
        this.angle += 1;
        if(this.c > 70){
          this.c -= 3;
        }
      }
      else{
        this.angle = 0;
        this.c = 70;
      }
    }
  
    drawX() {
    let margin = -size/2;
    line(margin + offset/2, margin + offset/2, margin + size - offset/2, margin + size - offset/2);
    line(margin + size - offset/2, margin + offset/2, margin + offset/2, margin + size - offset/2); 
  }
  
  drawRect() {
    rect(0, 0, size - offset, size - offset);
  }
  
  
  }


