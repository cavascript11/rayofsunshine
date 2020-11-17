//start transition from frontpage to brightnesspage:
function brightness() {
  setTimeout(hej, 3000)
  setTimeout(sunshine, 1000)
  
//start clouds moviing out of screen:
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
  
//remove text and button:
  var text = document.getElementById('badtext');
  text.style.display = 'none';
  var button = document.getElementById('hitme');
  button.style.display = 'none';
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

// Falling rain simulation using 2D canvas
// - vanilla JS, no frameworks
// - framerate independent physics
// - slow-mo / fast-forward support via demo.speed
// - supports high-DPI screens
// - falling rain particles are drawn as vector lines
// - splash particles are lazily pre-rendered so gradients aren't computed each frame
// - all particles make use of object pooling to further boost performance

  
// initialize
  document.addEventListener("DOMContentLoaded", function() {
	demo.init();
	window.addEventListener('resize', demo.resize);
});

// demo namespace
var demo = {
	// CUSTOMIZABLE PROPERTIES
	// - physics speed multiplier: allows slowing down or speeding up simulation
	speed: 1,
	// - color of particles
	color: {
		r: '80',
		g: '175',
		b: '255',
		a: '0.5'
	},
	
	// END CUSTOMIZATION
	// whether demo is running
	started: false,
	// canvas and associated context references
	canvas: null,
	ctx: null,
	// viewport dimensions (DIPs)
	width: 0,
	height: 0,
	// devicePixelRatio alias (should only be used for rendering, physics shouldn't care)
	dpr: window.devicePixelRatio || 1,
	// time since last drop
	drop_time: 0,
	// ideal time between drops (changed with mouse/finger)
	drop_delay: 25,
	// wind applied to rain (changed with mouse/finger)
	wind: 4,
	// color of rain (set in init)
	rain_color: null,
	rain_color_clear: null,
	// rain particles
	rain: [],
	rain_pool: [],
	// rain droplet (splash) particles
	drops: [],
	drop_pool: []
};

// demo initialization (should only run once)
demo.init = function() {
	if (!demo.started) {
		demo.started = true;
		demo.canvas = document.getElementById('canvas');
		demo.ctx = demo.canvas.getContext('2d');
		var c = demo.color;
		demo.rain_color = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',' + c.a + ')';
		demo.rain_color_clear = 'rgba(' + c.r + ',' + c.g + ',' + c.b + ',0)';
		demo.resize();
		Ticker.addListener(demo.step);
		
		// 
		const gui = new dat.GUI();
		gui.add(demo, 'speed', 0.2, 2);
		
		// fade out instructions after a few seconds
		var instructions = document.getElementById('instructions');
		setTimeout(function() {
			instructions.style.opacity = 0;
			setTimeout(function(){
				instructions.parentNode.removeChild(instructions);
			}, 2000);
		}, 4000);
	}
}

// (re)size canvas (clears all particles)
demo.resize = function() {
	// localize common references
	var rain = demo.rain;
	var drops = demo.drops;
	// recycle particles
	for (var i = rain.length - 1; i >= 0; i--) {
			rain.pop().recycle();
	}
	for (var i = drops.length - 1; i >= 0; i--) {
			drops.pop().recycle();
	}
	// resize
	demo.width = window.innerWidth;
	demo.height = window.innerHeight;
	demo.canvas.width = demo.width * demo.dpr;
	demo.canvas.height = demo.height * demo.dpr;
}

demo.step = function(time, lag) {
	// localize common references
	var demo = window.demo;
	var speed = demo.speed;
	var width = demo.width;
	var height = demo.height;
	var wind = demo.wind;
	var rain = demo.rain;
	var rain_pool = demo.rain_pool;
	var drops = demo.drops;
	var drop_pool = demo.drop_pool;
	
	// multiplier for physics
	var multiplier = speed * lag;
	
	// spawn drops
	demo.drop_time += time * speed;
	while (demo.drop_time > demo.drop_delay) {
		demo.drop_time -= demo.drop_delay;
		var new_rain = rain_pool.pop() || new Rain();
		new_rain.init();
		var wind_expand = Math.abs(height / new_rain.speed * wind); // expand spawn width as wind increases
		var spawn_x = Math.random() * (width + wind_expand);
		if (wind > 0) spawn_x -= wind_expand;
		new_rain.x = spawn_x;
		rain.push(new_rain);
	}
	
	// rain physics
	for (var i = rain.length - 1; i >= 0; i--) {
		var r = rain[i];
		r.y += r.speed * r.z * multiplier;
		r.x += r.z * wind * multiplier;
		// remove rain when out of view
		if (r.y > height) {
			// if rain reached bottom of view, show a splash
			r.splash();
		}
		// recycle rain
		if (r.y > height + Rain.height * r.z || (wind < 0 && r.x < wind) || (wind > 0 && r.x > width + wind)) {
			r.recycle();
			rain.splice(i, 1);
		}
	}
	
	// splash drop physics
	var drop_max_speed = Drop.max_speed;
	for (var i = drops.length - 1; i >= 0; i--) {
		var d = drops[i];
		d.x += d.speed_x * multiplier;
		d.y += d.speed_y * multiplier;
		// apply gravity - magic number 0.3 represents a faked gravity constant
		d.speed_y += 0.3 * multiplier;
		// apply wind (but scale back the force)
		d.speed_x += wind / 25 * multiplier;
		if (d.speed_x < -drop_max_speed) {
			d.speed_x = -drop_max_speed;
		}else if (d.speed_x > drop_max_speed) {
			d.speed_x = drop_max_speed;
		}
		// recycle
		if (d.y > height + d.radius) {
			d.recycle();
			drops.splice(i, 1);
		}
	}
	
	demo.draw();
}

demo.draw = function() {
	// localize common references
	var demo = window.demo;
	var width = demo.width;
	var height = demo.height;
	var dpr = demo.dpr;
	var rain = demo.rain;
	var drops = demo.drops;
	var ctx = demo.ctx;
	
	// start fresh
	ctx.clearRect(0, 0, width*dpr, height*dpr);
	
	// draw rain (trace all paths first, then stroke once)
	ctx.beginPath();
	var rain_height = Rain.height * dpr;
	for (var i = rain.length - 1; i >= 0; i--) {
		var r = rain[i];
		var real_x = r.x * dpr;
		var real_y = r.y * dpr;
		ctx.moveTo(real_x, real_y);
		// magic number 1.5 compensates for lack of trig in drawing angled rain
		ctx.lineTo(real_x - demo.wind * r.z * dpr * 1.5, real_y - rain_height * r.z);
	}
	ctx.lineWidth = Rain.width * dpr;
	ctx.strokeStyle = demo.rain_color;
	ctx.stroke();
	
	// draw splash drops (just copy pre-rendered canvas)
	for (var i = drops.length - 1; i >= 0; i--) {
		var d = drops[i];
		var real_x = d.x * dpr - d.radius;
		var real_y = d.y * dpr - d.radius;
		ctx.drawImage(d.canvas, real_x, real_y);
	}
}


// Rain definition
function Rain() {
	this.x = 0;
	this.y = 0;
	this.z = 0;
	this.speed = 25;
	this.splashed = false;
}
Rain.width = 2;
Rain.height = 40;
Rain.prototype.init = function() {
	this.y = Math.random() * -100;
	this.z = Math.random() * 0.5 + 0.5;
	this.splashed = false;
}
Rain.prototype.recycle = function() {
	demo.rain_pool.push(this);
}
// recycle rain particle and create a burst of droplets
Rain.prototype.splash = function() {
	if (!this.splashed) {
		this.splashed = true;
		var drops = demo.drops;
		var drop_pool = demo.drop_pool;

		for (var i=0; i<16; i++) {
			var drop = drop_pool.pop() || new Drop();
			drops.push(drop);
			drop.init(this.x);
		}
	}
}


// Droplet definition
function Drop() {
	this.x = 0;
	this.y = 0;
	this.radius = Math.round(Math.random() * 2 + 1) * demo.dpr;
	this.speed_x = 0;
	this.speed_y = 0;
	this.canvas = document.createElement('canvas');
	this.ctx = this.canvas.getContext('2d');
	
	// render once and cache
	var diameter = this.radius * 2;
	this.canvas.width = diameter;
	this.canvas.height = diameter;

	var grd = this.ctx.createRadialGradient(this.radius, this.radius , 1, this.radius, this.radius, this.radius);
	grd.addColorStop(0, demo.rain_color);
	grd.addColorStop(1, demo.rain_color_clear);
	this.ctx.fillStyle = grd;
	this.ctx.fillRect(0, 0, diameter, diameter);
}

Drop.max_speed = 5;

Drop.prototype.init = function(x) {
	this.x = x;
	this.y = demo.height;
	var angle = Math.random() * Math.PI - (Math.PI * 0.5);
	var speed = Math.random() * Drop.max_speed;
	this.speed_x = Math.sin(angle) * speed;
	this.speed_y = -Math.cos(angle) * speed;
}
Drop.prototype.recycle = function() {
	demo.drop_pool.push(this);
}




// handle interaction
demo.mouseHandler = function(evt) {
	demo.updateCursor(evt.clientX, evt.clientY);
}
demo.touchHandler = function(evt) {
	evt.preventDefault();
	var touch = evt.touches[0];
	demo.updateCursor(touch.clientX, touch.clientY);
}
demo.updateCursor = function(x, y) {
	x /= demo.width;
	y /= demo.height;
	var y_inverse = (1 - y);
	
	demo.drop_delay = y_inverse*y_inverse*y_inverse * 100 + 2;
	demo.wind = (x - 0.5) * 50;
}

document.addEventListener('mousemove', demo.mouseHandler);
document.addEventListener('touchstart', demo.touchHandler);
document.addEventListener('touchmove', demo.touchHandler);



// Frame ticker helper module
var Ticker = (function(){
	var PUBLIC_API = {};

	// public
	// will call function reference repeatedly once registered, passing elapsed time and a lag multiplier as parameters
	PUBLIC_API.addListener = function addListener(fn) {
		if (typeof fn !== 'function') throw('Ticker.addListener() requires a function reference passed in.');

		listeners.push(fn);

		// start frame-loop lazily
		if (!started) {
			started = true;
			queueFrame();
		}
	};

	// private
	var started = false;
	var last_timestamp = 0;
	var listeners = [];
	// queue up a new frame (calls frameHandler)
	function queueFrame() {
		if (window.requestAnimationFrame) {
			requestAnimationFrame(frameHandler);
		} else {
			webkitRequestAnimationFrame(frameHandler);
		}
	}
	function frameHandler(timestamp) {
		var frame_time = timestamp - last_timestamp;
		last_timestamp = timestamp;
		// make sure negative time isn't reported (first frame can be whacky)
		if (frame_time < 0) {
			frame_time = 17;
		}
		// - cap minimum framerate to 15fps[~68ms] (assuming 60fps[~17ms] as 'normal')
		else if (frame_time > 68) {
			frame_time = 68;
		}

		// fire custom listeners
		for (var i = 0, len = listeners.length; i < len; i++) {
			listeners[i].call(window, frame_time, frame_time / 16.67);
		}
		
		// always queue another frame
		queueFrame();
	}

	return PUBLIC_API;
}());

  
