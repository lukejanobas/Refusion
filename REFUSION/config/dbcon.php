<?php 

$host = "localhost";
$username = "root"; 
$password = "";
$database = "refusion";

// creating database connection
$con = mysqli_connect($host, $username, $password, $database);

// check database connection
if(!$con)
{
    die("Connectiion failed: ". mysqli_connect_error());
}




?>