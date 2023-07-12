<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <title>Home Page</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body class="goal">
        <!-- The banner for the website -->
        <?php include("banner.php") ?>

        <p id="budget-display">Budget: 0 shilling</p>

        <!-- The list of Goals -->
        <section id="goals">
            <article id="worker-goals">
                <h1>Worker Related Task</h1>
                <h2 class="goal worker-0">Hire 4 workers</h2>
                <a id="worker-link-0" class="button button-pressed" href="message.php">You Have Not Complete This Goal</a>
                <h2 class="goal worker-1">Have 6 unique types of workers</h2>
                <a id="worker-link-1" class="button button-pressed" href="message.php">You Have Not Complete This Goal</a>
            </article>
            <article id="budget-goals">
                <h1>Budget Related Task</h1>
                <h2 class="goal budget-0">Save up to 100 Pounds</h2>
                <a id="budget-link-0" class="button button-pressed" href="message.php">You Have Not Complete This Goal</a>
                <h2 class="goal budget-1">Have a positive income of 8 Pounds, and Save up to 300 Pounds</h2>
                <a id="budget-link-1" class="button button-pressed" href="message.php">You Have Not Complete This Goal</a>
            </article>
            <article id="management-goals">
                <h1>Station Management Related Task</h1>
                <h2 class="goal management-0">Ensure at least 4 workers in position they are good at</h2>
                <a id="management-link-0" class="button button-pressed" href="message.php">You Have Not Complete This Goal</a>
                <h2 class="goal management-1">Have 6 workers that have the senior rank</h2>
                <a id="management-link-1" class="button button-pressed" href="message.php">You Have Not Complete This Goal</a>
            </article>

        </section>
    </body>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/script.js"></script>

</html>
