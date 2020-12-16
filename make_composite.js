
var fgImg = null; 
var bgImg = null; 
var output;
var canvas; 
var canvas2; 

function upload() {
  canvas = document.getElementById('canvas');
  var fg_img = document.getElementById('fgFile');
  fgImg = new SimpleImage(fg_img);
  fgImg.drawTo(canvas);
  alert('Foreground image uploaded!')

}

function upload2() {
  canvas2 = document.getElementById('canvas2');
  var bg_img = document.getElementById('bgFile');
  bgImg = new SimpleImage(bg_img);
  bgImg.drawTo(canvas2);
  alert('Background image uploaded!')

}

function makeComposite() {
  
  //if foreground image not uploaded or loading not complete
  if (fgImg == null || !fgImg.complete()) {
    alert('The foreground image has not been uploaded');
  }
  //if background image not uploaded or loading not complete
  if (bgImg == null || !bgImg.complete()) {
    alert('The background image has not been uploaded');
  }
  
  else {
    output = new SimpleImage(fgImg.getWidth(), fgImg.getHeight());
  }
  
  for (var px of fgImg.values()) {
    if (px.getGreen() > px.getRed() + px.getBlue()) {
      var x = px.getX();
      var y = px.getY();
      bgPixel = bgImg.getPixel(x, y); 
      output.setPixel(x, y, bgPixel);
    }
    else {
      output.setPixel(px.getX(), px.getY(), px);
    }

  }
  
output.drawTo(canvas);
  
//sets background color of canvas 2 to fuchsia 
for (px of bgImg.values()) {
    px.setBlue(255);
    px.setGreen(0);
    px.setRed(255); }

canvas2.style.backgroundColor='hotpink';
bgImg.drawTo(canvas2)
}


function clearImages() {
  
var context = canvas.getContext('2d');
var context2 = canvas2.getContext('2d');
context.clearRect(0, 0, canvas.width, canvas.height);
context2.clearRect(0, 0, canvas2.width, canvas2.height);
canvas2.style.backgroundColor='white';
  
}



