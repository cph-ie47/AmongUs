<?php
    //  sikrer sig brugeren er logget ind, så vises nedestående html
    session_start();
    if ($_SESSION['logged_in'] == true)

    { 
?>



<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your Profile</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" media="screen" href="main.css" />
</head>
<body class="body-profile">




<!-- importere en php, meget god til kode struktur -->

<?php include 'includes/db.php' ?>




<?php 

    $username = $_SESSION['username'];
    
    //$abc = "kkk";

    //if ($username != $abc) {
      //  $username = "kkk";
    //} 
    if($_SESSION['logged_in']) {

        //$sql = "SELECT * FROM users WHERE username = " . "'kkk'";

        //$sql = "SELECT * FROM users WHERE username = 'kkk' ";
        
        //$sql =  "SELECT * FROM users WHERE username = '". $abc . "'";

        $sql =  "SELECT * FROM users WHERE username = '". $username . "'";

        $result = mysqli_query($conn, $sql) or die("Query doesnt work!");
        $bruger = mysqli_fetch_assoc($result); 
        


    } 
?>
 


 <?php include 'includes/nav-profile.php' ?>


    <div class="container">
    <div class="row justify-content-center">
        <div class="col-sm-6">
            <div class="jumbotron">
                <div class="container">


                        
                        <h2 class="text-center">Welcome  <?php echo $bruger['username']; ?> </h2>
                        <p class="text-center">Your Profile Details</p>

                        
                        <br>
                            



                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm"> <b> Username </b> </span>
                            </div>

                            <div type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                <span> <?php echo $bruger['username']; ?>  </span> 
                            </div>
                        </div>


                        <div class="input-group input-group-sm mb-3">
                            <div class="input-group-prepend">
                                <span class="input-group-text" id="inputGroup-sizing-sm"> <b> E-mail </b> </span>
                            </div>
                            <div type="text" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
                                <span> <?php echo $bruger['email']; ?> </span>
                            </div>
                        </div>


                </div>
            </div>    
        </div>
    </div>
    </div>

</body>
</html>

<?php
    }
        else 
    {
        header("location: login.php");
    }
?>