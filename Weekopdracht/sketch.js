// set up the variables
var colorRow = [];
var selectedImg = 1;
var canCol;
var eyeCol;
var krobCol;
var crossCol;
var imageWidth = [48, 110, 74, 399]
var imageLength = [34, 152, 74, 299];
var button1;
var button2;
var button3;
var button4;
var customInput;
let imgWidth;
let imgLength;

function preload() {
  // load the colors for the 4 preset sprites
  canCol = loadJSON("assets/cannonCol.json");
  eyeCol = loadJSON("assets/eyeCol.json");
  krobCol = loadJSON("assets/krobCol.json");
  crossCol = loadJSON("assets/crossCol.json");
}

function setup() {
  // create canvas, usual stuff. also draws cannon buddy once
  createCanvas(4000, 4000);
  noSmooth();
  noStroke();
  fill(175, 206, 121);
  rect(480, 0 , 250, 480);
  for(let i = 0; i < 48; i++){
    for(let j = 0; j < 34; j++){
      fill(canCol[i][j]);
      rect(i * 4 + 100, j * 4 + 100, 4);
    }
  }
  // create the buttons for picking art and drawing your own, if a button is clicked, buttonGotPressed() is triggered.
  button1 = createButton("Cannon Buddy");
  button1.position(500, 50);
  button1.mousePressed(buttonGotPressed);
  button2 = createButton("Eye Of Cthulhu");
  button2.position(500, 100);
  button2.mousePressed(buttonGotPressed);
  button3 = createButton("Krobus");
  button3.position(500, 150);
  button3.mousePressed(buttonGotPressed);
  button4 = createButton("X01 Driller");
  button4.position(500, 200);
  button4.mousePressed(buttonGotPressed);
  customInput = createFileInput(handleFile);
  customInput.position(500, 300);
  imgWidth = createInput();
  imgWidth.position(500, 350);
  imgWidth.size(50);
  imgLength = createInput();
  imgLength.position(560, 350);
  imgLength.size(50);
}

function buttonGotPressed() {
  // when one of the labeled buttons is clicked, check which one was pressed and render the corresponding sprite.
  selectedImg = parseInt(this.y) / 50;
  fill(175, 206, 121);
  rect(480, 0, 250, 480);
  fill("white");
  rect(0, 0, 480, 480);
  switch (selectedImg) {
    case 1:
      for (let i = 0; i < 48; i++) {
        for (let j = 0; j < 34; j++) {
          setTimeout(function () {
            if (selectedImg == "1") {
              fill(canCol[i][j]);
              rect(i * 4 + 100, j * 4 + 100, 4);
            }
          }, 5 * i * j);
        }
      }
      break;
    case 2:
      for (let i = 0; i < 110; i++) {
        for (let j = 0; j < 152; j++) {
          setTimeout(function () {
            if (selectedImg == "2") {
              fill(eyeCol[i][j]);
              rect(i * 2 + 100, j * 2 + 100, 2);
            }
          }, 0.001 * i * j);
        }
      }
      break;
    case 3:
      for (let i = 0; i < 74; i++) {
        for (let j = 0; j < 74; j++) {
          setTimeout(function () {
            if (selectedImg == "3") {
              fill(krobCol[i][j]);
              rect(i * 3 + 100, j * 3 + 100, 3);
            }
          }, i * j);
        }
      }
      break;
    case 4:
      for (let i = 0; i < 399; i++) {
        for (let j = 0; j < 299; j++) {
          setTimeout(function () {
            if (selectedImg == "4") {
              fill(crossCol[i][j]);
              rect(i + 40, j + 40, 1);
            }
          }, 0.00000001 * i * j);
        }
      }
  }
}
function handleFile(file){
  // after uploading json file, rebuild the original image pixel by pixel.
  print(file)
  if(file.subtype === "json"){
    img = file.data;
  } else{
    img = null;
  }
  if(img){
    for(let i = 0; i < parseInt(imgWidth.value()); i++){
      for(let j = 0; j < parseInt(imgLength.value()); j++){
        fill(img[i][j]);
        rect(i + 800, j, 1);
      }
    }
  }
}