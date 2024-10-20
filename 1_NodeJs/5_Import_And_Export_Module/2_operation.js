const add = (a,b) => {
    return a+b;
};


const sub = (a,b) => {
    return a-b;
};

const name = "vinod";

module.exports.add = add; // es tarah se es private module ko public kar diya hai
module.exports.sub = sub;
// module.exports.name = name; // Not Possible

