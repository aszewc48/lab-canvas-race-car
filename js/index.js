window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {
    const canvas = document.querySelector('canvas')

    const ctx = canvas.getContext('2d')
const img = new Image()

img.src = './images/road.png'

class Vehicle{
  constructor(x,y,width,height) {
    this.x = 225,
    this.y = 500,
    this.w = 50,
    this.h = 100 
  }
}
class Obstacle{
  constructor(x,y,width,height,color) {
    this.x = Math.random()*canvas.width-100
    this.y = 0
    this.w = (Math.random()*canvas.width)/2
    this.h= 20
    this.color = 'red'
  }
}
let player = new Vehicle
const car = new Image();
  car.src = "images/car.png";
  car.onload = function () {
    ctx.drawImage(img,0,0,500,700)
    ctx.drawImage(car, player.x, player.y, player.w, player.h);
  };
  document.addEventListener('keydown', (e) => {
  switch(e.code) {
    case 'ArrowRight':
      player.x += 10
      ctx.clearRect(player.x-10,player.y,50,100)
      ctx.drawImage(img,0,0,500,700)
      ctx.drawImage(car,player.x,player.y,50,100)
      break;
    case 'ArrowLeft':
      player.x -= 10
      ctx.clearRect(player.x+10,player.y,50,100)
      ctx.drawImage(img,0,0,500,700)
      ctx.drawImage(car,player.x,player.y,50,100)
      break
  }
  })
  let frames = 0
  setInterval(() => {
    frames++
    console.log('hi')
    if(frames > 10) {
      console.log('hi')
      ctx.fillRect(Obstacle.x,Obstacle.y,Obstacle.w,Obstacle.h)
    }
  }, 42)
  }
};
