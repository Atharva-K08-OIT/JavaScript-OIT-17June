// console.log("line a executed");
// console.log("line b executed");
// function printLine() {
//     console.log("line c executed");
// }
// let tid1 = setTimeout(printLine,2000)
// console.log("line d executed");
// console.log(tid1)


// ----------------------
function printLine() {
    console.log("line c executed");
}
let tid1 = setTimeout(printLine,3000)
clearTimeout(tid1)