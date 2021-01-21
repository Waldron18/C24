class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic: true
        }
        this.ground=Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.ground);
        this.width=width;
        this.height=height;
        this.image=loadImage("sprites/ground.png")
    }

    display(){
        push();
        fill("blue")
        imageMode(CENTER);
        image(this.image,this.ground.position.x,this.ground.position.y,this.width,this.height);
        pop();
    }
}