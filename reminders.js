/* =====================================
       GET TASKS
    ====================================== */

    let tasks =
        JSON.parse(
            localStorage.getItem(
                "remindpro_tasks"
            )
        ) || [];


    /* =====================================
       CALCULATE DAYS LEFT
    ====================================== */

    function getDaysLeft(dateString) {

        const today = new Date();

        today.setHours(0, 0, 0, 0);


        const dueDate =
            new Date(
                dateString + "T00:00:00"
            );


        const difference =
            dueDate - today;


        return Math.ceil(
            difference /
            (1000 * 60 * 60 * 24)
        );

    }


    /* =====================================
       FORMAT DATE
    ====================================== */

    function formatDate(dateString) {

        const date =
            new Date(
                dateString + "T00:00:00"
            );


        return date.toLocaleDateString(
            "en-US",
            {
                month: "short",
                day: "numeric",
                year: "numeric"
            }
        );

    }


    /* =====================================
       DISPLAY REMINDERS
    ====================================== */

    function displayReminders() {

        const container =
            document.getElementById(
                "reminderList"
            );


        container.innerHTML = "";


        const upcoming =
            tasks
            .filter(
                task =>
                task.status !== "completed"
            )
            .sort(
                (a, b) =>
                new Date(a.date) -
                new Date(b.date)
            )
            .slice(0, 3);


        if (upcoming.length === 0) {

            container.innerHTML = `

                <div class="empty">
                    No upcoming deadlines.
                </div>

            `;

            return;
        }


        upcoming.forEach(
            (task, index) => {

                const days =
                    getDaysLeft(task.date);


                let iconClass =
                    "green-icon";

                let badgeClass =
                    "badge-green";


                if (task.priority === "Urgent") {

                    iconClass =
                        "red-icon";

                    badgeClass =
                        "badge-red";

                }

                else if (
                    task.priority === "High"
                ) {

                    iconClass =
                        "purple-icon";

                    badgeClass =
                        "badge-blue";

                }


                let timeText = "";


                if (days < 0) {

                    timeText =
                        Math.abs(days) +
                        " days overdue";

                    badgeClass =
                        "badge-red";

                }

                else if (days === 0) {

                    timeText =
                        "Due today";

                }

                else if (days === 1) {

                    timeText =
                        "1 day left";

                }

                else {

                    timeText =
                        days +
                        " days left";

                }


                let icon = "▣";


                if (
                    task.priority ===
                    "Urgent"
                ) {

                    icon = "▧";

                }

                else if (
                    task.priority ===
                    "High"
                ) {

                    icon = "▤";

                }


                container.innerHTML += `

                    <div class="deadline-item">

                        <div
                            class="deadline-icon
                            ${iconClass}">

                            ${icon}

                        </div>


                        <div
                            class="deadline-info">

                            <p class="deadline-name">

                                ${escapeHTML(
                                    task.title
                                )}

                            </p>

                            <p class="deadline-time">

                                ${timeText}

                            </p>

                        </div>


                        <span
                            class="time-badge
                            ${badgeClass}">

                            ${timeText}

                        </span>

                    </div>

                `;

            }
        );

    }


    /* =====================================
       WORKLOAD
    ====================================== */

    function updateWorkload() {

        const total =
            tasks.length;


        const high =
            tasks.filter(
                task =>
                task.priority === "High" ||
                task.priority === "Urgent"
            ).length;


        const medium =
            tasks.filter(
                task =>
                task.priority === "Medium"
            ).length;


        const low =
            tasks.filter(
                task =>
                task.priority === "Low"
            ).length;


        document
            .getElementById(
                "totalChartTasks"
            )
            .textContent = total;


        if (total === 0) {

            document
                .getElementById(
                    "highPercent"
                )
                .textContent = "0%";

            document
                .getElementById(
                    "mediumPercent"
                )
                .textContent = "0%";

            document
                .getElementById(
                    "lowPercent"
                )
                .textContent = "0%";

            return;

        }


        const highPercent =
            Math.round(
                (high / total) * 100
            );


        const mediumPercent =
            Math.round(
                (medium / total) * 100
            );


        const lowPercent =
            Math.round(
                (low / total) * 100
            );


        document
            .getElementById(
                "highPercent"
            )
            .textContent =
            highPercent + "%";


        document
            .getElementById(
                "mediumPercent"
            )
            .textContent =
            mediumPercent + "%";


        document
            .getElementById(
                "lowPercent"
            )
            .textContent =
            lowPercent + "%";


        updateDonut(
            highPercent,
            mediumPercent,
            lowPercent
        );

    }


    /* =====================================
       UPDATE DONUT CHART
    ====================================== */

    function updateDonut(
        high,
        medium,
        low
    ) {

        const donut =
            document.querySelector(
                ".donut"
            );


        const first =
            high;


        const second =
            high + medium;


        donut.style.background =
            `conic-gradient(
                #ed4e61 0% ${first}%,
                #3475dc ${first}% ${second}%,
                #2c9c9b ${second}% 100%
            )`;

    }


    /* =====================================
       ESCAPE HTML
    ====================================== */

    function escapeHTML(text) {

        const div =
            document.createElement(
                "div"
            );

        div.textContent = text;

        return div.innerHTML;

    }


    /* =====================================
       INITIALIZE
    ====================================== */

    displayReminders();

    updateWorkload();
