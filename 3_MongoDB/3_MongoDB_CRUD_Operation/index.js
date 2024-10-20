/*

 1. Create Operation
    --> Create or insert operations add new documents to a collection. If the collection does not currently exist, insert operations will create the collection.

    MongoDB provides the following methods to insert documents into a collection:
        1. db.collection_name.insertOne()
        2. db.collection_name.insertMany()

        e.g db.thapadata.insertOne({name:"MongoDb",type:"DataBase",videos:80,active:true})

        db.thapadata.insertMany([ {name: "NodeJS",type: "Backend", videos: 40, active: true}, {name: "Javascript", type: "Front End", videos: 150, active: true}])

*/



/*

 2. Read Operation
    --> db.collection_name.find(query,projection)  
           --> esame projection ka matlab ye hota hai ki kya dikhana hai aur kya nahi dikhana hai

        1. Find all the result of the given collection
            --> db.thapadata.find()

        2. Shows the result in pretty format
            --> db.thapadata.find().pretty()
        
        3. Get only MongoDB data as a output
            --> db.thapadata.find({name: "MongoDB"})
                db.thapadata.find({name: "MongoDB"}).pretty()

        4. Get only MongoDB data as a output with only name field.
            --> db.thapadata.find({name: "MongoDB"},{name:1})

                name: 1 --> ye projection hai name 1 ka matlab hai ki name wala hi kewal field dikhega lekin jab name 0 rahta to name wala field ko chhod kar baki sab field dikhega


        5. Get the MongoDB data without _ID field in it.
            --> db.thapadata.find({name: "MongoDB"},{_id:0,name:1})

        6. set the filter to "active:true" and get only the first field with "active:true" value.
            --> db.thapadata.find({active:true}).preety().limit(1)

                limit(1) --> se jis jis document ka active true hai usame se first document ko dikhayega, 2 kar dene per starting se two document dikhayega

        7. Do the same as 6 question but with different method.
            --> db.thapadata.findOne({active:true})

        8. Do the same as 6 question but this time, get the 2nd field with active:true by skipping the 1st field.
            --> db.thapadata.find({active:true}).preety().limit(1).skip(1)

*/



/*

 3. Update Operation
    --> UpdateOne() --> db.coolection_name.updateOne(<filter>, <update>)

    --> UpdateMany() --> db.coolection_name.update(<filter>, <update>)


        1. Update the JavaScript type value to "Full Stack".
            --> db.thapadata.updateOne({name: "JavaScript"},{$set: {type: "Full Stack"}})

            --> The $set Operator replace the value of a field with specified value.

        2. Update all the fields with the type value equal to "Front End" and set the value of status to False
            --> db.thapadata.updateMany({type:"Front End"},{$set: {active: false}})

*/



/*

 4. Delete Operation
    --> deleteMany() --> db.Collection_Name.deleteMany(Deletion_Criteria)


        1. Delete the field with the type matches "Full Stack"
            --> db.thapadata.deleteMany({type: "Full Stack"})

    --> We also have the remove() method to perform the delete operation but it's deprecated as per documents.

        2. jab kisi ak collection ke sare document ko delete karna ho to
            --> db.thapadata.deleteMany({})

*/
