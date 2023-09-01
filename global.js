//Global Object.
//console.log(global);


setTimeout(() => {
    console.log('In the timeout');
    clearInterval(int);
}, 3000);


var int = setInterval(() => {
    console.log('Hello World');
}, 1000);


console.log(__dirname);
console.log(__filename);