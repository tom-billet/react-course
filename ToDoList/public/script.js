document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const filterTasks = document.getElementById("filterTasks");

    let tasks = [];
    localStorage.setItem("bonjour", "hello world");
    
    addTaskBtn.addEventListener("click", () => {
        const text = taskInput.value.trim();
        if (text) {
            let task = new Map;
            task.set("text", text);
            task.set("done", false);
            addTask(task);
            taskInput.value = "";
            renderTasks();
        }
    });


    function addTask(task) {
        let tasks = [];
        tasks = getTasks();
        console.log(typeof tasks);
        tasks.push(task);
        
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }


    function getTasks() {

        if (localStorage.getItem("tasks") !== null) {
            let tasks = JSON.parse(localStorage.getItem("tasks"));
            console.log("getTasks type :");
            console.log(typeof tasks);
            console.log(tasks);
            return tasks;
        }
        else {
            let tasks = new Array;
            localStorage.setItem("tasks", tasks);
            return tasks
        }
    }


    function renderTasks() {
        taskList.innerHTML = "";
        let filteredTasks = getTasks();
        
        if (filterTasks.value === "done") {
            filteredTasks = getTasks().filter(task => task.done);
        } else if (filterTasks.value === "not-done") {
            filteredTasks = getTasks().filter(task => !task.done);
        }

        filteredTasks.forEach(task => {
            const li = document.createElement("li");
            li.className = "task";

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.checked = task.done;
            checkbox.addEventListener("change", () => {
                task.done = !task.done;
                renderTasks();
            });

            const input = document.createElement("input");
            input.type = "text";
            input.value = task.text;
            input.addEventListener("change", () => {
                task.text = input.value;
            });

            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "supr.";
            deleteBtn.addEventListener("click", () => {
                localStorage.setItem("tasks", tasks.filter(t => t.id !== task.id));
                renderTasks();
            });

            li.appendChild(checkbox);
            li.appendChild(input);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);
        });
    }

    filterTasks.addEventListener("change", renderTasks);
});
