let {someVar} = require('./file2');
const {EventEmitter} = require('events');
const path = require('path');
const fs = require('fs');

// console.log(someVar);
// console.log('________________')
// console.log(__dirname);
// console.log('----------------------------');
// console.log(path.dirname(__filename));

const myEvent = new EventEmitter();
myEvent.on('test',() => {console.log('test is WORKING')});
myEvent.emit('test');

const filePath = path.join(process.cwd(), 'text.txt');
console.log(filePath);

// fs.writeFile(filePath, 'Hello world', (err) => {
// if (err) throw err;
//     console.log('The file has been saved!')
// });
// fs.readFile(filePath,(err,data) => {
//     if (err) throw err;
//     console.log(data.toString());
// });

fs.appendFile(filePath,' Test1', (err)=>{
    if (err) throw err;
});

fs.readdir(__dirname,(err, files) => {
    console.log(files);
});
