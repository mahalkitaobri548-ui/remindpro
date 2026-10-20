<?php

session_start();
require_once "db.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: login.html");
    exit();
}

$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";

if ($email === "" || $password === "") {
    header("Location: login.html");
    exit();
}


/* FIND USER */

$stmt = $conn->prepare(
    "SELECT `User ID`, `Full Name`, `Email`, `Password`
     FROM users
     WHERE LOWER(TRIM(`Email`)) = LOWER(?)
     LIMIT 1"
);

if (!$stmt) {
    die("Database error: " . $conn->error);
}

$stmt->bind_param("s", $email);
$stmt->execute();

$result = $stmt->get_result();

if ($result->num_rows === 0) {
    die("
        <h3>Invalid user.</h3>
        <a href='login.html'>Try Again</a>
    ");
}

$user = $result->fetch_assoc();

$storedPassword = $user["Password"];


/* PASSWORD CHECK */

if (!password_verify($password, $storedPassword)) {
    die("
        <h3>Invalid password.</h3>
        <a href='login.html'>Try Again</a>
    ");
}


/* CREATE SESSION */

$_SESSION["user_id"] = $user["User ID"];
$_SESSION["user_name"] = $user["Full Name"];
$_SESSION["user_email"] = $user["Email"];


/* GO TO DASHBOARD */

$stmt->close();
$conn->close();

header("Location: dashboard.php");
exit();

?>