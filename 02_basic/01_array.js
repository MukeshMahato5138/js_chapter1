// // Array ///////

 const  myArr = [0,1,2,3,4,5]
// // const myHeros = ["kingKhan", "amirKhan","saluKhan"]

// // const myArr2 = new Array(1,2,3,4,5,6)
// // console.log(myArr[1]);


// // //Array methods

// // myArr.push(6,5)  // this method is used for adding the item in the array list.//

// // console.log(myArr);

// // myArr.pop(6) // this method is used for removing last item from the array list.




// // console.log(myArr.includes(9)); // this method is used to check the item inthe array list (if item is in array = true, if not then false)
// // console.log(myArr.indexOf(3)); // this method is used to know the index of the item in the array 


// const newArr = myArr.join() 
// console.log(typeof newArr);  // join method bind the array and convert in the string


// console.log(myArr);


// slice and splice
// in slice it doesnot include last range 
console.log("a", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);

console.log("b", myArr);

// splice opration manipulate the original array
const myn2 = myArr.splice(1,3)

console.log(myn2);

console.log("c", myArr); // 
// to know the original array after using splice operation

