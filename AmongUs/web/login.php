<?php

//Pop-up tekst til fejlmeddelelser -> linje 18
$invalidUP ="";


    //login
    if(isset($_POST['submit'])){
        require_once("connect.php"); 
        $username = $conn->real_escape_string($_POST['username']); //real-escape-string fjerner underlige tegn og blanke karaktere såsom masse mellemrum
        $password = sha1($_POST['password']); //sha1 er en hash-funktion, hash funktionen går kun en vej, så administratoren kan ikke se koden
        $read = "SELECT * FROM users WHERE username = '$username' AND password = '$password' LIMIT 1";
        $check = $conn->query($read); 
        $conn->close();
        //check if query return anything, if not no match in database user has to register
        if(!$check->num_rows == 1) // !$ betyder hvis den ikke er lig med 1, så skal den echo nedstående
        { 
            $invalidUP="<p style='color:red;'> Invalid username/password </p>";
        }
        else{
            //PHP session start
            session_start();
            $_SESSION['logged_in'] = true;
            $_SESSION['username'] = $username;
            //redirect and stop present code
            header('Location: index.php');
            exit();
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
</head>
<body class="body-login">

 


    


    <div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-6">
            <div class="jumbotron">
                <div class="container">
                        <h1>Login to access the game</h1>
                        
                        <p><span> <?php echo " $invalidUP " ?>  </span></p>    
                            
                        
                            <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                                <div class="form-group">
                                    <label>Username:</label>
                                    <input type="text" class="form-control" name="username" placeholder="Enter username">
                                </div>
                                <br>
                                <div class="form-group">
                                    <label>Password:</label>
                                    <input type="password" class="form-control" name="password" placeholder="Enter password">
                                </div>
                                <br>
                                <input type="submit" name="submit" value="Login" class="btn btn-dark btn-secondary btn-md">
                            </form>
                                
                            <br>
                            
                            <p>Not a member yet? <a href="register.php">Create a new account here</a></p>
                </div>
            </div>    
        </div>
    </div>
    </div>

</body>
</html>