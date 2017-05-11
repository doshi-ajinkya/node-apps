var promise = require('promise');

let cleanroom = function(status){
    return new promise(function(resolve, reject){
        if(status)
            resolve('Room Cleaned');
        else 
            reject('Room not cleaned');
})};

let garbageCollected = function(status){
    return new promise(function(resolve, reject){
        if(false)
            resolve(status+'Garbage Collected');
        else 
            reject(status+'Garbage Not collected');
})};

let icecream = function(status){
    return new promise(function(resolve,reject){
        if(status)
            resolve(status+'Gets IceCream');
        else 
            reject(status+'Doesnot get IceCream');
    });
};

cleanroom(true).then(function(result){
    return garbageCollected(result);
}).then(function(result){
    return icecream(result);
}).then(function(result){
    console.log(result);
}).catch(function(result){
    console.log(result);
});