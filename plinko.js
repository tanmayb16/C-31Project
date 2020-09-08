class Plinko{
    constructor(x,y,radius){
        var option = {
            restitution : 1,
            friction : 1,
            isStatic : true,
        }
        this.radius = 10;
        this.body = Bodies.circle(x,y,10, option)
        World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("white");
        ellipseMode(CENTER);
        ellipse(0, 0, this.radius,this.radius);
        pop();
      }
}