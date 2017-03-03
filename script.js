// ASSIGNMENT 2 - part 2

//Part 1
//- Math and Math Functions (5 points)
//Create a new web page and solve these JavaScript Math problems:
//1 Create an application that prompts the user for a number. Regardless of whether they enter a negative or positive number, make sure to display the positive version of that number in the console window. If I enter -15 in the prompt and -15 is displayed in the console window, you did this one wrong.
  //   --ANSWER:
//var userNumber = prompt("Please enter a number:");
//alert (Math.abs(userNumber));

//2 Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it up to the nearest whole number. Display the result within a console window.
  //   --ANSWERS:
   //ANSWER OPTION 1: rounded UP for all decimals entered
//var userNumber = prompt("Please enter a decimal number:");
//var result = Math.round(userNumber)
//if (result <= userNumber)  {
//window.console.log(result +1)
//}
//else {
//window.console.log(result)	
//};
   
  //ANSWER OPTION 2: rounded to the closest value
//window.console.log(Math.round(userNumber));
//3 Create an application that prompts the user for a floating point value (decimal). Store the result of that input in a variable and then round it down to the nearest whole number. Display the result within a console window.
    
   //ANSWER rounded DOWN 
//var userNumber = prompt("Please enter a decimal number:");
//var result = Math.round(userNumber)
//if (result <= userNumber)  {
//window.console.log(result)
//}
//else {
//window.console.log(result - 1)	
//};

//*4 Create an application that prompts the user for 5 numbers. Ask them to comma delimit each number so you get 1,2,3,4,5 for example. Store the result of that input in a variable and then find the largest and smallest numbers in that list. Display both of those numbers within a console window.
    //   --ANSWER:
   // --- OPTION 1: ---- ---- ---
//var arr = new Array();
//for(var i=0; i<5; i++){
//    arr[i] = prompt( "Enter number " + (i+1) + " of 5:" , "" );
//}
//alert("The highest number is " + Math.max.apply(null, arr));
  
	// ---- OPTION 2 : ---- ---- ---
//var arr = new Array (prompt("Please enter five numbers separted by commas: "));
	 // just to check//	 alert (typeof arr + " " +  arr);
	// just to check//  var max = Math.max(arr);
   // just to check// alert (max);
//-----
//strArr1 = arr.toString();
//      alert (" This is strArr1 :" + typeof strArr1 + " " + strArr1);
//var strArr2 = strArr1.replace((/,/g), " ");
//	 alert ("This is strArr2 "+ strArr2);
//var i = 0;
//var max = strArr2[i];
//var min = strArr2[i];
//do {
// 		max < strArr2 [i];
//		max = strArr2 [i];
//	   i++
//	if (max < strArr2 [i]){
//		max = strArr2 [i];
//		i++
//	} else {
//		var min = strArr2 [i];
//	}	
//}while (1 <= i && i <= 5);
//alert ( "This is the max: "+ max+ "and this is the min: "+ min);
//---- end option 2 NOT working--


//5 Create an application that prompts the user for a number. Now find the square root of that number and display the result within a console window. 
    //   --ANSWER: 
//var num = prompt ("Enter a number:");
//var result = Math.sqrt(num);
//window.console.log(result);


//Part 2 
//- Date and Date Functions (6 points)
//Continue with the previously created web page and now solve these JavaScript Date problems:
//6 Create an application that gets the current date. Display that result within the console window.
    //   --ANSWER: 
//var today = new Date();
//window.console.log(today);


//7 Create an application that gets the number of days in a month. Display that result within the console window.
    //   --ANSWER: 
//var daysInMonth = function(month, year) {
//	 return new Date(year,month,0).getDate();
//}
//    console.log(daysInMonth(2,2017));


//8 Create an application that gets the month name from a particular date. Display that result within the console window.
    //   --ANSWER: 
//var monthName = ["January", "February", "March","April", "May", "June", "July", "August", "September", "October", "November", "December"];
//var x = new Date();
//console.log(monthName[x.getMonth()]);


//9 Create an application that tests whether a date is a weekend. Display that result within the console window.
    //   --ANSWER: 
//var today = new Date();
//x = today.getDay();
//if(x == 6 || x == 0){
//	window.console.log ("This is a weekend day!");
//} else {
//	window.console.log ("This is NOT a weekend day");
//}


//10 Create an application that gets yesterday’s day of the week. For instance, if today is Tuesday, the console window should display Monday.
    //   --ANSWER: 
//var today = new Date();
//var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
//window.console.log (days[today.getDay() - 1]);


//11 Create an application that gets the current day of the week. The twist here is that I want only the first letter of the day. If today is Tuesday, the letter T should be displayed in the console window.
    //   --ANSWER: 
//var today = new Date();
//x = today.toString();
//window.console.log(x.charAt(0));


//Part 3 
//- Conditional Logic and Looping Operations (4 points)
//Continue with the previously created web page and now solve these JavaScript conditional logic and looping problems:
//12 Create an application that accepts two integers within two separate prompts. Then, display only the larger of the two within the console window.
   //   --ANSWER: 
//var int1 = prompt ("Enter first integer number :");
//var int2 = prompt ("Enter second integer number :")
//
//if (int1.length > int2.length) {
//	window.console.log(int1 + "is the larger number");
//} else {
//	window.console.log(int2 + "is the larger number");
//}


//13 Create an application that records the marks for the following five students. Then, these marks are used to determine the corresponding grade. All 5 students and their grades should be displayed within the console window. 
// 
//Student Name
//Marks
//Ursula
//80
//Paul
//77
//Henry
//88
//Tabitha
//95
//Lucy
//68
//
//The grades are computed as follows:
//
//Range
//Grade
//<60
//F
//<70
//D
//<80
//C
//<90
//B
//<100
//A
//
   //   --ANSWER: 
//var studentNameAndGrade = [["Marks", null],["Ursula",80],["Paul",77],["Henry", 88],["Tabitha",95],["Lucy",68]];
//for (var i=0; i<studentNameAndGrade.length; i++ ){
//	switch (studentNameAndGrade[0][i]){
//		case studentNameAndGrade[0][i] < 60: 
//			i = "F";
//		//studentNameAndGrade[0][i] = "F";
//			break;
//		case studentNameAndGrade[1][i] < 70:
//		studentNameAndGrade[1][i] = "D";
//			break;
//		case studentNameAndGrade[0][i] < 80:
//		studentNameAndGrade[2][i] = "C";
//			break;
//		case studentNameAndGrade[0][i] < 90:
//		studentNameAndGrade[3][i] = "B";
//			break;
//		case studentNameAndGrade[0][i] <100:
//		studentNameAndGrade[4][i] = "A";
//	}
//}
//window.console.log(studentNameAndGrade);


//14 Create a JavaScript for loop that iterates from 1 to 15. Each iteration should check if the current number is odd or even, and display a message within the console window.
   //   --ANSWER: 
//for (var x=0; x<=15; x++) {
//        if (x === 0) {
//                window.console.log(x +  " is even");
//        }
//        else if (x % 2 === 0) {
//                window.console.log(x + " is even");   
//        }
//        else {
//               window. console.log(x + " is odd");
//        }
//}


//15 Create an application which iterates numbers from 1 to 100. For multiples of 3, print "Fizz" instead of the number and for multiples of 5, print "Buzz" instead of the number. For numbers which are multiples of both 3 and 5 print "FizzBuzz". This is a VERY common JavaScript interview question and you should know how to do this. You will need to take advantage of the modulus operator to accomplish this task.
   //   --ANSWER: 
// Added the number near the requested text
//for (x=1; x <= 100; x++){
//    if( x % 3 == 0 ){
//       window.console.log("Fizz" + x);
//    }
//    if( x % 5 == 0 ){
//       window.console.log("Buzz"+ x);
//    }
//    if( ( x % 3 != 0 ) && ( x % 5 != 0 ) ){
//        window.console.log("FizzBuzz"+ x);  
//}
//}


//Part 4 
//- The “Hitchhiker’s Guide to the Galaxy” Game (5 points)
//In this game you will explore what you’ve learned so far about variables, prompts, alerts, strings, conditionals, and more to create a game similar to the Hitchhiker’s Guide to the Galaxy. To complete the game follow the steps outlined below:

//1. Begin your application by asking the user if they’re ready to play your game. If they are, display the message “Awesome, our hero is waiting!”  If they’re not, display the message “Too bad, we’re going to play anyway because our hero desperately needs your help!” You will need to use the confirm box for this one and check for the Boolean result of clicking OK or Cancel.
   //   --ANSWER: 
//var answer = confirm ("Are you ready to play?");
//if (answer == true) {
//	alert("Awesome, our hero is waiting!");	
//}
//else {
//	alert("Too bad, we’re going to play anyway because our hero desperately needs your help!");	
//}


//2. Now, alert the user to the following scenario: “You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…”
   //   --ANSWER: 
//alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");


//3. Then prompt the user with the following message: “Which direction would you like to head (please enter forward, left, or right).”
   //   --ANSWER: 
//prompt ("Which direction would you like to head? (please enter forward, left, or right)");


//4. Use a switch statement to check for the literal string values forward, left, and right. If they choose forward, display the message “You walk about 100 yards and safely make your way out of the cave.” If they choose left, display the message “Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.” If they choose right, display the message “You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.” If the user chooses anything other than those three values, display the message “The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.”
   //   --ANSWER: 
//var i = prompt ("Which direction would you like to head? (please enter forward, left, or right)");
//switch (i){
//	case "forward" :
//	alert("You walk about 100 yards and safely make your way out of the cave.");
//	break;
//	case "left" :
//	alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
//	break;
//	case "right" :
//	alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
//	default:
//alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");
//}


//5. Finally, ask the user to rate your game on a scale of 1 to 10. If the feedback score is between 6 and 10, display the message “Thank you, we will continue to make improvements to the game!” If the feedback score is between 1 and 5, display the message “Whatever, you weren’t very good at this game anyway!”
   //   --ANSWER: 
//var r = prompt ("Please rate this game on a scale of 1 to 10:");
//
//if (r >= 6 && r <=10) {
//	alert("Thank you, we will continue to make improvements to the game!");
//} else {
//	alert("Whatever, you weren’t very good at this game anyway!");
//}


//6. Before you evaluate the number that the user has entered, check to see if the user entered a valid numeric value between 1 and 10. If they don’t, default the value to 10 and proceed with the evaluation.
   //   --ANSWER: 
//var r = prompt ("Please rate this game on a scale of 1 to 10:");
//if (r >= 1 && r <=10) {
	//if (r >= 6 && r <=10) {
	//	alert("Thank you, we will continue to make improvements to the game!");
	//} else {
	//	alert("Whatever, you weren’t very good at this game anyway!");
	//}
//} else {
//	r = 10;
//	alert("Thank you, we will continue to make improvements to the game!")	
//}


//Part 5 
//- The “Coin Flip” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:

//1. Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number.
   //   --ANSWER: 
//var coinFlip = Math.random();
//alert(coinFlip);


//2. Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
   //   --ANSWER: 
//var choice = prompt( "Select 'Heads or Tails'");
//alert(choice);


//3. Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
   //   --ANSWER: 
//var coinFlip = Math.random();
//if (coinFlip <= 0.5){
//	choice = "head";
//} else {
//	choice = "tales";
//}
//alert (coinFlip + choice);


//4. If the result is heads and the user selects heads, display the following message within an alert: 
//The flip was heads and you chose heads...you win!
   //   --ANSWER: 
//var x = prompt( "Select 'Heads or Tails'");
//var coinFlip = Math.random();
//if (coinFlip <= 0.5){
//	var choice1 = "Heads";
//	 if (x == choice1) {
//	alert ("The flip was heads and you chose heads...you win!")};	
//} else {
//	var choice2 = "Tails";
//	alert ("You lost!")
//}


//5. If the result is heads and the user selects tails, display the following message within an alert: 
//The flip was heads but you chose tails...you lose!
   //   --ANSWER: 
//var x = prompt( "Select 'Heads or Tails'");
//var coinFlip = Math.random();
//alert (x + coinFlip);
//if (coinFlip >= 0.5){
//	var choice = "Heads";
//		if (x == "Heads") {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You win!");	
//		} else {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You loose!");
//		}
//} else {
//	var choice = "Tails";
//		if (x == "Heads") {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You loose!");	
//		} else {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You win!");
//		}
//}


//6. If the result is tails and the user selects heads, display the following message within an alert: 
//The flip was tails but you chose heads...you lose!
   //   --ANSWER: 
//var x = prompt( "Select 'Heads or Tails'");
//var coinFlip = Math.random();
//alert (x + " " + coinFlip);
//if (coinFlip >= 0.5){
//	var choice = "Heads";
//		if (x == "Heads") {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You win!");	
//		} else {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You loose!");
//		}
//} else {
//	var choice = "Tails";
//		if (x == "Heads") {
//		alert ("The flip was tails but you chose heads...you lose!");	
//		} else {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You win!");
//		}
//}


//7. If the result is tails and the user selects tails, display the following message within an alert: 
//The flip was tails and you chose tails...you win!
   //   --ANSWER: 
//var x = prompt( "Select 'Heads or Tails'");
//var coinFlip = Math.random();
//alert (x + " " + coinFlip);
//if (coinFlip >= 0.5){
//	var choice = "Heads";
//		if (x == "Heads") {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You win!");	
//		} else {
//		alert ("You selected " + x + "and Flip was" + choice + "  " + "You loose!");
//		}
//} else {
//	var choice = "Tails";
//		if (x == "Heads") {
//		alert ("The flip was tails but you chose heads...you lose!");	
//		} else {
//		alert ("The flip was tails and you chose tails...you win!");
//		}
//}


//8. Use two Math methods to get a solid whole number on the coin flip. Modify the evaluation of the expression in your conditional so that it now checks for a Boolean result.
   //   --ANSWER: 
//var coinFlip = Math.random();
//alert ("This is a random Coin Flip number:" + " " + coinFlip);
//if (coinFlip <= 0.5){
//function fnCoinFlip(){
//return Math.floor(Math.random()*2)==0;}
//window.console.log("false");
//} else{
//window.console.log("true");
//}


//Part 6 
//- The “Coin Flip” Game Redux (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, for loops, conditionals, operators, math, and more to create a different version of the “coin flip game”. To complete the game follow the steps outlined below:

//1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
   //   --ANSWER: 
//var coinFlip;


//2. Create a for loop that loops 10 times.
   //   --ANSWER: 
//var coinFlip;
//for (i=1; i<=10; i++){
//window.console.log(i);		
//}


//3. Within the for loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
   //   --ANSWER: 
//var coinFlip;
//for (i=1; i<=10; i++){
//var num = Math.floor(Math.random()*2);
//window.console.log(num);		
//}


//4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window. 
   //   --ANSWER: 
//var coinFlip;
//for (i=1; i<=10; i++){
//var num = Math.floor(Math.random()*2);		
//if (num == 0) {
//	num = "Heads";
//} else {
//	num = "Tails";
//}}
//window.console.log(num);


//Part 7 
//- The “Coin Flip Streak” Game (5 points)
//In this part of the assignment you will explore what you’ve learned so far about variables, do while loops, conditionals, operators, math, and more to create a “coin flip streak game”. The point of this simple game is to see what kind of streak you can get to (how many times “Heads” comes up in a row before “Tails” does to end the game). To complete the game follow the steps outlined below:

//1. Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
   //   --ANSWER: 
//var coinFlip;


//2. Create a do while loop.
   //   --ANSWER: 
//var coinFlip;
//var i=1;
//do {
//	var x = parseInt(i);
//window.console.log(x);
//	i++;
//} while (0 < i && i <= 10); 


//3. Within the do while loop assign a randomly generated number to coinFlip. You will have to use a Math method to get this number. Also, make sure to round that number off so that you get either a 0 or 1 as the result.
   //   --ANSWER: 
//var coinFlip;
//var i=1;
//do {
//	coinFlip = Math.floor(Math.random()*2);
//	window.console.log(coinFlip);
//    i++;
//} while (0 < i && i <= 10); 


//4. Use a conditional to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.    
//   --ANSWER: 
//var coinFlip;
//var i=1;
//do {
//	coinFlip = Math.floor(Math.random()*2);
//	if (coinFlip == 0) {
//	coinFlip = 	"Heads"
//	window.console.log(coinFlip);
//    i++;	
//	} else {
//	coinFlip = 	"Tails"
//	window.console.log(coinFlip);
//    i++;
//	}
//} while (0 < i && i <= 10); 


//5. Set the condition of the do while loop to end once the coinFlip becomes “Tails”.
   //   --ANSWER: 
//var coinFlip;
//var i=1;
//do {
//	coinFlip = Math.floor(Math.random()*2);
//	if (coinFlip == 0) {
//	coinFlip = 	"Heads"
//	window.console.log(coinFlip);
//    i++;	
//	} else {
//	coinFlip = 	"Tails"
//	window.console.log(coinFlip);
//    i++;
//	}
//} while (coinFlip !== "Tails"); 


//Part 8 
//– Looping a Triangle (5 points)
//Write a loop that displays the following triangle within a console window:
//#
//##
//###
//####
//#####
//######
//#######
   //   --ANSWER: 
//var loopTri;
//for (loopTri = "#"; loopTri.length <=7; loopTri = loopTri + "#")
//window.console.log(loopTri);


//Part 9 
//– Odd or Even? (5 points)
//Write a loop that will iterate from 0 to 15. For each iteration it will check if the current number is odd or even, and display a message in the console window. 
//Sample Output:
//"0 is even" 
//"1 is odd" 
//"2 is even"
   //   --ANSWER: 
//var result;
//for (var i = 0; i<=15; i++) {
//	result = i;
//	if (result % 2 == 0) {
//		//alert (result + "is even")
//		window.console.log(result + "is even");
//	} else {
//		//alert (result + "is odd")
//		window.console.log(result + "is odd");
//	}	
//}
