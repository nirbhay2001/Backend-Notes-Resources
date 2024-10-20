/*
Node JS REPL
    The REPL feature of Node is very useful in experiment with Node.js codes and to debug javaScript codes

    R--> Read - Reads users input, parses the into JavaScript data-structure, and stores in memory.

    E--> Eval - Takes and evaluates the data structure.

    P--> Print - Prints the results.

    L--> Loop - Loops the above command until the user presses ctrl-c twice.

    // terminal per kewal 'node' likhakar enter karte hai hum REPL ke ander chal jate hai.

    // .exist command se hum REPL se bahar aa sakte hai,
    .help se bahut sare command ka list aa jata hai

    // REPL 
    1: js Expression
    2: use variables
    3: Multiline code
    4: use (_) to get the last result
    5: we can use editor mode
*/

// console.log(`my x value is ${x}`)

/*
4: use (_) to get the last result
 > 5+5
   10
 > _ + 5
   15
 >
*/

/*
5: we can use editor mode
> .editor
// Entering editor mode (Ctrl+D to finish, Ctrl+C to cancel)
const name = (myname) => { console.log(`my name is ${myname}`);}
name('Mohit technical')

my name is Mohit technical
undefined
>
*/

// yadi pata karna ho ki nodejs me kitna method hai to hum terminal per repl create karke  fs + Enter se check kar sakte hai