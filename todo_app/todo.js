// This function gets the task from input
function get_todos() {
    // this creats an array of tasks that are inputed
    var todos = new Array;
    // This pulls the task that was save in the web browser memory
    var todos_str = localStorage.getItem('todo');
    // if the input is not nul then JSON.parse will
    // communicate wit the web browser to make the task a JavaScript object.
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// This function adds the inpute task to the get_todos function array
function add() {
    // This takes the inputed task an creates a variable of it
    var task = document.getElementById('task').value;

    var todos = get_todos();
    // This adds a new taks at the end of the array
    todos.push(task);
    // this converts the task input to a JSON srting
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();
    return false;
}

// This function keeps the tasks permenantly displayed on the screen
function show() {
    // this set the task that was retrieved as a varible
    var todos = get_todos();

    // This sets up each task as an unorderd list
    var html = '<ul>';
    // This displays a task to the list in the order that it is inputed
    for (var i = 0; i < todos.length; i++) {
        // This also displays the task as a list and creates the buton with the "x"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    };
    html += '</ul>';
    // This display the task as a list
    document.getElementById('todos').innerHTML = html;

    // This re-atachees event listeners to all "x" buttons after updating the task list
    addRemoveListeners();
}

// This display the inputed task when the 'Add Item' button is clicked
document.getElementById('add').addEventListener('click', add);
// This will keep the inputs displayed permenantly on the scren
show();

// This function removes a task when clicking 'x'
function removeItem(index) {
    // This retrieves the curent list of tasks from local storage
    var todos = get_todos(); 

    // Ensure todos is an aray before calling splice
    if (!Array.isArray(todos)) {
        console.error("Eror: todos is not an array");
        return;
    }

    // This remove the selected task from the array using its index
    todos.splice(index, 1);
    // This update the local storage with the modified task list
    localStorage.setItem('todo', JSON.stringify(todos));

    // This refresh the displayed list to reflect the change 
    show();
}

// THis funciton add event listeners to all the 'x' buttons
function addRemoveListeners() {
    var removeButtons = document.querySelectorAll(".remove");

    removeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            // This gets the index form the buton Id
            var index = this.getAttribute("id"); 
            // This calls the remve function
            removeItem(index);
        });
    });
} 

// This functions run every time any task are displayed
show();
addRemoveListeners();