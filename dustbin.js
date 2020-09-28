class Dustbin{
    constructor(x,y,width,height) {
      var options = {
          isStatic:true,
         
      }
      this.image=loadImage("dustbin.png")
      this.x= x;
      this.y= y;
      this.width=width;
      this.height=height;
       this.body = Bodies.rectangle(x,y,width,height,options);
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      rectMode(CENTER);
      //fill("brown");
      //ellipse(pos.x, pos.y, this.raduis, this.raduis);\
      imageMode(CENTER)
      image(this.image,0,-this.height/2,this.width,this.height)
    }
  };
