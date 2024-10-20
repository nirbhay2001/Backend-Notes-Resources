/*

 1. Create Database
    --> use thapatechnical --> es command se database create ho jayega

 2. Create Collection and insert Data
    --> thapatechnical> db.thapadata.insertOne({name:"ReactJs",type:"Front End",video:80,active:true}) --> thapadata is collection name, db databse ko represent kar raha hai

 3. check toatal database
    --> show dbs

 4. check currently database
    --> db

 5. yadi ak databse me number of collection check karna ho to
    --> show collection

 6. yadi collection ka document check karna ho to
    --> db.thapadata.find() 
    --> ak collection ke ander bahut sara document ho sakta hai
    another method
    db.thapadata.find().pretty() -->esase data ko achchhi tarike se dikhayega

 7. quit() --> es prakar se database se bahr aa sakte hai

*/