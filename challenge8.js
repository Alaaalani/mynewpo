let a = "Elzero Web School";

// include this methods in your solution [slice, cahrAt]
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); // zero

// 8 H
console.log(a.charAt(13).toUpperCase().repeat(8));
console.log("h".toUpperCase().repeat(8));
console.log("H".repeat(8));

// return array
console.log(a.split(" ", 1)); // ["Elzero"]

// use only "substr" method + template literals in your solution
console.log(`${a.substr(0, 5)} ${a.substr(11, 6)}`); // Elzero School

// solution must be dynamic and string may change
console.log(a.charAt(0).toLowerCase() + a.slice(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1).toLowerCase()); // eLZERO WEB SCHOOl
