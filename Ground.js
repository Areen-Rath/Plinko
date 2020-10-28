class Ground{
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(240, 795, 480, 10, options);
        World.add(world, this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, 480, 10);
        pop();
    }
}