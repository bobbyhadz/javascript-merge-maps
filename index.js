// EXAMPLE 1 - How to merge Map Objects in JavaScript

const map1 = new Map([['name', 'bobby hadz']]);
const map2 = new Map([['age', 30]]);

const map3 = new Map([...map1, ...map2]);

// 👇️ Map(2) { 'name' => 'bobby hadz', 'age' => 30 }
console.log(map3);

// ------------------------------------------------------------------

// // EXAMPLE 2 - Merge Map Objects using a `for...of` loop

// function mergeMapObjects(...maps) {
//   const map = new Map();

//   for (const m of maps) {
//     for (const item of m) {
//       map.set(...item);
//     }
//   }

//   return map;
// }

// const map1 = new Map([['name', 'bobby hadz']]);
// const map2 = new Map([['age', 30]]);

// const map3 = mergeMapObjects(map1, map2);

// // 👇️ Map(2) { 'name' => 'bobby hadz', 'age' => 30 }
// console.log(map3);
