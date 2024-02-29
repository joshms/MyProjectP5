// ball moves with mouse
// ball shoots with mouse pressed
// hoop moves, speed increases over time
// score goes up when ball goes in successfully 
let basketImage;
let courtImage;
let ballX = 200;
let ballY = 350;
let shooting = false; // Variable to track if the ball is being shot
let shootSpeed = 11; // Speed at which the ball moves upwards when shot
let score = 0;
let gameEnded = false;
let hitBasket = false;

let basket = {
  x:0,
  y:50,
  speed: 1,
  goRight:true,
  
  display:function(){
  //display the image here
  image(basketImage,this.x,this.y,100);
  },
  update:function(){
  //update position here
  if(this.x<width && this.goRight){
    this.x+=this.speed;
  }
    else if(this.x>=width){
      this.goRight = false;
    }
  
    if (this.x>0 && !this.goRight){
      this.x-=this.speed;
    }
     else if (this.x<=0){
       this.goRight = true;
   }
    
  
    
  }
  
}

function preload(){
  basketImage = loadImage('basket.png');
  courtImage = loadImage('court.png');
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  image(courtImage, 0, 0);
  basket.display();
  basket.update();
  // circle(mouseX, 350, 50);
  // fill('orange');

  if (hitBasket) {
    rect(0, 0, width, height);
    fill('black');
    textSize(20);
    textAlign(CENTER, CENTER)
    text("YOU WIN! Refresh the page to play again", width / 2, height / 2)
  }
   else {
    image(courtImage, 0, 0);
    basket.display();
    basket.update();
   }

  if (ballY <= basket.y + basketImage.height && ballX >= basket.x && ballX <= basket.x + basketImage.width) {
    score++; // Increase score
    shooting = false; // Stop shooting
    ballY = 350; // Reset ball position
    hitBasket = true;
  }

  if (shooting) {
    ballY -= shootSpeed;
    circle(mouseX, ballY, 50);
  }
  
  if (ballY <= 0 || ballX < 0 || ballX > width) {
    shooting = false; 
    ballX = 200;
    ballY = 350;
  }
else {
  circle(mouseX, ballY, 50);
  fill('orange');
 }
}


function mousePressed() {
  if (!shooting) {
    shooting = true;
  }
}
 





