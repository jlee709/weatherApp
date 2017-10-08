//jshint esversion:6


//Synch Example of callback function 
var getUser = (id, cb) => {
  var user = {
    id: id,
    name: "Justin"
  };




//adding delay to callback 
setTimeout (() => {
  cb(user);
}, 3000);

};

getUser(31, (user) => {
  console.log(user);
});