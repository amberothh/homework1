const taskForm = document.getElementById("task-form");
const taskList = document.getElementById("task-list");

//creating a counting variable to track the number of tasks

let taskIndex = 1;
//console.log(taskForm, taskList);

taskForm.addEventListener("submit" , function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    //console.log(taskText);
    if( taskText !== ""){
        //create a new Task item
        
        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = `${taskIndex}- ${taskText}`;

        taskItem.addEventListener("click" , function(){
            console.log("completed");
            this.classList.toggle("completed");
        });

        //appending the task item to the task list
        taskList.appendChild(taskItem);

        //incrementing the task index
        taskIndex++;
        taskInput.value = "";

    }
});