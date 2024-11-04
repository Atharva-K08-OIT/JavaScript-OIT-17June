// Ex.1 Syncronous:

// console.log("line 1 executed");
// console.log("line 2 executed");
// function execute(){
//     console.log("line 3 executed");
// }
// execute()
// console.log("line 4 executed");
// console.log("line 5 executed");

// -----------------------
// Ex.2 Asynchronous:

// console.log("create connection")
// query = "select * from student"
// console.log("send query",query)
// let Data = function (){
//     return
// }
// console.log(Data())
// ------------------------------
console.log("line 1 executed");
console.log("line 2 executed");
function execute() {
  console.log("line 3 executed");
}
setTimeout(execute, 5000);
console.log("line 4 executed");
console.log("line 5 executed");
