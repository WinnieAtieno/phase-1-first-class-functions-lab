// Code your solution in this file!
const  returnFirstTwoDrivers = (arr)=>{
   const newArr = [...arr] // make copy of array
   return  newArr.slice(0,2)
}

const returnLastTwoDrivers = (arr) =>{
    return arr.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
let result = selectingDrivers.map(select => console.log(select))

afterEach(function() {
    drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']; // Reset drivers array after each test
  });

  function createFareMultiplier(num){

    return (function (){
       return  num * 5
    })
  }
  function fareDoubler(fare){
    return fare * 2;
  }
  function fareTripler(fare){
    return fare * 3;
  }
  function selectDifferentDrivers(arrayOfDrivers,func){
    
   return  func(arrayOfDrivers)
  
   
  }



