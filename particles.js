class Particle {
    constructor(x, y) {
        var options = {
            restitution: 1,
            friction: 0,
        }
        this.o = 10;
        this.body = Bodies.circle(x, y, this.o, options);
        
        World.add(world, this.body);
    }
    display() {

        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.o,this.o);
        pop();
    }

};