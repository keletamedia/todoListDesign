var number_Of_todos = 4;
// strike each todo when completed 
function strikeContent (element_id) {
    var element = document.getElementById(element_id);
    var elementParent = document.getElementById("list-item-" + element_id);
    var itemContent = element.innerHTML;
    var newItemContent = itemContent.strike();
    element.innerHTML = newItemContent;
    elementParent.style.backgroundColor = "#f8f9fa";
    element.style.color = "gray";
    return false;
}
// adding a new todo
function add_new_todo () {
    var newNumberOfTodo = number_Of_todos + 1;
    var todoParent = document.getElementById('list');
    var inputValue = document.getElementById('new_todo_input').value;
    var onclickFunctionString = "strikeContent('" + newNumberOfTodo + "')";
    //create list
    var new_todo_list = document.createElement('LI');
    new_todo_list.className = "list-group-item";
    new_todo_list.id = "list-item-" + (newNumberOfTodo);
    new_todo_list.setAttribute("onclick", onclickFunctionString);
    // create a tag 
    var new_todo_button = document.createElement('A');
    new_todo_button.className = "item-button";
    new_todo_button.id = "" + (newNumberOfTodo);
    // Add input text to a tag
    var textnode = document.createTextNode(inputValue);
    // append text to a tag
    new_todo_button.appendChild(textnode);
    // append a tag to list
    new_todo_list.appendChild(new_todo_button);
    // append list to group
    todoParent.appendChild(new_todo_list);
    // empty input 
    document.getElementById('new_todo_input').value = "";
    return false;
}

