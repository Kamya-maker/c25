class Ball {
    constructor(x,y,radius) {
      var options ={
          restitution: 0.8,
          density:1.1
      }
      this.image=loadImage("Images/paper.png");
      this.body=Bodies.circle(x,y,radius,options);
      
      this.radius=radius;
      World.add(world,this.body);
    
    }



    display() {
    var pos=this.body.position;
    //ellipse(pos.x,pos.y,this.radius);
  imageMode(CENTER);
    image(this.image,pos.x,pos.y,50,50);
    
  
    }
  }
  