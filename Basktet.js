class Basket{
    constructor(x,y,width,height){
        var options={
            isStatic:true
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Image/dustbingreen.png");
      World.add(world, this.body);
    }
    display(){
     
       fill("white")
rect(this.body.position.x,this.body.position.y,this.width,this.height);
image(this.image, 0, 0, this.width, this.height);

    } 
}