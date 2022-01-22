//promise is javascript
//It represents the eventual completion(or failure) of an asynchronous operation & it's resulting value
//It may have 3 states : pending, fulfillment, rejected.

//First we have to creat an object for the promise

//Basic syntax of Promise
// let prom = new Promise(function(resolve,reject){
//     if(condition){
//         resolve;
//     }
//     else{
//         reject;
//     }
// });

//to make further works for promise we can make other functions like : 
//for resolve : 
// let onFulfillment = (result) => {console.log(result);}
//for reject : 
// let onRejection = (error) => {console.log(error);}
//To call thse above functions we have to use the inbuiltfunctions are : 

// prom.then(onFullfillment);
// prom.catch(onRejection);

//Example

// let complete = true;
// let prom = new Promise(function(resolve,reject){
//     if(complete){
//         resolve("I am successful");
//     }
//     else{
//         reject("I am Failed");
//     }
// });
// console.log(prom);

//another way of writing :
// function prom(complete){
//     return new Promise(function(resolve,reject){
//            if(complete){
//                 resolve("I am successful");
//              }
//              else{
//                  reject("I am Failed");
//              }
//          });
// }
// console.log(prom(false));
//Here  "false" will be worked like an argument for the "complete" variable.

//Example2

function prom(complete){
    return new Promise(function(resolve,reject){
           if(complete){
                resolve("I am successful");
             }
             else{
                 reject("I am Failed");
             }
         });
}
let onFulfillment = (result) => {
    console.log(result);
}
let onRejection = (error) => {
    console.log(error);
}
prom(true).then(onFulfillment);
prom(false).then(onRejection);
