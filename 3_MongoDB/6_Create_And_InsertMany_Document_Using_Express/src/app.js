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

// create document or insert

/*
const reactPlaylist = new Playlist({
    name: "React JS",
    ctype : "Front End",
    videos : "80",
    author : "Thapa Technical",
    active: true,


})
// esame Playlist collection ka nam hai

// reactPlaylist.save(); // es prakar se Express me data ko database me create kiya jata hai , save() function ak promise ko return karta hai, esame .then() ka use karna padega nahi to async await ka use karna padega

*/

const createDocument = async () => {
    try{
        const jsPlaylist = new Playlist({
            name: "Javascript",
            ctype : "Front End",
            videos : "150",
            author : "Thapa Technical",
            active: true,
        
        
        })

        const mongoPlaylist = new Playlist({
            name: "MongoDB",
            ctype : "Database",
            videos : "5",
            author : "Thapa Technical",
            active: true,
        
        
        })
        
        const mongoosePlaylist = new Playlist({
            name: "Mongoose JS",
            ctype : "Database",
            videos : "4",
            author : "Thapa Technical",
            active: true,
        
        
        })

        const expresslaylist = new Playlist({
            name: "Express JS",
            ctype : "Backend End",
            videos : "50",
            author : "Thapa Technical",
            active: true,
        
        
        })


        const result = await Playlist.insertMany([jsPlaylist,mongoPlaylist,mongoosePlaylist,expresslaylist]);
        console.log(result);
    }catch(err){
        console.log(err);
    }
   
}

createDocument();