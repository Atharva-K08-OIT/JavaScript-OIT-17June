// // document.getElementById

// let box1 = document.getElementById("b1")
// let box2 = document.getElementById("b2")
// let box3 = document.getElementById("b3")

// console.log(box1)
// console.log(box2)
// console.log(box3)

// ----------------------------------------------
// // document.getElementsByClassName

// let boxs = document.getElementsByClassName("box")
// console.log(boxs)

// console.log(boxs.length)
// console.log(boxs[2])

// for(let i = 0;i < boxs.length;i++){
//     console.log(boxs[i])
// }

// ----------------------------------------------
// document.getElementsByTagName

let Boxs = document.getElementsByTagName("div");

// console.log(boxs)

// for(let box of boxs){
//     console.log(box)
// }

// ---------------------------------------------
// document.querySelector

let b1 = document.querySelector("div")
let b2 = document.querySelector("#b1")
let b3 = document.querySelector(".box")

// ---------------------------------------------
// document.querySelectorAll

let boxs = document.querySelectorAll(".box")