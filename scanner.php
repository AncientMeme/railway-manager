<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <title>QR Code Scanner</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body class="scanner">
        <!-- The banner for the website -->
        <?php include("banner.php") ?>

        <!-- The breadcrumb for the page -->
        <nav id="breadcrumb"><a href="index.php">home</a> > <a href="worker.php">workers</a> > scanner</nav>

        <p id="budget-display">Budget: 0 shilling</p>

        <!-- The QR code scanner -->
        <video id="preview"></video>

        <section>
            <p class="scanner-message"></p>
            <a class="button resume-button" href="profile.php">Read Resume</a>
        </section>
        
        
    </body>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/instascan.min.js"></script>
    <script src="js/script.js"></script>

</html>