// JavaScript Questions
// 1. Create a variable.js file and declare variables and assign string, boolean, undefined and null data types, Display all the value with there type.

// let name = "ritik";
// let isStudent = true;
// let address;
// let number = null;

// console.log(name);
// console.log(isStudent);
// console.log(address);
// console.log(number);




// 2. Declare variables to store your first name, last name, marital status, country and age and display them using interploation method.
// let firstName = "Ritik";
// let lastName = "Malviya";
// let maritalStatus = "Single";
// let country = "INDIA";
// let age = 23;

// console.log(`
//     Name: ${firstName} ${lastName}
//     Marital Status: ${maritalStatus}
//     Country: ${country}
//     Age: ${age}    
// `)




// 3. Decalre a varibale and assign value to it and change all the string characters to capital letters using toUpperCase() method.
// let country ="India";
// console.log(country.toUpperCase());

// 4. Check if the string contains a word Script using includes() method.
// let article = "Check if the string contains a word Script using includes() method."
// console.log(article.includes("Script"));

// 5. Split the string into an array using split() method
// let word = "qwerty";
// console.log(word.split(""))

// 6. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
// let mnc = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
// console.log(mnc.split(","))

// 7. Use lastIndexOf to determine the position of the last occurrence of a script.
// let mnc = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9];
// console.log(mnc.indexOf(2))
// console.log(mnc.lastIndexOf(2))

// 8. Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'.
// let sentence = 'You cannot end a sentence with because because because is a conjunction'
// console.log(sentence.search('beacuse'))        //31

// 9. Use trim() to remove any trailing whitespace at the beginning and the end of a string.
// let name = " ritik "
// console.log(name.trim())

// 10. Boolean value is either true or false.
//     - Write three JavaScript statement which provide truthy value.
//     - Write three JavaScript statement which provide falsy value.

// 11. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
//     - 4 > 3      //true
//     - 4 >= 3     //true
//     - 4 < 3      //false
//     - 4 <= 3     //false
//     - 4 == 4     //true
//     - 4 === 4    //true
//     - 4 != 4     //false
//     - 4 !== 4    //false
//     - 4 != '4'   //false
//     - 4 == '4'   //true
//     - 4 === '4'  //false
//     - Find the length of python and jargon and make a falsy comparison statement.
// console.log(4>3);
// console.log(4>=3);
// console.log(4<3);
// console.log(4<=3);
// console.log(4==4);
// console.log(4===4);
// console.log(4!=4);
// console.log(4!==4);
// console.log(4!='4');
// console.log(4=='4');
// console.log(4==='4');

// let var1 = 'python';
// let var2 = 'jargon';
// console.log(var1.length != var2.length)

// 12. Use the Date object to do the following activities
//     - What is the year today?
//     - What is the month today as a number?
//     - What is the date today?
//     - What is the day today as a number?
//     - What is the hours now?
//     - What is the minutes now?
//     - Find out the numbers of seconds elapsed from January 1, 1970 to now.

// let now = new Date();
// let old = new Date(2022,8,15);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());
// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log((now-old)/1000);

// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// let areaTraingle = (height,base)=>{
//     console.log(height*base*0.5);
// }
// areaTraingle(10,20)

// 14. Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)
// let slope = (...args)=>{
//     let m = (args[3]-args[2])/(args[1]-args[0]);
//     console.log(m)
// }
// slope(2,6,2,10) //2

// 15. Calculate the slope, x-intercept and y-intercept of y = 2x -2


// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
// let areaOfCircle = (r) =>{
//     return (Math.PI * r * r);
// }
// let circumferenceOfCircle = (r) =>{
//     return (2*Math.PI * r);
// }
// console.log(areaOfCircle(10));
// console.log(circumferenceOfCircle(10));

// 17. Create a human readable time format using the Date time object
//     - YYYY-MM-DD HH:mm
//     - DD-MM-YYYY HH:mm
//     - DD/MM/YYYY HH:mm
// let now = new Date();
// let YYYY = now.getFullYear();
// let MM = now.getMonth();
// let DD = now.getDate();
// let HH = now.getHours();
// let mm = now.getMinutes();

// console.log(`${YYYY}-${MM<10 ? '0'+MM:MM}-${DD<10 ? '0'+DD:DD} ${HH<10 ? '0'+HH : HH}:${mm<10 ? '0'+mm : mm}`);
// console.log(`${DD}-${MM}-${YYYY} ${HH}:${mm}`);
// console.log(`${DD}/${MM}/${YYYY} ${HH}:${mm}`);

// 18. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
// let LL = (age) =>{
//     if(age<18){
//         console.log(`you need wait ${18-age} year to drive`)
//     }else{
//         console.log('You are old enough to drive')
//     }
// }
// LL(16);

// 19. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
// let num = 4
// if(num % 2 == 0){
//     console.log("number is even")
// }else{
//     console.log('number is odd')
// }

// 20. Write a code which can give grades to students according to theirs scores:
//     - 80-100, A
//     - 70-89, B
//     - 60-69, C
//     - 50-59, D
//     - 0-49, F

// let mark = 76;
// if( mark>=90 && mark <=100)
//         console.log('A')
// else if(mark >= 70 && mark<=89)        
//         console.log('B')
// else if(mark >= 60 && mark <=69)
//         console.log('C')
// else if (mark >= 50 && mark <=59)
//         console.log('D')
// else if (mark >= 0 && mark <=49)
//         console.log('E')
//     else{
//         console.log("enter valid marks")
//     }


// 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
//     - September, October or November, the season is Autumn.
//     - December, January or February, the season is Winter.
//     - March, April or May, the season is Spring
//     - June, July or August, the season is Summer

// let month = "May";
// if(month =="September" || month == "October" || month =="November")
//         console.log('Autumn');
// else if(month =="December"||month =="January"||month=="February")
//         console.log('Winter')
// else if(month =="March"||month=="April"||month=="May")
//     console.log("Spring")
// else if(month=="June"||month=="July"||month=="August")
//     console.log("Summer")

// 22. Write a program which tells the number of days in a month.
// let month = 4;
// if(month ==2)
//     console.log('29')
// else if(month%2 == 0)
//     console.log("30")
// else
//     console.log("31")

// 23. Write a program which tells the number of days in a month, now consider leap year.
// let month = 4;
// if(month ==2)
//     console.log('28')
// else if(month%2 == 0)
//     console.log("30")
// else
//     console.log('31')

// TODO:24. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

// 25. In the following shopping cart add, remove, edit items
//     => const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
//     - add 'Meat' in the beginning of your shopping cart if it has not been already added
//     - add Sugar at the end of you shopping cart if it has not been already added
//     - remove 'Honey' if you are allergic to honey
//     - modify Tea to 'Green Tea'

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
// shoppingCart.unshift('Meat');
// shoppingCart.push('Sugar')
// shoppingCart.splice(shoppingCart.indexOf('Honey'),1);
// shoppingCart.splice(shoppingCart.indexOf('Tea'),1,'Green Tea')
// console.log(shoppingCart)


// 26. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
// let countries = ['India','Nepal','Ethiopias'];
// if(countries.includes('Ethiopia')){
//     console.log('Ethiopia')
// }else{
//     countries.push('Ethiopia');
//     console.log('Ethiopia added');
// }


// 27. The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

    // const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
    // ages.sort();
    // console.log(ages[0]+' is min and '+ages[ages.length-1]+' is max age');
    // // TODO: Median age find 
    // let total=0
    // for(let i of ages){
    //     total += i;
    // }
    // avg = total / ages.length
    // console.log('avg '+avg)

    // console.log(`range is  ${Math.max(...ages) - Math.min(...ages)}`)
    // console.log(Math.abs(Math.min(...ages) - avg)+ ' diffrence is ' + Math.abs(Math.max(...ages) - avg))

// TODO:28. Use for loop to iterate from 0 to 100 and print only prime numbers


// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
// let odd=0;
// let even=0;

// for(i=0;i<=100;i++){
//     if(i%2 ==0) even+=i;
//     else odd+=i;
// }
// console.log(`
// Even Sum is:${even}
// Odd Sum is :${odd}
// `)

// TODO:30. Write a script which generates a random hexadecimal number.
