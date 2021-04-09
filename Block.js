class Block {
    constructor(x,y,width,height) {
      var options = {
          'restitution':0.4
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill(rgb(56, 44, 44));
      rect(pos.x, pos.y, this.width, this.height);

    }
  };
