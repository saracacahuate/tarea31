var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

  //crea los objetos para dividir
  for (var k = 0; k <=80; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var k = 100; k <=80; k = k + 90) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }
 
  for (var k = 100; k <=80; k = k + 90) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  //crea la primera fila de objetos plinko
  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  //crea la segunda fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  //crea la tercera fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,260));
  }
  
  //crea la cuarta fila de objetos plinko
  for (var j = 50; j <=width-10; j=j+50)
  {
    plinkos.push(new Plinko(j,370));
  }

  //crea los objetos partícula
  if(frameCount%40===0){
    particles.push(new Particle(random(width/2-10, width/2+10), 10,10))
  }
   var arr3 =["particles", 12,true] 
   console.log(arr3);
}
 


function draw() {
  background("black");
  textSize(20)
 
  Engine.update(engine);
  ground.display();
  
  //muestra los plinkos 
  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }
   
  //muestra las divisiones
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

  //muestra las partículas 
   for(var o = 0; o < particles.length; o++){
     particles[o].display();
   }
}