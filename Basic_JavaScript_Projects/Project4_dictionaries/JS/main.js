function my_Dictionary()  {     //Define a function and name it my_Dictionary
    var Animal = {              //Create a variable, name it Animal, and assign it a set of key value pairs
        Species: "Dog",         //List of key value pairs assigned to the variable Animal
        Color: "Black",
        Breed: "Labrador",
        Age: 5,
        Sound: "Bark!"
    };
    delete Animal.Sound;        //Use the delete operator to remove the key Sound from the list of KVP
    document.getElementById("Dictionary").innerHTML = Animal.Sound;  //Putting the value of sentence into HTML element with "Dictionary" id
}