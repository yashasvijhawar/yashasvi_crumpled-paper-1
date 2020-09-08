class Paper {
    constructor(x, y) {
      var options = {
           isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':2.5
      }
      this.body = Bodies.circle(x, y, 15, options);
      this.r = 15;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x,pos.y);
      ellipseMode(RADIUS);
      fill(255);
      ellipse(0,0,15,15);
      //rect(0,0, this.width, this.height);
      pop();
    }
  };
  