'use strict'


//Exercise 1:
//Write a function testNum that takes a number as an argument
// and returns a Promise that tests if the value is less than or greater than the value 10.


// let x = Math.random() ;

// function testNum(number){
  
// const MyPromise = new Promise(( resolve ,reject) => {
        
//     if( number > 0.5 ){
//       console.log("succes")
//     }else{
//       console.log("fail")

//     }})

// .then(()=>{ console.log("bien")})
// .catch(()=>{ console.log("mal")})

// }

// testNum(x)

// console.log(x)


//Exercise 2:
  //Write two functions that use Promises that you can chain!
  //  The first function, makeAllCaps(), will take in an array 
  //  of words and capitalize them, and then the second function,
  //   sortWords(), will sort the words in alphabetical order.
  //    If the array contains anything but strings, it should throw an error.

  let myArr = ["ciervo", "perro", "gato", "ardilla", "herizo", "avestruz", "hipopótamo", "gallo"] ;
  let myNum = [45, 2, 65] ;
  
   // first function that will capitalize the elements.
  function makeAllCaps(arr){
     const MyPromise = new Promise((resolve, reject) => {
       for (let i = 0; i < arr.length  ; i++ )
       if( typeof arr[i] == "string" ){
         if( arr.length - 1 == i  ){
          resolve()
         }
       }else{
        reject()
       }
     })

    .then( () => { 
      for (let i = 0; i < arr.length ; i++ )
      console.log( arr[i].toUpperCase() )
       if( arr.length == arr.length ){
       sortWords(myArr)
       }
     }) 
    .catch( () => { console.log("not just strings") })
    }

    // second function that will sort the array
    function sortWords(sorting){
         console.log(  sorting.sort() );
    }
    
    //makeAllCaps(myNum)
    //makeAllCaps(myArr)

    


