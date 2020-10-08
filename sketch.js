
var monkey, player_running, stone, stoneimg;
var jungle, jungleimg, banana, bananaimg;

function preload(){

player_running=  loadAnimation
("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");

stoneimg=loadImage("stone.png");
jungleimg=loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(600, 400);
monkey = createSprite(50,350,20,20);
monkey.addAnimation("running",player_running);
  
  
  
  
}

function draw() {
  background("white");
  drawSprites();
}