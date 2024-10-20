const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/ttchannel",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    //useCreateIndex:true
    

 }).then(() =>{
    console.log(`connection successful`);
 }).catch((e) => {
    console.log(e);
 })


// Schema --> A Mongoose schema defines the structure of the documents, default values, validators, etc.

const playlistSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true
    },
    ctype : String,
    videos : Number,
    author : String,
    active: Boolean,
    date: {
        type: Date,
        default: Date.now
    }

}) // Schema se document ko define karte hai

/*

 1. A Mongoose model is a wrapper on the Mongoose schema.
 2. A Mongoose schema defines the structure of the document, default values, validators, etc. Whereas a Mongoose model provides an interface to the database for creating, querying, updating, deleting records etc.

*/

// collection creation 
const Playlist = new mongoose.model("Playlist",playlistSchema);
// Playlist --> collection name, playlistSchema --> schema name
/*
    1. In MongoDB, each document within a collection should adhere to a specific schema. While you can have varying schemas for different documents within the same collection, you cannot have multiple schemas applied to a single document within that collection.

    2. Each document in a collection follows its own structure defined by its schema, and all documents within that collection should conform to their respective schemas. It's important to note that MongoDB is a schema-less database, meaning there is no strict enforcement of a predefined schema for the entire collection. However, each document must adhere to its own schema.

    3. If you need to store documents with completely different schemas, it's recommended to use separate collections for each schema. This allows you to maintain a clear separation between different types of data and simplifies querying and managing the data based on their specific schemas.

*/



// Read Document


/*
const getDocument = async () => {
    try{
        const result = await Playlist.find({$or : [{ctype : "Back End"},{author:"Thapa Technical"}]}).select({name:1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}
*/

const getDocument = async () => {
    try{
        const result = await Playlist.find({$and : [{ctype : "Back End"},{author:"Thapa Technical"}]}).select({name:1});
        console.log(result);
    }catch(err){
        console.log(err);
    }
    
}

getDocument()