// var str = "hello, Good Morning!"
// //         0123456789         19

// let len = str.length

// // for(let i = 0;i < str.length; i++){
// //     console.log(str[i])
// // }

// for (let ch of str){
//     console.log(ch)
// }

// var str = 'hello, Good Morning!'
// //         012345678910

// console.log(str.length)
// console.log(str.startsWith("h"))
// console.log(str.endsWith("ing!"))
// console.log(str.substring(5,17))
// console.log(str.includes("He"))
// console.log(str.split(" "))
// console.log(str.toLowerCase())
// console.log(str.toLocaleUpperCase())
// console.log(str.replace("ood Morning","Afternoon"))

// var s = "   Hello   ";
// s.trimStart()
// // 'Hello   '
// s.trimEnd()
// // '   Hello'
// s.trim()
// // 'Hello'

// console.log(s.charAt(3))
// console.log(s.indexOf("l"))
// console.log(s.lastIndexOf("l"))
// console.log(s.trim().concat(" bye"))

// var arr = ["apple","orange","kiwi"]
// console.log(arr.toString())
// console.log(arr.join("|"))

// var str = "Apple orange kiwi"
// console.log(str.split(" "))

// Object

let student = {
  name: "Rakesh",
  percentage: 98.91,
  subjects: ["Math", "Sci", "Eng"],
  isPassed: true,

  RakeshBetaHelloBollo:function(){
    console.log("Hello Friends...!")
  }
};

console.log(student)
student.percentage=99.98
console.log(student)

console.log(student.subjects[1])