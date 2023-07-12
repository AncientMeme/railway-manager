<?php

header('Set-Cookie: cross-site-cookie=name; SameSite=None; Secure');
setcookie('cross-site-cookie', 'name', ['samesite' => 'None', 'secure' => true]);

// Check for portrait gender

if(isset($_GET["gender"])){

    $gender = htmlspecialchars($_GET["gender"]);

    if(file_exists("cache-portrait-" . $gender . ".json")){
        echo file_get_contents("cache-portrait-" . $gender . ".json");
    }else{
        // Declare dummy data
        $data = file_get_contents("https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=982e89d4-066c-467d-a078-e8cf39228d7d&limit=50");

        // Get portraits for worker
        if($gender == "male"){
            // Get portraits for male
            $data = file_get_contents("https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=982e89d4-066c-467d-a078-e8cf39228d7d&limit=50");
        } else if ($gender == "female") {
            // Get portraits for female
            $data = file_get_contents("https://data.sa.gov.au/data/api/3/action/datastore_search?resource_id=88b20768-1d58-4879-8ffd-631119c11d1c&limit=50");
        }

        $json = json_decode($data);
    
        $outputJSON = array();
        
        foreach($json->result->records as $recordID => $record) {
            $url = $record->{"IMAGE URL"};
            $url = trim($url);

            // Get the content from the source
            $source = file_get_contents($url);

            // Find the head of the noscript
            $noscriptStart = strpos($source, "noscript");

            // Find the src after noscript
            $noscirptSection = substr($source, $noscriptStart);
            $srcStart = strpos($noscirptSection, "src") + 5;

            // Find the end of src
            $srcEnd = strpos($noscirptSection, '"', $srcStart + 6);

            $url = substr($noscirptSection, $srcStart, $srcEnd-$srcStart);

            $outputJSON[$recordID]["image"] = $url;
        }
    
        file_put_contents("cache-portrait-" . $gender . ".json", json_encode($outputJSON));
        echo json_encode($outputJSON);
    }
}

?>