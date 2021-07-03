function Color_Function() {
    var Color_Output;
    var Colors = document.getElementById("Color_Input").value;
    var Color_String = " is a great color!";
    switch(Colors) {
        case "Red":
            Color_Output = "Red" + Color_String;
        break;
        case "Yellow":
            Color_Output = "Yellow" + Color_String;
        break;
        case "Green":
            Color_Output = "Green" + Color_String;
        break;
        case "Blue":
            Color_Output = "Blue" + Color_String;
        break;
        case "Pink":
            Color_Output = "Pink" + Color_String;
        break;
        case "Purple":
            Color_Output = "Purple" + Color_String;
        break;
        default:
        Color_Output = "Please enter a color exactly as written on the above list.";
    }
    document.getElementById("Output").innerHTML = Color_Output;
}

//Get element by class name method
function Hello_World_Function() {
    var A = document.getElementByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

//JavaScript used to add a circle to the HTML canvas element
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var grd = ctx.createLinearGradient(0,50,170,60);
grd.addColorStop(0, "black");
grd.addColorStop(1, "orange");

ctx.fillStyle = grd;
ctx.fillRect(0,0,250,175);

ctx.beginPath();
ctx.arc(125, 87.5, 80, 0, 2 * Math.PI);
ctx.stroke();

