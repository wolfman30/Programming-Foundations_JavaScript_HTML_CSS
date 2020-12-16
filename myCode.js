// fg_img is foreground image, two professors on a green screen
//bg_img is a background image: large toy dinosoaurs amid a space background
var fg_img = new SimpleImage('drewRobert.png');
var bg_img = new SimpleImage('dinos.png'); 
var output = new SimpleImage(fg_img.getWidth(), fg_img.getHeight()); //final output of composite image same size as foreground image

for (var px of fg_img.values()) {
    if (px.getGreen() > px.getBlue() + px.getRed()) {
        var x = px.getX();
        var y = px.getY(); 
        var bgPixel = bg_img.getPixel(x, y); 
        output.setPixel(x, y, bgPixel)
    }
    else {
        output.setPixel(px.getX(), px.getY(), px);
    }
}

//The final output should be the two Duke professors in the foreground
//amid the background of the two enlarged toy dinosaurs in outerspace
print(output);