const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
let ispaused =false;



function paus(){
    ispaused=true;
     }
     function spela(){
  ispaused=false;
    }
     
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
function Ball(x, y, velX, velY, color, size,) {
    // if(ispaused){velX=0,velY=0}
    this.x = x;
    this.y = y;
    this.velX = velX 
    this.velY = velY 
    this.color = color;
    this.size = size;
  }
  Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    
  }
  Ball.prototype.update = function() {

    if(ispaused){ this.velY=0,this.velX=0}
    if ((this.x + this.size) >= width) {
      this.velX = -(this.velX);
    }
  
    if ((this.x - this.size) <= 0) {
      this.velX = -(this.velX);
    }
  
    if ((this.y + this.size) >= height) {
      this.velY = -(this.velY);
    }
  
    if ((this.y - this.size) <= 0) {
      this.velY = -(this.velY);
    }
    
    
    
       
  
  
    this.x += this.velX;
    this.y += this.velY;
  }
  
      
  let balls = [];

while (balls.length < 26) {
  let size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
 );

  balls.push(ball);
   function add(){
    let size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    random(-7,7),
    random(-7,7),
    'rgb(' + random(0,255) + ',' + random(0,255) + ',' + random(0,255) +')',
    size
 );

  balls.push(ball);
  
     }
  }
  
  

   
  
  
 let i=0


function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    ctx.fillRect(0, 0, width, height);
  
    for (i = 0; i < balls.length; i++) {
      balls[i].draw();
      balls[i].update();
      document.getElementById("demo").innerText=i
    }
   
    requestAnimationFrame(loop);
  }

 loop();
                 

    
  
  
