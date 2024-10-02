const { json } = require("body-parser");
const fs = require("fs");

const path = require("path");


const filepath = path.join(__dirname,"todos.json");

console.log(filepath);

const fileExists = fs.existsSync(filepath);

console.log(fileExists);



const data = fs.readFileSync("todos.json" ,"utf-8");
    
const newdata= JSON.parse(data);

console.log(data);
console.log(newdata);




const text = '{"name":"John", "birth":"1986-12-14", "city":"New York"}';
const obj = JSON.parse(text);

console.log(obj);

const objTostring = JSON.stringify(obj);

console.log(objTostring);

