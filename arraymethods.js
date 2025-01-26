// Array Methods
// 1. Filter, Some, and Every
// Filter out all numbers greater than 50.
// Check if there is at least one negative number.
// Check if all the numbers in the filtered array are even.
// const numbers = [12, 55, -2, 90, 33, -77, 18];
// Output for Filter: [12, -2, 33, -77, 18]
// Output for Some: true
// Output for Every: false


// filter method and check the even or odd------------------------
let arr=[12,55,-2,90,33,-77,18]
let op =arr.filter((x,y,z)=>{
    
   if(x%2==0){
      console.log(x,"even")
    }
    else{
        console.log(x,"odd")
    }
     return x<50
})
console.log(op)

// some method-------------------------------------
let arr1=[12,55,-2,90,33,-77,18]
let op1=arr1.some((x,y)=>{
    return x>10
})
console.log(op1)

// every method----------------------------
let arr2=[12,55,-2,90,33,-77,18]
let op2=arr2.every((x,y)=>{
    return x<10
})
console.log(op2)

// 2. Sort, Reverse, and Reduce
// Sort the fruits array in alphabetical order.
// Reverse the order of the numbers array.
// Find the sum of the reversed numbers array using reduce.
// const fruits = ['banana', 'apple', 'grape', 'kiwi', 'orange'];
// const numbers = [10, 20, 30, 40, 50];
// Output for Sort: ['apple', 'banana', 'grape', 'kiwi', 'orange']
// Output for Reverse: [50, 40, 30, 20, 10]
// Output for Reduce: 150

// sort mmethod--------------------------------------
let arr3=["banana","apple","grape","kiwi","orange"]
let op3=arr3.sort()
console.log(op3)

// Reverse mmethod-------------------------
let arr4=[10,20,30,40,50]
let op4=arr4.reverse()
console.log(op4)

// Reduce method--------------------------------
let arr5=[10,20,30,40,50]
let op5=arr5.reduce((x,y)=>{
    return x+y
})
console.log(op5)

// 3. ReduceRight and Filter
//    Take an example array -
// Concatenate the words in reverse order using reduceRight.
// Filter out words that have greater than or equal to 5 characters.

// ReduceRight method()------------------
let arr6=["ramya","ram","sai","geetha","bhumika"]
let op6=arr6.reduceRight((x,y)=>x +" "+y);
console.log(op6)
let filter=arr6.filter(arr6 => arr6.length <= 5);
console.log(filter)
   
//  Object methods
// Merge the properties of obj1 and obj2 using Object.assign.
// Freeze the merged object using Object.freeze and try to update that freeze object.
// Seal the object using Object.seal.
// Attempt to add, modify, and delete properties of the sealed object.
// Check if the object is sealed using Object.isSealed.


// object methods-------------------------
let obj={name:"Ramya"};
let obj1={city:"Eluru"};
let obj2={age:"23"};
let obj3={gender:"female"}
let result=Object.assign(obj,obj1,obj2,obj3)
console.log(result)

// freeeze method we can't update the freeze method only we can read. we can't edit them-------------
let obj4={name:"bhumi",age:"22"}
let output=Object.freeze(obj4)
console.log(output)

// seal method-------------------

let obj5={name:"bhumi",age:"23",city:"Hyderabad"}
Object.seal(obj5)
console.log(obj5)

// seal modify -----------------------

let obj6={name:"bhumi",age:"23",city:"Hyderabad"}
let res =Object.seal()
obj6.name="ram"
console.log(obj6)

//  seal delete -------------------------------
let obj7={name:"ram",age:"23",city:"Hyderabad"}
let x=Object.seal()
delete obj7.city
console.log(obj7)

