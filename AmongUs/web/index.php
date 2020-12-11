<?php
    //  sikrer sig brugeren er logget ind, så vises nedestående html
    session_start();
    if ($_SESSION['logged_in'] == true)
    { 
?>



<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MAZEGAME</title>
    <!-- link til bootstrap -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <!-- link til font -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" type="text/css" media="screen" href="main.css?d=<?php echo time(); ?>" />
   
</head>
<body class="body-index">


<?php include 'includes/nav-index.php' ?>




<div class="container">
        <div class="row">
            <div class="col-lg-7 venstre-col">
                <div> 
                    <canvas width="750" height="550" id="canvas"></canvas>
                </div>

                    <div class="divKnap">
                        <button class="btn gameplayKnap" id="startgame">Start the game</button> 
                    </div>

                    <h1 id="popupText"></h1> 
                    <h1 id="gameover"></h1>
                    <h1 id="youLoosed"></h1>
                    <h1 id="forgotSisterText"></h1>
                    <h1 id="killed"></h1>
                    
            </div>

            <div class="col-lg-5 hojre-col">
                
                <div class="gameRules">
                    <center>
                        <h4>Follow the rules!</h4>
                    </center>
                    <ul>
                        <li>Find your baby sister </li>
                        <li>You have 40 seconds to reach the emergency button</li>
                        <li>Collect 2 coins in every maze for entering next level</li>
                        <li><b>Be careful!</b> For surviving, please avoid the enemies</li>
                    </ul>
                </div>


                <div class="spil-info">
                    <div id="lillesosterFouned">Quick! Find your baby sister!! </div>
                    <div id="pointScore">Point: <b>0</b></div>
                    <p class="lifeScore">Lives left: <b> <span id="livesLeft"></span> lives </b> </p>
                    <h5 class="timeScore">Time left: <b> <span id="timeLeft"></span> seconds </b> </h5>
                </div>

                


            </div>
        </div>
</div>
    



    

<script src="main.js"></script>
</body>
</html>

<?php
    //  Og hvis ikke den er logget ind, så navigere til login.php
    }
        else 
    {
        header("location: login.php");
    }
?>

