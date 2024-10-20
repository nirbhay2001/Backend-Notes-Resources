
// const chalk = require("chalk");
// import(chalk).then((chalk) => {
//     console.log(chalk.blue("Hello world!"));
//   }).catch((error) => {
//     console.log(error);
//   });

const chalk = require("chalk");
const validator = require("validator");
console.log(chalk.blue("Hello world!"));

console.log(chalk.blue.italic("Hello world!"));

console.log(chalk.blue.underline("Hello world!"));
console.log(chalk.blue.underline.inverse("Hello world!"));

console.log(chalk.green.underline.inverse("success"));

console.log(chalk.red.underline.inverse("false"));

// hum jitne bhi package ko install kerenge using npm o sare package package.json me store ho jate hai as dependency



// Email Validation

const res = validator.isEmail("thapa@thapa.com");
// console.log(res);
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));