<?php
    // Logout 
    session_start();
    session_destroy();
    //redirect and stop present code
    header("Location: login.php");  //En funktion som gør at den hopper til den location
    exit();
?>