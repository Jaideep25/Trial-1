var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["3d56b671-5d8d-4ff4-9165-fb244bdd64a5","b5a29e8e-b9cf-49bf-a120-9796352ba325","df7a83e0-10d7-4e9a-b655-1a54a0fd8099","58251e9c-426c-4afd-b044-dae8604a2306","1a8cd275-7548-46a5-b083-ab3e98763b2e","502070b8-4d54-42d4-8b7b-a6bcb23c5cd5","f418e37c-cc30-4013-a08d-9f22351e277a"],"propsByKey":{"3d56b671-5d8d-4ff4-9165-fb244bdd64a5":{"name":"diamond","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":".OTOcWXyclu3V8ATterVYi8qUTAkCPiu","loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/3d56b671-5d8d-4ff4-9165-fb244bdd64a5.png"},"b5a29e8e-b9cf-49bf-a120-9796352ba325":{"name":"DIAMOND2","sourceUrl":null,"frameSize":{"x":34,"y":64},"frameCount":1,"looping":true,"frameDelay":12,"version":"JXUo8Lcp23uadEb5Bsv2_fPK6o6kjTUH","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":64},"rootRelativePath":"assets/b5a29e8e-b9cf-49bf-a120-9796352ba325.png"},"df7a83e0-10d7-4e9a-b655-1a54a0fd8099":{"name":"stage_1","sourceUrl":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/02KUBIfIfBxcZGm.gQtNKXi98Lr3fv8s/category_backgrounds/stage.png"},"58251e9c-426c-4afd-b044-dae8604a2306":{"name":"coin_gold_1","sourceUrl":null,"frameSize":{"x":61,"y":61},"frameCount":1,"looping":true,"frameDelay":12,"version":"_8h7vh93tH.nP3D_2OLxdKTMhSZ6ULsT","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":61,"y":61},"rootRelativePath":"assets/58251e9c-426c-4afd-b044-dae8604a2306.png"},"1a8cd275-7548-46a5-b083-ab3e98763b2e":{"name":"ee0139273e55e274bb86498b7836a350-1.png_1","sourceUrl":null,"frameSize":{"x":256,"y":256},"frameCount":11,"looping":true,"frameDelay":12,"version":"TueHrVTLDr0mTgRG7SwUQ3W5CtF28siO","loadedFromSource":true,"saved":true,"sourceSize":{"x":768,"y":1024},"rootRelativePath":"assets/1a8cd275-7548-46a5-b083-ab3e98763b2e.png"},"502070b8-4d54-42d4-8b7b-a6bcb23c5cd5":{"name":"pieceBlack_single05_1","sourceUrl":null,"frameSize":{"x":64,"y":64},"frameCount":3,"looping":true,"frameDelay":12,"version":"7MsNBS8YORFBQPie7OYOHEuEOeiMI6vP","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/502070b8-4d54-42d4-8b7b-a6bcb23c5cd5.png"},"f418e37c-cc30-4013-a08d-9f22351e277a":{"name":"pieceYellow_border05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/711S1L_DyfHE9DeUZ90010hsvjwxtiZF/category_gameplay/pieceYellow_border05.png","frameSize":{"x":64,"y":64},"frameCount":1,"looping":true,"frameDelay":2,"version":"711S1L_DyfHE9DeUZ90010hsvjwxtiZF","categories":["gameplay"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":64,"y":64},"rootRelativePath":"assets/api/v1/animation-library/gamelab/711S1L_DyfHE9DeUZ90010hsvjwxtiZF/category_gameplay/pieceYellow_border05.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


playSound("assets/category_music/crackle_loss_1.mp3", true);
var sprite = createSprite(-380, 200, 10, 90);
sprite.scale = 0.9;
var jarvis = createSprite(-560, 380);
jarvis.setAnimation("pieceBlack_single05_1");
var coin = createSprite(1090, 150);
coin.setAnimation("coin_gold_1");
coin.scale = 0.6;
var coin2 = createSprite(1000, 200);
coin2.setAnimation("coin_gold_1");
coin2.scale = 0.6;
var coin3 = createSprite(1080, 285);
coin3.setAnimation("coin_gold_1");
coin3.scale = 0.6;
var W1=createSprite(62.5,37.5,25,75);
var W2=createSprite(75,112.5,150,25);
var W3=createSprite(162.5,37.5,25,75);
W3.shapeColor='red';
W3.velocityY=4;

var W4=createSprite(150,187.5,100,75);
var W5=createSprite(62.5,237.5,125,25);
W5.shapeColor='red';
W5.velocityX=2;
var W6=createSprite(112.5,300,25,100);
var W7=createSprite(75,387.5,150,25);
var W8=createSprite(200,337.5,100,175);
var W9=createSprite(237.5,212.5,25,87.5);
var W10=createSprite(225,62.5,50,175);
// var W11=createSprite(350,25,25,50);
// W11.velocityX=4;
// W11.shapeColor="yellow";
var W12=createSprite(325,112.5,50,125);
var W13=createSprite(300,200,100,50);
var W14=createSprite(362.5,237.5,75,25);
W14.shapeColor='red';
W14.velocityX=4;
var W15=createSprite(362.5,300,175,75);
var W16=createSprite(290,375,15,25);
W16.shapeColor='red';
W16.velocityY=2;
var obstacle17=createSprite(109,60,50,80);
// obstacle17.shapeColor="blue";

// var obstacle18=createSprite(275,120,30,60);
// obstacle18.shapeColor="pink";
// obstacle18.velocityY=1.5;
var obstacle19=createSprite(14,310,15,72);
// obstacle19.shapeColor="purple";
var obstacle20=createSprite(85,310,15,72);
// obstacle20.shapeColor="white";
var obstacle22=createSprite(375,164,20,122);
// obstacle22.shapeColor="green";
var obstacle23=createSprite(48,310,30,50);
obstacle23.shapeColor="red";
var obstacle24=createSprite(330,360,15,20);
obstacle24.shapeColor="red";
obstacle24.velocityY=0.5;
var obstacle25=createSprite(55,363,55,20);
// obstacle25.shapeColor="orange";
obstacle25.velocityX=1.2;
// var W17=createSprite(20,20,10,10);
// var W18=createSprite(20,20,10,10);
// var W19=createSprite(20,20,10,10);
var TROPHY= createSprite(375,375,50,50);
TROPHY.shapeColor='yellow';

var BCK = createSprite(600, 200);
BCK.setAnimation("stage_1");
var LAS1 = createSprite(700,300, 200, 5);
LAS1.shapeColor="RED";
LAS1.velocityY = -1.6;
var LAS2 = createSprite(500,100, 200, 5);
LAS2.shapeColor="RED";
LAS2.velocityY = 1.6;
var LAS3 = createSprite(520,100,5, 200);
LAS3.shapeColor="RED";
LAS3.velocityX=1.6;
var LAS4 = createSprite(650,300,5, 200);
LAS4.shapeColor="RED";
LAS4.velocityX=-2;
var WALL = createSprite(480,80,40, 20);
var WALL2 = createSprite(440,340,20, 40);
var DIAMOND2 = createSprite(randomNumber(700, 780), randomNumber(300, 380));

var DIAMOND3 = createSprite(randomNumber(420,500), randomNumber(20, 60));

var DIAMOND1 = createSprite(randomNumber(700, 780), randomNumber(20, 100));

var DIAMOND4 = createSprite(randomNumber(600,620), randomNumber(50,200));

DIAMOND1.setAnimation("diamond");
DIAMOND1.scale = 0.8;
DIAMOND2.setAnimation("diamond");
DIAMOND2.scale = 0.8;
DIAMOND3.setAnimation("diamond");
DIAMOND3.scale = 0.8;
DIAMOND4.setAnimation("diamond");
DIAMOND4.scale = 0.8;
///lvl3
var s=createSprite(1000,25,50,10);
s.shapeColor='red';
s.velocityX=13;
var s1=createSprite(990,50,10,50);
s1.shapeColor='red';
s1.velocityY=-13;
// var s2=createSprite(1000,75,50,10);
// s2.shapeColor='yellow';
// s2.velocityX=-10;
var s3=createSprite(1010,50,10,50);
s3.shapeColor='red';
s3.velocityY=13;
var s4=createSprite(1100,125,50,10);
s4.shapeColor='red';
s4.velocityX=13;
var s5=createSprite(1090,150,10,50);
s5.shapeColor='red';
s5.velocityY=-13;
var s6=createSprite(1100,175,50,10);
s6.shapeColor='red';
s6.velocityX=-13;
var s7=createSprite(1110,150,10,50);
s7.shapeColor='red';
s7.velocityY=13;
var s=createSprite(1200,25,50,10);
s.shapeColor='red';
s.velocityX=13;
var s1=createSprite(980,50,10,50);
s1.shapeColor='red';
s1.velocityY=-13;
var s2=createSprite(1050,75,50,10);
s2.shapeColor='red';
s2.velocityX=-13;
var s3=createSprite(1110,50,10,50);
s3.shapeColor='red';
s3.velocityY=13;
var score=0;

var topedge2=createSprite(1000,0,1200,1);
var bottomedge2=createSprite(1000,400,1200,1);
var leftedge2=createSprite(1200,200,1,1200);

// var s8=createSprite(162.5,37.5,25,75);
// s8.shapeColor='red';
// s8.velocityY=0.7;
// var s9=createSprite(162.5,37.5,25,75);
// s9.shapeColor='red';
// s9.velocityY=0.7;
// var s10=createSprite(162.5,37.5,25,75);
// s10.shapeColor='red';
// s10.velocityY=0.7;
// var s11=createSprite(162.5,37.5,25,75);
// s11.shapeColor='red';
// s11.velocityY=0.7;
// var s12=createSprite(162.5,37.5,25,75);
// s12.shapeColor='red';
// s12.velocityY=0.7;



var sofia=createSprite(-380,20,10,10);
sofia.shapeColor="yellow";
camera.on();
var topedge=createSprite(200,0,1200,1);
var leftedge=createSprite(0,200,1,1200);
var bottomedge=createSprite(200,400,1200,1);
var rightedge=createSprite(400,100,1,360);
var rightedge2=createSprite(800,200,1,400);
var playmusic=createSprite(1400,200,3,3);
sprite.setAnimation("ee0139273e55e274bb86498b7836a350-1.png_1");
playSound("assets/jav.mp3", false);
var deaths=0;
function draw() {
  background("black");
  drawSprites();
  stroke("blue");
  fill("yellow");
  textSize(20);
  text(score,850,20);
  text( deaths,sofia.x-100,350);
  text( "deaths=",sofia.x-180,350);
  if (sofia.x<0) {
    stroke("blue");
    fill("yellow");
    textSize(15);
    text("PRESS SPACE TO START",-380,390);
    text("MOVE IRON MAN AND LISTEN TO instructions  ",-580,20);
  }
  
  stroke("blue");
  fill("yellow");
  textSize(15);
  text("PRESS SPACE TO START",-380,390);  
       
  if (keyDown("LEFT_ARROW")) {
    sofia.velocityX = -3;
    sofia.velocityY = 0;
  }
  if (keyDown("UP_ARROW")) {
    sofia.velocityX = 0;
    sofia.velocityY = -3;
  }
  if (keyDown("RIGHT_ARROW")) {
    sofia.velocityX = 3;
    sofia.velocityY = 0;
  }
  if (keyDown("DOWN_ARROW")) {
    sofia.velocityX = 0;
    sofia.velocityY = 3;
  }
  if (keyWentUp("up")) {
    sofia.velocityX = 0;
    sofia.velocityY = 0;
  }
  if (keyWentUp("down")) {
     sofia.velocityX = 0;
    sofia.velocityY = 0;
  }
  if (keyWentUp("left")) {
     sofia.velocityX = 0;
    sofia.velocityY = 0;
  }
  if (keyWentUp("right")) {
     sofia.velocityX = 0;
    sofia.velocityY = 0;
  }
  camera.x=sofia.x;
  // camera.x=camera.x+2;
  //if> then initial;
  if (keyDown("space")) {
    sofia.x = 20;
    sofia.y = 20;
    jarvis.x = 1400;
    jarvis.y = 100;
    jarvis.setAnimation("pieceYellow_border05_1");
  }
 
  W3.bounceOff(W4);
  W3.bounceOff(topedge);   
  W3.bounceOff(leftedge);   
  W3.bounceOff(bottomedge);   
  
  W5.bounceOff(W9);
  W5.bounceOff(topedge);   
  W5.bounceOff(leftedge);   
  W5.bounceOff(bottomedge); 
  
  // W11.bounceOff(W10);
  // W11.bounceOff(topedge);   
  // W11.bounceOff(leftedge);   
  // W11.bounceOff(bottomedge); 
  // W11.bounceOff(rightedge);
  
  W14.bounceOff(W9);
  W14.bounceOff(topedge);   
  W14.bounceOff(rightedge);   
  W14.bounceOff(bottomedge); 
  
  W16.bounceOff(W15);
  W16.bounceOff(topedge);   
  W16.bounceOff(leftedge);   
  W16.bounceOff(bottomedge); 
  
  obstacle24.bounceOff(W15);
   obstacle24.bounceOff(topedge);   
  obstacle24.bounceOff(leftedge);   
  obstacle24.bounceOff(bottomedge); 
  
  ////////
  
    LAS1.bounceOff(topedge);
  LAS2.bounceOff(topedge);
  LAS1.bounceOff(bottomedge);
  LAS2.bounceOff(bottomedge);
  LAS3.bounceOff(rightedge);
  LAS3.bounceOff(rightedge2);
  
  LAS3.bounceOff(WALL);
   LAS2.bounceOff(WALL);
   LAS4.bounceOff(WALL);
    LAS1.bounceOff(WALL);

     WALL.bounceOff(topedge);   
   WALL.bounceOff(rightedge2);   
   WALL.bounceOff(bottomedge); 
   WALL.bounceOff(rightedge);
  sofia.displace(WALL);
  LAS3.bounceOff(WALL2);
   LAS2.bounceOff(WALL2);
   LAS4.bounceOff(WALL2);
   LAS4.bounceOff(rightedge2);
   LAS4.bounceOff(rightedge);
    LAS1.bounceOff(WALL2);

    WALL2.bounceOff(topedge);   
   WALL2.bounceOff(rightedge2);   
   WALL2.bounceOff(bottomedge); 
   WALL2.bounceOff(rightedge);
  sofia.displace(WALL2);
  // if(W11.x<3){
  //   W11.velocityX=-W11.velocityX;
  // }
  
   if(LAS2.isTouching(sofia)||LAS1.isTouching(sofia)||LAS3.isTouching(sofia)||LAS4.isTouching(sofia)){
    playSound("assets/category_explosion/vibrant_game_bass_hit_enemy_death_2.mp3", false);
    
    sofia.x=380;
    sofia.y=380;
      deaths=deaths+1;
   }
  
  if(sofia.isTouching(DIAMOND2)){

   DIAMOND2.setAnimation("DIAMOND2");
   LAS1.velocityY=LAS1.velocityY+0.15;
   LAS2.velocityY=LAS2.velocityY+0.03;
   }
   if(sofia.isTouching(DIAMOND3)){

   DIAMOND3.setAnimation("DIAMOND2");
   LAS1.velocityY=LAS1.velocityY+0.15;
   LAS2.velocityY=LAS2.velocityY+0.1;
   }
   if(sofia.isTouching(DIAMOND4)){
  
   DIAMOND4.setAnimation("DIAMOND2");
   LAS1.velocityY=LAS1.velocityY+0.3;
   LAS2.velocityY=LAS2.velocityY+0.1;
   }
  
//lvl3
   
  
s.bounceOff(topedge2);
s.bounceOff(rightedge2);
s.bounceOff(leftedge2);
s.bounceOff(bottomedge2);
s1.bounceOff(topedge2);
s1.bounceOff(rightedge2);
s1.bounceOff(leftedge2);
s1.bounceOff(bottomedge2);
s2.bounceOff(topedge2);
s2.bounceOff(rightedge2);
s2.bounceOff(leftedge2);
s2.bounceOff(bottomedge2);
s3.bounceOff(topedge2);
s3.bounceOff(rightedge2);
s3.bounceOff(leftedge2);
s3.bounceOff(bottomedge2);
s4.bounceOff(topedge2);
s4.bounceOff(rightedge2);
s4.bounceOff(leftedge2);
s4.bounceOff(bottomedge2);  
s5.bounceOff(topedge2);
s5.bounceOff(rightedge2);
s5.bounceOff(leftedge2);
s5.bounceOff(bottomedge2);
s6.bounceOff(topedge2);
s6.bounceOff(rightedge2);
s6.bounceOff(leftedge2);
s7.bounceOff(bottomedge2);
s7.bounceOff(topedge2);
s7.bounceOff(rightedge2);
s7.bounceOff(leftedge2);
s7.bounceOff(bottomedge2);
   
if (sofia.isTouching(s)||sofia.isTouching(s1)||sofia.isTouching(s2)||sofia.isTouching(s3)||sofia.isTouching(s4)||sofia.isTouching(s5)||sofia.isTouching(s6)||sofia.isTouching(s7)) {
    playSound("assets/category_explosion/8bit_explosion.mp3", false);
    sofia.x=820;
    sofia.y=20;
    score=0;
    coin.x=1090;
    coin.y=150;
    coin2.x=1000;
    coin2.y=200;
    coin3.x=1080;
    coin3.y=285;
    deaths=deaths+1;
  } 
  
  
  
///////////
  sofia.bounceOff(W1);     
  sofia.bounceOff(W2); 
  sofia.bounceOff(W4); 
  sofia.bounceOff(W6);
  sofia.bounceOff(W7); 
  sofia.bounceOff(W8);
  sofia.bounceOff(W9); 
  sofia.bounceOff(W10);
  // sofia.bounceOff(W11); 
  sofia.bounceOff(W12); 
  // sofia.bounceOff(TROPHY);
  sofia.bounceOff(W13); 
  sofia.bounceOff(W15); 
  // sofia.bounceOff(W16);
  sofia.bounceOff(topedge2);
  sofia.bounceOff(bottomedge2);
  sofia.bounceOff(leftedge2);
   
 sofia.bounceOff(topedge);   
 sofia.bounceOff(leftedge);   
 sofia.bounceOff(bottomedge); 
  sofia.bounceOff(rightedge); 
   sofia.bounceOff(rightedge2);
  sofia.bounceOff(obstacle17);
// sofia.bounceOff(obstacle18);
  sofia.bounceOff(obstacle19);
  sofia.bounceOff(obstacle20);
  sofia.bounceOff(obstacle22);
//   sofia.bounceOff(obstacle23);
// sofia.bounceOff(obstacle24);
  sofia.bounceOff(obstacle25);

  obstacle25.bounceOff(W8);
 obstacle25.bounceOff(topedge);   
  obstacle25.bounceOff(leftedge);   
 obstacle25.bounceOff(bottomedge); 
//   obstacle18.bounceOff(W13);
  
//   obstacle18.bounceOff(topedge);   
//   obstacle18.bounceOff(leftedge);   
// obstacle18.bounceOff(bottomedge); 
  if (sofia.isTouching(W3)||sofia.isTouching(W5)||sofia.isTouching(W14)||sofia.isTouching(W16)||sofia.isTouching(obstacle24)||sofia.isTouching(obstacle23)) {
    playSound("assets/category_explosion/8bit_explosion.mp3", false);
    sofia.x=17;
    sofia.y=21;
      deaths=deaths+1;
  }
  // if (sofia.isTouching(W1)) {
  //   sofia.x=350;
  //   sofia.y=350;
  //       textFont('Script MT Bold');
  //       fill("YELLOW");
  //       textSize(40);
  //       text("You Won",180,200);
  // }
  if(sofia.isTouching(DIAMOND1)){
  sofia.x=820;
  sofia.y=20;
  playSound("assets/category_achievements/sharp_win_3.mp3", false);
   
  }
  if (sofia.isTouching(coin)) {
     playSound("assets/category_achievements/vibrant_game_postive_achievement_4.mp3", false);
     score++;
     coin.x=600;
    coin.y=200;
  }
  if (sofia.isTouching(coin2)) {
    playSound("assets/category_achievements/vibrant_game_postive_achievement_4.mp3", false);
    score++;
    coin2.x=600;
    coin2.y=200;
  }
  if (sofia.isTouching(coin3)) {
    playSound("assets/category_achievements/vibrant_game_postive_achievement_4.mp3", false);
    score++;
    coin3.x=600;
    coin3.y=200;
  }
  if(score===3){
     sofia.x=1430;
   sofia.y=30;
   
   LAS1.velocityY=0;
    LAS1.velocityX=0;
   LAS2.velocityY=0;
   LAS3.velocityX=0;
   LAS4.velocityX=0;
   sofia.x=1400;
   sofia.y=200;
  }
  if(playmusic.collide(sofia)){
    sofia.x=1300;
    sofia.y=50;
    playSound("assets/coffin_dance_piano.mp3", false);
    score=0;
  }
  
  
 stroke("blue");
    fill("yellow");
    textFont("Arial");
    textSize(25);
    text("YOU WON ",1250, 150);
    text("plz like ,share.RELOAD to play again ",1250, 350);
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
