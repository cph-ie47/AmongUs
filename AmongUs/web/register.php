<?php



$usernameFejl ="";
$emailFejl ="";

    //registration form
    if(isset($_POST['submit'])){
        require_once('connect.php');
        //basic security (real_escape_string) avoids SQL injection (' or 0=0 #)
        $username = $conn->real_escape_string($_POST['username']);
        $email = $conn->real_escape_string($_POST['email']);
        $password = sha1($_POST['password']);
        
        //Check if username exist else
        $check = $conn->query("SELECT username from users WHERE username = '$username' LIMIT 1");
        if($check->num_rows == 1) {
            $usernameFejl ="<p style='color:red;'> Username already exists! </p>";
        } 
        else{
            $insert = "INSERT INTO users (username, email, password) VALUE ('$username', '$email', '$password')";
            if($conn->query($insert)){
                header("Location: login.php");
            }
            else    {
                echo "<p style='color:red;'> Something went wrong with our database</p>";
            }
        }

        //Check if email exist else
        $check = $conn->query("SELECT email from users WHERE email = '$email' LIMIT 1");
        if($check->num_rows == 1) {
            $emailFejl ="<p style='color:red;'> Email already exists! </p>";
        } 
        else{
            $insert = "INSERT INTO users (username, email, password) VALUE ('$username', '$email', '$password')";
            if($conn->query($insert)){
                header("Location: login.php");
            }
            else{
                echo "<p style='color:red;'> Something went wrong with our database</p>";
            }
        }
        //close connection
        $conn->close();
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
</head>
<body class="body-register">



    <div class="container">
        <div class="row justify-content-center">
            <div class="col-sm-6">
                <div class="jumbotron">
                    <div class="container">
                        <h1 class="text-center">Create a new account</h1>
                        
                        <p><span> <?php echo " $usernameFejl $emailFejl " ?>   </span></p>
                        <p id="errormsg"></p>

                        
                        <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post">
                            
                        
                            <div class="row">


                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Username: </label>
                                        <input type="text" class="form-control" name="username" placeholder="Enter username" required>
                                    </div>
                                </div>


                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>E-mail: </label>
                                        <input type="email" class="form-control" name="email" placeholder="Enter e-mail" required>
                                    </div>
                                </div>

                            </div>

                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Password: </label>
                                        <input type="password" class="form-control" name="password" placeholder="Enter password"  pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$" title="Password MUST be at least 6 characters including one lowercase, one uppercase and a number" required>
                                        <small id="emailHelp" class="form-text infotext-lower">Password MUST be at least 6 characters including <b>one lowercase</b>, <b>one uppercase</b> and a <b>number</b></small>
                                    </div>
                                </div>
                            </div>

                            <input type="submit" name="submit" value="Create" class="btn btn-dark btn-secondary btn-md">
                            
                        </form>

                        <br>
                        <p><a href="login.php">I have an account. Sign in instead.</a></p>
                    </div>
                </div>
            </div>
        </div>
    </div>









</body>
</html>