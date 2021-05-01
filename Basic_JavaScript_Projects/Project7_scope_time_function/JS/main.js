/* Global variable */
var x = 10;
function Add_numbers_1()  {
    document.write(20 + x + "<br>");
}
function Add_numbers_2()  {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();


/* Local variable */
function Add_numbers_1()  {
    var x = 10;
    document.write(20 + x + "<br>");
}
function Add_numbers_2()  {
    document.write(x + 100);
}
Add_numbers_1();
Add_numbers_2();


/* Debug with console.log() method */
function Add_numbers_1()  {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_2()  {
    console.log(x + 100);
}
Add_numbers_1();
Add_numbers_2();



function get_Date()  {
    if (new Date().getHours() <18)  {
        document.getElementById("Greeting").innerHTML = "How are you today?";
    }
}


/* If statement */
if (1<2)  {
    document.write("The left number is smaller than the number on the right.")
}


/* Else statement */
function Age_Function()  {
    Age = document.getElementById("Age").value;
    if (Age >= 18)  {
        Vote = "You are old enough to vote!";
    }
    else  {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

/* Else if statement */
function Time_function()  {
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0)  {
        Reply = "It is morning time!";
    }
    else if (Time >= 12 == Time < 18)  {
        Reply = "It is afternoon.";
    }
    else  {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}

function full_Sentence()  {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}