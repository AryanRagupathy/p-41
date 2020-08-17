class Man{
    constructor(x,y ) {
        var options = {
            isStatic:true
        }
        this.body = Bodies.circle(x, y, 40, options);
        
        World.add(world, this.body);
    }
        display(){
            var pos =this.body.position;
            imageMode(CENTER);
            fill("white");
            image(manImg,240, 740, 90,120);
          
    }
}