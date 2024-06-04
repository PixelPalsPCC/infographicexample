let skyImage;
let oceanImage;
var words = ['hello', 'how are you', 'I a']

function preload() {
  skyImage = loadImage("sky.jpg");
  // oceanImage = loadImage("ocean.jpg");
}

function setup() {
  createCanvas(350, 350);
  // Loads sky.jpg located in the same directory as the p5.js sketch file
  image(skyImage, 0, 0,200,200);
  // Loads ocean.jpg located inside the images folder
}

function draw() {
  colorMode(HSB);
  background(255, 204, 100);

  rect(40, 40, 30, 30);
}

/*

Thank you 

Photo by <a href="https://unsplash.com/@xaze?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">uriel</a> on <a href="https://unsplash.com/photos/blue-sky-with-white-clouds-xtgONQzGgOE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
  
Photo by <a href="https://unsplash.com/@vimarethomas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Thomas Vimare</a> on <a href="https://unsplash.com/photos/body-of-water-under-blue-and-white-sky-at-daytime-IZ01rjX0XQA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
    
*/
