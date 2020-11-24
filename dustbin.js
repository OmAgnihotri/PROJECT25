class Dustbin {
    //constructor is automatically called when a object is created useing this class. this key word reffers to the object that is being created
    constructor(x,y,w,h){
    var options={
        isStatic:true
      }    
    this.body =Bodies.rectangle(x,y,w,h,options);
    
    this.width=w;
    this.height=h;
    
      World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;   
    var angle=this.body.angle;
    push ();
    translate(pos.x,pos.y)
    rotate (angle);
    fill("green");
    rectMode(CENTER);  
    rect(0,0,this.width,this.height);  
  
    pop ();
    }  
    }