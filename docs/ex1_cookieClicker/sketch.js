let 
  //cookie variables
  posX,
  posY,
  cookieSize= 200,
  rad,
  //oreo variables
  oreoX,
  oreoY,
  oreoSize = 0,
  oreoEffect,
  effectApplied,
  mouseMulti = false,
  mouseMultiEnd = 0,
  CpSMulti = false,
  CpSMultiEnd = 0,
  oreoClicked = false,
  durationA,
  durationB,
  timer = 0,
  //UI 
  time = 0,
  score = 0,
  CpS = 0,
  mouseLevel = 1,
  //CpS upgrades
  Clicker,
  Granny,
  Farm,
  Mine,
  Factory,
  //Mouse upgrades
  MouseUp1,
  MouseUp2,
  //Sprites
  img,
  oreo

function preload(){
  img = loadImage('cookie-1.jpg')
  oreo = loadImage('oreonobg.png')
}

function setup() {
  frameRate(60);
  createCanvas(800, 400);
  posX = width / 2;
  posY = height / 2;
  //buttons
  //CpS upgrades
  Clicker = createButton("50 cookies - increase CpS by 0.1");
  createElement('br')
  Granny = createButton("250 cookies - increase CpS by 1");
  createElement('br')
  Farm = createButton("1000 cookies - increase CpS by 5");
  createElement('br')
  Mine = createButton("5000 cookies - increase CpS by 50");
  createElement('br')
  Factory = createButton("25000 cookies - increase CpS by 500");
  createElement('br')
  createElement('br')
  //Mouse upgrades
  MouseUp1 = createButton("500 cookies - upgrade mouse by 1")
  createElement('br')
  MouseUp2 = createButton("1000 Cookies - upgrade mouse by 1% of CpS")
  
  //CpS upgrades
    Clicker.mousePressed(() => {
      increaseCpS(0.1, 50);
    });
    Granny.mousePressed(() => {
      increaseCpS(1, 250);
    });
    Farm.mousePressed(() => {
      increaseCpS(5, 1000);
    });
    Mine.mousePressed(() => {
      increaseCpS(50, 5000);
    });
    Factory.mousePressed(() => {
      increaseCpS(500, 25000);
    });
  //Mouse upgrades
    MouseUp1.mousePressed(() => {
      mouseUpgrade(1,500);
    })
    MouseUp2.mousePressed(() => {
      mouseUpgrade(CpS/100,1000);
    })
}

function draw() {
  //add cps to score every second
  if(frameCount%60 == 0){
    score = score + CpS;
  }
  score = round(score,1)
  background(0,cookieSize-200,cookieSize-200);
  fill(255)
  //generate cookie
  imageMode(CENTER)
  let cookie = image(img, posX,posY, cookieSize,cookieSize)
  
  //dont let cookie get bigger than 150
  if(cookieSize > 150){
    cookieSize -= 0.5
  }
  
  
  //booster oreos
  //generate random position for oreo every minute
  if(frameCount%3600 == 0 && frameCount > 0){
    oreoX = floor(random(50, 750))
    oreoY = floor(random(50, 350))
    
    oreoClicked = false;
  }
  
  //oreo gets bigger then smaller in 5 seconds
  if(frameCount%3600 <= 300 && frameCount > 0){
    oreoSize+=0.5
  }
  if(frameCount%3600 > 600 && frameCount%3600 < 900 && oreoSize > 0.5){
    oreoSize-=0.5
  }
  
  if(frameCount%3600 >= 900){
    oreoSize = 1
    oreoX = 10000
    oreoY = 10000
  }
  if(oreoClicked == false) {
      let bOreo = image(oreo, oreoX, oreoY, oreoSize, oreoSize) 
  }
  
  //apply effect
  if(effectApplied == true) {
    
    console.log(oreoEffect)
    
    if(oreoEffect == 0){
      
          CpS = CpS * 7;
          
          CpSMulti = true;
          CpSMultiEnd = time + 60;
      
          
      
    }else if(oreoEffect == 1){
      
          mouseLevel = mouseLevel * 77;
          
          mouseMulti = true;
          mouseMultiEnd = time + 7;
      
          
      
    }else if(oreoEffect == 2){
          durationC = time + 10
          if(time < durationC){
            text('doubled your banked cookies', 400, 60)
          }
          
          score = score*2
    }
    effectApplied = false
    
  }
    if(CpSMulti){
            
            text('7x multiplier to CpS for 60 seconds');
              
            if(time >= CpSMultiEnd){
                CpS = CpS / 7;
                CpSMulti = false;
            }
            
    }
    
    if(mouseMulti){
            
            text('77x multiplier to mouse for 7 seconds');
              
            if(time >= mouseMultiEnd){
                mouseLevel = mouseLevel / 77
                mouseMulti = false;
            }
              
    }
     
 
  //display ui
  text(round(score, 0), 10, 20);
  text(round(CpS, 1), 10, 40);
  text(round(mouseLevel, 5), 10, 60);
  if(frameCount%60 == 0){
    time = time + 1
  }
  text(time, 750, 20)
  
  rad = cookieSize/2
  
  
  
}

function mousePressed() {
  //if cookie is clicked
  if (dist(mouseX, mouseY, posX, posY) < rad) {
    score += mouseLevel;
    if(cookieSize < 600){
      cookieSize+=10
    }
  }
  //if oreo is clicked, get rid of oreo and give effect
  if(dist(mouseX, mouseY, oreoX, oreoY) < oreoSize/2) {
    oreoClicked = true;
    oreoEffect = floor(random(0,3))
    effectApplied = true
  }
}

function increaseCpS(X, Z) {
  if(score >= Z){ 
  CpS += X;
  score -= Z;
  }
}

function mouseUpgrade(W,Y){
  if(score >= Y){
    mouseLevel += W;
    score -= Y;
  }
}

