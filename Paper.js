class Paper {
    constructor(x,y){
        var options={
            isStatic = false,
            restitution = 0.3,
            friction = 0.5,
            density = 1.2
        }
        this.image = loadImage("paper.png");
    }
    display() {
        this.body,position.x = mouseX;
        this.body.position.y = mouseY;
        paper.display();
    }
}