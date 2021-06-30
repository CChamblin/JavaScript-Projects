function Call_Loop() {
    var Digit = "";
    var X = 1;
    while (X<11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

function myFunction()  {
    var str = "Hello World!";
    var n = str.length;
    document.getElementById("demo").innerHTML = n;        
    }

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop()  {
    for (Y = 0; Y < Instruments.length; Y++)  {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function constant_function() {
    const Pet_Dog = {size:"medium", breed:"Bulldog", color:"grey"};
    Pet_Dog.breed = "Greyhound";
    Pet_Dog.tempermant = "playful";
    document.getElementById("Constant").innerHTML = "The tempermant of the " +
        Pet_Dog.breed + " is " + Pet_Dog.tempermant;
}

//---EXAMPLES--//

var  X=82;
document.write(X);
{
    let X=33;   // example of let keyword and block scope which limits access to inside the block
    document.write("<br>" + X);
}
document.write("<br>" + X);

var  X=82;
document.write("<br>" + X);
{
    var X=33;   // example of var keyword which does not have block scope so that variable can be accessed from outside the block
    document.write("<br>" + X);
}
document.write("<br>" + X);


// return statement that stops the execution of a funciton and returns a value from that function
function reFunction() {
    return Math.PI;
};
document.getElementById("pi").innerHTML = reFunction();


// Object example using "this" keyword
let car = {
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description : function() {
        return "This car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("Car_Object").innerHTML = car.description();

