let input = prompt("What would you like to do?")
const todos = ['collect chicken eggs', 'clean litter box'];
while (input !== 'quit' && input !== 'q') {
    if (input === 'list') {
        console.log('***********')
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]}`);
        }
        console.log('***********')
    } else if (input === 'new') {
        const newtodo = prompt('ok, what is the new todo?');
        todos.push(newtodo);
        console.log(`${newtodo} added to the list`)
    } else if (input === 'delete') {
        const indexstr = parseInt(prompt('Ok,enter a index to delete'));
        if (!Number.isNaN(index)) {
            const deleted = todos.splice(index, 1);
            console.log(`ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unkown index')
        }
    }
    input = prompt('what would you like to do?')
}
console.log("OK QUIT THE APP!")