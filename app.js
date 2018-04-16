global.hoje = new Date();
console.log(global.hoje); 

var hello = require('./hello');
var human = require('./human');

hello('Hello seu Baitolas');
human.hello('Hello seus baitolas humanos'); 
human.hello2();