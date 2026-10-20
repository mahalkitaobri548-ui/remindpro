 let tasks =
        JSON.parse(
            localStorage.getItem("remindpro_mytasks")
        ) || [];

    let currentFilter = "all";


    /* OPEN MODAL */

    function openModal() {

        document
            .getElementById("taskModal")
            .classList.add("show");
    }


    /* TOGGLE TASK */

    function toggleTask(id) {

        const task =
            tasks.find(
                task => task.id === id
            );

        if (!task) return;

        if (task.status === "completed") {

            task.status = "pending";

        } else {

            task.status = "completed";

        }

        saveTasks();

        renderTasks();

    }


    /* DELETE TASK */

    function deleteTask(id) {

        const confirmDelete =
            confirm(
                "Delete this task?"
            );

        if (!confirmDelete) return;

        tasks =
            tasks.filter(
                task => task.id !== id
            );

        saveTasks();

        renderTasks();

    }


    /* FILTER TASKS */

    function filterTasks(
        filter,
        button
    ) {

        currentFilter = filter;

        document
            .querySelectorAll(".filter-btn")
            .forEach(btn => {

                btn.classList.remove("active");

            });

        button.classList.add("active");

        renderTasks();

    }


    /* FORMAT DATE */

    function formatDate(dateString) {

        const date =
            new Date(dateString + "T00:00:00");

        return date.toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );
    }


    /* GET PRIORITY CLASS */

    function getPriorityClass(priority) {

        return priority.toLowerCase();

    }


    /* DISPLAY TASKS */

    function renderTasks() {

        const taskList =
            document.getElementById("taskList");

        taskList.innerHTML = "";

        let filteredTasks = tasks;

        if (currentFilter === "pending") {

            filteredTasks =
                tasks.filter(
                    task =>
                    task.status !== "completed"
                );
        }

        if (currentFilter === "completed") {

            filteredTasks =
                tasks.filter(
                    task =>
                    task.status === "completed"
                );
        }


        /* NO TASK */

        if (filteredTasks.length === 0) {

            taskList.innerHTML = `

                <div class="empty">
                    No tasks found.
                </div>

            `;

            return;
        }


        /* SORT BY DATE */

        filteredTasks.sort(
            (a, b) =>
            new Date(a.date) -
            new Date(b.date)
        );


        /* CREATE TASK CARDS */

        filteredTasks.forEach(task => {

            const isCompleted =
                task.status === "completed";

            const card =
                document.createElement("div");

            card.className =
                "task-card" +
                (isCompleted
                    ? " completed"
                    : "");

            card.innerHTML = `

                <!-- CHECKBOX -->

                <div
                    class="checkbox
                    ${isCompleted ? "checked" : ""}"
                    onclick="toggleTask(${task.id})">

                </div>

                <!-- TASK CONTENT -->

                <div class="task-content">

                    <p class="task-name">
                        ${escapeHTML(task.title)}
                    </p>


                    <p class="task-date">

                        <span class="calendar-icon">
                            ▣
                        </span>

                        ${formatDate(task.date)}

                    </p>

                    <span
                        class="priority
                        ${getPriorityClass(task.priority)}">

                        ${task.priority}

                    </span>

                </div>

                <!-- THREE DOTS -->

                <button class="more-btn" onclick="deleteTask(${task.id})">⋮</button>

            `;

            taskList.appendChild(card);

        });

    }


    /* SECURITY */

    function escapeHTML(text) {

        const div =
            document.createElement("div");

        div.textContent = text;

        return div.innerHTML;

    }
    

    /* INITIALIZE */

    renderTasks();