var promise = require('promise');

let promiseCleanRoom = new promise(
    function(resolve, reject){
        let isclean = false;
        if(isclean)
            resolve('clean');
        else 
            reject('not clean');
});

promiseCleanRoom.then(function(status){
    console.log('Room is '+status);
})
.catch(function(status){
    console.log('Room is '+status);
});