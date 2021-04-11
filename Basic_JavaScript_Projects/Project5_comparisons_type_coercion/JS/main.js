document.write(typeof "Word"); //Gives the data type of a variable which would be a string here

document.write(typeof 3); //Gives the data type of a variable which would be a number here

document.write("80" + 6);

function my_Function()  {
    document.getElementById("Test").innerHTML = 0/0;
}

document.getElementById("Test2").innerHTML = isNaN("This is a string");

document.getElementById("Test3").innerHTML = isNaN('007');

document.write(2E310);

document.write(-3E310);

document.write(10>2);

document.write(10<2);

console.log(6*4);

document.write(10 == 10);

document.write(3 == 11);

X = 10;
Y = 10;
document.write(X ===Y);

X = 82;
Y = "82";
document.write(X === Y);

A = "Magnus";
B = "Magnus";
document.write(A ===B);

//Boolean operators//
document.write(5>2 && 10>4); //AND operator that results in TRUE//

document.write(5>10 && 10>4); //AND operator that results in FALSE//

document.write(5>10 || 10>4); //OR operator that results in TRUE//

document.write(5>10 || 10>20); //OR operator that results in FALSE//

function not_Fucntion()  {
    document.getElementByID("Not").innerHTML = !(20>10);
}

function not_Fucntion()  {
    document.getElementByID("Not").innerHTML = !(5>10);
}

