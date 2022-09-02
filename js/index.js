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
  left() {
    return this.x
}
right() {
    return this.x + this.w
}
top() {
    return this.y
}
bottom() {
    //console.log("height", this.height)
    return this.y + this.h
}
crashWith(obs) {
  return !(this.bottom()< obs.top() || this.top() > obs.bottom() || this.right() < obs.left() || this.left() > obs.right())
}
}
let player = new Vehicle
class Obstacle{
  constructor(x,y,width,height) {
    this.x = (Math.random()*canvas.width)-150
    this.y = 0
    this.w = (Math.random()*canvas.width)/2+100
    this.h= 20
  }
  draw(){
    ctx.fillStyle = 'red'
    ctx.fillRect(this.x,this.y,this.w,this.h)
}
updatePosition(){
  this.y += 1
}
left() {
  return this.x
}
right() {
  return this.x + this.w
}
top() {
  return this.y
}
bottom() {
  return this.y + this.h
}

}

function checkGameOver() {
  const crashed = obstacleArray.some(function (obs) {
    return player.crashWith(obs)
})
if(crashed) {
  window.location.reload()
    alert(`Game over! Final Score: ${Math.floor(frames/5)}`)
}
}

const car = new Image();
  car.src = "images/car.png";
  car.onload = function () {
    ctx.drawImage(img,0,0,500,700)
    ctx.drawImage(car, player.x, player.y, player.w, player.h);
  };
  document.addEventListener('keydown', (e) => {
  switch(e.code) {
    case 'ArrowRight':
      if(player.x < 400) {
      player.x += 10
      ctx.clearRect(player.x-10,player.y,50,100)
      ctx.drawImage(img,0,0,500,700)
      ctx.drawImage(car,player.x,player.y,50,100)
      }
      break;
    case 'ArrowLeft':
      if(player.x > 50) {
      player.x -= 10
      ctx.clearRect(player.x+10,player.y,50,100)
      ctx.drawImage(img,0,0,500,700)
      ctx.drawImage(car,player.x,player.y,50,100)
      }
      break
  }
  })
  let frames = 0
  let obstacleArray = []
  function score(){
    const points = Math.floor(frames/5)
    ctx.font; '18px serif'
    ctx.fillStyle = 'white'
    ctx.fillText(`Score: ${points}`, 100,50)
}
  setInterval(() => {
    frames++
    if(frames % 250 === 0) {
      obstacleArray.push(new Obstacle(0,0))
    }
    for(let i=0; i < obstacleArray.length; i++) {
      obstacleArray[i].updatePosition()
    }
    ctx.clearRect(0,0,canvas.width,canvas.height)
    ctx.drawImage(img,0,0,500,700)
    ctx.drawImage(car, player.x, player.y, player.w, player.h);
    for(let i=0; i < obstacleArray.length; i++) {
        obstacleArray[i].draw()
    }
    score()
    checkGameOver()
  }, 15)
  }

}
