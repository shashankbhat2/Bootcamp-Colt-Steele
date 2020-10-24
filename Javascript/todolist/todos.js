// TODO through Prompt
// index based delete 
let input = prompt('What would you like to do?')
const todos = ['Chickens', 'Eggs'];
let Addtodo, DelTodo;
while(input !== 'quit' && input !== 'q'){
    if(input === 'list'){
        for(let i=0; i<todos.length; i++){
            window.alert(`${i}: ${todos[i]}`);
        }
    }else if(input === 'new'){
        const newTodo = prompt('What is the new todo');
        todos.push(newTodo);
        window.alert(`${newTodo} added to list`);
    }else if(input === 'delete'){
        const delTodo = prompt('What index to delete');
        todos.splice(delTodo);
        window.alert(`Todo at ${delTodo} was deleted`);
    }
    input = prompt('What would you like to do?')
}

