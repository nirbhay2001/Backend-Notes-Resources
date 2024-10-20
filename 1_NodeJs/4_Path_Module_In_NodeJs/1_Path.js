const path = require("path");

console.log(path.dirname('E:/nodejsYoutube/PathModule/path.js'));

console.log(path.extname('E:/nodejsYoutube/PathModule/path.js'));

console.log(path.basename('E:/nodejsYoutube/PathModule/path.js'));

// The path.parse() method returns an object whose properties represent significant element of the path. Trailing directory separators are ignored

console.log(path.parse('E:/nodejsYoutube/PathModule/path.js'));
/*
console.log(path.parse('E:/nodejsYoutube/PathModule/path.js')); output: {
            root: 'E:/',
            dir: 'E:/nodejsYoutube/PathModule',
            base: 'path.js',
            ext: '.js',
            name: 'path'
        }


*/

const myPath = path.parse('E:/nodejsYoutube/PathModule/path.js');
console.log(myPath.name); // not console.log(myPath.name()) kyu ki hum yaha per kisi function ko call nahi kar rahe hai kewal object ke properties ko call kar rahe hai

console.log(myPath.root);

