const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html","utf-8"); // es prakar se sara data ko get kar liya apne backend me 

const replaceVal = (tempVal,orgVal) => {
    let temperature = tempVal.replace("{%tempval%}",orgVal.main.temp);
    temperature = temperature.replace("{%tempmin%}",orgVal.main.temp_min)
    temperature = temperature.replace("{%tempmax%}",orgVal.main.temp_max)
    temperature = temperature.replace("{%location%}",orgVal.name)
    temperature = temperature.replace("{%country%}",orgVal.sys.country)
    temperature = temperature.replace("{%tempstatus%}",orgVal.weather[0].main);
    return temperature;
}

const server = http.createServer((req,res) => {
   if(req.url === "/"){
    requests("http://api.openweathermap.org/data/2.5/weather?q=Pune&Units=metric&appid=435241c529cb9b11c2ebf10a09515ee2")
    .on("data",(chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        // console.log(arrData[0].main.temp);

        // jabhi ak sath multiple array ho to usko map method ke sath easily handled kar sakte hai

        /*
        const realTimeData = arrData.map((value) => {
            console.log(value.main);
            replaceVal(homeFile,val).join("");

        })
        */

        const realTimeData = arrData.map((val) => replaceVal(homeFile,val)).join("");
        // realTimeData me jo data mila hai wah string  ke form me mila hai yadi join() method ka use nahi karte to jo data milta wah array ke form me milta 

        // console.log(realTimeData);
        res.write(realTimeData);

    })
    .on("end",(err) => {
        if(err) return console.log("connection closed due to errors",err);
        res.end();
    })
   }
});


server.listen(8000, "127.0.0.1");

/*

 1. arrData.map((val) => replaceVal(homeFile, val)): This uses  the map() function to iterate over each element in the arrData array. For each element val, it calls the replaceVal() function with homeFile and val as arguments. The result is an array of replaced values.

 2. .join(""): This function is called on the resulting array from the map() function. It concatenates all elements of the array into a single string, using an empty string "" as the separator.

*/

// esme real time api ka use huaa hai

// esme HTML,CSS,JavaScript and NodeJs ka use huaa hai


