localStorage.setItem("hello","world");
// esme hello --> key hoga and world --> value hoga

localStorage.getItem("hello"); // esme hello --> key hai

localStorage.removeItem("hello"); // esme hello --> key hai

localStorage.clear(); // esase localstorage ka sara data delete ho jayega






const user = {name:"Akshay"}
localStorage.setItem("user",user)
localStorage.setItem("user-copy",JSON.stringify(user));
localStorage.getItem("user-copy"); // output: {"name":"Akshay"}

JSON.parse(localStorage.getItem("user-copy")); // output: {name: "Akshay"}