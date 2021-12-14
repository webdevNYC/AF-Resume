/* 
Write a function named once that accepts a callback function as input and returns a function. 

When the returned function is called the first time, it should call the callback function and return that output. 

If it is called any additional times, instead of calling the callback function again it will simply return the output value from the first time it was called.
*/

function sum(x) {
    return function (y) {
        return x + y;
    }
}

function once(callback) {
    let result;
    return function () {
        if (callback) {
            result = callback.apply(this, arguments);
            callback = null;
        }
        return result;
    }
}

/*** Uncomment these to check your work! ***/

const onceFunc = once(sum(5));
console.log(onceFunc(4));  // => should log 9
console.log(onceFunc(10));  // => should log 9
console.log(onceFunc(9001)); // => should log 9