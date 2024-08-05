

function getTask(){
    var vals = localStorage.getItem("tasks");
    
    if(vals!=null){
        var x = 0;
        const taskCount = document.getElementById("task-count");
        const completedTasks = document.getElementById("completed-tasks");
        const table = document.getElementById("tasks").getElementsByTagName('tbody')[0];
        table.innerHTML = "";
        const tasks = JSON.parse(vals);
        const completion = `<button class="button is-success" onclick="completedTask(this)">Completed</button>`;
        const modify = `<button class="button is-danger" onclick="modifyTask(this)">Modify</button>`;
        const del = `<button class="delete" onclick="deleteTask(this)"></button>`;
        

        tasks.forEach(element => {
            const newRow = table.insertRow();
            const col1 = newRow.insertCell(0);
            const col2 = newRow.insertCell(1);
            const col3 = newRow.insertCell(2);
            const col4 = newRow.insertCell(3);
            const col5 = newRow.insertCell(4);
            const col6 = newRow.insertCell(5);

            col1.innerHTML = `<span class="is-size-5" id="srno">${++x}</span>`;
            col2.innerHTML = `<span class="is-size-5" id = "task">${element["task"]}</span>`;
            col3.innerHTML = `<span class="is-size-5" id="priority">${element["priority"]}</span>`;
            col4.innerHTML = completion;
            col5.innerHTML = modify;
            col6.innerHTML = del;
        });

        taskCount.innerHTML = tasks.length;
        completedTasks.innerHTML = localStorage.getItem("tasks-completed");
    }
}

function putTask(){
    
    const task = document.getElementById("task").value;
    const priority = document.querySelectorAll('input[name="priority"]');

    let selectedPriority;
    for (const p of priority){
        if (p.checked){
            selectedPriority = p.value;
            break;
        }
    }

    var tasks = localStorage.getItem("tasks");
    if (tasks == null){
        tasks = [{ "task": task, "priority": selectedPriority }];
    }else{
        tasks = JSON.parse(tasks);
        tasks.push({"task": task, "priority": selectedPriority});
    }
    
    //console.log(tasks);
    tasks = JSON.stringify(tasks);
    localStorage.setItem("tasks",tasks);

    getTask();
}


function deleteTask(button){
    const row = button.parentElement.parentElement;
    const taskIndex = row.rowIndex -1;
    var tasks = JSON.parse(localStorage.getItem("tasks"));
    
    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTask();
}

function modifyTask(button){
    const row = button.parentElement.parentElement;
    const taskIndex = row.rowIndex -1;
    var tasks = JSON.parse(localStorage.getItem("tasks"));

    const mod = tasks[taskIndex];
    
    document.getElementById("task").value = mod["task"];
    const priorityRadios = document.getElementsByClassName("priority");
    for (const radio of priorityRadios) {
        if (radio.value === mod["priority"]) {
            radio.checked = true;
            break;
        }
    }

    tasks.splice(taskIndex, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    getTask();

    // Optional: Set focus back to the task input field
    document.getElementById("task").focus();
    
}

function completedTask(button){

    var completedTasks = localStorage.getItem("tasks-completed");
    if(completedTask == null){
        localStorage.setItem("tasks-completed", 1);
    }else{
        var completed = localStorage.getItem("tasks-completed");

        localStorage.setItem("tasks-completed", ++completed);
    }

    deleteTask(button);
}

function resetCompleted(){
    localStorage.setItem("tasks-completed", 0);
    getTask();
}

window.onload = getTask;