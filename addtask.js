let selectedPriority = "Medium";


// ===============================
// SELECT PRIORITY
// ===============================

function selectPriority(priority, button) {

    selectedPriority = priority;

    document.querySelectorAll(".priority-btn").forEach(function(btn) {
        btn.classList.remove("selected");
    });

    button.classList.add("selected");
}


// ===============================
// SAVE TASK
// ===============================

function saveTask() {

    // Get values
    const title = document.getElementById("taskTitle").value.trim();
    const description = document.getElementById("taskDescription").value.trim();
    const date = document.getElementById("taskDate").value;
    const reminder = document.getElementById("reminderToggle").checked;


    // Check title
    if (title === "") {
        alert("Please enter a task title.");
        return;
    }


    // Check date
    if (date === "") {
        alert("Please select a due date.");
        return;
    }


    // Get existing tasks
    let tasks = [];

    try {
        tasks = JSON.parse(
            localStorage.getItem("remindpro_mytasks")
        ) || [];
    } catch (error) {
        tasks = [];
    }


    // Create new task
    const newTask = {
        id: Date.now(),
        title: title,
        description: description,
        date: date,
        priority: selectedPriority,
        reminder: reminder,
        status: "pending"
    };


    // Add task
    tasks.push(newTask);


    // Save task
    try {

        localStorage.setItem(
            "remindpro_mytasks",
            JSON.stringify(tasks)
        );

    } catch (error) {

        alert("Unable to save task.");
        console.error(error);
        return;

    }


    // Confirm
    alert("Task saved successfully!");


    // Go to My Tasks
    window.location.href = "mytasks.html";
}


// BACK BUTTON

function goBack() {
    window.location.href = "dashboard.php";
}

function goBack() {

    window.location.href = "mytasks.html";

}