let isIntro = true;
var time = 0;
var test = "test"


function timer(){
  time = millis()
  time = Math.floor(time/1000)
  return(time)
}



function drawIntSlide1(){
  //Macarthur scene
  angleMode(DEGREES)
  
  fill(80)
  strokeWeight(0)
  rect(100,0,120,230)
  fill(100)
  rect(220,0,280,230)
  fill(120)
  rect(340,0,160,230)
  
  //Window
  fill(170)
  rect(120,50,100,180)
  fill(100,90)
  for(let i = 0; i<5; i ++)
    rect(120 + 20 * i,50,10,180)
  fill(15)
  //Curtain
  arc(140, 70, 70, 90,110,290)
  arc(200,70,70,90,250,430)
  arc(167,40,120,50,180,0)
  
  //Pillars
  fill(50)
  rect(100,0,20,230)
  fill(60)
  rect(220,0,20,230)
  fill(70)
  rect(340,0,20,230)
  fill(85)
  rect(480,0,20,230)
  
  //Floor
  fill(95)
  rect(100,230,260,140)
  fill(49)
  rect(100,280,260,30)
  fill(38)
  rect(360,230,140,50)
  fill(68)
  rect(360,280,140,90)
  fill(150)
  rect(100,370,400,40)
  
  //Table
  fill(190)
  rect(150,280,10,20)
  rect(250,280,10,20)
  fill(200)
  rect(100,250,260,30)
  fill(25)
  rect(100,245,260,5)
  fill(180)
  rect(100,225,260,20)
  
  
  //Macarthur
  //Legs
  fill(35)
  rect(200,370,15,10)
  rect(240,375,15,10)
  fill(70)
  rect(200,380,15,5)
  rect(240,385,15,5)
  fill(230)
  rect(197,270,20,100)
  rect(197,370,5)
  rect(212,370,5)
  
}


function keyPressed(){
  if(key === "s"){
    isIntro = false;
  }
}

function intro(){
  timer()
  background(25,105,100)
  fill(0)
  textSize(30)
  text(test,150,450,400)
  if(time < 1500){
    drawIntSlide1(); 
    test = "In 1945 the deadliest war known to man came to a close."
  }
}


