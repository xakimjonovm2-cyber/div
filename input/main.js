<?php

// echo "<pre>";
// print_r($_GET);
// echo "</pre>";



$ism = $_GET["ism"];
$raqam = $_GET["raqam"];
$manzil = $_GET["manzil"];
$parol = $_GET["parol"];
$tosh = $_GET["yosh"];

if ($yosh == "15") {
    echo "tu yoqol ❌";
}

else if ($yosh == "16") {
    echo "tur yoqol ❌";
}

else {
    echo "xush kelpsz ✅";
}





?>