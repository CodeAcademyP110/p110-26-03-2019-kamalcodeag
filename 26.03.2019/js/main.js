"use strict";

//HOME TASKS -START-



//Home task - 1

// let result = [];

// for (let i=0; i<7; i++)
// {
//     let userInput = prompt(`Please, insert ${i+1}. number :`);
//     let converted = +userInput;
//     result.push(converted);
// }

// let max = result[0];
// let min = result[0];

// for (let i=0; i<result.length; i++)
// {
//     if(result[i]>max)
//     {
//         max = result[i];
//     }

//     if(result[i]<min)
//     {
//         min = result[i];
//     }
// }


// let middle = (max+min)/2;
// console.log(max,min,middle);





//Home task - 2

// let result = [];


// for (let i=0; i<7; i++)
// {
//     let userInput = prompt(`Please, insert ${i+1}. number :`);
//     let converted = +userInput;
//     result.push(converted);
// }

// let even = [];

// for (let i=0; i<result.length; i++)
// {
//     if(result[i]%2==0)
//     {
//         even.push(result);
        
//     }
    
// }

// let evenCount = even.length;
// console.log(evenCount);





// Home task - 3

// let result = [];


// for (let i=0; i<7; i++)
// {
//     let userInput = prompt(`Please, insert ${i+1}. number :`);
//     let converted = +userInput;
//     result.push(converted);
// }

// let all = result[0];
// let odd = result[0]; //wrong result : must be 16, but not 17
// let even = result[0]; //wrong result : must be 12, but not 13

// for (let i=0; i<result.length; i++)
// {
//     if(true)
//     {
//         all += result[i];
//     }
//     if(result[i]%2==1)
//     {
//         odd += result[i];
//     }
//     if(result[i]%2==0)
//     {
//         even += result[i];
//     }
    
// }

// console.log(all,odd,even);




//Home task - 4 (UNSOLVED !)

let result = [];

for (let i=0; i<10; i++)
{
    let userInput = prompt(`Please insert ${i+1}. word :`)

    while(!isNaN(userInput))
    {
        userInput = prompt(`Please insert only word :`)
        
    }
    result.push(userInput);
}

let longWord = [];
let shortWord = [];

for(let i=0; i<result.length; i++)
{
    if(result[i].length>longWord.length)
    {
        longWord.push(result);
    }
}


console.log(longWord);











//HOME TASKS -END-



//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------



// let numbers = [];

// let max = numbers[0];
// for (let i = 0; i < numbers.length; i++) 
// {
//     if(numbers[i] > max) max = numbers[i];
// }
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

// console.log(max);

// let userInput = prompt("Please, input a number: ");
// let userNumber = +userInput;

// while(isNaN(userNumber))
// {
//     userInput = prompt("Please, input a valid number: ");
//     userNumber = +userInput;
// }

// while(true)
// {
//     let userInput = prompt("Please, input a number: ");
//     let userNumber = +userInput;

//     if(userNumber == 0 || userNumber){
//         break;
//     }
// }

// let i = 0;
// while(i < numbers.length)
// {
//     console.log(numbers[i]);
//     i++;
// }

// for(let i = 0; i < numbers.length; i++)
// {
//     console.log(numbers[i]);
// }




//CLASSWORK

// let numbers = [];

// for(let i = 0; i < 5; i++)
// {
//     //numbers.push(+prompt(`${i+1}-ci reqemi daxil edin: `))
//     // let userInput = prompt(`${i+1}-ci reqemi daxil edin: `);
//     let userInput = prompt(i+1 + "-ci reqemi daxil edin: ");
//     let userNumber = +userInput;
//     numbers.push(userNumber);
// }

// let max  = numbers[0];
// let min  = numbers[0];

// for(let i = 0; i < numbers.length; i++)
// {
//     if(numbers[i] > max)
//     {
//         max = numbers[i];
//     }

//     if(numbers[i] < min)
//     {
//         min = numbers[i];   
//     }
// }

// console.log(max, min);


