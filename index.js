//Get user input
let Fname = prompt("Enter your name:");
//Display user input
console.log("Welcome " + Fname);

//User is now asked to input there favorite number and then is stored as a value as myFavNum.
const myFavNum = prompt("What is your favorite number?");

//Users value is displayed to them.
console.log("This is your favorite number: " + myFavNum);

//The Pi Value is declared as a constant and stored as "PiValue"
const piValue = 3.1415926;

//After the "PiValue" is stored, it then gets calculated as A= Pi * Raduis^2.
// The constant my area is used to store the area of circle after it is calculated
// within the parenthess, the formula is (Pi * (Raduis * Raduis))

const myArea = (piValue * (myFavNum * myFavNum));

//After it is calculated it is displayed to the user as "Hello Variable Fname, If your favorite
//number was the area of a circle, the circles area would be: myArea.
console.log("Hello "+ Fname, "If your favorite number was the area of a circle, the circles area would be: " + myArea);

