
<?php $activePage = basename($_SERVER['SCRIPT_FILENAME'], '.php'); ?>

<nav id="banner">
    <a href="worker.php" <?php echo ($activePage == 'worker' ? ' class="active"' : ''); ?>>Workers</a>
    <a href="scanner.php" <?php echo ($activePage == 'scanner' ? ' class="active"' : ''); ?>>Scanner</a>
    <a href="roles.php" <?php echo ($activePage == 'roles' ? ' class="active"' : ''); ?>>Roles</a>
    <a href="about.php" <?php echo ($activePage == 'about' ? ' class="active"' : ''); ?>>About</a>
    <a href="goals.php" <?php echo ($activePage == 'goals' ? ' class="active"' : ''); ?>>Goals</a>
</nav>