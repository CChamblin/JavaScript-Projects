function My_First_Function()  {         //Define a function and name it
    var str = "This text is green!";    //Create a new variable and assign a string value of "This text is green!"
    var result = str.fontcolor("green");  //Create a new variable and assign it a value using the fontcolor method on the str variable
    document.getElementById("Green_Text").innerHTML = result;  //Putting the value of result into HTML element with "Green_Text" id
}

function myFunction()  {             //Define a function and name it
    var sentence = "I am learning";  //Create new variable and assign value of "I am learning"
    sentence += " a lot from this book!";  //Add value of " a lot from this book!" to the "sentence" variable. This is concatenating
    document.getElementById("Concatenate").innerHTML = sentence;  //Putting the value of sentence into HTML element with "Concatenate" id
}