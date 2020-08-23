class Basket{
    constructor(){
        var options={
            isStatic:true
            
        }
        this.image=loadImage("Images/dustbingreen.png");
        this.left = Bodies.rectangle(500,610,20,100,options);
        this.center = Bodies.rectangle(600,650,180,20,options);
        this.right = Bodies.rectangle(700,610,20,100,options);


        
     
 
      World.add(world, this.left);
      World.add(world, this.right);
      World.add(world, this.center);

    }
    display(){
 var pos=this.center.position;
 imageMode(CENTER);
image(this.image,616,620,170,116);

    } 
}