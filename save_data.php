<?php
// Establish database connection
$servername = "sql12.freemysqlhosting.net";
$username = "sql12668195";
$password = "g1mjDT5Di7";
$dbname = "sql12668195";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Function to save data into the database
function saveData($conn, $email, $password) {
    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO Data_order (Email_ID, Password) VALUES ('$email', '$password')");
    $stmt->bind_param("ss", $email, $hashedPassword);

    if ($stmt->execute()) {
        echo "Data inserted successfully";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
}

// Check if the request method is POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve data from the POST request
    $email = $_POST["Email_ID"];
    $password = $_POST["Password"];

    // Call the saveData function
    saveData($conn, $email, $password);
}

// Close the database connection
$conn->close();
?>
