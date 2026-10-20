const currentUser = JSON.parse(
        localStorage.getItem("remindpro_currentUser")
    );

    if (currentUser) {

        document.getElementById("userName").textContent =
            currentUser.fullName;

    }


    /* === GET USER TASKS === */

    let tasks = JSON.parse(
        localStorage.getItem("remindpro_tasks")
    ) || [];


    /*
        Example task format:

        {
            title: "Research Paper",
            date: "2026-09-30",
            priority: "Urgent",
            status: "pending"
        }

        status can be:
        pending
        completed
    */


    /* === COUNT TASKS === */

    function updateStatistics() {

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        let total = tasks.length;

        let completed = tasks.filter(
            task => task.status === "completed"
        ).length;

        let pending = tasks.filter(
            task => task.status !== "completed"
        ).length;

        let overdue = tasks.filter(task => {

            if (task.status === "completed") {
                return false;
            }

            const taskDate = new Date(task.date);
            taskDate.setHours(0, 0, 0, 0);

            return taskDate < today;

        }).length;

        document.getElementById("totalTasks").textContent = total;
        document.getElementById("pendingTasks").textContent = pending;
        document.getElementById("completedTasks").textContent = completed;
        document.getElementById("overdueTasks").textContent = overdue;
    }


    /* === DISPLAY UPCOMING DEADLINES === */

    function displayDeadlines() {

        const deadlineList =
            document.getElementById("deadlineList");

        deadlineList.innerHTML = "";

        const today = new Date();

        today.setHours(0, 0, 0, 0);

        const upcomingTasks = tasks
            .filter(task => task.status !== "completed")
            .filter(task => new Date(task.date) >= today)
            .sort((a, b) =>
                new Date(a.date) - new Date(b.date)
            )
            .slice(0, 5);

        if (upcomingTasks.length === 0) {

            deadlineList.innerHTML = `
                <div class="no-task">
                    No upcoming deadlines.
                </div>
            `;

            return;
        }

        upcomingTasks.forEach(task => {

            let iconClass = "blue";

            if (task.priority === "Urgent") {
                iconClass = "red";
            }

            else if (task.priority === "High") {
                iconClass = "yellow";
            }

            else if (task.priority === "Low") {
                iconClass = "green";
            }

            const date = new Date(task.date);

            const formattedDate =
                date.toLocaleDateString(
                    "en-US",
                    {
                        month: "short",
                        day: "numeric",
                        year: "numeric"
                    }
                );


            deadlineList.innerHTML += `

                <div class="deadline-item">

                    <div class="task-icon ${iconClass}">
                        ✓
                    </div>

                    <div class="task-info">

                        <p class="task-name">
                            ${task.title}
                        </p>

                        <p class="task-date">
                            ${formattedDate}
                        </p>

                    </div>

                    <span class="priority ${task.priority.toLowerCase()}">
                        ${task.priority}
                    </span>

                </div>

            `;

        });

    }
    

    /* === RUN DASHBOARD === */

    updateStatistics();

    displayDeadlines();