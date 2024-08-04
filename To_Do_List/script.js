

function getTask(){
    var vals = localStorage.getItem("tasks");
    if(vals!=null){
        const table = document.getElementById("tasks").getElementsByTagName('tbody')[0];
        

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
        tasks = [{"task":task, "priority":priority}];
    }else{
        tasks = JSON.parse(tasks);
        tasks.push({"task":task, "priority":priority});
    }

    localStorage.setItem("tasks",tasks);
}