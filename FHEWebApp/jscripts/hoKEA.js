var images = new Array()

images[0] = "images/products.jpg";
images[1] = "images/drawnchair.jpg";
images[2] = "images/drawntable.jpg";
images[3] = "images/drawnlamps.jpg";
setInterval("changeImage()", 2000);
var x=0;
function changeImage()
{
    document.getElementById("itemsImg").src=images[x]
    x++;
    if (images.length == x) 
    {
       x = 0;
    }
}