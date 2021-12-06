class ball{
    constructor(x, y, width, height){
        var options = {
            'restitution': 0.8,
            'friction':1.0,
            'density':10.0
        }
        this.body = Bodies.circle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/vivo.png")
    }

    display(){
        image(this.image, x, y, this.width, this.height);
    }
}