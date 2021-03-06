function stoprain() {
  var canvas = document.getElementById('canvas');
  canvas.style.display = 'none';
}

//start transition from frontpage to brightnesspage:
function brightness() {
  setTimeout(hej, 3000);
  setTimeout(sunshine, 1000);
  stoprain();
  
//start clouds moviing out of screen:
 //remove text and button:
  var text = document.getElementById('badtext');
  text.style.display = 'none';
  var button = document.getElementById('hitme');
  button.style.display = 'none';
  
  var cloud1 = document.getElementById('uppeh');
  cloud1.className = "cloud1trans";  
  var cloud2 = document.getElementById('uppev');
  cloud2.className = "cloud2trans";  
  var cloud3 = document.getElementById('nereh');
  cloud3.className = "cloud3trans";  
  var cloud4 = document.getElementById('nerev');
  cloud4.className = "cloud4trans";  
  var darkcloud = document.getElementById('darkcloud');
  darkcloud.className = "darkcloudtrans";
  
//start background fading in:  
  var background = document.getElementById('backgroundtrans');
  background.className = "backgroundtrans";  
}

//move in clouds:
function sunshine(){
  var cloud5 = document.getElementById('cloud5');
  cloud5.className = "cloud5trans";  
  
  var cloud6 = document.getElementById('cloud6');
  cloud6.className = "cloud6trans";  
  
  //display sunrays:
  var sunray = document.getElementById("sunrays")
  sunray.style.display = 'block'

}

//change from frontpage to brightness page
function hej(){
  setTimeout(balloon, 25000);
  
  //remove transition clouds
  var cloud5 = document.getElementById('cloud5');
  cloud5.className = "cloud5";  
  var cloud6 = document.getElementById('cloud6');
  cloud6.className = "cloud6";  
  
  // get the frontpage div
  var content = document.getElementById('frontPage');
  // hide content of frontpage
  content.style.display = 'none';
  
  //remove faded background:
  var background = document.getElementById('backgroundtrans');
  background.className = "transparent";  
  
  //get body
  var body = document.getElementById('body');
  // change class of body (to change background)
  body.className = "brightness";
  
  // get the brightness.html div
  var content = document.getElementById('brightnesstext');
  // show content
  content.style.display = 'block';
  
  //generate random text
  gentext();
  
  //display loggo:
  var logga = document.getElementById("menylinks")
  logga.style.display = 'block'

}

//change content from text to pics
function changetopics() {
//get the brightnesstext div and the brighnesspics div
  var text = document.getElementById('generatetext');
  var pics = document.getElementById('generatepics');  
//hide brightquotes and show brighntesspics instead         
  text.style.display = 'none';
  pics.style.display = 'block';  
//generate a random pic
  genpic();
  }

//change content from pics to text
function changetotext() {
  //get the brightnesstext div and the brighnesspics div
  var text = document.getElementById('generatetext');
  var pics = document.getElementById('generatepics');  
 //hide text and show pics instead      
  text.style.display = 'block';
  pics.style.display = 'none';  
//generate a random pic
  gentext();
  }

function balloon() {
  var balloon = document.getElementById('balloon');
  balloon.className = 'balloon';
}

function hiddenanimation() {
  var loop = document.getElementById('loop');
  loop.className = 'loop';
}

function rainbow() {
  var rainbow = document.getElementById('rainbow');  
  rainbow.className = 'rainbow';
}

function gentext() {
  var word = [
    "Expose yourself to strong, pleasant sensations, like a pleasing smell or a favorite blanket",

    "Try your best to identify what has made you feel this way, and ponder what actions you might be able to take from there",

    "Take deep, calm breaths",

    "Wiggle around. Stretch. Dance like nobody is watching! Be silly and active for a few minutes",

    "Treat yourself: have that second piece of chocolate or cook your favorite meal",

    "Take a baby step towards one of your goals, it is still progress",

    "Get som fresh air, a walk is the perfect thing to clear your head of negative thoughts!",

    "Tell someone you trust how you are feeling. Sometimes all you need is a soundingboard for venting",

    "Don't be to serious, let your inner child out to play",

    "Give yourself a compliment! Self love and appreciation is key",

    "Listen to music: whatever it is that you need right now, something to scream, cry , or relax to",

    "Take a moment to focus on 3 things in your life that you are thankful for",

    "Write down what you are feeling, it helps to contextualise and decipher your emotions",

    "Take a mindful walk, either inside or outside. Pay close attention to your body and your surroundings",
    
    "Indulge your mind with some escapism: read your favorite book, pick up a paint brush or an instrument. Lose yourself in your imagination",
    
    "Take 2 minutes to reflect on what you have achieved and be proud over how far you've come",
    
    "Be mindful of your surroundings. If your space is dirty and a mess, you might be internalising stress factors",
    
    "Sign off. As typical as it might sound, sometimes the answer is to simply take a break from social media and screens",
    
    "Attempt some mindfullness. Meditating is believed to eleviatet feelings of depression and axiety and is linked to hightened emotional control and awareness",
    
    "If you are in the need for some catharsis, don't be afraid to have a good long cry or submerge yourself in sad ballads or movies",
    
    "Are you holding back your feelings and internalising issues you have with others? Be direct and face these problems instead of letting them fester inside of you",
    
    "Excercise is the perfect stress reliver, as well as reducing anxiety and depression whilst releasing a bunch of endorphins to make you feel better",
    
    
  ];

  var para = document.querySelector("p");
  para.innerHTML = word[Math.floor(Math.random() * word.length)];
}

function genpic() {
    var image = [
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fpuppers.webp?v=1605007213203",
    
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fpuppy.gif?v=1605005575217",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fbigpuppers.webp?v=1605005568836",
    
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fturtles.webp?v=1605007194385",
    
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fsleeptime.webp?v=1605007278274",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fruun.webp?v=1605007284155",
        
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fbathtime.webp?v=1605007291448",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fbutt.webp?v=1605007728861",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Ffriends.webp?v=1605007732709",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fducky.webp?v=1605007733220",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgoodboi.webp?v=1605007736742",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Ftrash.gif?v=1605007753231",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fsmartcat.webp?v=1605007766943",
    
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fcatndog.webp?v=1605022454356",
    
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fsmiles.webp?v=1605022456957",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif3.gif?v=1605534265955",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif2.gif?v=1605534289909",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif1.gif?v=1605534294243",   
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif10.gif?v=1605536044318",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif7.gif?v=1605536040345",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif8.gif?v=1605536042147",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif6.gif?v=1605536046648",
      
      "https://cdn.glitch.com/e127c081-9d74-4b61-80e7-386a426b145a%2Fgif9.gif?v=1605536050751",
];
  var img = document.querySelector("#image");
  img.src = image[Math.floor(Math.random()*image.length)];
}

function makeitrain() {
  
const canvas = document.getElementById("canvas");
const context = canvas.getContext('2d');
const canvasHeight = canvas.height;
const canvasWidth = canvas.width;

const clearCanvas = function(x, y, height, width) {
  rectX = x || 0;
  rectY = y || 0;
  rectHeight = height || canvasHeight;
  rectWidth = width || canvasWidth;
  context.clearRect(rectX, rectY, rectWidth, rectHeight);
  context.beginPath();
}

const circle = function(x, y, radius, filled) {
  const offset = radius / 2;
  x = x - offset;
  y = y - offset;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  if (filled) {
    context.stroke();
  }
  context.strokeStyle = '#fff';
  context.closePath();
}

const createVector = function(x, y) { return { x, y } }

const vectorAddition = function(vectorA, vectorB) {
  if (typeof vectorB === 'number') {
    return { x: vectorA.x + vectorB, y: vectorA.y + vectorB };
  }
  return { x: vectorA.x + vectorB.x, y: vectorA.y + vectorB.y };
}

const vectorSubtraction = function(vectorA, vectorB) {
  if (typeof vectorB === 'number') {
    return { x: vectorA.x - vectorB, y: vectorA.y - vectorB };
  }
  return { x: vectorA.x - vectorB.x, y: vectorA.y - vectorB.y };
}

const vectorMultiplication = function(vectorA, vectorB) {
  if (typeof vectorB === 'number') {
    return { x: vectorA.x * vectorB, y: vectorA.y * vectorB };
  }
  return { x: vectorA.x * vectorB.x, y: vectorA.y * vectorB.y };
}

const vectorDivision = function(vectorA, vectorB) {
  if (typeof vectorB === 'number') {
    return { x: vectorA.x / vectorB, y: vectorA.y / vectorB };
  }
  return { x: vectorA.x / vectorB.x, y: vectorA.y / vectorB.y };
}

const getRandomFloat = function(min, max) {
  const random = Math.random() * (max - min + 1) + min;
  return random;
}

const getRandomInteger = function(min, max) {
  return Math.floor(getRandomFloat(min, max)); 
}

const checkRaindropCollision = function(location, radius) {
  let rain = { collided: false, location: null }
  if ((location.y - canvasHeight) >= radius) {
    rain.collided = true;
    rain.location = createVector(getRandomInteger(radius, canvasWidth-radius), radius - 10)
  } else if ((location.x + radius) <= 0) {
    rain.collided = true;
    rain.location = createVector(canvasWidth - radius, location.y)
  } else if ((location.x + radius) >= canvasWidth) {
    rain.collided = true;
    rain.location = createVector(radius, location.y)
  } else {
    rain.collided = false;
    rain.location = null; 
  }
  return rain;
}

const raintype = {
  drizzle: { count: 30, speed: 0.27 },
  light: { count: 100, speed: 0.3 },
  medium: { count: 250, speed: 0.4 },
  downpour: { count: 500, speed: 0.5 },
  afteshower: { count: 3, speed: 0.4 }
}

var environment = {
  wind: createVector(-0.05, 0),
  raintype: raintype.medium,
}

class RainParticle {
  constructor(x, accX, accY){
    this.damping = 0.025;
    this.location = createVector(x, canvasHeight); 
    this.radius = 0.4;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(accX, -(accY * this.damping));
    this.mass = 1;
  }

  draw(particles, index) {
    const { x, y } = this.location;
    if (this.acceleration.y >= 0.3) {
      delete particles[index];
      return particles.splice(index, 1)
    }
    return circle(x, y, this.radius, true);
  }

  splash() {
    this.velocity = vectorAddition(this.velocity, this.acceleration);
    this.location = vectorAddition(this.location, this.velocity);
    this.acceleration = vectorAddition(this.acceleration, { x: 0, y: 0.12 });
  }
}

class Raindrop {
  constructor(x, y, radius, accY){
    this.location = createVector(x, y); 
    this.radius = radius;
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, accY);
    this.mass = 1;

    this.wind = environment.wind;
    this.acceleration = vectorAddition(this.acceleration, this.wind);
  }

  draw() {
    const { x, y } = this.location;
    return circle(x, y, this.radius, true);
  }

  fall() { 
    if (this.velocity.y <= (environment.raintype.speed * 50)) {
      this.velocity = vectorAddition(this.velocity, this.acceleration);
    }
    this.location = vectorAddition(this.location, this.velocity);
  }

  relive(raindrop) {
    const { location } = raindrop;
    this.location = createVector(location.x, location.y); 
    this.velocity = createVector(0, 0);
  }
}

const particleX = [-0.12, 0.06, 0, 0.06, 0.12];
const getParticleX = function() {
  const index = Math.floor(Math.random() * particleX.length);
  return particleX[index];
}

// init all objects here
let raindrop = [];
let particles = [];
const raindropCount = environment.raintype.count;

for (let i = 0 ; i < raindropCount ; i++) {
  let x = getRandomInteger(2, canvasWidth - 2);
  let y = getRandomInteger(-2000 , 0);
  // let accY = getRandomFloat(1, 5) * 0.05;
  let accY = environment.raintype.speed;
  raindrop[i] = new Raindrop(x, y, 1.3, accY);
}

// initiate all draw functions here
const setup = function() {
  for (let i = 0 ; i < raindropCount ; i++) {
    raindrop[i].draw();
  }
}

// continuous animation loop
const animate = function() {
  clearCanvas(); // don't remove this

  for (let i = 0 ; i < raindropCount ; i++) {
    let { location, radius, velocity } = raindrop[i];
    let rain = checkRaindropCollision(location, radius);
    if (rain.collided) {
      let particle1 = new RainParticle(location.x, getParticleX(), velocity.y);
      particles.push(particle1);
      let particle4 = new RainParticle(location.x, getParticleX(), velocity.y);
      particles.push(particle4);

      raindrop[i].relive(rain);
    }
    raindrop[i].fall();
    raindrop[i].draw();
  }

  for (let i = 0; i < particles.length; i ++) {
    particles[i].splash();
    particles[i].draw(particles, i);
  }
  requestAnimationFrame(animate);
}

// animation initiate
setup();
requestAnimationFrame(animate);
  }


