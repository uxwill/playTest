var rainMan;

var rainDrop;

var input, button, greeting;

var weathID;

var raining = false;


function preload() {


}


function setup() {

frameRate(10);



  createCanvas(800,400);
  // createSprite(400, 200, 50, 50);
  rainMan = createSprite(400,380);
  rainMan.addAnimation("normal", "assets/rainMan/RainMan_0008_Frame-1.png","assets/rainMan/RainMan_0001_Frame-8.png");
  // rainMan.frameDelay = 5;

  input = createInput();
  input.position(20, 65);

  button = createButton('submit');
  button.position(150, 65);
  button.mousePressed(greet);

  greeting = createElement('h2', 'what is your name?');
  greeting.position(20, 5);

  textAlign(CENTER)
  textSize(50);

  
}

function draw(u) {
background(255,255,255);  





if (raining == true){

raiNing();

// rainMan.overlap(rainDrops, splash);

}


// test1();
 
//  greet(); 

// var weathID = gotWeather.weatherID;

// console.log(weathID);

// if (weatherID == 800){
//   rainDrops();
// }
}


function greet() {
  var name = input.value();
  greeting.html('CITY: '+name);
  input.value('');

  var jsonFirst = "http://api.openweathermap.org/data/2.5/weather?q=";
  var jsonSecond = "&units=metric"
  var url = jsonFirst.concat(name, jsonSecond);

  loadJSON(url, gotWeather);

  // console.log(url);
  
      }


function gotWeather(weather){ 
  var weather =  weather.weather; for(var i = 0; i < weather.length; i++){ 
  var weatherID = weather[i].id; // The actual weather ID var
      weatherDescription = weather[i].description; // Description
      console.log(weatherID); console.log(weatherDescription); 
    if (weatherID == 800){raining =true};
       
     }
draw(weatherID);
      }

function raiNing(){

  rainDrops = new Group();

  for(var i=0; i<1; i++)
  {
   var rainDrop = createSprite(random(0,width),200,4,4);
    rainDrop.addAnimation("normal", "assets/rain/rain_0000_Frame1.png","assets/rain/rain_0001_Frame2.png");
    rainDrop.velocity.y = 5;
    rainDrops.add(rainDrop);

  }
  rainMan.position.x = mouseX;
  
  // rainMan.collide(rainDrops);

  drawSprites();



}




function splash(rainDrops, splashed){

splashed.remove();

}

















