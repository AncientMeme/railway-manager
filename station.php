<!doctype html>

<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta name="HandheldFriendly" content="true">
        <meta name="MobileOptimized" content="320">
        <title>Manage Station</title>
        <link rel="stylesheet" href="css/style.css">
    </head>

    <body class="station">
        <!-- The banner for the website -->
        <?php include("banner.php") ?>

        <!-- The breadcrumb of this page -->
        <nav id="breadcrumb"><a href="index.php">home</a> > <a href="worker.php">workers</a> > station</nav>

        <p id="budget-display">Budget: 0 shilling</p>

        <!-- The popup window for slot management -->
        <section id="management-popup" href="#">
            <section id="worker-menu">
                <a id="close-popup">X</a>
                <h2>Appoint a worker to the job:</h2>
                <nav id="worker-buttons">
                    <a id="worker-0" class="button" href="#"></a>
                    <a id="worker-1" class="button" href="#"></a>
                    <a id="worker-2" class="button" href="#"></a>
                    <a id="worker-3" class="button" href="#"></a>
                    <a id="worker-4" class="button" href="#"></a>
                    <a id="worker-5" class="button" href="#"></a>
                    <a id="worker-7" class="button" href="#"></a>
                    <a id="worker-8" class="button" href="#"></a>
                </nav>
            </section>
        </section>

        <!-- The section to manage the station -->
        <section id="manage-menu"> 
            <section id="ticket-booth" class="manage-section">
                <h2>Ticket Booth</h2>
                <div class="manage-buttons">
                    <a id="booth-0" class="button" href="#">Assign Worker</a>
                    <a id="booth-1" class="button" href="#">Assign Worker</a>
                </div>
            </section>
            <section id="office" class="manage-section">
                <h2>Office Workers</h2>
                <div class="manage-buttons">
                    <a id="office-0" class="button" href="#">Assign Worker</a>
                    <a id="office-1" class="button" href="#">Assign Worker</a>
                </div>
            </section>
            <section id="maintainence" class="manage-section">
                <h2>Maintainence Crew</h2>
                <div class="manage-buttons">
                    <a id="maintainence-0" class="button" href="#">Assign Worker</a>
                    <a id="maintainence-1" class="button" href="#">Assign Worker</a>
                </div>
            </section>
            <section id="platform" class="manage-section">
                <h2>Platform Workers</h2>
                <div class="manage-buttons">
                    <a id="platform-0" class="button" href="#">Assign Worker</a>
                    <a id="platform-1" class="button" href="#">Assign Worker</a>
                </div>
            </section>
        </section>
    </body>

    <script src="js/jquery-3.4.1.min.js"></script>
    <script src="js/script.js"></script>

</html>