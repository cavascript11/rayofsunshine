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


  
