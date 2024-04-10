<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $servername = "localhost"; // Remplacez localhost par l'adresse de votre serveur MySQL
    $username = "root"; // Remplacez username par votre nom d'utilisateur MySQL
    $password = ""; // Remplacez password par votre mot de passe MySQL
    $dbname = "raslen"; // Nom de la base de données

    // Création de la connexion
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Vérification de la connexion
    if ($conn->connect_error) {
        die("La connexion a échoué : " . $conn->connect_error);
    }

    // Récupération des données du formulaire
    $name = $_POST['nom'];
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirm_password = $_POST['confirm_password'];

    // Vérification si les mots de passe correspondent
    if ($password !== $confirm_password) {
        echo "Les mots de passe ne correspondent pas.";
    } else {
      
        $sql = "INSERT INTO user (nom, email, password) VALUES ('$name', '$email', '$password')";

        // Exécution de la requête
        if ($conn->query($sql) === TRUE) {
            echo "Enregistrement réussi.";
        } else {
            echo "Erreur : " . $sql . "<br>" . $conn->error;
        }
    }

    // Fermeture de la connexion
    $conn->close();
}
?>