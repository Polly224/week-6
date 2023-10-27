var colorRow = [];
let input;
let img;
let imgWidth;
let imgLength;

function setup() {
  // create canvas, boxes to enter image width and length, and text for which buttons to press
  createCanvas(4000, 4000);
  input = createFileInput(handleFile);
  input.position(0,0);
  imgWidth = createInput();
  imgWidth.position(0, 100);
  imgWidth.size(50);
  imgLength = createInput();
  imgLength.position(60, 100);
  imgLength.size(50);
  textSize(25);
  text("s > d > a", 0, 200);
}

function keyPressed() {
  // on S press, load the image uploaded
  if(key == "s"){
    if(img){
      image(img, 0, 300);
    }
  }
  // on D press, save every pixel to an array
  if(key == "d"){
    for(let i = 0; i < parseInt(imgWidth.value()); i++){
      colorRow[i] = [];
      for(let j = 0; j < parseInt(imgLength.value()); j++){
        colorRow[i][j] = get(i, j + 300); 
      }
    }
  }
  // on A press, save said array as a .json file
  if(key == "a"){
    save(colorRow,"colorRow.json");
  }
  
  fill("black");
}

function handleFile(file){
  print(file)
  if(file.type === "image"){
    img = createImg(file.data, '');
    img.hide();
  } else{
    img = null;
  }
}

function draw(){
  console.log(get(mouseX, mouseY));
}