var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");

function new_image()
{
	frabic.Image.fromURL("BirthdayImage.jpg", function(Img) {
        block_image_height = Img;
        block_image_height.scaleToWidth(700);
        block_image_height.scaleToHeight(510);
        block_image_height.set({
        top:0,
        left:0
        });
        canvas.add(block_image_object);
    });
	
}

function playSound(){
	x.play();
}
