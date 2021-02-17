//1. Convert the following highlighted identifiers to Camel Case notation:
/*
let someMonth;
function theMonth();
let currentMonth;
let summerMonth;
let mylibraryFunction;
*/

//2. an example of a numeric literal expression:   234 
//2. a string literal expression               :   'Hello'      
//2. a Boolean literal expression              :   true 
//2. a null literal expression                 :   null

//3. complex / variable expressions
/*
let total_number = 65 + 8;
let an_array = ['a','n','c'];
*/

//4. First Name, Last Name, Address, City, State, Zip Code, Your Age, Referral Source, May We Contact You
/*
let sFirstName;
let sLastName;
let sAddress;
let sCity;
let sStat;
let numZip;
let numCode;
let numYourAge;
let sReferralSource;
let sContact;
*/

//5. Take the 3 of the 9 variables that you created above and demonstrate 3 ways for declaring and assigning values to those variables.
/*
let sFirstName, sLastName, numZip;
sFirstName='Lily';
sLastName ='Stephens';
numZip=92037;
-----------------------------------------------------------
let sFirstName='Lily',sLastName ='Stephens', numZip= 92037;
-----------------------------------------------------------
let sFirstName ='Lily';
let sLastName ='Stephens';
let numZip= 92037;
*/

//6. Create a variable. Add a number and a string and display the coerced result in the browser’s console window. 
/*
let orderNumber=8;
window.console.log('Your Order Number is :'+ orderNumber);
*/

//7.Create two variables. For the first variable, add a Boolean and a string and display the coerced result. For the second variable, add a number and a Boolean and display the coerced result. 
/*
let string1 = 'Lily';
Boolean(string1);
------------------------------------------------
let num1 = 100;
Boolean(num1);
*/

//8.  Is the following string literal valid? If not, how would you fix it?
/*
Not valid and it should be:
let someString = 'Who once said, \"Only two things are infinite, the universe and human stupidity, and I\'m not sure about the former.\"';
window.console.log(someString);
*/

//9.   Create a variable that produces a null value in the console window. Then, create a variable that produces an undefined value in the console window.
/*
let brand;
window.console.log(brand);
window.console.log(modle);
*/

//10. Use the unary typeof operator on various literals to return the following types within the console window: string, number, Boolean, object, and undefined.
/*
window.console.log(typeof 'Hello');
window.console.log(typeof 40);
window.console.log(typeof false);
window.console.log(typeof [x:1,y:2]);
window.console.log(typeof nameOfVariable);
*/

//11. Within an alert box, use the concatenation operator (+) to display text in the alert box that appears as follows: 
/*
alert('Hello'+' Yaling Stephens, '+'Welcome to the JavaScript Class!');
*/

//12. Declare a variable called name and set it equal to your name. Substitute your name in the previous alert string with the variable instead.
/*
let user_name='Yaling Stephens';
alert('Hello '+user_name+', Welcome to the JavaScript Class!');
*/

//13. Declare a variable called course and set it equal to “JavaScript”. Rework your alert string so that it displays the string of text but using the variables as opposed to hard coded text.
/*
let user_name='Yaling Stephens', course="JavaScript"
alert('Hello '+user_name+', Welcome to the '+course+' Class!');
*/

//14. Rework the above string so that a line break is added right before the word “Welcome”. 
/*
let user_name='Yaling Stephens', course="JavaScript"
alert('Hello '+user_name+'.\nWelcome to the '+course+' Class!');
*/

//15. Replace the hardcoded string of your name with a prompt that asks the user for their name. The prompt’s response will now be captured in the name variable. 
/*
let user_name= prompt('Please Enter Your Name:');
let course="JavaScript";
alert('Hello '+user_name+'.\nWelcome to the '+course+' Class!');
*/

//16. Replace the hardcoded string of the class you are taking with a prompt that asks the user for the class they are taking. The prompt’s response will now be captured in the course variable.
/*
let user_name= prompt('Please Enter Your Name:');
let course= prompt('Course Name:')
alert('Hello '+user_name+'.\nWelcome to the '+course+' Class!');
*/

//17. Declare a variable called x and assign it a value of 10. Declare a variable called y and assign it a value of 20. Display the sum of those two numbers in the console window.
/*
let x=10, y=20;
window.console.log(x+y);
*/

//18. Declare a variable called x and assign it a value of 20. Add and assign 20 to that variable and display the result in the console window.The result should be 40.
/*
let x=20;
x +=20;
window.console.log(x);
*/

//19. Declare a variable called x and assign it a value of 20.Multiply and assign 5 to that variable and display the result in the console window. The result should be 100.
/*
let x=20;
x *=5;
window.console.log(x);
*/

//20. Declare a variable called x and assign it a value that equals the remainder of 20 divided by 3.Divide and assign 1 to that variable and display the result in the console window. The result should be 2. If you got 6.66 try again.
/*
let x= 20%3;
x /=1;
window.console.log(x);
*/

//21. Using a set of Comparison and Logical operators, write an application that evaluates to true and displays the result within the console window.
/*
let x=5, y=3;
window.console.log(x>=y || y>0 );
*/

//22. Using a set of Comparison and Logical operators, write an application that evaluates to false and displays the result within the console window. The application cannot use the same operators used in the previous application.
/*
let x=5, y='3';
window.console.log(x==y && x===y );
*/
