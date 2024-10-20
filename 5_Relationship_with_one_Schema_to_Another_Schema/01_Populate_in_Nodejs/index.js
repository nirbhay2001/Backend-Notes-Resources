const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

/*

    1. body-parser is a middleware for handling HTTP POST requests' body data in Node.js applications, particularly in the context of Express.js, a popular web framework. When a client (such as a web browser or a mobile app) sends data to a server through a POST request, the data is typically included in the request's body. body-parser helps parse and extract this data from the request body so that it can be easily accessed and manipulated within your server-side code.

    2. body-parser simplifies the process of dealing with various types of data that can be included in the request body, such as JSON, URL-encoded data, and other content types. It automatically parses the incoming request's body data and makes it available as a JavaScript object or another data structure that can be easily worked with in your application's code.



*/

/*

    1. body-parser एक मिडलवेयर है जिसका उपयोग Node.js एप्लिकेशन में HTTP POST अनुरोधों के बॉडी डेटा को हैंडल करने के लिए किया जाता है, विशेष रूप से Express.js, एक प्रसिद्ध वेब फ्रेमवर्क, के संदर्भ में। जब कोई क्लाइंट (जैसे कि एक वेब ब्राउज़र या मोबाइल ऐप) एक सर्वर को HTTP POST अनुरोध के माध्यम से डेटा भेजता है, तो यह डेटा आमतौर पर रिक्वेस्ट के बॉडी में शामिल होता है। body-parser डेटा को रिक्वेस्ट बॉडी से पार्स करने में मदद करता है ताकि आप इसे आसानी से पहुँच और अपने सर्वर-साइड कोड में प्रसंस्कृत कर सकें।
    
    2. body-parser उन विभिन्न प्रकार के डेटा को संभालने में मदद करता है जो रिक्वेस्ट बॉडी में शामिल हो सकते हैं, जैसे:
    a. फॉर्म डेटा: जब एक वेब फॉर्म सबमिट किया जाता है, तो उपयोगकर्ता द्वारा दर्ज की गई डेटा, जैसे पाठ इनपुट्स, चेकबॉक्स, और रेडियो बटन्स, आमतौर पर रिक्वेस्ट बॉडी में फॉर्म डेटा के रूप में शामिल होता है।
    b. JSON डेटा: आधुनिक वेब ऐप्लिकेशन्स आमतौर पर JSON (जावास्क्रिप्ट ऑब्जेक्ट नोटेशन) का उपयोग करते हैं ताकि क्लाइंट और सर्वर के बीच संरचित डेटा का आदान-प्रदान कर सकें।
    c. फ़ाइल अपलोड्स: जब फ़ाइलें अपलोड की जाती हैं, जैसे छवियाँ, वीडियो, या दस्तावेज़, तो फ़ाइल सामग्री रिक्वेस्ट बॉडी के साथ शामिल होती है, जिसमें फ़ाइल के बारे में मेटाडेटा भी होता है।


*/

/*

    It's important to note that starting with Express 4.16.0, the express.json() and express.urlencoded() middleware functions are included by default, which provide similar functionality to body-parser. So, depending on your Express version, you might use either body-parser or the built-in middleware functions to handle request body parsing.

*/



mongoose.connect('mongodb://localhost:27017/relationships');

app.use(require('./routes/route'));
app.listen(3000, () => console.log('Server on!'));