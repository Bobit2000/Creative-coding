class TNT {
    constructor(x,y){
      this.x = x
      this.y = y
  
    let options = {
            friction: 0.3,
            restitution: 0.6
        }
    
    this.body = Bodies.rectangle(this.x, this.y, 50, 50, options);
      
      
    Composite.add(world, this.body);
      
      this.spawnFrame = frameCount;
      this.boom = false;
    }
  
    timer(){
      if((!this.boom && frameCount-this.spawnFrame) > 300){
        this.boom = true;
        this.explode();
      }
    }  
  
  
    explode(){
      

      if(this.boom == true){
        
        let pos = this.body.position;
        
        Composite.remove(world, this.body)
        
        for(let n of balls){
          let direction = createVector(n.body.position.x - pos.x, n.body.position.y - pos.y)
          let distance = direction.mag();
          
          if(distance < 150 && distance > 0){
              direction.normalize();
              direction.mult(0.1)
              Body.applyForce(n.body, n.body.position, direction)
          }
        }
          for(let m of TNTs){
            let direction = createVector(m.body.position.x - pos.x, m.body.position.y - pos.y)
            let distance = direction.mag();

            if(distance < 150 && distance > 0){
                direction.normalize();
                direction.mult(0.1)
                Body.applyForce(m.body, m.body.position, direction)
            }
        }
      }
    }

    
  
     show() {
        if (this.boom == false){
          let pos = this.body.position;
          let angle = this.body.angle;

          push();
          translate(pos.x, pos.y);
          rotate(angle);

          stroke(255)
          fill(127);

          imageMode(CENTER);

          image(TNTimg, 0,0, 50, 50);

          pop();
        }    
        
    }
}