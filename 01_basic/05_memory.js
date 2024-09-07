/*................ all NON PRIMITIVE TYPE have Function dataTypes..................*/


// function(){
//     console.log("hello mukesh");
    
// }


// Stack (primitive types) and Heap (Non-Primitive(References))

/* Stack = is used in primitive types 
 when stack memory is used the variable is declear by user,  
 copy is given to the user 

*/


/*Heap = is used in Non-Primitive types
when some this define in Heap is always given References of original value.
*/

// Example 
// let myYoutubeName = "MukuTheDestroyer"
// let anotherName = myYoutubeName
// anotherName = "abcd"
// console.log(anotherName);
// console.log(myYoutubeName);


let user ={
    email: "muke@gamail.com",
    id:"ok11"

}

let user1 = user

user1.email = "hejgbs@.com"

console.log(user.email);
console.log(user1.eamil);

