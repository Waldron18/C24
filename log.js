class Log extends BaseClass{
    constructor(x,y,height,angle){
        super(x,y,20,height);
        this.image=loadImage("sprites/wood2.png");
        Body.setAngle(this.body,angle);
    }
}