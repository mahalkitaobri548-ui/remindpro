<?php

session_start();

if (!isset($_SESSION["user_id"])) {

    header("Location: login.html");

    exit();

}

$userName =
    $_SESSION["user_name"];

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RemindPro - Home</title>
    <link rel="stylesheet" href="dashboard.css">
    </head>

<body>

<div class="app">

    <!-- HEADER -->
    <header class="header">


        <!-- MENU -->
        <div class="menu">☰</div>


        <!-- ONLY BELL -->
        <div class="notification">
            <svg viewBox="0 0 24 24">
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
                <path d="M10 21h4"></path>
            </svg>
            <span class="notification-dot"></span>
        </div>

    </header>


    <!-- WELCOME -->
    <section class="welcome">

        <p>Have a nice day!</p>

        <h1>
    Hi, <?php echo htmlspecialchars($userName); ?>!
</h1>

        <p class="subtitle">
            Stay organized, stay focused,<br>
            reach your goals!
        </p>

    </section>


    <!-- SUN -->
    <div class="sun"></div>


    <!-- STUDY DESK -->
    <div class="desk">


        <!-- BOOKS -->
        <div class="books">

            <div class="book one"></div>
            <div class="book two"></div>
            <div class="book three"></div>

        </div>


        <!-- LAPTOP -->
        <div class="laptop">

            <div class="screen"></div>
            <div class="laptop-base"></div>

        </div>


        <!-- PLANT -->
        <div class="plant">

            <div class="stem"></div>
            <div class="leaf one"></div>
            <div class="leaf two"></div>
            <div class="leaf three"></div>
            <div class="leaf four"></div>
            <div class="pot"></div>
        </div>

    </div>


    <!-- STATISTICS -->
    <section class="stats">


        <!-- TOTAL -->
        <div class="stat-card">

            <div class="stat-icon blue">✓</div>
            <p class="stat-title">Total Tasks</p>
            <p class="stat-number" id="totalTasks">0</p>
            <p class="stat-change">↑</p>
        </div>


        <!-- PENDING -->
        <div class="stat-card">

            <div class="stat-icon yellow">◷</div>
            <p class="stat-title">Pending</p>
            <p class="stat-number" id="pendingTasks">0</p>
            <p class="stat-change">↑</p>
        </div>


        <!-- COMPLETED -->
        <div class="stat-card">

            <div class="stat-icon green">✓</div>
            <p class="stat-title">Completed</p>
            <p class="stat-number" id="completedTasks">0</p>
            <p class="stat-change">↑</p>
        </div>


        <!-- OVERDUE -->
        <div class="stat-card">

            <div class="stat-icon red">!</div>
            <p class="stat-title">Overdue</p>
            <p class="stat-number" id="overdueTasks">0</p>
            <p class="stat-change red-change">↑</p>
        </div>

    </section>


    <!-- UPCOMING DEADLINES -->
    <section class="deadlines">

        <div class="deadline-header">

            <div class="deadline-title">


                <!-- Calendar -->
                <svg viewBox="0 0 24 24">
                    <rect x="3" y="4" width="18" height="17" rx="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="8" y1="2" x2="8" y2="6"></line>
                    <line x1="16" y1="2" x2="16" y2="6"></line>
                </svg>

                Upcoming Deadlines

            </div>

            <a href="mytasks.html" class="view-all">
                View All ›
            </a>

        </div>


        <!-- TASKS WILL APPEAR HERE -->
        <div id="deadlineList">
            <div class="no-task">
                No upcoming deadlines.
            </div>
        </div>

    </section>


    <!-- BOTTOM NAVIGATION -->
    <nav class="bottom-nav">


        <!-- HOME -->
        <a href="dashboard.php" class="nav-item active">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">
                    <path d="M3 10.5L12 3l9 7.5"></path>
                    <path d="M5 9.5V21h14V9.5"></path>
                    <path d="M9 21v-7h6v7"></path>
                </svg>

            </span>

            Home

        </a>


        <!-- TASKS -->
        <a href="mytasks.html" class="nav-item">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">
                    <line x1="7" y1="6" x2="21" y2="6"></line>
                    <line x1="7" y1="12" x2="21" y2="12"></line>
                    <line x1="7" y1="18" x2="21" y2="18"></line>
                    <circle cx="3" cy="6" r="1"></circle>
                    <circle cx="3" cy="12" r="1"></circle>
                    <circle cx="3" cy="18" r="1"></circle>
                </svg>

            </span>

            Tasks

        </a>


        <!-- REMINDERS - BELL -->
        <a href="reminders.html" class="nav-item">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">
                    <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"></path>
                    <path d="M10 21h4"></path>
                </svg>

            </span>

            Reminders

        </a>


        <!-- PROFILE -->
        <a href="profile.php" class="nav-item">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">

                    <circle cx="12" cy="8" r="4"></circle>

                    <path d="M4 21 c0-4 3.5-7 8-7 s8 3 8 7"></path>

                </svg>

            </span>

            Profile

        </a>

    </nav>

</div>

<script src="dashboard.js"></script>

</body>
</html>