       //ASSIGNMENT 2 - part 1

//Strings and String Manipulation (5 points)
//Within a new web page, create the following applications. Remember to comment out every application once you’ve finished with that step:
//1. Create an application that prompts the user for their name. Then, find the length of characters in the person’s name.  Use the alert method to display the result.
//var name = window.prompt ("Enter your name here:", "Your Name");
//alert (name.length);

//2. Create an application that prompts the user for their name. Then, prompt the user for a numeric value so that they can find the letter in the string based on the number they specify. Use the alert method to display the result.
//var name = window.prompt ("Enter your name here:", "Your Name");
//alert(name.charAt(3));


//3. Create an application that prompts the user for their first name. Then, prompt the user for their last name using a second prompt. Use the alert method to display the text "Your name is: " along with the result of the first name and last name concatenated together. You will use a concatenation operator to concatenate the literal string with the result of the String object method’s result.
//var fname = window.prompt ("Enter your first name here:", "First Name");
//var lname = window.prompt ("Enter your last name here:", "Last Name");
//alert("Your name is: " + fname + " " + lname);

//4. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, find and display within an alert the index of the word “fox”.
//var text1 = "The quick brown fox jumps over the lazy dog";
//alert(text1.indexOf("fox"));

//5. Create an application that stores the text “The quick brown fox jumps over the lazy fox” within a variable. Then, find and display within an alert the index of the last instance of the word “fox”.
//var text2 = "The quick brown fox jumps over the lazy fox";
//alert(text2.lastIndexOf("fox"));

//6. Create an application that stores the text “The quick brown fox jumped over the lazy dog” within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy dog” in the variable with the name that the user enters within the prompt. Use the alert method to display the result.
//var text3 = "The quick brown fox jumped over the lazy dog";
//var fname = window.prompt ("Enter your full name here:", "Your Full Name");
//alert (text3.replace ("the lazy dog", fname));

//7. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable. Then, prompt the user for a word. Next, search for the word within the string that the user enters into the prompt. Use the alert method to display the result.
//var text4 = "The quick brown fox jumps over the lazy dog";
//var word = window.prompt("Please enter a word here:", "word");
//alert(text4.match(word));
//alert(text4.search(word));

//8. Create an application that stores the text “The quick brown fox jumps over the lazy dog” within a variable called old_string. Then, use slice(), substr(), or substring() to extract the words “the lazy dog” from the old_string variable and store that result in a second variable called new_string. Use the alert method to display the uppercase result of new_string.
//var old_string = "The quick brown fox jumps over the lazy dog";
////var new_string = old_string.slice(35, 43);
////var new_string = old_string.substr(35, 43);
//var new_string = old_string.substring(35, 43);
//alert (new_string);

//9. Create an application that stores the text “            THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” within a variable. Make sure to add space before and after the text so that appears very similar to the text here. Use the alert method to display the lowercase result of the variable once the space has been trimmed off.
//var old_string = "The quick brown fox jumps over the lazy dog";
//var new_string = old_string.toUpperCase(new_string);
//alert ("\"            " + new_string + "          \"");

//10. Create an application that stores the text “the quick brown fox jumps over the lazy dog” within a variable. The user clearly forgot to capitalize the first letter in the sentence. Programmatically capitalize the first letter in the sentence and display the result in an alert.

//var old_string = "the quick brown fox jumps over the lazy dog";

//ONE OPTION:
  //var firstLetter = old_string.charAt(0);
  //var	firstLetterUpperCase = firstLetter.toUpperCase();
//ANOTHER OPTION:
//var firstLetterUpperCase = (old_string.charAt(0)).toUpperCase();

//var lenghtSubstring = old_string.length;
//var new_string = firstLetterUpperCase +  old_string.substring(1,lenghtSubstring);
//alert (new_string);

      