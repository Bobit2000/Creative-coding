let floor;
let floorGrid;

let Coordinates = [[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
                  [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]];

function setup() {
  createCanvas(1000, 1000, WEBGL);
  
  camera(4000, -4000, 4000);
  
  createFloor();
  grid();
  
  build1();
  build2();
  build3();
  build4();
  build5();
  
  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++) {
      
      if(i%3 != 2){
        if(j%10!=2){
          let buildType = random(1)
          if(buildType < 0.2){
            Coordinates[i][j] = new buildingOne(100*(i-5)+50,100*(j-5)+50, building1);
          }else if(buildType >= 0.2 && buildType < 0.4){
            Coordinates[i][j] = new buildingTwo(100*(i-5)+50,100*(j-5)+50, building2);
          }else if(buildType >= 0.4 && buildType < 0.6){
            Coordinates[i][j] = new buildingThree(100*(i-5)+50,100*(j-5)+50, building3);
          }else if(buildType >= 0.6 && buildType < 0.8){
            Coordinates[i][j] = new buildingFour(100*(i-5)+50,100*(j-5)+50, building4);
          }else if(buildType >= 0.8 && buildType < 1){
            Coordinates[i][j] = new buildingFive(100*(i-5)+50,100*(j-5)+50, building5);
          }
        }
          
      }
    }
  }
  
}

function draw() {
  background(51);
  
  orbitControl();//allows mouse to control camera
  
  lights();
  
  model(floor);
  model(floorGrid);
  
  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 20; j++) {
      if(Coordinates[i][j] != 0){
        Coordinates[i][j].show();
      }
    }
  }
}

function grid() {
  
  
  let Col1 = 255;
  let Col2 = 0;
  let colStore;
  
  beginGeometry();
  
  translate(-450,0,1450)
  for(let i = 0; i < 20; i++) {
    
    //swaps colours each row to make a grid
    colStore = Col1;
    Col1 = Col2;
    Col2 = colStore
    
    //generates squares
    for (let j = 0; j < 10; j++){
      push();
      translate(100,0,0)
      fill(Col2);
      box(100,11,100);
      translate(100,0,0)
      fill(Col1);
      box(100,11,100);
    }
    translate(-2000,0,0)
    translate(0,0,-100)
  }
  
  floorGrid = endGeometry();
}

function createFloor() {//generates geometry for the floor
  
  
  beginGeometry();
  
  box(1000,10,1000);
  
  floor = endGeometry();
  
}


//generates buildings
function build1() {
  
  //generates geometry for the first building
  beginGeometry();
  
  push();
  fill(0,255,0);
  box(100,500,100);
  pop();
  
  building1 = endGeometry();
  
  return building1;
}

class buildingOne {
  constructor(X,Z, build) {
    this.X = X;
    this.Z= Z;
    this.build = build;
  }
  show(){
    
    push();
    
    translate(this.X, -250, this.Z)
    
    model(this.build);
    
    pop();
    
  }
  
}
function build2() {
  
  //generates geometry for the first building
  beginGeometry();
  
  push();
  fill(255,0,0);
  box(100,300,100);
  pop();
  
  building2 = endGeometry();

  return building2;
}

class buildingTwo {
  constructor(X,Z, build) {
    this.X = X;
    this.Z= Z;
    this.build = build;
  }
  show(){
    
    push();
    
    translate(this.X, -150, this.Z)
    
    model(this.build);
    
    pop();
    
  }
  
}

function build3() {
  
  //generates geometry for the first building
  beginGeometry();
  
  push();
  fill(0,0,255);
  box(100,200,100);
  pop();
  
  building3 = endGeometry();

  return building3;
}

class buildingThree {
  constructor(X,Z, build) {
    this.X = X;
    this.Z= Z;
    this.build = build;
  }
  show(){
    
    push();
    
    translate(this.X, -100, this.Z)
    
    model(this.build);
    
    pop();
    
  }
}

function build4() {
  
  //generates geometry for the first building
  beginGeometry();
  
  push();
  fill(0,255,255);
  box(100,30,100);
  pop();
  
  building4 = endGeometry();

  return building4;
}

class buildingFour {
  constructor(X,Z, build) {
    this.X = X;
    this.Z= Z;
    this.build = build;
  }
  show(){
    
    push();
    
    translate(this.X, -15, this.Z)
    
    model(this.build);
    
    pop();
    
  }
}

function build5() {
  
  //generates geometry for the first building
  beginGeometry();
  
  push();
  fill(255,0,255);
  box(100,100,100);
  pop();
  
  building5 = endGeometry();

  return building5;
}

class buildingFive {
  constructor(X,Z, build) {
    this.X = X;
    this.Z= Z;
    this.build = build;
  }
  show(){
    
    push();
    
    translate(this.X, -50, this.Z)
    
    model(this.build);
    
    pop();
    
  }
}
