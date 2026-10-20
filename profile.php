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
    <title>RemindPro - Profile</title>
    <link rel="stylesheet" href="profile.css">
</head>

<body>

<div class="app">


    <!-- SETTINGS -->

    <div class="top-header">

        <button
            class="settings-btn"
            onclick="openSettings()">
            ⚙
        </button>

    </div>


    <!-- PROFILE -->

    <section class="profile-section">

        <div class="profile-picture">

            <div class="avatar">

                <div class="avatar-hair"></div>
                <div class="avatar-face"></div>
                <div class="avatar-bangs"></div>
                <div class="avatar-body"></div>

            </div>

        </div>

        <h1 class="profile-name" id="userName"> Hi, Student!</h1>

    </section>


    <!-- STATISTICS -->

    <section class="stats">

    
        <!-- TOTAL -->

        <div class="stat-box total-box">

            <div
                class="stat-number"
                id="totalTasks">
                0
            </div>

            <div class="stat-label">
                Total Tasks
            </div>

        </div>


        <!-- PENDING -->

        <div class="stat-box pending-box">

            <div
                class="stat-number"
                id="pendingTasks">
                0
            </div>

            <div class="stat-label">
                Pending
            </div>

        </div>


        <!-- COMPLETED -->

        <div class="stat-box completed-box">

            <div
                class="stat-number"
                id="completedTasks">
                0
            </div>

            <div class="stat-label">
                Completed
            </div>

        </div>


        <!-- OVERDUE -->

        <div class="stat-box overdue-box">

            <div
                class="stat-number"
                id="overdueTasks">
                0
            </div>

            <div class="stat-label">
                Overdue
            </div>

        </div>

    </section>



    <!-- PROFILE MENU -->

    <section class="menu-card">


        <!-- MY PROFILE -->

        <a
            href="my-profile.html"
            class="menu-item">

            <span class="menu-icon">

                <svg viewBox="0 0 24 24">

                    <circle cx="12" cy="8" r="4"></circle>

                    <path d="M4 21 c0-4 3.5-7 8-7 s8 3 8 7"></path>

                </svg>

            </span>

            <span class="menu-text">
                My Profile
            </span>

            <span class="menu-arrow">
                ›
            </span>

        </a>


        <!-- APP SETTINGS -->

        <a
            href="settings.html"
            class="menu-item">

            <span class="menu-icon">

                <svg viewBox="0 0 24 24">

                    <circle cx="12" cy="12" r="3"></circle>

                    <path
                        d="M19.4 15 a1.7 1.7 0 0 0.3 1.9l.1.1-1.7 1.7-.1-.1 a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V20 h-2.4v-.2 a1.7 1.7 0 0 0-1-1.5
                        1.7 1.7 0 0 0-1.9.3 l-.1.1-1.7-1.7.1-.1 a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H7v-2.4h.2
                        a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1 1.7-1.7.1.1 a1.7 1.7 0 0 0 1.9.3
                        1.7 1.7 0 0 0 1-1.5V5h2.4v.2 a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1 1.7 1.7-.1.1
                        a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.5 1h.2v2.4h-.2 a1.7 1.7 0 0 0-1.5 1z">
                    </path>

                </svg>

            </span>

            <span class="menu-text">
                App Settings
            </span>

            <span class="menu-arrow">
                ›
            </span>

        </a>


        <!-- HELP -->

        <a
            href="help.html"
            class="menu-item">

            <span class="menu-icon">

                <svg viewBox="0 0 24 24">

                    <circle cx="12" cy="12" r="9"></circle>

                    <path d="M9.5 9 a2.5 2.5 0 1 1 4.5 1.5 c-.8.9-2 1.2-2 2.5"></path>

                    <circle cx="12" cy="17" r=".7" fill="currentColor"></circle>

                </svg>

            </span>

            <span class="menu-text">
                Help &amp; Support
            </span>

            <span class="menu-arrow">
                ›
            </span>

        </a>


        <!-- ABOUT -->

        <a
            href="about.html"
            class="menu-item">

            <span class="menu-icon">

                <svg viewBox="0 0 24 24">

                    <circle
                        cx="12"
                        cy="12"
                        r="9">
                    </circle>

                    <line
                        x1="12"
                        y1="11"
                        x2="12"
                        y2="16">
                    </line>

                    <circle
                        cx="12"
                        cy="7.5"
                        r=".8"
                        fill="currentColor">
                    </circle>

                </svg>

            </span>

            <span class="menu-text">
                About
            </span>

            <span class="menu-arrow">
                ›
            </span>

        </a>

    </section>


    <!-- LOG OUT -->

    <button
    class="logout-btn"
    onclick="window.location.href='logout.php'">

    ⇥ &nbsp; Log Out

</button>


    <!-- BOTTOM NAVIGATION -->

    <nav class="bottom-nav">

        <!-- HOME -->

        <a
            href="dashboard.php"
            class="nav-item">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">

                    <path
                        d="M3 10.5L12 3l9 7.5">
                    </path>

                    <path
                        d="M5 9.5V21h14V9.5">
                    </path>

                    <path
                        d="M9 21v-7h6v7">
                    </path>

                </svg>

            </span>

            Home

        </a>


        <!-- TASKS -->

        <a
            href="mytasks.html"
            class="nav-item">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">

                    <line
                        x1="7"
                        y1="6"
                        x2="21"
                        y2="6">
                    </line>

                    <line
                        x1="7"
                        y1="12"
                        x2="21"
                        y2="12">
                    </line>

                    <line
                        x1="7"
                        y1="18"
                        x2="21"
                        y2="18">
                    </line>

                    <circle
                        cx="3"
                        cy="6"
                        r="1">
                    </circle>

                    <circle
                        cx="3"
                        cy="12"
                        r="1">
                    </circle>

                    <circle
                        cx="3"
                        cy="18"
                        r="1">
                    </circle>

                </svg>

            </span>

            Tasks

        </a>


        <!-- REMINDERS -->

        <a
            href="reminders.html"
            class="nav-item">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">

                    <path
                        d="
                        M18 8
                        a6 6 0 0 0-12 0
                        c0 7-3 7-3 9
                        h18
                        c0-2-3-2-3-9">
                    </path>

                    <path
                        d="M10 21h4">
                    </path>

                </svg>

            </span>

            Reminders

        </a>


        <!-- PROFILE -->

        <a
            href="profile.php"
            class="nav-item active">

            <span class="nav-icon">

                <svg viewBox="0 0 24 24">

                    <circle
                        cx="12"
                        cy="8"
                        r="4">
                    </circle>

                    <path
                        d="
                        M4 21
                        c0-4 3.5-7 8-7
                        s8 3 8 7">
                    </path>

                </svg>

            </span>

            Profile

        </a>

    </nav>


</div>

    <script src="profile.js"></script>

</body>
</html>