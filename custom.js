
document.addEventListener('DOMContentLoaded', function() {
    var scrollLocation = document.getElementById("new-todo-group");
    scrollLocation.scrollTop = scrollLocation.scrollHeight;
    var number_Of_todos = 0;
    var link = document.getElementById('add_new_todo_btn');
    var completed_todo = document.getElementById('list');
    // onClick's logic below:
    link.addEventListener('click', function() {
        var newNumberOfTodo = number_Of_todos + 1;
        var todoParent = document.getElementById('list');
        var inputValue = document.getElementById('new_todo_input').value;
        //create list
        var new_todo_list = document.createElement('LI');
        new_todo_list.className = "list-group-item";
        new_todo_list.id = "list-item-" + (newNumberOfTodo);
        new_todo_list.innerHTML = inputValue;
        // append list to group
        todoParent.appendChild(new_todo_list);
        // empty input 
        document.getElementById('new_todo_input').value = "";

        //update counter 
        number_Of_todos++;
        return false;
    });

    completed_todo.addEventListener('click', function(e) {
  
        // find the index of the clicked target from the images array
        var todos = [].slice.call(completed_todo.querySelectorAll('.list-group-item'));
        var index = todos.indexOf(e.target) + 1;
        var elementParent = document.getElementById("list-item-" + index);
        console.log(index);
        elementParent.innerHTML = elementParent.innerHTML.strike();
        elementParent.style.backgroundColor = "#eceff3";
        elementParent.style.color = "gray";
        return false;
    });
});