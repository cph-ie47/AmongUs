<?php
$abc = "kkk";
$sql =  "SELECT * FROM users WHERE username = '". $abc . "'";


echo ($sql);
echo "<br>";
$sql = "SELECT * FROM users WHERE username = 'kkk' ";


echo ($sql);
?>