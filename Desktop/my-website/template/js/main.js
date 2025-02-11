

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

// const areaOrPerimeter = function(l , w) {
//     return l == w ? l*w : 2*(l+w)
//   };





//You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:
//As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// function reverse(str){
//     return str.split(" ").reverse().join(" ")
//   }






// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (mpg * fuelLeft) >= distanceToPump
//   }








// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

// unction sakuraFall(v) {
//     // your code here
//     let distToGround = 5 * 80; // distance from branch to ground = 400 centimeters
//     let time = 0;
    
//     if(v > 0){
//       time = distToGround / v;
//     }
    
//     return time;
//   }


// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

//const quarterOf = m => Math.ceil(m/3);

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// const rps = (p1, p2) => {
//     if (p1 === p2) return "Draw!"
//     var rules = {rock: "scissors", paper: "rock", scissors: "paper"}
//     if (p2 === rules[p1]) {
//       return "Player 1 won!"
//     }
//     else {
//       return "Player 2 won!"
//     }
//   }

// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

// function baseCost(days, rate) {
//     return days * rate;
//   }
  
//   function discountRate(days) {
//     if ( days >= 7 ) {
//       return 50;
//     }
//     else if ( days >= 3 ) {
//       return 20;
//     }
//     else {
//       return 0;
//     }
//   }
  
//   function rentalCarCost(days) {
//     return baseCost(days, 40) - discountRate(days);
//   }


// Your task is to shorten the code as much as possible. Note that submitting the given code will not work because there is a character limit of 137.

// I'll give you a few hints:

// The title itself is a hint - if you're not sure what to do, always research any terminology in this description that you have not heard of!
// Don't you think the whole "You're a(n) <insert_something_here>" is very repetitive? ;) Perhaps we can shorten it?
// Write everything in one line, \n and other whitespaces counts.


// function describeAge(age) {
//     return "You're a(n) " + (age < 13 ? "kid" : age < 18 ? "teenager" : age < 65 ? "adult" : "elderly") 
//   }
  

// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// function reverseWords(str){
//     return str.split(" ").reverse().join(" ")
//   }

// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.
  
// function booleanToString(b){
//     return b.toString()
//   }

// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

// function solution(nums){
//     return (nums || []) .sort (function(a , b){
//       return a - b
//     })
//     }

// Task: Given an array of Player objects (an array of associative arrays in PHP) and an index (1-based), return the name of the chosen Player(name is a property of Player objects, e.g Player.name)

// function duckDuckGoose(players, goose) {
//     return goose ? player[(goose - 1) % players.lenght].name : ''
//   }

//  Create a method that accepts a list and an item, and returns true if the item belongs to the list, otherwise false.

//  function include(arr, item){
//     return arr.includes(item)
//  }

// Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.
// Please use the following function names:
// addition = add
// multiply = multiply
// division = divide (both integer and float divisions are accepted)
// modulus = mod
// exponential = exponent
// // subtraction = subt
// function add(a,b){
//     return a+b
// }

// function divide(a,b){
//     return a/b
// }

// function multiply(a,b){
//     return a*b
// }

// function mod(a,b){
//     return a%b
// }
   
// function exponent(a,b){
//     return a**b
// }
// function subt(a,b){
//     return a-b
// }

//Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
// function removeEveryOther(arr){
//     return arr.filter(function(elem, index){
//       return index % 2 === 0
//     })
// }

// /JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// function getEvenNumbers(numbersArray){
//     return numbersArray.filter(function(n){
//       return n % 2 == 0
//     })
//   }

// Create a function that takes a number as an argument and returns a grade based on that number.

// Score	Grade
// Anything greater than 1 or less than 0.6	"F"
// 0.9 or greater	"A"
// 0.8 or greater	"B"
// 0.7 or greater	"C"
// 0.6 or greater	"D"

// function grader(score) {
//     if (score > 1 || score < .6) return 'F'
//       else if (score >= 0.9) return 'A'
//       else if (score >= 0.8) return 'B'
//       else if (score >= 0.7) return 'C'
//       else if(score >= 0.6) return 'D'
//     }
    
// Classy Classes

// Basic Classes, this kata is mainly aimed at the new JS ES6 Update introducing classes

// Task

// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

// class Person {
//     constructor(name, age) {
//     this.name = name
//     this.age = age
//     }
//     get info (){
//       return `${this.name}s age is ${this.age}`
//     }
//   }
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).

// function solution(a, b){
//     return a.length < b.length ? a + b + a : b + a + b
//   }

// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)

// function yourFutureCareer() {
// 	let career = Math.random()
  
// 		if (career <= 0.32) {
// 			return 'FrontEnd Developer'
// 		} else if (career <= 0.65) { 
// 			return  'BackEnd Developer'
// 		} else {
// 			return 'Full-Stack Developer'
// 		}
// }

//Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
// function greet(name){
//     if(name === "Johnny")
//     return "Hello, my love!";
//     else
//       return "Hello, " + name + "!";
//   }

//Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// function array(arr) {
//     return arr.split(",").slice(1,-1).join(" ") || null
//   }

//Write a function that removes the spaces from the string, then return the resultant string.

// function noSpace(x){
//   return x.split(' ').join('')
// }

// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

// function isOpposite(s1,s2){
//   if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
  
//   for(var i = 0; i < s1.length; i++) {
//     if(s1.charAt(i) === s2.charAt(i)) return false;
//   } 
//   return true;
// }

//You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

// let items = []
// items.push ({a: "b", c: "d"})

//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// function doubleChar(str) {
//     const doubleChar = (str) => str.split("").map(c => c + c).join("")
//   }

// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// function unusualFive() {
//     return "wowow".length
//   }

//You have to do God's job. The creation method must return an array of length 2 containing objects (representing Adam and Eve). The first object in the array should be an instance of the class Man. The second should be an instance of the class Woman. Both objects have to be subclasses of Human. Your job is to implement the Human, Man and Woman classes.

// class God{
//     /**
//      * @returns Human[]
//      */
//       static create(){
//         return [new Man, new Woman];
//       }
//     }
//     class Human{}
//     class Man extends Human{}
//     class Woman extends Human{}
//A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
// function hero(bullets, dragons){
//     return bullets >= dragons * 2
//   }
//Create a function which answers the question "Are you playing banjo?".
//If your name starts with the letter "R" or lower case "r", you are playing banjo!


// function areYouPlayingBanjo(name) {
//     if (name[0].toLowerCase() === 'r') {
//       return name + ' plays banjo'
//     } else {
//       return name + ' does not play banjo'
//     }
//   }

//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

// function evenOrOdd(number) {
//     if(number % 2 == 0){
//       return 'Even'
//     }else{
//       return 'Odd'
//     }
//  

// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// function stringy(size) {
//     let str = '';
//     for (let i=1;i<=size; i++)
//       str +=i%2;
//       return str;
//   }

//Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.
//function SafeInteger(n) {
//     return Number .isSafeInteger(n)
// }

// Get ASCII value of a character.

//function getASCII(c){
//     return c.charCodeAt()
// }

//Create a class Ghost
//Ghost objects are instantiated without any arguments.
//Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

//     let arr = []
// function between(a, b) {
//     for(let i = a; i <=b; i++){
//       arr.push(i)
//     }
//     return arr
//   }

//Complete the function which converts a binary number (given as a string) to a decimal number.

//function binToDec(bin){
//    return parseInt(bin, 2)
//  }

//The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// function setAlarm(employed, vacation){
//     if(employed && !vacation){
//       return true
//     }else{
//       return false
//     }
//   }

// Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.

// function move (position, roll) {
//   return mov = position + (roll * 2)
// }

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// function betterThanAverage(classPoints, yourPoints) {
//   return yourPoints > classPoints.reduce((a,b) => a + b, 0) / classPoints.length
// }

//Define a function that counts how many more (or less) pieces of toast you need in the toasters. Even though you need more or less, the number will still be positive, not negative.
 
// function sixToast(num) {
//     if (num < 6 ){
//       return 6 - num
//     }else
//       return num - 6
//    }
//  Remove all exclamation marks from the end of sentence.
// function remove (s) {  
//     while(s && s.slice(-1) == "!")
//       {
//         s = s.slice(0,-1)
//       }
//     return s
//   }

//In this kata you will create a function that takes in a list and returns a list with the reverse order.

// function reverseList(list) {
//     return list.reverse()
//    }

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

// Example

// text before = "abc"
// // character   = "z"
// // text after  = "zzz"

// function contamination(text, char){
//     return text.replace(/./g, char)
//  }

// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

// function twoSort(s) {
//     return s.sort()[0].split('').join('***')
//   }
//Write a function to split a string and convert it into an array of words.
// function stringToArray(string){

//     return string.split(" ")
   
//    }
// write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

// function stringy(size) {
//     let str = '';
    
//     for(let i = 1; i <= size; i++ )
//        str += i%2
//        return str  
//   }
 
// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.
  
// function check(a, x) {
//     return a.includes(x)
//   }

// haracter recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// function correct(s){
  
//     s = s.split('');
//   for(let i = 0; i < s.length; i++){
//        if (s[i] === '5') s[i] = 'S';
//      else if (s[i] === '0') s[i] = 'O';
//      else if (s[i] === '1') s[i] = 'I';
//   }
// //  return s.join('')
// // }

// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// function doubleChar(str) {
//     const doubleChar = str.split('').map(c => c + c).join('')
//     return doubleChar 
//   }

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// // Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
// function bonusTime(salary, bonus) {
//     // your code here
//       if(bonus === true){
//         return "£"+salary * 10
//       }else{
//         return "£"+salary
//       }
//     }
// Write a function that returns a string in which firstname is swapped with last name.
// function nameShuffler(str){
//     return str.split(' ').reverse().join(' ')
//   }

// Create a method to see whether the string is ALL CAPS.


// String.prototype.isUpperCase = function() {
//     if(this === this.toUppercase){
//       return true
//     }else{
//       return false
//     }
//   }

// We need a function that can transform a number (integer) into a string.

// What ways of achieving this do you know?

// function numberToString(num) {
//     // Return a string of the number here!
//     return num.toString()
    
//   }

// You can print your name on a billboard ad. Find out how much it will cost you. Each character has a default price of £30, but that can be different if you are given 2 parameters instead of 1 (allways 2 for Java).

// You can not use multiplier "*" operator.

// If your name would be Jeong-Ho Aristotelis, ad would cost £600. 20 leters * 30 = 600 (Space counts as a character).

// function billboard(name, price = 30){
//     let total = 0
//     for( let i = 0; i < name.lenght; i++){
//         total += price
//     }
//     return total
//   } 
// Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

// "I love you"
// "a little"
// "a lot"
// "passionately"
// "madly"
// "not at all"
// If there are more than 6 petals, you start over with "I love you" for 7 petals, "a little" for 8 petals and so on.

// When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

// // Your goal in this kata is to determine which phrase the girls would say at the last petal for a flower of a given number of petals. The number of petals is always greater than 0.
// function howMuchILoveYou(nbPetals) {
//     let n = nbPetals % 6
//     if(n === 1){
//        return "I love you"
//     }else if(n === 2){
//       return "a little"
//     }else if(n === 3){
//       return  "a lot"
//     }else if(n === 4){
//       return "passionately"
//     }else if(n === 5){
//       return "madly"
//     }else if((n === 6) || ( n=== 0 )){
//       return "not at all"
//     }
// }
// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// // Return the resulting array.
// function isVow(a){
//     for(var i=0;i<a.length;i++){
//     if(a[i]===97){a[i]="a";}
//     if(a[i]===101){a[i]="e";}
//     if(a[i]===105){a[i]="i";}
//     if(a[i]===111){a[i]="o";}
//     if(a[i]===117){a[i]="u";}
//     }
//     return a 
// //     }
// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java, Scala, and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell, and Lua) or "¥" (Rust).
// function bonusTime(salary, bonus) {
//     if(bonus){  
//       return `£${salary*10}`
//     }else{
//       return `£${salary}`
//     }
//    }
// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide.
// function mouthSize(animal) {
//     if(animal.toLowerCase() === "alligator"){
//       return "small"
//     }else{
//       return "wide"
//    } 
//   }
// Finish the uefaEuro2016() function so it return string just like in the examples below:

// uefaEuro2016(['Germany', 'Ukraine'],[2, 0]) // "At match Germany - Ukraine, Germany won!"
// // uefaEuro2016(['Belgium', 'Italy'],[0, 2]) // "At match Belgium - Italy, Italy won!"
// // uefaEuro2016(['Portugal', 'Iceland'],[1, 1]) // "At match Portugal - Iceland, teams played draw."
// function uefaEuro2016(teams, scores){
//     if(scores === scores){
//       return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
//     }
//     if( scores[0] < scores[1]){
//       return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won.`
//     }else{
//       return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won.`
//   }
// //   }
// Your code will show Full name of the neighbor and the truncated version of the name as an array. If the number of the characters in name is less than or equal to two, it will return an array containing only the name as is"
// function whoIsPaying(name){
//     if(name.length <= 2){
//       return [name]
//     }else{
//       return [name, name.slice(0,2)]
//     }
//   }

// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.
// function joinStrings(string1, string2){
//     return `${string1} ${string2}`.toString()
// //  }
// omplete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.
// function reverseWords(str){
//     return str.split(" ").reverse().join(" ")
//   }
// You get any card as an argument. Your task is to return the suit of this card (in lowercase).
// function defineSuit(card) {
//     if(card.inludes('♣'))return 'clubs'
//     if(card.inludes('♦'))return 'diamonds'
//     if(card.inludes('♥'))return 'hearts'
//     if(card.inludes('♠'))return 'spades'
//     }
//Your mission is to implement a function that converts the following potentially harmful characters:
//function htmlspecialchars(formData) {
//let noHarm = '';
//    for(let i = 0; i < formData.length; i++){
//      if(formData[i] === '<'){
//        noHarm += '&alt'
//      }else if(formData[i] === '>'){
//        noHarm += ' &gt'
//      }else if(formData[i] === '"'){
//        noHarm += '&qout'
//      }else if(formData[i] === '&'){
//        noHarm += '&amp'
//      }else{
//        noHarm += formData
//      }
//    }
//    return noHarm
// //  }
// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.
// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1);
//   }
//Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the //longer string on the inside. The strings will not be the same length, but they may be empty ( zero length ).
// function solution(a, b){
//     // your code here
//     return a.length < b.length ? a + b + a : b + a + b;
//   }
// Can you implement a function that will return number of words in a string?

// You have to ensure that spaces in string is a whitespace for real.

// // Let's take a look on some examples:
// function countWords(str) {
//     // ...
//       let split = str.split(' ')
//       let count = 0
//       for( let i = 0; i < split.length; i++){
//         if(split[i].lenght!=0)
//           count++
//       }
//     return count
//   }
// Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
// function gooseFilter (birds){
//     let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
//     return birds.filter(b => !geese.includes(b))
//   };
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.
// function feast(beast, dish) {
//     //your function here
//         return beast [0] === dish[0] && beast[beast.lenght -1] === dish[dish.length -1]
//     }
// You will be given an array of numbers which can be used using the String.fromCharCode() (JS), Tools.FromCharCode() (C#) method to convert the number to a character. It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.
// var ArrowFunc = function(arr) {
//     return arr.map(x => String.fromCharCode(x)).join('')
//   }

// Create a method to see whether the string is ALL CAPS.
// String.prototype.isUpperCase = function() {
//     // your code here
//     return this.toUpperCase() === this.toString()
//   }
//You must output a string containing the two strings with the word ```' are '```
  // var templateStrings = function(noun, adjective) {
//   return `${noun} are ${adjective}`
// }
  
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//  function doublesCharactersOfString(str){
//  return str.split("").map(c => c + c).join("")
// }
//Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// const remove = string => string.split('!').join('') + '!'

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

// The string will always start with a letter and will never be empty.

// function capitalizeWord(word) {
// //     return word[0].toUpperCase() + word.slice(1)
// //   }
// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
//Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
// split
//Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.
// function toBinary(n){
//     return +n.toString(2)
//   }
//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//function isIsogram(str){
  
// for(let i = 0; i < str.length; i++ )
// for (let j = 0; i < str.length; i++)
//   if(str[i] === str[j]){
//       return false
//   }
// return true
// }

// Count the number of divisors of a positive integer n.

// // Random tests go up to n = 500000.
// function getDivisorsCnt(n){
//     // todo
//   let length = 0
//    for(let i = 1; i < n; i++){
//      if(n%i === 0){
//        length++
//      }
//    }
//   return length;
// }
// function countBy(x, n) {
//     let arr = []
    
//     for(let i = 1; i <= n; i++){
//       arr.push(x * i)
//     }
//     return arr
//   }
//   Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).
// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

// Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
// Each part will be in a string
// Elements of a pair must be in the same order as in the original array.
// function partlist(arr) {
//     let returnArr = [];
//     for(let i = 1; i<arr.length; i++){
//       let newArr = []
//       newArr.push(arr.slice(0,i).join(" "));
//       newArr.push(arr.slice(i).join(" "));
//       returnArr.push(newArr)
//     }
//   return returnArr
// }
//Time to test your basic knowledge in functions! Return the odds from a list:
// function odds(values){
//   // arrow it
//   return values.filter(values => values % 2 !== 0);
// }
// In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older.

// users table schema

// name
// age
// NOTE: Your solution should use pure SQL. Ruby is used within the test cases just to validate your answer.
// SELECT * FROM users WHERE <= 18


// SELECT * 
// FROM users 
// WHERE age >= 18;

// For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50
// SELECT *
// FROM people 
// WHERE age > 50
// ORDER BY age DESC 

// // Your task is to sort the information in the provided table 'companies' by number of employees (high to low). Returned table should be in the same format as provided:
// SELECT * 
// FROM companies
// ORDER BY employees desc

// Your function takes as parameter the number of times the cube has been cut. You must return the number of smaller cubes created by the cuts that have at least one red face.

// SELECT n, CASE
//       WHEN n = 0 THEN 1 
//       ELSE n * n * 6 + 2
//     END AS res
//     FROM squares
//By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.
// SELECT n, 
//   CASE
//     WHEN n <= 10 THEN 'Hardly any'
//     WHEN n <= 50 THEN 'More than a handful!'
//     WHEN n <= 100 THEN 'Woah that''s a lot of dogs!'
//   ELSE  '101 DALMATIONS!!!'
// END AS res
// FROM dalmatians;
//Write a function that returns the total surface area and volume of a box as an array: [area, volume]
// SELECT
//   width,
//   height,
//   depth
//    ((width * height) * 2) + ((width * depth) * 2) + ((height * depth) * 2) as area;
//     width * height * depth as volume
//      FROM box
//      ORDER BY
//       area,
//       volume,
//       width,
//       height;
// Select names, and countries of origin of all the travelers, excluding anyone from Canada, Mexico, or The US.
// SELECT name,country
// FROM travelers
// WHERE country NOT IN ('Canada','Mexico','USA')
// For each row: Return first x characters of the project name where x = commits. Return last y characters of each address where y = contributors.
// SELECT
//   left(project, commits) AS project,
//   right(address, contributors) AS address
// FROM repositories;
// // Write an SQL query that selects the names of the opinion giver and receiver(opinion_giver and opinion_receiver), along with their current (current_opinion) and previous (previous_opinion) opinions. Include only records where the current opinion differs from the previous opinion. Sort the results first by the name of the opinion giver and then by the name of the opinion receiver - both in ascending alphabetical order.
// SELECT
//   giver.name AS opinion_giver
//   receiver.name AS opinion_reciever,
//   po.current_opinion
//   po.previous_opinion
//   FROM people_opinions AS po
//   INNER JOIN people AS giver ON giver.person_id = po.opinion_giver_id
//   INNER JOIN people AS giver ON reciever.person_id = po.person_id
//   WHERE po.current_opinion IS DISTINCT FROM po.person_id
//   ORDER BY opinion_giver ASC, opinion_receiver ASC

// Write a SQL query that performs the following operations:

// Extracts and counts public domain email addresses from the users table, using the public_domains table for reference.
// Filters out non-public email addresses.
// Aggregates the data to count the number of users per public domain.
// Sorts the result in descending order based on the count of users per domain with a secondary sorting criterion that sorts alphabetically by domain in case of a tie in the counts.
// select domain, count(*) user_count 
// from users 
// join public_domains on split_part(email,'@',2) = domain
// group by domain
// order by user_count desc, domain
// Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
// function points(games) {
//   let total = 0;
//   games.map(game => {
//   if (game[0] === game[2]) {
//     total += 1;
//   }else if(game[0] > game[2]){
//     total += 3
//   }
//   })
//   return total
// // }
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
// const smash = words => words.join(' ');
// Write a function to split a string and convert it into an array of words
// function stringToArray(string){

// 	return string.split(" ")

// }
// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.
// function well(x){
//   let goodIdeas = 0;

//     for(let i = 0; i < x.length; i += 1){
//       if(x[i]== "Good"){
//         goodIdeas += 1
//       }
//       if(goodIdeas >= 3){
//         return "I small a series!"
//       }
//     }
//   return goodIdeas >= 1 ? "publish!" : "Fail"
// }
// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!
// function firstNonConsecutive (arr) {
//   for(let i = 0; i < arr.length - 1 ; ++i){
//     if (arr[i] + 1 !== arr[i + 1]) {
//       return arr[i + 1]
//     }
//   }
//   return null
// // }
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:


// function grow(x){
//   let sum = 1
//   for(let i = 0; i < x.length; i++){
//     sum *= x[i]
//   }
//   return sum
// }
// Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

// [sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
//    7      6      5      4      3            2      1
// If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

// Note: there will always be exactly one wolf in the array.

// Examples

// Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
// Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

// Input: ["sheep", "sheep", "wolf"]
// Output: "Pls go away and stop eating my sheep"
// function warnTheSheep(queue) {
//   let n = queue.length - queue.indexOf('wolf') - 1
//   if ( n === 0){ 
//     return "Pls go away and stop eating my sheep"
//     } else {
//     return `Oi! Sheep number ${n}! You are about to be eaten by a wolf!`
//     }
// // }
// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:
// function findNeedle(haystack) {
//   return `found the needle at position ${haystack.indexOf('needle')}`
// }
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

// Define a function that removes duplicates from an array of non negative numbers and returns it as a result.

// The order of the sequence has to stay the same.

// Examples:

// Input -> Output
// [1, 1, 2] -> [1, 2]
// [1, 2, 1, 1, 3, 2] -> [1, 2, 3]

// function distinct(arr) {
//   let res = [];
//    for(let i = 0; i < arr.length; i++){
//      if(!res.includes(arr[i]))
//        res.push(arr[i])
//    }
//    return res
// //  }
// The objective of Duck, duck, goose is to walk in a circle, tapping on each player's head until one is chosen.

// Task:

// Given an array of Player objects and a position (first position is 1), return the name of the chosen Player.
// name is a property of Player objects, e.g Player.name

// Example:

// duck_duck_goose([a, b, c, d], 1) should return a.name
// duck_duck_goose([a, b, c, d], 5) should return a.name
// duck_duck_goose([a, b, c, d], 4) should return d.name

// function duckDuckGoose(players, goose) {
//   for(let i = 0; i < players.length; i++){
//     if (i === (goose - 1) % players.length){
//       return players[i].name
//     }
//   }
// }
// We need to calculate the size of a weapon's "attack area". With a 1.0 meter sword, for example, a player can attack in an area of 3.14 square meters around them. You can use the area_of_circle function to do that calculation.

// Fix the bug on line 13 by calling the area_of_circle function with the spear_length as input and store the result in the spear_area variable.
// def area_of_circle(radius):
//     pi = 3.14
//     area = pi * radius * radius
//     return area

// sword_length = 1.0
// spear_length = 2.0

// # don't touch above this line

// sword_area = area_of_circle(sword_length)
// spear_area = 0

// # don't touch below this line

// print("Sword length:", sword_length, "meters.")
// print("Sword attack area:", sword_area, "square meters")

// print("Spear length:", spear_length, "meters.")
// print("Spear attack area:", spear_area, "square meters")

// Complete the become_warrior function. It accepts 2 inputs: the full_name string, and the power integer. It should return 2 values: a "title" string and a "new power" integer.

// Create the title using f-strings. Combine full_name with "the warrior" in this format:
// full_name the warrior
// Copy icon
// Create the new_power value that is equal to the input power plus one.
// Return both title and new_power
// def become_warrior(full_name, power):
//     # ?


// # Don't edit below this line


// def main():
//     test("Frodo Baggins", 5)
//     test("Bilbo Baggins", 10)
//     test("Gandalf The Grey", 9000)


// def test(input1, input2):
//     result1, result2 = become_warrior(input1, input2)
//     print(result1, "has a power level of:", result2)


// main()
// Complete each of the get_XXX_bits functions. Simply use the bitwise & operation on the input of the user's permission bits and the appropriate guild permission bits variable, and return the resulting bits for them to be checked by the tests.

// 4 values have been provided, use the appropriate one for each function:

// can_create_guild
// can_review_guild
// can_delete_guild
// can_edit_guild
// Note: The get_XXX_bits functions return the bits and the test code compares the result to the original permission value to see if it matches!
// can_create_guild = 0b1000
// can_review_guild = 0b0100
// can_delete_guild = 0b0010
// can_edit_guild = 0b0001


// def get_create_bits(user_permissions):
//     pass


// def get_review_bits(user_permissions):
//     pass


// def get_delete_bits(user_permissions):
//     pass


// def get_edit_bits(user_permissions):
//     pass
// Fantasy Quest doesn't have any way for players to know if they are strong enough to fight certain enemies.

// If a player's power level is greater than the enemy's defense, that player has an advantage
// If the player's power and enemy's defense are equal, they are evenly matched
// Otherwise, that player has a disadvantage.
// Assignment
// On line 4 write an if/elif/else block. Using the rules specified above, set advantage, disadvantage, or evenly_matched to True depending on the values of player_power and enemy_defense.

// For example, if the player's power is greater than the enemy's defense, advantage should be set to True. etc.
// def combat_evaluation(player_power, enemy_defense):
//     advantage, disadvantage, evenly_matched = False, False, False

//     if player_power > enemy_defense:
//         advantage = True

//     if player_power == enemy_defense:
//         evenly_matched = True   
        
//     if player_power < enemy_defense:
//         disadvantage = True
    
        
//     return advantage, disadvantage, evenly_matched
// In Fantasy Quest, player characters regenerate health when standing still while away from enemies. This means they will gain health but can't run from enemies that are coming towards them while regenerating.

// Complete the regenerate function using a while loop. It takes current_health, max_health and enemy_distance integers.

// While regenerating health, a character gains 1 health each iteration until it reaches the max_health amount.
// The enemy_distance shortens by 2 for each iteration.
// If an enemy is at a distance of 3 or less from the character, the character stops gaining health.
// Return the new current_health after health regeneration stops.
// def regenerate(current_health, max_health, enemy_distance):
//     while current_health < max_health:
//         current_health += 1
//         enemy_distance -= 2
//     if enemy_distance <= 3:
//         return
//     return current_health
// In the calculate_flurry_crit function, write a loop that calculates and returns the total_damage of the flurry as a critical hit.

// The function takes 2 inputs num_attacks, base_damage.

// Range over the num_attacks for the flurry
// Calculate the total damage for each attack within the flurry. Remember, each attack is a critical hit and does double the base_damage!
// The final swing of the flurry should do 4x the base_damage
// Return the total damage


// def calculate_flurry_crit(num_attacks, base_damage):
//     for i in range(num_attacks):
//         print(i)      
//         total_damage = base_damage * 2
//         total_damage += i
//     if i == num_attacks - 1:
//         final_swing = i * 4
//     return total_damage + final_swing

// Complete the calculate_experience_points function.

// The calculate_experience_points function takes a single parameter named level. Determine the total XP they have gained to reach the specified level from level 1 and return it.

// def calculate_experience_points(level):
//    xp_gained = level  
//     if level * 5 >  
//     return(level,xp_gained)
            
// We need to check if a player has a specific item in their inventory. In the contains_leather_scraps function, use the no-index syntax to iterate over each item in items. If you find an item called Leather Scraps, set the found variable to True.

// def contains_leather_scraps(items):
//     found = False

//     # don't touch above this line

//     for item in items:
//         if item == "Leather Scraps":
//             found = True
            
//     # don't touch below this line

//     return found

// Let's add another function to our inventory system. Write a function that returns the first element from a list. If the list is empty then return the string ERROR instead.

// def get_first_item(items):
//     long = len(items)
//     if long == 0:
//         return "ERROR"
//     else:
//         return items[0]
        
// Write the get_odds_and_evens function to loop through the numbers list and check if each number in the list is either odd or even.

// Increment the num_evens counter if even, and the num_odds counter if it’s odd. Lastly, return the two values num_odds and num_evens in that order.
    
// def get_odds_and_evens(numbers):
//     num_odds = 0
//     num_evens = 0

//     # Don't touch above this line

//     pass
