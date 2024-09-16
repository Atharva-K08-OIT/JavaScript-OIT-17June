// Function to function Call:
// Recursion:

// Ex. 1
// console.log("(a+b)^2 : a^2 + b^2 + 2ab");

// function sqr(v){
//     return v**2
// }

// function ABSqr(a, b) {
//   var formula = sqr(a) + sqr(b) + 2 * a * b;
//   return formula;
// }

// a = Number(prompt("Enter Your 1st Number: "));
// b = Number(prompt("Enter Your 2nd Number: "));
// console.log(ABSqr(a, b));
//-------------------------------------------------

// Ex.2
// console.log("Volume of Cylinder: PI*r*r*h")
// function Sqr(r) {
//   return r * r;
// }
// function Area(r) {
//   return Math.PI * Sqr(r);
// }
// function VolCylinder(r, h) {
//   var formula = Area(r) * h;
//   return formula;
// }

// var r = Number(prompt("Enter your radius : "));
// var h = Number(prompt("Enter your height : "));

// console.log("Volume of Cylinder: " + VolCylinder(r, h) + "cu.cm.");

// ----------------------------------------------------

// Ex.3
// function SayHello() {
//   console.log("Hello");
//   SayHello();
// }

// SayHello(); infinite loop don't run it

// -------------------------------------------------------

// Ex.4
function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  }
  return n * factorial(n-1)
}

var n = 5;
console.log(n + "! = " + factorial(n));
