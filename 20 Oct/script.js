// function getRandomUser() {
//   return new Promise((resolve, reject) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://randomuser.me/api/`);
//     xhr.onreadystatechange = function () {
//       if (xhr.readyState == 4) {
//         if (xhr.status == 200) {
//           try {
//             const data = JSON.parse(xhr.responseText);
//             return resolve(data.results[0]);
//           } catch (error) {
//             return reject("Error Occured: code", xhr.status);
//           }
//         }
//       }
//     };
//     xhr.send();
//   });
// }
// getRandomUser()
//   .then((data) => {
//     console.log(data);
//     return data
//   })
//   .then((user)=>{
//     console.log("Name: ",user.name.first,user.name.last)
//   })
//   .catch((error) => {
//     console.log(error);
//   });
// --------------------------------------------------------------------

// function getRandomUser() {
//     return fetch("https://randomuser.me/api/")
//       .then((data) => {
//         return data.json();
//       })
//       .then((data) => {
//         return data.results[0];
//       }).catch(()=>{
//         return "Error Occured: code";
//       });
// }
// getRandomUser()
//   .then((data) => {
//     console.log(data);
//     return data;
//   })
//   .then((user) => {
//     console.log("Name: ", user.name.first, user.name.last);
//     document.querySelector(".img").style.backgroundImage = `url(
//       ${user.picture.medium})`
//       document.querySelector("h1")
//         .innerText = `${user.name.first} ${user.name.last}`
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ------------------------------------------------------


(async function () {
  async function getRandomUser() {
    var raw = await fetch("https://randomuser.me/api/");
    var data = await raw.json();
    return data.results[0];
  }

  var data = await getRandomUser()
  var name = await data.name.title
  console.log("hello",name);
})();
