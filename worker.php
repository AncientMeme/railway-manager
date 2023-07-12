<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <title>Manage Worker</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body class="workers">
        <!-- The banner for the website -->
        <?php include("banner.php") ?>

        <!-- The breadcrumb for the page -->
        <nav id="breadcrumb"><a href="index.php">home</a> > workers</nav>

        <h1>Worker Management Menu</h1>
        <p id="budget-display">Budget: 0 shilling</p>
        
        <!-- The worker display slots -->
        <article id="worker-menu">
            <section id="worker-0" class="worker">
                <img src="" alt="the image of a worker">
                <article>
                    <h2 class="worker-name"></h2>
                    <p class="worker-role"></p>
                    <p class="worker-salery"></p>
                    <a href="scanner.php" class="button">Hire worker</a>
                </article>
            </section>
            <section id="worker-1" class="worker">
                <img src="" alt="the image of a worker">
                <a href="scanner.php" class="button">Hire worker</a>
            </section>
            <section id="worker-2" class="worker">
                <img src="" alt="the image of a worker">
                <a href="scanner.php" class="button">Hire worker</a>
            </section>
            <section id="worker-3" class="worker">
                <img src="" alt="the image of a worker">
                <a href="scanner.php" class="button">Hire worker</a>
            </section>
            <section id="worker-4" class="worker hide">
                <img src="" alt="the image of a worker">
                <a href="scanner.php" class="button">Hire worker</a>
            </section>
            <section id="worker-5" class="worker hide">
                <img src="" alt="the image of a worker">
                <a href="scanner.php" class="button">Hire worker</a>
            </section>
            <section id="worker-6" class="worker hide">
                <img src="" alt="the image of a worker">
                <a href="scanner.php" class="button">Hire worker</a>
            </section>
            <section id="worker-7" class="worker hide">
                <img src="" alt="the image of a worker">
                <a href="scanner.php" class="button">Hire worker</a>
            </section>
        </article>

        <script src="js/jquery-3.4.1.min.js"></script>
        <script src="js/script.js"></script>
    </body>
</html>
