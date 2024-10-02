const fs = require('fs');

const path = require("path");
const { Command } = require('commander');
const program = new Command();

const filepath = path.join(__dirname,'todos.json');

function readTodos(){
    if(!fs.existsSync(filepath)){
        return [];
    }


    const data = fs.readFileSync(filepath,"utf-8");

    return JSON.parse(data || "[]")
}


function writetodos(todos){
    fs.writeFileSync(filepath,JSON.stringify(todos,null,2),"utf-8");
}

program
  .name('ToDO-CLI')
  .description('CLI to do todo based tasks')
  .version('0.8.0');

program.command('add')
  .description('add a specific task to my todo file')
  .argument('<Todo_Tile>', 'Enter the todo title')
  .argument('<Time>', 'Enter the finish time')
  .action((todotitle,time) => {
    
         const todos = readTodos();

         todos.push({
            title: todotitle,
            created : time,
            completed: false
         })

         writetodos(todos);

         console.log("ToDo Added Succesfully");




       
    });
 



    
program.command('remove')
.description('add a specific task to my todo file')
.argument('<Todo_Tile>', 'Enter the todo title')
.action((todotitle) => {
  
       let todos = readTodos();

      let updatedtodos = todos.filter((x)=>x.title != todotitle)

       writetodos(updatedtodos);

       console.log("ToDo Removed Succesfully");




     
  });






  program.command('mark')
.description('add a specific task to my todo file')
.argument('<Todo_Tile>', 'Enter the todo title')
.action((todotitle) => {
  
       let todos = readTodos();
       let todofound = false;

    todos = todos.map((todo)=>{
          if(todo.title==todotitle){
            todo.completed = true;
            todofound=true;
          }

          return todo;
    })


       



    if(todofound){
        writetodos(todos);
      }

      else{
        console.log("to do not found");
      }

     
  });

  program.parse();