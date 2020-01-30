const promise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    // resolve({name:"adel",age:28});
    reject('something went wrong')
  },1500)
});

promise.then((data)=>{
  console.log(data)
}).catch((err)=>{
  console.log(err)
})