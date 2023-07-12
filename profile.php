<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <title>Worker Profile</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body class="hire">

        <!-- The banner for the website -->
        <?php include("banner.php") ?>

        <!-- The breadcrumb for the page -->
        <nav id="breadcrumb"><a href="index.php">home</a> > <a href="worker.php">workers</a> > profile</nav>

        <p id="budget-display">Budget: 0 shilling</p>

        <!-- The template for a worker profile -->
        <article id="profile">
            <img id="worker-portrait" src="" alt="image of the worker">
            <section>
                <h2 id="worker-name">Worker Name</h2>
                <p id="worker-role">Role</p>
                <p id="worker-salery">Salery</p>
            </section>
            <section id="worker-description">
                <h2>Introduce yourself:</h2>
                <p id="description"></p>
            </section>
            <a id="hire" class="button" href="#">Hire Worker</a>
        </article>

        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/script.js"></script>

    </body>
</html>