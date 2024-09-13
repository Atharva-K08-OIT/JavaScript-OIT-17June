// while loop
/*

syntax:

while (condition){
    code to be executed
}

*/
// // Ex.1
// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// ----------------------------
// // Ex.2
// let i = 0;
// laalu: while (i <= 10) {
//   i++;
//   console.log(i);
//   if(i == 5){
//     break laalu;
//   }
// }
// ----------------------------
// Ex.3
// let i = 0;
// laalu: while (i <= 10) {
//   i++;
//   if(i == 5){
//     continue laalu;
//   }
//   console.log(i);
// }
// ----------------------------
// Ex.4.1
// let i = 1;
// let count = 1;
// while (i <= 5) {
//   let j = 1;

//   while (j <= 5) {
//     console.log(count++);

//     j++;
//   }

//   i++;
// }
// -------------------------
// Ex.4.2
// let i = 1;
// let count = 1;
// while (i <= 5) {
//   let j = 1;

//   for (let j = 1; j <= 5; j++) {
//     console.log(count++);
//   }

//   i++;
// }
// -------------------------
// Ex.4.3
// let i = 1;
// let count = 1;

// for (let i = 1; i <= 5; i++) {
//   let j = 1;
//   while (j <= 5) {
//     console.log(count++);
//     j++;
//   }
// }
// -------------------------

num = Math.floor(Math.random() * 100) + 1;

flag = 1;
count = 0;

while (flag == 1) {
  count++;
  guess = Number(prompt("Enter your number: "));
  if (guess === num) {
    console.log("You win!");
    flag = 0;
  } else if (guess > num) {
    console.log("guess small number than :" + guess);
  } else {
    console.log("guess big number than :" + guess);
  }
}
console.log("You Take", count, "guesses!");
document.write("Win!🥳");
