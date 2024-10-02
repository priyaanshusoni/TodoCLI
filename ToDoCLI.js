const fs = require("fs");

const {Command} = require("commander");

const path = require("path");
const { todo } = require("node:test");

const program = new Command();


// todos  json file path ->

const TodosFilePath = path.join(__dirname,"todos.json"); // path join actual use case 

// console.log(TodosFilePath);

function readTodos(){
     if(!fs.existsSync(TodosFilePath)){
          return [];
     }

     const data=fs.readFileSync(TodosFilePath,"utf-8"); // takes only two params 

     return JSON.parse(data || "[]")
}

function WriteTodo(todos){
     fs.writeFileSync(TodosFilePath, JSON.stringify(todos,null,2),"utf-8");
}

program
  .name('ToDo CLI')
  .description('CLI to do Todo based tasks')
  .version('0.8.0');
//to add a todo 
program.command('add')
  .description('To add a todo in todos.json')
  .argument('<Todo_Tile>', 'Enter the todo title')
  .argument('<Time>', 'Enter the finish time')
  .action((todotile , time) => {
           const todos = readTodos(); 

           todos.push({
            Title: todotile,
            DeadLine: time,
            Done: false
           })


           WriteTodo(todos);

           console.log("TODO Added Successfully");
      }
    );
 


//to remove a todo
program.command('remove')
  .description('To remove a todo in todos.json')
  .argument('<Todo_Title>', 'Enter the todo title to delete')
  .action((todotitle) => {
    const todos = readTodos();

    const updatedTodos = todos.filter((key)=>key.Title!==todotitle);

    WriteTodo(updatedTodos);

    console.log("Todo List Updated succesfully");
  });


//to mark a todo 
program.command('mark')
  .description('mark a todo item as done')
  .argument('<ToDo_Title>', 'mark this todo')
  .action((todotitle) => {
    let todos = readTodos();
    let todoFound = false;
    
    for(let i=0;i<todos.length;i++){
        if(todos[i].Title===todotitle){
            todoFound=true;
            todos[i].Done=true;
        }
    }

    if(todoFound){
        WriteTodo(todos);
        console.log("Todo Marked Succesfully!");
    }

    else{
        console.log("Todo not found");
    }
  });


  program.command('deleteall')
  .description('To delete all todo')
  .action(() => {
    let todos = readTodos();

    todos = [];

    WriteTodo(todos);

    console.log("All Todo Deletes Succesfully");
  });

program.parse();



