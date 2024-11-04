let data = new Promise((resolve, reject) => {
  response = null;

  if (response == "" || response == null) {
    reject();
  } else {
    resolve(response);
  }
});

data
  .then(() => {
    console.log("Success in data retrival");
  })
  .then(()=>{
    console.log(response.name);
  })
  .then(()=>{
    console.log(response.city);
  })
  .catch(() => {
    console.log(new Error("DataError"));
  })
  .finally(()=>{
    console.log("Finally All Task is Compeleted");
  })
