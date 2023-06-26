// console.log("hello");
// var   let   const 

// var city_Name = "karad"; 
// console.log(city_Name);


// data types 

 // string 
 // numbers 
 // boolean 
 // undefined
 // null 
 // bigint
 // object
 // symbol 

 // string 
//  var cityName = "karad";
//  console.log(  typeof(cityName)  );
//  console.log(cityName);


//  // numbers 

//  var pinCode = 64565;
//  console.log(  typeof(pinCode)  );
//  console.log(pinCode);


// // boolean 
// var  isCollege = true; // false 
// console.log(  typeof(isCollege)  );
// console.log(isCollege);


// // undefined :
// var job;
// console.log(  typeof(job)  );
// console.log(job);



// var profile = null;
// console.log( typeof(profile) );
// console.log(profile);



// var myData = {
//     fname : "js",
//     myAge : 6546,
// }

// console.log(  typeof(myData));
// console.log(myData);


// var numbers = [ 1 , 2 ,3 ,4 ,5];
// console.log(  typeof(numbers) );
// console.log(numbers);



// Data tpyes :



// console.log(  "50" + 20); // 5020
// console.log(  "50" - 20); // bug 
// console.log(  "karad" + 20); // karad20
// console.log(  "karad" - 20); // NaN == Not a Number  


// false =  0
// true  = 1
// console.log( true  +  true );

// var a = "karad"
// var b = "city"
// space " "
// console.log( a + " " + b );




// aasingment operator 
// = 

// var cityName = "karad";
// console.log(cityName);


// +  -  *  ?  %
// var a = 21;
// var b = 5;

// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a % b);



// 
// var a = "10";
// var b = 10;

// console.log(a===b);
// == value check 
// === value + datatype


// var a = 20;
// var b = 10;
// // equal to 
// console.log( a != b);


// not equal to (!=  )
// console.log( a != b);
// 


// var a = 20;
// var b = 20;

// console.log( a > b );
// console.log( a >= b );



// var a = 20;
// var b = 2;

// console.log( a < b );
// console.log( a <= b );

//increment --X   X--

// var num = 10;
// var newNum = --num + 10;
// console.log(newNum);


// 1 - 10 

// for(var num = 0; num < 10; num++   ){
//     console.log(num);

// }


// 🤔🤔logical operators 

// &&      ||    ! logical not 

// var a = 10;
// var b = 20;

// console.log( ( a > b)   &&     (a > 0)    );
// false    true 

// email 
// password 




// var a = 10;
// var b = 20;

// console.log(   !( (a > b)  || ( a > 0)  ||   (a > 50 ) )  );
// false   true   false
// true 



// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.

// var langs = 'JAVA';
// var langss = 'SCRIPT';
// // " "

// console.log(langs + "and" +  " " + langss);
// //es6   

// console.log( ` ${langs} and   dfusgfusdgfusdgfusdgfusdfudsfudsy fusdyfuys dufyudy fusd y  ${langss}   `     );


// What will be the output of 3**3?
// 3**3 27
// 2**3   

// console.log(4**3); // 4*4*4

// What will be the output, when we add a number and a string?

// console.log(30 + "java");


// Write a program to swap two numbers?
// a=5 , b=10  c = ? 

// var a = 5;  
// var b = 10; 
// var c ;

// c = a + b; // c = 15 
// a = c - a; // a = 10
// b = c - b; // b = 5
      
// // output 
// console.log(a); // 10
// console.log(b); // 5











  
//controll statements  cooming soon 

//  * 1️⃣If...Else */

// The if statement executes a statement if a specified condition is truthy. 

// If the condition is falsy, another statement can be executed.

//   if(){

//   }
  
//   else{
    
//   }

// voting age > 18 

// var age = 10;
// if(age > 18){
//     console.log("you can vote");

// }else{

//     console.log("you can't vote");

// }


// city = karad , age = 18   gender = male/female 

//   var age = 19;
//   var cityName = "karad";
//   var gender = "female";

// if(age > 18 ){
//     console.log("age is matched");

//     if(cityName === "karad"){
//         console.log("cityName is ok");

//         if(gender === "male"){
//             console.log(gender);

//         }else{
//             console.log("gender not matched");
//         }

//     }else{
//         console.log("cityName not matched");
//     }

// }else{
//     console.log("age is not matched");
// }




// var age = 19;
// var cityName = "karad";
// var gender = "female";

// if(age > 18 && cityName ==="karad"  &&  gender === "male"){
//     console.log("you can vote");

// }else{
//     console.log("you can't vote");

// }






// lleap year 

// 2023 366 4 years      
// year % 4 = 0;
// year % 100 = 0 

// var year = 2000;
// if(year % 4 === 0 || year % 100 === 0 &&  ){
//     console.log("ok");

// }else{
//     console.log("not ok");


// }
// var score = 0;
// if( score === 1 ){
//     console.log("yes");

// }else{
//     console.log( " no");

// }






// 2️⃣Conditional (ternary) operator

// The conditional (ternary) operator is the only JavaScript operator 
// that takes three operands

// var age = 19;
// if(age >= 18){
//   console.log("you can vote");

// }else{
//   console.log("you can't vote");
// }




//  // 2️⃣Conditional (ternary) operator
// var age = 9;
// var result = (age >= 18 ) ? "home" : "login";
// console.log(result);

// var result = (age >= 18 ) ? "yes you can vote" : "you can't vote";
// console.log(result);


// var result = (age >= 18) ?  "yes , you can vote" : "No , you can't vote";
// console.log( result );  


// 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }



// 3️⃣ switch Statement  // switch , case ,  break , 
// Evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case.





// 1st without break statment 
// Find the Area of circle, triangle and rectangle?

// console.log("hello");





// var area = "circrg";

// var PI = 3.142,  l=5,  b=4, r=3;


// if(area == "circle"){
//   console.log("the area of the circle is : " + PI*r**2);

// }else if(area == "triangle"){
//   console.log("the area of the triangle is : " + (l*b)/2);


// }else if(area == "rectangle"){
//   console.log("the area of the rectangle is : " + (l*b));


// }else{
//   console.log("please enter valid data");
// }



// [ samsung ,  apple]


// // // switch , case , break 
// var area = "rectangle" ;
// var PI = 3.142, l=5, b=4, r=3;

// switch(area){

//   case 'circle':
//     console.log("the area of the circle is : " + PI*r**2);
//     break;

//   case 'triangle':
//     console.log("the area of the triangle is : " + (l*b)/2);
//     break;

//   case 'rectangle':
//     console.log("the area of the rectangle is : " + (l*b));
//     break;

//   default:
//     console.log("please enter valid data");
// }  
// 





// 🤗break
// Terminates the current loop, switch, or label 
// statement and transfers 
// program control to the statement following the terminated statement.


// 🤗continue
// Terminates execution of the statements in the current iteration of the 
// current or labeled loop, and continues execution of the loop with the 
// next iteration.






// 4️⃣ While Loop Statement
// The while statement creates a loop that executes a specified statement 
// as long as the test condition evaluates to true. 
//   
// while(){

// }

// 1 2 3 4 .. 10

// var num = 1; // declairation 
// while(num <= 10 ){  // 11 < 10
//     console.log(num); // 10
//     num++; // 11

// }


// var num = 10; // declairation 
// while(num >= 1 ){  // 11 < 10
//     console.log(num); // 10
//     num++; // 11

// }


// 4gb 

// while(num <= 10){  // condition  //  1  2  3 
//   console.log(num); // 1   2   3   10 
//   num++; // itteration  // 1 + 1 == 2  2 + 1 = 3   10 + 1 = 11 

// }



// do{

// }while()


// 5️⃣ Do-While Loop Statement


// var num = 20;
// do{

//   console.log(num);// 20
//   num++; // 21

// }while(num <=10 );  // 21 < 10 





// var num = 30;
// do{

//   console.log(num); // 1 
//   num++; // 2 

// }while(num <= 10);  // 21 < 10 





// for loop

// for(){

// }
// 1 - 10
// karad  
// insta -- post 
// arr 
// objects arr 


                //    0            1        2
// var contactlist = [ "rahul","sachin","vijay"  ];

// console.log(contactlist);

// for(var i=0; i <= contactlist.length-1;   i++  ){
//     console.log(contactlist[i]);

// }








// for(var num = 1;   num <= 10;  num++ ){
// //     console.log("karad");
//     console.log(num);

// }


// 10 - 0
// for(var num=10; num >=0; num--){
      
         

// }





// tableof 8 
// output 8*1=8
// output 8*2=16
// output 8*3=24

var tableof = 12;
for(var i=1;  i<= 10;  i++){
    // console.log( tableof + "*" + i + "=" +  tableof*i );

    console.log(   ` ${tableof} and  ${i} and  ${tableof*i} `    );

}




  







































   

