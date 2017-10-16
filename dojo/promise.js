// jshint esversion:6

var asynchAdd = (a, b) => {
  return new Promise((resolve, reject)=> {
    setTimeout(() =>{
      if(typeof a === 'number' && typeof b === 'number'){
        resolve(a+b);
      }else{
        reject('Sumting Went Wong');
      }
    },3000);
  });
};


// long way
asynchAdd(4,5).then((result) => {
  console.log('Result' , result);
  return asynchAdd(result, 10);
}, (errorMsg) => {
  console.log(errorMsg);
}).then((result) =>{
  console.log('is : ', result);
}, (errorMsg) => {
  console.log(errorMsg);
});


// using catch 
asynchAdd(4,5).then((result) => {
  console.log('Result : ', result);
  return asynchAdd(result,10);
})
.then((result) => {
  console.log('changed to ;', result);
}).catch((errorMsg)=>{
  console.log(errorMsg);
});


// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('hey works');
//     reject('cant do promise');
//   }, 2000);
// });

// somePromise.then((message) => {
//   console.log('YES:', message);
// }, (error) =>{
//   console.log('err');
// });