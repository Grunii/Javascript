const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const width = canvas.width = window.innerWidth;
const height = canvas.height = window.innerHeight;

// function to generate random number
let ispaused =false;
let numberOfBalls = 25;

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
    this.x = x;
    this.y = y;
    this.velX = velX 
    this.velY = velY 
    this.color = color;
    this.size = size;
    this.prevVelX = random(-7,7);
    this.prevVelY = random(-7,7);
  }
  Ball.prototype.draw = function() {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
    ctx.fill();
    
  }
  Ball.prototype.update = function() { 
    if(ispaused){
      if(this.velX!=0 && this.VelY!=0){
        this.prevVelX = this.velX;
        this.prevVelY = this.velY;
      }
      this.velX=0
      this.velY=0
    }
    else if(!ispaused && (this.velX==0 && this.velY==0)){
      this.velX = this.prevVelX;
      this.velY = this.prevVelY;
    }

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

while (balls.length < numberOfBalls) {
  let size = random(10,20);
  let ball = new Ball(
    // ball position always drawn at least one ball width
    // away from the edge of the canvas, to avoid drawing errors
    random(0 + size,width - size),
    random(0 + size,height - size),
    ispaused ? 0 : random(-7,7),
    ispaused ? 0 : random(-7,7),
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