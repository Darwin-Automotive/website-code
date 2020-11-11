import React from 'react'
import './landing_page.css';


let particles = [];
let frequency = 20
// Popolate particles
setInterval(
  function () {
    popolate()
  }.bind(this),
  frequency
)
let c1 = createCanvas({
  width: window.innerWidth,
  height: window.innerHeight
})
let c2 = createCanvas({
  width: window.innerWidth,
  height: window.innerHeight
})
let c3 = createCanvas({
  width: window.innerWidth,
  height: window.innerHeight
})


let tela = c1.canvas;
let canvas = c1.context;

document.body.append(c3.canvas)
writeText(c2.canvas, c2.context, "MARK IV")




class Particle extends React.Component {

  constructor(canvas) {
    super();
    // this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.state = {
      w: window.innerWidth,
      h: window.innerHeight,
    }
    this.canvas = canvas;
    this.random = Math.random();
    this.s = (3 + Math.random());
    this.color = (0.5 + Math.random() * 20) > 5 ? "#FF5E4C" : "#ED413C"; //this.randomColor()
    this.x = window.innerWidth;
    this.y = window.innerHeight;
    this.a = 0;
    this.radius = 0.5 + Math.random() * 20;
  }

  // componentDidMount() {
  //   this.updateWindowDimensions();
  //   window.addEventListener('resize', this.updateWindowDimensions);
  // }
  // componentWillUnmount() {
  //   window.addEventListener('resize', this.updateWindowDimensions);
  // }
  // updateWindowDimensions() {
  //   this.setState({
  //     w: window.innerWidth,
  //     h: window.innerHeight
  //   });
  // }


  render() {
    return () => {
      this.canvas.beginPath();
      this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
      this.canvas.fillStyle = this.color;
      this.canvas.fill();
      this.canvas.closePath();
    }
  }
  move() {
    //this.swapColor()
    this.x += Math.cos(this.a) * this.s;
    this.y += Math.sin(this.a) * this.s;
    this.a += Math.random() * 0.8 - 0.4;
    // window.console.log("Move function");
    if (this.x < 0 || this.x > this.w - this.radius) {
      return false
    }

    if (this.y < 0 || this.y > this.h - this.radius) {
      return false
    }
    this.render()
    return true
  }
}

function createCanvas(properties) {
  let canvas = document.createElement('canvas');
  canvas.className = "canvasStyle";
  canvas.width = properties.width;
  canvas.height = properties.height;
  let context = canvas.getContext('2d');
  return {
    canvas: canvas,
    context: context
  }
}


function writeText(canvas, context, text) {
  let size = 18
  context.font = size + "vw Montserrat";
  context.fillStyle = "#111111";
  context.textAlign = "center";
  context.fillText(text, canvas.width / 2, canvas.height / 2);
}

function maskCanvas() {
  // window.console.log("Maskcanvas function");
  c3.context.drawImage(c2.canvas, 0, 0, c2.canvas.width, c2.canvas.height);
  c3.context.globalCompositeOperation = 'source-atop';
  c3.context.drawImage(c1.canvas, 0, 0);
  blur(c1.context, c1.canvas, 2)
}

function blur(ctx, canvas, amt) {
  // window.console.log("Blur function");
  ctx.filter = `blur(${amt}px)`
  ctx.drawImage(canvas, 0, 0)
  ctx.filter = 'none'
}


/*
 * Function to clear layer canvas
 * @num:number number of particles
 */
function popolate() {
  // window.console.log("Popolate function");
  particles.push(
    new Particle(canvas, {
      x: ((window.innerWidth) / 2),
      y: ((window.innerHeight) / 2)
    })
  )
  return particles.length
}

function clear() {
  // window.console.log("Clear function");
  canvas.globalAlpha = 0.03;
  canvas.fillStyle = '#111111';
  canvas.fillRect(0, 0, tela.width, tela.height);
  canvas.globalAlpha = 1;
}

function update() {
  clear();
  // window.console.log("Update function");
  particles = particles.filter(function (p) {
    return p.move()
  });
  maskCanvas();
  requestAnimationFrame(update.bind(this));
}

update()



export default Particle