<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $servername = "localhost"; // Replace 'localhost' with your MySQL server address
    $username = "root"; // Replace 'root' with your MySQL username
    $password = ""; // Replace '' with your MySQL password
    $dbname = "raslen"; // Replace 'projet' with your database name

    // Create a connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Get the email and password from the form
    $email = $_POST['email'];
    $password = $_POST['password'];



    // Prepare and execute the SQL statement to check if the user exists
    $sql = "SELECT * FROM user WHERE email = '$email' AND password = '$password'";
    $result = $conn->query($sql);

    // Check if the user exists
    if ($result->num_rows > 0) {
        // User exists, authentication successful
        echo "Authentication successful. Redirect to dashboard or home page.";
        // Redirect the user to dashboard or home page
        // Example: header("Location: dashboard.php");
    } else {
        // User doesn't exist or credentials are incorrect
        echo "Invalid email or password. Please try again.";
    }

    // Close the connection
    $conn->close();
}
?>
