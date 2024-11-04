// Ex.1
// let arr = [2, 4, 5, 6, 7];

// let drr = []

// arr.forEach(function (val) {
//   drr.push(val*2);
// });
// console.log(drr);

// let drrr = arr.map(function (val) {
//   return val*2;
// });
// console.log(drrr);

// ---------------------------------

// Ex.2:
// let marks = [80, 82, 87, 90, 45];

// let UpdatedMarks = marks.map(function (mark) {
//   return mark + 2;
// });

// console.log(UpdatedMarks)

// ---------------------------------

// Ex.3:
// let numbers = [1, 2, 3, 4, 5];

// let evenNumber = numbers.filter(function(val){
//     return val % 2 == 0;
// })
// console.log(evenNumber)

// --------------------------------

// Ex.4
// let marks = [45, 67, 45, 88, 56, 90, 30, 12];

// let failedMarks = marks.filter(function (mark) {
//   return mark < 35;
// });

// console.log(failedMarks.length);

// ------------------------------------

// // Ex.5:
// let numbers = [3, 5, 8, 6, 9];

// let sum = numbers.reduce(function(a,b){
//     return a + b;
// })

// console.log(sum)

// -------------------------------------

let marks = [90, 98, 95, 82, 84, 91];

let total = marks.reduce(function(a,b){
    return a + b;
})

console.log(total/marks.length)