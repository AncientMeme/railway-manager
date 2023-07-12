<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <title>Home Page</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body class="message">
        <!-- The banner for the website -->
        <?php include("banner.php") ?>

        <p id="budget-display">Budget: 0 shilling</p>

        <!-- The message to the user -->
        <article>
            <h2 id="message-header">Greetings Manager,</h2>
            <p id="message-content"></p>
            <p id="message-reward"></p>
            <a class="button" href="goals.php">Return to Task List</a>
        </article>
    </body>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/script.js"></script>

</html>
