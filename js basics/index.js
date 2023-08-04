// // BP : COLOR CHANGE WHEN CLICK ON  BUTTON
// //const btn=document.getElementById("btncol");
// function onClick(){
// 	document.body.style.backgroundColor='blue';
// }
// //btn.addEventListener('click',onClick());

// // BP:  AUTOMATIC PASSWORD GENERSTOR
// let passw=document.getElementById("password");
// let pass1="";
// function pass(){
// 	let str="qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890@#$!%&*?";
// 	for(let i=0;i<6;i++)
// 	{
// 		pass1+=str[Math.floor(Math.random()*70)]+"";
// 		console.log(pass1);
// 	}
// 	passw=pass1;
// 	alert(pass1);
// 	document.getElementById("div3").innerHTML=pass1;
// 	document.write(pass1+" is your password");
// }

// // CWH:  Guess the number game:
// // Instructions:
// // 1.Generate a random number using the Math.random() function and store it in a variable.
// // 2.Take input from the user using the prompt() function and store it in a variable.
// // 3.Compare the user's guess with the generated number using if-else statements and inform the user accordingly.
// // 4.Repeat steps 2 and 3 until the user guesses the correct number.
// // 5.Keep track of the number of turns it took the user to guess the correct number and calculate the score accordingly.
// // 6.Terminate the program and show the final score.
// let score=0;
// let chances=0;
// let random_number=Math.floor(Math.random()*100)+1;
// let input=Number.parseInt(prompt("Enter a number between 1-100"));
// while(input!=random_number)
// {

// 	if(input<random_number)
// 	{
// 		chances++;
// 		input=Number.parseInt(prompt("Enter a number between 1-100.Your number is less than the original number"));
// 	}
// 	else if(input>random_number)
// 	{
// 		chances++;
// 		input=Number.parseInt(prompt("Enter a number between 1-100.Your number is greater than the original number"));
// 	}
// }
// score=100-chances;
// alert(`Congratulations!! You guessed the number in ${chances} chances with score of ${score}`);

// // CWH:wap using prompt to take ip of age and alert to tell if he can drive
// // confirm to ask the user if he want to see the prompt again
// // use console error to log the error if the age is negative

// const drive = (age) => {
//   return age > 18 ? true : false;
// };
// let runAgain = true;
// while (runAgain) {
//   let age = prompt("Enter your age");
//   age = Number.parseInt(age);
//   if (age < 0) {
//     console.error("Enter a valid age");
//     break;
//   }
		
//   if (drive()) alert("You can drive !!!");
//   else alert("You cannot drive!");
//   runAgain = confirm("Do you want to see the prompt again?");
// }

// //CWH: to redirect to another website
// let num = prompt("Enter your num");
// if(num>50)
// 		location.href="https://google.com";

// //CWH: change color based on user input of color
// let color=prompt("enter color");
// document.body.style.background=color;

// // CWH: Snake water gun:
// // The game should ask you to enter S, W or G. The computer should be able to randomly generate S, W or G and declare win or loss using alert
// // Use alert, prompt and confirm whereever required!

// let input = prompt("enter your choice among S,W,G");
// //let input=document.getElementsByClassName();

// let str="SWG";
// let out=str[Math.floor(Math.random()*3)];
// document.write("Computer chose: "+out+"   ");
// if(input=="S")
// {
// 	if(out=="W")
// 	document.write("You win!");
// 	else if(out=="G")
// 	document.write("You loose! Computer win!");
// 	else
// 	document.write("You both are snakes! its a tie!");
// }
// else if(input=="W")
// {
// 	if(out=="G")
// 	document.write("You win!");
// 	else if(out=="S")
// 	document.write("You loose! Computer win!");
// 	else
// 	document.write("You both are water! its a tie!");
// }
// else if(input=="G")
// {
// 	if(out=="S")
// 	document.write("You win!");
// 	else if(out=="W")
// 	document.write("You loose! Computer win!");
// 	else
// 	document.write("You both are gun! its a tie!");
// }








// BP /*1. Create an array called students containing three objects representing three students. Each student object should have the following properties:
// name: the student's name as a string
// age: the student's age as a number
// grades: an array of numbers representing the student's grades (out of 100) for three assignments

//  Create a function called calculateAverage that takes in a student object as a parameter and returns the average of their grades as a number
	
// 	Create a function called findTopStudent that takes in an array of student objects as a parameter and returns the student object with the highest average grade. If there are multiple students with the same highest average grade, return the first one in the array*/
// const students = {
//   {
//     name: "Parul",
//     age: 22,
//     grade: [90, 95, 88],
//   },
//   {
//     name: "Shiv",
//     age: 20,
//     grade: [80,99, 89],
//   },
//   {
// 			name:"Sahni",
// 			age:22,
// 			grade:[91,92,98]
// 		},
// 	};
// console.log(students);
// let calculateAverage=(students)=>{
// 	return ((students[1].grade[0] + students[1].grade[1]+students[1].grade[2])/3);
// }
// document.write(calculateAverage);
