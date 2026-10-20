/* GET USER NAME */

function getUserName() {

        /*
         * Sinusubukan nito ang iba't ibang
         * common localStorage names para
         * compatible sa signup code mo.
         */

let name =
    localStorage.getItem("userName");

if (!name) {

    name =
        localStorage.getItem("name");

}

if (!name) {

    name =
        localStorage.getItem("Name");

}

if (!name) {

    name =
        localStorage.getItem("username");

}

if (!name) {

    name =
        localStorage.getItem("currentUser");

}

        /*
         * Kung JSON object ang currentUser
         */

if (name) {

    try {

        const user =
            JSON.parse(name);

        if (typeof user === "object") {

            name =
                user.name ||
                user.Name ||
                user.username ||
                user.fullName ||
                "Student";

        }

    }

    catch (error) {

                /* normal text lamang */

    }

}


return name || "Student";

}


/* DISPLAY USER */

function displayUser() {

    const name =
        getUserName();

    document
        .getElementById("userName")
        .textContent =
        "Hi, " + name + "!";

}


/* GET TASKS */

function getTasks() {
    
    return JSON.parse(
        localStorage.getItem(
            "remindpro_tasks"
        )
    ) || [];

}


/* CHECK OVERDUE */

function isOverdue(task) {
    
    if (
        task.status === "completed"
    ) {

        return false;

    }

    if (!task.date) {

        return false;

    }

    const today =
        new Date();
        today.setHours(
            0, 0, 0, 0
        );

    const dueDate =
        new Date(
            task.date + "T00:00:00"
        );

    return dueDate < today;
}


/* UPDATE STATISTICS */

function updateStatistics() {

    const tasks =
        getTasks();

    const total =
        tasks.length;

    const completed =
        tasks.filter(
            task =>
            task.status === "completed"
        ).length;

    const pending =
        tasks.filter(
            task =>
            task.status !== "completed" &&
            !isOverdue(task)
        ).length;

    const overdue =
        tasks.filter(
            task =>
            isOverdue(task)
        ).length;

    document.getElementById("totalTasks")
        .textContent =
        total;

    document.getElementById("pendingTasks")
        .textContent =
        pending;

    document.getElementById("completedTasks")
        .textContent =
        completed;

    document.getElementById("overdueTasks")
        .textContent =
        overdue;

}


/* LOG OUT */

function logout() {

    const confirmLogout =
        confirm(
            "Are you sure you want to log out?"
        );

    if (!confirmLogout) {

        return;

    }


        /*
         * Remove current user session.
         *
         * Huwag tanggalin ang tasks
         * dito kung gusto mong manatili
         * ang saved tasks.
         */

    localStorage.removeItem(
        "currentUser"
    );

    localStorage.removeItem(
        "userName"
    );

    window.location.href =
        "login.html";

}


    /* SETTINGS */

function openSettings() {

    window.location.href =
        "settings.html";

}


/* INITIALIZE */

displayUser();

updateStatistics();