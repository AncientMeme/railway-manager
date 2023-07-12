<?php

header('Content-Type: application/json');

// Check for position variable (Default is set)

if(isset($_GET["position"])){

    $positionFilter = htmlspecialchars($_GET["position"]);

    if(file_exists("cache-" . $positionFilter . ".json")){
        echo file_get_contents("cache-" . $positionFilter . ".json");
    }else{
    
        // Get workers in specific positions
        $data = file_get_contents("https://data.qld.gov.au/api/3/action/datastore_search?q=" . $positionFilter . "&resource_id=cdafbbbf-c9ca-46a1-9f18-ecd9e8943040&limit=500");
        $json = json_decode($data);
    
        $outputJSON = array();
        
        foreach($json->result->records as $recordID => $record) {
            $name = $record->{"Name"};
            $role = $record->{"Position"};
            $salery = $record->{"Remuneration"};
    
            $outputJSON[$recordID]["name"] = $name;
            $outputJSON[$recordID]["role"] = $role;
            $outputJSON[$recordID]["salery"] = $salery; 
        }
    
        file_put_contents("cache-" . $positionFilter . ".json", json_encode($outputJSON));
        echo json_encode($outputJSON);
    }
}

?>