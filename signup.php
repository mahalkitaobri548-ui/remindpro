<?php

session_start();

require_once "db.php";


/* CHECK REQUEST */

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    header("Location: signup.html");
    exit();
}


/* GET FORM DATA */

$name = trim($_POST["name"] ?? "");
$email = trim($_POST["email"] ?? "");
$password = $_POST["password"] ?? "";
$confirm_password = $_POST["confirm_password"] ?? "";


/* CHECK EMPTY */

if (
    $name === "" ||
    $email === "" ||
    $password === "" ||
    $confirm_password === ""
) {
    header("Location: signup.html");
    exit();
}


/* CHECK EMAIL */

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    header("Location: signup.html");
    exit();
}


/* CHECK PASSWORD LENGTH */

if (strlen($password) < 6) {
    header("Location: signup.html");
    exit();
}


/* CHECK PASSWORD MATCH */

if ($password !== $confirm_password) {
    header("Location: signup.html");
    exit();
}


/* CHECK EXISTING EMAIL */

$check = $conn->prepare(
    "SELECT `User ID`
     FROM users
     WHERE `Email` = ?"
);

if (!$check) {
    die("Database error: " . $conn->error);
}

$check->bind_param("s", $email);

$check->execute();

$result = $check->get_result();

if ($result->num_rows > 0) {

    $check->close();

    header("Location: login.html");
    exit();
}

$check->close();


/* HASH PASSWORD */

$hashedPassword = password_hash(
    $password,
    PASSWORD_DEFAULT
);


/* INSERT ACCOUNT */

$stmt = $conn->prepare(
    "INSERT INTO users
    (`Full Name`, `Email`, `Password`)
    VALUES (?, ?, ?)"
);

if (!$stmt) {
    die("Database error: " . $conn->error);
}

$stmt->bind_param(
    "sss",
    $name,
    $email,
    $hashedPassword
);


/* SAVE ACCOUNT */

if ($stmt->execute()) {

    $stmt->close();
    $conn->close();

    /* SUCCESS → LOGIN FORM */

    header("Location: login.html");
    exit();
}


/* ERROR */

$error = $stmt->error;

$stmt->close();
$conn->close();

die("Account creation failed: " . $error);

?>