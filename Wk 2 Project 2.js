// JavaScript Looping Exercise

// 1. Output each item in the following Array to your console:

console.log('Question 1');
var livingRoom = ['couch', 'lamp', 'rug', 'shelf'];
for (var i = 0; i < livingRoom.length; i++);
console.log(livingRoom);

// 2. Using a loop, log numbers 22-33 in the console.

console.log('Question 2');
console.log('Question 2');
for (var i=22; i<=33; i++){
    console.log(i);
}

// 3. Using a similar loop, log numbers 75 to 100, only in increments of five.

console.log('Question 3');
for (var i=75; i<=10-; i+=5){
  console.log(i);
}
// 4. Write a while loop that logs "This is how a professional loops." to the console 5 times.
//     Use this as an example:
//        var counter = 0;
//        var num = 2;

//        while (num < 1000) {
//        num += num;
//        counter++;
//        }

//        console.log(counter);

console.log('Question 4');
var counter = 0;
var num = 2;
while (num < 1000){
  num *= 2;
  counter++
}
console.log(counter);

// 5. Write a conditional statement to find the largest of the numbers in the array provided.
var largestNum = [-5, -2, -6, 0, -1]

console.log('Question 5');
//Sudo Code (Josh recommended starting problems out like this- this is the plan on how to write the code.)
//Go number by number
//Remember the biggest number seen
//Compare each new number to the biggest number; remember the larger one
//Continue until we get to the end
var largestNum = [-5, -2, -6, 0, -1]
var largest = largestNum[0];
for (var i = 0; i < largestNum.length; i++) {
	console.log('Checking' ,largestNum[i]);//this console.log prints out each number and does the check
    if (largest < largestNum[i]) {
        largest = largestNum[i];
    }
}
console.log(largest);

// 6. Separately, use both a for loop and while loop to do the same thing.
//     Print out the sentence "At home, I have _____ cats." Use the number from your counter to fill in the number.
//     The numbers should range from 10 to 100, in increments of 25.

console.log('Question 6');
for (i = 10; i < 101; i+=25){
  console.log(i);
}
console.log("At home, I have + ['i'] cats");

// 7. Given the following Array, console log 'Even' if the number is even, 'Even and greater than 10' if the
//    number is even and greater than 10, and 'Odd' if the number is odd.
//    HINT: Google 'remainder operator'

console.log('Question 7');//use the modulo to determine if the remainder is NOT 0
var numArray = [2, 17, 9, 24, 8];
var evenNumbers = function(num){
  for(var i = 0; i < numArray.length; i++){
  if (i % 2 === 0 ){
    numArray.push(a[i]);
  }
}
};
console.log(evenNumbers);

// 8. Given the following Array, create variable numThrees with the value [13, 23, 33, 43, 53, 63, 73]
//wright remainder operator using the modulo to pull out the numbers with remainder '3'
var numArray = [13, 15, 17, 23, 25, 27, 33, 35, 37, 43, 45, 47, 53, 55, 57, 63, 65, 67, 73, 75, 77];
var numThrees(numArray[''] % 10 === 3); {//cannot use dot notation for numbers used bracket notation to pull out the numbers in the array.
	return(numThrees-10); //this is not returning-the code seems off here. Sudo code: run the loop until it finds all the remainder '3'
}
console.log(numThrees);

// 9. Write a loop that outputs the following to the console:
// #
// ##
// ###
// ####
// #####
// ######
// #######

console.log('Question 9');
for (var l = '#'; l.length < 10; l += '#') //also look how to do this using modulo
console.log(l);


// RO SHAM BO!
// We're going to create a paper, rock, scissors game that prompts you for your choice and allows the computer to
// randomly choose. You will use an alert to define the winner.

// 10. Use a variable called "human" to prompt the user to type their choice.

console.log('Question 10');
var human = prompt("Do you choose rock, paper or scissors?");

// 11. Define an array called "choices" that consists of "paper", "rock", and "scissors".

console.log('Question 11');
choices = ["paper", "rock" and "scissors"];

// 12. Define a variable called "computer" and use Math.random to allow the computer to randomly select a number.
//    For reference:
//    Math.random gives you a random number between 0 and 1, which is different each time you call it.

console.log('Question 12');
var computer = Math.random();

// 13. Let's start our conditional statement. Start by reassigning the computer variable to "rock" if the random number
//    falls between 0 and .33. Run the code until the console prints out "rock" instead of the number.
//    In English, it will look like this:
//      var computer = my Math.random code here
//       if the number is between 0 and 33
//          computer = "rock"
//       log computer to the console

console.log('Question 13');
if (computer <= 0.33) {
computer = "rock";}
console.log(computer);

// 14. Now add the following conditionals to the same statement:
//    If the random number is between .34 and .66, set the computer variable to "paper".
//    If the random number is between .67 and 1, set the computer variable to "scissors". (Who the hell seriously chooses scissors first?)

console.log('Question 14');
else if (computer >= 0.67) {
computer = "paper";
} else {
computer = "scissors";
}
// 15. Using both "human", begin another conditional statement. At this time, leave the statements blank.
//    In English, it will look like this:
//      if human is "rock"
//        leave this blank
//      if human is "paper"
//        leave this blank
//      else
//        leave this blank

console.log('Question 15');
if human is "rock"

// 16. Now inside of each condition, we need to compare the "human" variable to the "computer" variable,
//    then print to the console who won the game.
// 17. Give yourself a high five for completing your first javascript game!
// 18. Use the game you made above and rework it using a switch statement.
// 19. What happens if your user enters something other than "rock", "paper", or "scissors?". Change your default case
//     to print a snarky message to the console if the input doesn't match any of the options.

var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
 computerChoice = "rock";
} else if(computerChoice <= 0.67) {
 computerChoice = "paper";
} else {
 computerChoice = "scissors";
} console.log("Computer: " + computerChoice);
var compare = function(choice1, choice2) {
if(choice1 === choice2) {
return "The result is a tie!";
}
else if (choice1 === "rock") {
if (choice2 === "scissors") {
return "rock wins";
}
else {
return "paper wins";
}
}
else if (choice1 === "paper") {
if (choice2 === "rock") {
return "paper wins";
}
else {
return "scissors wins";
}
}
else if (choice1 === "scissors") {
if (choice2 === "paper") {
return "scissors wins";
}
else {
return "rock wins";
}
}
};

compare(userChoice, computerChoice);

// HEDS ER TALES?
// 20. Use the following variable for your coin flip action:
       var coin = Math.floor(Math.random() * 2);
//     We're using Math.random again, along with Math.floor.
//     Remember, Math.random gives you a random number between 0 and 1.
//     Calling Math.floor on that number will truncate the decimal, and give you a
//     random number within the bounds of your array. (In this case, our array will only contain two items.)
// 21. Use a do/while loop to keep flipping the coin until you get tails.

// 22. FIZZ BUZZ
// Write a program that uses console.log to print each number up to 100, with a couple exceptions...
// If the number is divisible by 3, print "Fizz" instead of the number.
// If the number is divisible by 5, print "Buzz" instead of the number.
// If the number is divisible by both 3 and 5, print "FizzBuzz" instead of the number.

console.log('Question 22');
for (i = 1; i <= 100; i++) {
  if ((i % 3 === 0) && (i % 5 === 0)) {
    console.log("FizzBuzz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  }
    else{console.log(i);
  }
}



// CHESS BOARD
// 23. Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.
// At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

//Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a variable size = 8 and change the program
// sso that it works for any size, outputting a grid of the given width and height.

console.log('Question 23');
var s = '';
var rows;
for (var i = 0; i <= 32; i++) {
	row = Math.floor( i / 4);
	if (row % 2) {
		s+= '# ';
	} else {
		s += ' #';
	}
	if (s.length === 8) {
		console.log(s);
		s = '';
	}
}
