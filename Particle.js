class Particle{
    constructor(x, y){
        var options = {
            restitution: 0.3
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.color = color(Math.round(random(0, 255)), Math.round(random(0, 255)), Math.round(random(0, 255)));
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS);
        fill(this.color);
        circle(pos.x, pos.y, 10);
        pop();
    }
}