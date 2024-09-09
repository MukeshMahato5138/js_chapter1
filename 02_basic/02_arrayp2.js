// const hero = ["muku", "salman", "ritik"]
// const heroin = ["priyanka", "Dipeeka", "sunny"]

// // hero.push(heroin)
// // console.log(hero);

// const s = hero.concat(heroin)
// console.log(s);


// // sprade opreator 
// const a = [...hero, ...heroin]
// console.log(a);

// // flat operator
 
 const realArr = [1, 2, 3, [4, 5, 6, [5, 8, 7, 9]]]
 const realArr1 = realArr.flat(Infinity)
console.log(realArr1);


// to conver the value in array 
console.log(Array.from("MUKU  THE DESTRIOYER"));

let s1 = 100
let s2 = 200
let s3 = 300
console.log(Array.of(s1, s2, s3));


/*improtant method is 
Array.isArray
Array.from
Array.of
*/