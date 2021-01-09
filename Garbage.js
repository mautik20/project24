class Garbage {
    constructor(x, y,radius) {
      var options = {
        isStatic:false,
       restitution:0.3,
       friction:0.5, 
       density:1.2          }

      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;

      World.add(world, this.body);
    }
    display(){
      var pos=this.body.position;
      fill("Magenta");
      circle(pos.x,pos.y, this.radius);
    }
  };
  
function keyPressed(){
if(keyCode === UP_Arrow){

  Matter.Body.applyForce(garbageObject.body.position,{x:85,y:-85});

}




};






