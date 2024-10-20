const operator = require("./2_operation"); // ./ se jis file me rahte hai us file se bahr aa jate hai usi folder ke ander


console.log(operator); // output: { add: [Function: add], sub: [Function: sub] }; ye ak object ko return karta hai


console.log(operator.add(5,3));
console.log(operator.sub(10,5));
// console.log(name); // show error