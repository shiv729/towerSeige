class Circle{
    constructor(x, y, r) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':0.3
      }
      this.image=loadImage("paper.png");
      this.poly= Bodies.circle(x,y,r, options);
      this.r= r;
      World.add(world,this.poly);
    }
    display(){
    
      //imageMode(CENTER);
      //image(image,this.polygon.body.position.x, this.polygon.body.position.y,40,40 );
    ellipse(this.poly.position.x, this.poly.position.y,this.r,this.r);
    }
  };