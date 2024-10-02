const path = require("path");

console.log(__dirname); //100xdevs/week-4/assignments
console.log(__filename);  //100xdevs/week-4/assignments/path.js


console.log(path.basename(__dirname));  //assignments
console.log(path.basename(__filename)); //path.js


console.log(path.parse(__dirname)); // parse the directory name to a json object
console.log(path.parse(__filename));


console.log(path.join("folder1" , "folder2" ,"../index.html"));


