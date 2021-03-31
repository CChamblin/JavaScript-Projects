window.alert("Hello World!"); //Create a pop up window//

document.write("Hello World!"); //Create a line of text with a string value//

var A = "This is a string"; //Define a variable and giving it a string value//
document.write(A); //Create a line of text by calling on the variable that was assigned a string value//
window.alert(A); //Create a pop up window that displays the line of text created by the string value assigned to variable A//

document.write("This string contains \"a quote\""); //Create a line of text using a string value that containes backslashes to display quotation marks//

document.write("\"Be who you are and say what you feel," + " because those who mind don\'t matter and those who matter don\'t mind\"" + "-Dr. Seuss"); //Create a concatenated string that uses quotations//

var Dog = "Spot", Cat = "Felix", Bird = "Tweety", Lizard = "Spike", Hamster = "Fluffy"; //Assign values to multiple variables//
var Dog = Dog.fontcolor("blue"), Cat = Cat.fontcolor("green"), Lizard = Lizard.fontcolor("red"), Hamster = Hamster.fontcolor("purple"); //Assign font colors to multiple variables//
document.write(Cat, Dog, Hamster, Lizard); //Print previously defined variables//

document.write(5 * 5); //Print the result of the expression 5 x 5//