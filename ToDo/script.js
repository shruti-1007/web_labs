let completed = [];
let pending = [];
let all = [];
let id = 1;

function getTask(event) {
    event.preventDefault();
    let task = document.forms["addtask"]["newTask"].value;
    addTask(task);
    document.forms["addtask"]["newTask"].value = "";
}

function addTask(task) {
    all.push(id);
    pending.push(id);

    let listdiv = document.getElementById("tasklist");
    let newTask = document.createElement("div");
    newTask.innerHTML = `
        <form id="task-${id}">
            <input type="checkbox" onchange="strikethrough(this)" /> ${task}
            <button type="button" onclick="deleteTask(this)">Del</button>
        </form>
    `;
    listdiv.appendChild(newTask);
    id++;

    updateCounters();
}

function strikethrough(element) {
    let taskId = parseInt(element.parentElement.id.replace("task-", ""));

    if (element.checked) {
        element.parentElement.style.textDecoration = "line-through";
        if (!completed.includes(taskId)) completed.push(taskId);
        pending = pending.filter(i => i !== taskId);
    } else {
        element.parentElement.style.textDecoration = "none";
        if (!pending.includes(taskId)) pending.push(taskId);
        completed = completed.filter(i => i !== taskId);
    }

    updateCounters();
}

function deleteTask(element) {
    let taskId = parseInt(element.parentElement.id.replace("task-", ""));
    element.parentElement.remove();

    all = all.filter(i => i !== taskId);
    pending = pending.filter(i => i !== taskId);
    completed = completed.filter(i => i !== taskId);

    updateCounters();
}

// Filter buttons
document.getElementById("all").onclick = () => showTasks(all);
document.getElementById("pendingbtn").onclick = () => showTasks(pending);
document.getElementById("completedbtn").onclick = () => showTasks(completed);

function showTasks(arr) {
    let tasks = document.querySelectorAll("#tasklist form");
    tasks.forEach(task => {
        let taskId = parseInt(task.id.replace("task-", ""));
        task.parentElement.style.display = arr.includes(taskId) ? "block" : "none";
    });
}

// Update task counters
function updateCounters() {
    document.getElementById("completednum").innerHTML = completed.length;
    document.getElementById("pendingnum").innerHTML = pending.length;
}