
// Descriptions for the worker roles
var validRoles = ["electrician", "fitter", "cleaner", "ticket clerk", "porter", "telegraph operator", "plumber"];
var roleDescriptions = {"Electrician":"I am an electrician. I specialize in electrical wiring for buildings and machines. " +
								"I can install and maintain the station's wiring to make sure all electronics works correctly. " + 
								"I will be able to work comfortablely in the maintainence crew.", 
					"Fitter":"I have experience in making engine parts as long as I have the tools to do so. " + 
							"I can check and maintain the trains in the station to make sure all the machineries function normally. " + 
							"Putting me in a position where I can access maintainece tool would allow me to work efficiently.", 
					"Cleaner":"My past working experiences has allow me to make sure the working environment is clean and tidy. " + 
							"I can make sure the station looks nice and clean, so it gives the passengers a good impression. " + 
							"I would like my work station to be close to the platform so I can work effectively.", 
					"Ticket Clerk":"I am great at making record and counting. Therefore, I would like to apply for the position of a ticket clerk. " + 
								  "I am also good at communication, so I believe I am worthy of this job. " + 
								  "I can start today and I'll head to the ticket booth so I can perform my job immediately.", 
					"Porter":"I am strong enough to handle and distribute passengers' luggages swiftly. " + 
							"I could also assist others working on the station if needed. " + 
							"I am eager to be positioned at the platform and start my job as soon as possibie.", 
					"Telegraph Operator":"I am a specialist in operating the telegraph. In addition, I am capable sending and recieving Morse code. " +
									"I will be able to get and send messages from the central station immediately compare to having to wait for messengers. " + 
									"Put me in your office and I will start working in no time.", 
					"Plumber":"I have been in this trade for quite a while. Installing the drinking water system or the drainage system is my speciality. " + 
							 "I am able to install and maintain the plumbing systems in this station. " + 
							 "If you feel like hiring me, be sure to put me at the maintainence crew."};
var inspectorMessages = {"worker-0": "I see that you have assembled a group of workers to assist you running the station. This would be one of the first steps to " +
									 "making sure the station is fully functional. We will now allow your workers to attend our employee training program. " +
									 "These programs would greatly increase the performance of your workers.",
						 "worker-1": "From the worker list I read from your station. It shows that you have hired workers with various professions. " +
									  "I believe this is a great management decision since the workers can maintain and run the station without too much assistance " +
									  "from the central station. Great job.",
						 "budget-0": "The recent financial report for your station indicates that you are able to successfully " +
									 "run the station. This demonstrated you have the ability to manage your budget properly. " + 
									 "Therefore, we have permitting you to hire two more workers.",
						 "budget-1": "We found that your station is racking in a large amount of revenue for our company. " + 
									 "We thank you very much for your service, and keep up the great work. " + 
									 "I believe you would be promoted in no time with your performance.",
						 "management-0": "From the feedback forms given by the workers in your station, it seems that you have positioned them " + 
										 "to stations that they are comfortable with. This allows them to work efficiently and boost their mental wellbeing. " + 
										 "These forms show that you are capable of managing your employees, therefore we have allowed you to hire 2 additional workers.",
						 "management-1": "We see that you have invest in training your employees to ensure they are skilled and preform their job with maximum " + 
										  "efficiency. This is very beneficial to our company since we will be able to get more revenue and train recruits how to do their job. " + 
										  "We commend you for your contribution to the company."};

function triggerWindow() {
	// Get the modal
	var modal = document.getElementById("myModal");

	// Get the button that opens the modal
	var btn = document.getElementById("pop-up");

	// Get the <span> element that closes the modal
	var span = document.getElementsByClassName("close")[0];

	// When the user clicks the button, open the modal 
	btn.onclick = function() {
		modal.style.display = "block";
	}

	// When the user clicks on <span> (x), close the modal
	span.onclick = function() {
		modal.style.display = "none";
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
		if (event.target == modal) {
			modal.style.display = "none";
		}
	}
}

// Safely parse a Stringify JSON
function safeParse(string) {
	var parsedJSON = [];
	if(string != null) {
		parsedJSON = JSON.parse(string);
	}

	return parsedJSON;
}

// Get the pence value in different units
function penceValue(value, unit) {
	// Check for the unit
	var multiplier = 1;
	switch(unit){
		case "shilling":
			multiplier = 24;
			break;
		case "pound":
			multiplier = 480;
			break;
	}

	return value * multiplier;
}

// Display the total budget value in (X pounds X shillings X pence) format
function getDisplayCurrency(budget) {

	var pound = 0;
	var shilling = 0;
	var pence = 0;
	var isNegative = (budget < 0);
	var budgetValue = Math.abs(budget);
	// turn additional pence to shilling
	shilling = Math.floor(budgetValue/24);
	pence = budgetValue % 24;
	// turn additional shilling to pound
	pound = Math.floor(shilling/20);
	shilling = shilling % 20;

	// Display budget
	var display = "";
	if (pound > 0) {
		display = `${pound} pounds`;
	} 
	if (shilling > 0) {
		display = `${display} ${shilling} shillings`;
	} 
	if (pence >= 0){
		display = `${display} ${pence} pence`;
	}
	if(isNegative) {
		display = "-" + display;
	}
	return display;

}

// Transform the salery string into total value in pence
function getSaleryValue(string) {
		
	//Check for existing currency
	var Pound = ((parseInt(string.match(/[0-9]+(?= pounds)/g)) * 480) || 0);
	var Shilling = ((parseInt(string.match(/[0-9]+(?= shillings)/g)) * 24) || 0);
	var Pence = (parseInt(string.match(/[0-9]+(?= pence)/g)) || 0);

	// Check for payment pattern
	var dates = {"day":7, "week":1, "month":0.25, "annum":0.02};
	var date = (string.match(/annum/) || string.match(/month/) || 
				string.match(/week/) || string.match(/day/));
	var paymentPerWeek = dates[date[0]] || 1;
	
	// Calculate the salery per week and return it
	var saleryValue = Math.round((Pound + Shilling + Pence) * paymentPerWeek);
	return saleryValue;
		
}

// Check if the position is suitable for the worker
function checkSuitablePosition(role, position) {
	var selectedPosition = position.split("-")[0];
	var suitablePosition = {"booth":/Ticket Clerk/,
							"office":/Cleaner|Telegraph Operator/,
							"maintainence":/Plumber|Electrician|Fitter/,
							"platform":/Porter|Cleaner/};

	if(role.match(suitablePosition[selectedPosition]) != null) {
		return true;
	}

	return false;
}

// Calculate the income change
function calculateIncome(role, isSuitable) {
	// Check for their experiences
	var isSenior = (role.match("Senior") != null);
	var isApprentice = (role.match("Apprentice") != null);
	var multiplier = 1;

	if(isSenior) {
		multiplier = 2;
	} else if (isApprentice) {
		multiplier = 0.6;
	}

	// Check if the job is suitable for them
	if(!isSuitable) {
		multiplier = multiplier * 0.5;
		console.log("not suitable");
	}

	// Calculate the total income
	var income = {"Ticket Clerk": penceValue(1, "pound"),
				  "Porter": penceValue(1.5 * 24, "shilling"),
				  "Cleaner": penceValue(18, "shilling"),
				  "Plumber": penceValue(3.2 * 24, "shilling"),
				  "Fitter": penceValue(4, "pound"),
				  "Electrician": penceValue(5.2 * 24, "shilling")};
	var outputIncome = 0;
	$.each(income, function(key, value){
		if(role.match(key) != null) {
			outputIncome = Math.round(value * multiplier);
		}
	});

	return outputIncome;
}

// Get the total revenue of the station
function getTotalRevenue() {
	// Get total revenue
	var revenue = 80;
	var savedPosition = safeParse(localStorage.getItem("positions"));
	
	for(var i = 0; i < savedPosition.length; i++){
		revenue += savedPosition[i]["income"];
	}

	return revenue;
}

// Get the total worker salery of the station
function getTotalSalery() {
	// Get total worker salery
	var salery = 0;
	var userWorkers = safeParse(localStorage.getItem("workers"));

	for(var i = 0; i < userWorkers.length; i++){
		var saleryValue = getSaleryValue(userWorkers[i]["salery"]);
		salery += saleryValue;
	}

	return salery;
}

// Get the total income of the station
function getTotalIncome(revenue, salery){
	return (revenue - salery);
}

// Display all appointed workers
function displayPosition(positions) {

	// Clear all texts in position slots
	$(".manage-buttons .button").html("Assign Worker")

	// Iterate all entries in the positions data
	for(var i = 0; i < positions.length; i++){
		var entry = positions[i];
		var entryPosition = entry["position"];
		var entryWorker = entry["name"];
		var entryRole = entry["role"];
		$(`#${entryPosition}`).html(`${entryWorker}<br>(${entryRole})`);
	}
}

// Generate a worker using scanned information, and return a worker entry
function generateWorker(results, chosenPosition) {
	// Getting the keys of the entries
	var keys = Object.keys(results);
		
	// Reroll until a valid role appears
	result = results[keys[Math.floor(Math.random() * keys.length)]];
	var regex = new RegExp("^(Apprentice |)" + chosenPosition + "$");
	while(result["role"].match(regex) == null) {
		result = results[keys[Math.floor(Math.random() * keys.length)]];
	}

	return result;
}

// Determine if the worker is male or female
function getWorkerGender(name) {
	console.log(name.match(/Miss|Mrs/));
	if (name.match(/Miss|Mrs/) != null) {
		return "female";
	} else {
		return "male";
	}
}

// Generate a new portrait for the worker
function generatePortrait(results) {
	// Getting the keys of the entries
	var keys = Object.keys(results);
		
	// returns a random portrait
	var result = results[keys[Math.floor(Math.random() * keys.length)]];
	
	// Get the image element from the source
	var portraitURL = result["image"];

	return portraitURL;
}

// Display the description of the worker in their resume
function displayDescription(role) {
	$.each(roleDescriptions, function(key, value){
		var roleName = key;
		if (role.match(roleName) != null) {
			$("#worker-description #description").html(value);
		}
	});
}

// Capatialize first characters
function capitalizeString(string) {
	var words = string.split(" ");
	var output = ""
	for (var i = 0; i < words.length; i++) {
		var firstChar = words[i].charAt(0).toUpperCase();
		var remainingString = words[i].substring(1);
		output += firstChar + remainingString + " ";
	}

	return output.trim();
}

// Validate Scanner content, return true if same, else false
function validateRole(content) {
	var validContent = false;

	for (var i = 0; i < validRoles.length; i++) {
		if (content.match(validRoles[i]) != null) {
			validContent = true;
		}
	}

	return validContent;
}

// Show popup and button to access resume for the scanner
// role(String): The name of the role
function displayScannerPopup(role) {
	// Check if the role starts with an vowel
	var roleMessage = `a ${role}`;
	var firstChar = role.charAt(0);
	if(firstChar.match(/[aeiou]/)) {
		roleMessage = `an ${role}`
	}

	// Show popup message
	$(".scanner-message").html(`You have found ${roleMessage}! You can chose to hire the worker and assign work to them.`);
	$(".scanner-message").addClass("message-display");

	// Display button to access resume
	$(".resume-button").addClass("resume-button-show");
	$(".resume-button").unbind("click");

}

// Process content from the scanner
function processScanner(content) {

	// Validate Scanned Content
	var roleName = content;
	var isRoleValid = validateRole(roleName);
	
	// Perform following actions if the role name is valid
	if (isRoleValid) {
		// Save the current found worker
		var output = {"role": roleName, "generated": false};

		// Transform array into JSON
		var outputJSON = JSON.stringify(output);
		localStorage.setItem("scannedWorker", outputJSON);

		// Show message and button
		displayScannerPopup(roleName);
	}
	
}

// Check for 4 workers
function checkWorkerAmount(workers) {
	var workerAmount = workers.length;
	console.log(workerAmount);
	return (workerAmount >= 4);
}

// Check for 6 different roles
function checkUniqueRoles(workers) {
	var workerAmount = workers.length;
	if (workerAmount < 6){
		// Return false if there aren't 6 workers
		return false;
	} else {
		// Check if there are 6 different roles in the worker list
		var uniqueRoles = [];
		for (var i = 0; i < workerAmount; i++) {
			if (i == 0){
				// Add the first worker role to the unique role list
				var workerRole = workers[0]["role"].split(" ");
				var roleName = workerRole[workerRole.length - 1];
				uniqueRoles.push(roleName);
			} else {
				// Iterates the unique roles and see if none of them are equal to them
				for(var j = 0; j < uniqueRoles.length; j++){
					var workerRole = workers[i]["role"].split(" ");
					var roleName = workerRole[workerRole.length - 1];
					if (roleName != uniqueRoles[j]) {
						uniqueRoles.push(roleName);
					}
				}
			}
			
			console.log(uniqueRoles);

			return (uniqueRoles.length >= 6);
		}
	}
}

// Check if the status is greater than the given value
function checkPoundValue(stat, pounds) {
	var penceValue = (pounds * 24 * 20);
	return (stat >= penceValue);
}

$(document).ready(function() {

	// Get all data needed for the website
	var userWorkers = safeParse(localStorage.getItem("workers"));
	var savedPosition = safeParse(localStorage.getItem("positions"));
	var workerInfo = safeParse(localStorage.getItem("scannedWorker"));
	var goals = localStorage.getItem("goals");
	if(goals == null) {
		goals = {"worker":[false, false], "budget":[false, false], "management":[false, false]};
	} else {
		goals = JSON.parse(goals);
	}

	// Initialize Budget and Income
	var budget = localStorage.getItem("budget");
	if(budget == null){
		budget = 2000;
	}

	budget = parseInt(budget);
	if(isNaN(budget)){
		budget = 2000;
	}

	var totalRevenue = getTotalRevenue();
	var totalSalery = getTotalSalery();
	var income = getTotalIncome(totalRevenue, totalSalery);

	// Display the Budget
	var formattedbudget = getDisplayCurrency(budget);
	$("#budget-display").html(`Budget: ${formattedbudget}`);
	$("#income-display").html(`Income: ${getDisplayCurrency(income)}`);

	// Generate Income every minute and update save data
	var interval = setInterval(function () {
		var totalRevenue = getTotalRevenue();
		var totalSalery = getTotalSalery();
		var income = getTotalIncome(totalRevenue, totalSalery);
		budget += income;
		$("#budget-display").html(`Budget: ${formattedbudget}`);
		$("#income-display").html(`Income: ${getDisplayCurrency(income)}`);
		localStorage.setItem("budget", String(budget));
	}, 6000);

	// Code for worker page
	if($("body").hasClass("workers")) {
		
		// Display the workers on the buttons
		for (var i = 0; i < userWorkers.length; i++){
			$(`#worker-${i} a`).click(function(event){
				// Prevents user going to scanner
				event.preventDefault();

				// Display firing worker message
			})

			// Display the worker in the respective slot
			$(`#worker-${i} img`).attr("src", userWorkers[i]["portrait"]);
			$(`#worker-${i} .worker-name`).html(`${userWorkers[i]["name"]}`);
			$(`#worker-${i} .worker-role`).html(`Role: ${userWorkers[i]["role"]}`);
			$(`#worker-${i} .worker-salery`).html(`${userWorkers[i]["salery"]}`);
		}

		// Unlock worker slots after goals are completed
		var unlockFirst = (goals["budget"][0] || goals["management"][0]);
		var unlockAll = (goals["budget"][0] && goals["management"][0]);

		if (unlockAll){
			// Unlock all slots after both goals achieved
			$("#worker-4").removeClass("hide");
			$("#worker-5").removeClass("hide");
			$("#worker-6").removeClass("hide");
			$("#worker-7").removeClass("hide");
		} else if (unlockFirst){
			// Unlock 2 slots after one of the goal is achieved
			$("#worker-4").removeClass("hide");
			$("#worker-5").removeClass("hide");
		}
	}

	// Code for station page
	if($("body").hasClass("station")) {

		displayPosition(savedPosition);

		// Show the popup when the Assign Worker button is pushed
		$(".manage-buttons .button").click(function(event){

			event.preventDefault();
			var selectedJob = $(this).attr("id");

			// Display available workers in the menu when empty slots are pressed
			$("#management-popup").css("display", "block");
			$("#management-popup").addClass(selectedJob);

		});

		var availableWorkers = userWorkers;

		// Handle the logic for appointing workers to empty slots
		for(let i = 0; i < 8; i++) {
			
			if (i < availableWorkers.length){
				// Display the worker name and role on the buttons
				let workerName = availableWorkers[i]["name"];
				let workerRole = availableWorkers[i]["role"];
				let displayText = `${workerName}<br>(${workerRole})`;
				$(`#worker-${i}`).html(displayText);

				// Appoint the worker to the position
				$(`#worker-${i}`).click(function(event) {
					event.preventDefault();

					// Check if the worker has already have a job, or the position
					// has a worker already
					// Remove all entries with duplicate position or names
					var selectedPosition = $("#management-popup").attr("class");
					var newPositions = [];
					for(var index = 0; index < savedPosition.length; index++){
						if (savedPosition[index]["name"] !== workerName &&
						savedPosition[index]["position"] !== selectedPosition) {
							newPositions.push(savedPosition[index]);
						}
					}

					savedPosition = newPositions;

					// Check if the worker is suitable for the job
					var isSuitable = checkSuitablePosition(workerRole, selectedPosition);
					var workerIncome = calculateIncome(workerRole, isSuitable);
					console.log(workerIncome);

					// Save the position of the appointed worker
					savedPosition.push({"position": selectedPosition,
					"name": workerName, "role": workerRole, "income": workerIncome});
					
					// Update the display and save the data
					displayPosition(savedPosition);
					localStorage.setItem("positions", JSON.stringify(savedPosition));

					// Close the popup
					$("#management-popup").removeClass();
					$("#management-popup").css("display", "none");
				});
			} else {
				$(`#worker-${i}`).addClass("button-pressed");
				$(`#worker-${i}`).html("No worker in this slot");
			}

		}

		$("#close-popup").click(function(event){
			$("#management-popup").css("display", "none");
		})
	}

	// Code for hire page
	if($("body").hasClass("hire")) {
		
		// Randomize the position to retrieve
		var chosenPosition = capitalizeString(workerInfo["role"]);
		var hasGenerated = workerInfo["generated"];
	
		// Retrieve Data From API
		if(!hasGenerated) {
			// Ajax for worker information
			$.ajax({
				url: "worker-api.php?position=" + chosenPosition,
				dataType: "json",
				success: function(results) {
					// Generate a new worker
					var result = generateWorker(results, chosenPosition);

					// Check for gender
					var workerGender = getWorkerGender(result["name"]);
					
					// Rearrange name for display
					var nameFragments = result["name"].split(",");
					var workerName = $.trim(nameFragments[1]) + " " + nameFragments[0];

					// Get worker role
					var workerRole = result["role"];

					// Rearrange Salery for display
					var saleryValue = getSaleryValue(result["salery"]);
					var displaySalery = getDisplayCurrency(saleryValue);
					var workerSalery = `Salery: ${displaySalery} per week`
					
					// Display information
					$("#worker-name").html(workerName);
					$("#worker-role").html("Applying Position: " + workerRole);
					$("#worker-salery").html(workerSalery);

					// Change the generate state
					var generateJSON = {"role": chosenPosition, "generated": true};
					localStorage.setItem("scannedWorker", JSON.stringify(generateJSON));

					// Save the worker info
					infoJSON = {"name": workerName, "role": workerRole, "salery": workerSalery, "gender": workerGender};
					localStorage.setItem("generatedWorker",JSON.stringify(infoJSON));
				}
			});

			// Ajax for the worker portrait
			$.ajax({
				url: "portrait-api.php?gender=" + JSON.parse(localStorage.getItem("generatedWorker"))["gender"],
				dataType: "json",
				success: function(results) {
					// Generate a new portrait
					var workerPortrait = generatePortrait(results); 
					
					// Set the src of the image with the URL
					$("#worker-portrait").attr("src", workerPortrait);

					// Push the portrait into the worker info JSON
					var workerInfo = JSON.parse(localStorage.getItem("generatedWorker"));
					workerInfo["portrait"] = workerPortrait;
					localStorage.setItem("generatedWorker", JSON.stringify(workerInfo));
				}
			});

		} else {
			// Get the generated worker
			var workerInfo = safeParse(localStorage.getItem("generatedWorker"));

			// Display information
			$("#worker-name").html(workerInfo["name"]);
			$("#worker-role").html("Applying Position: " + workerInfo["role"]);
			$("#worker-salery").html(workerInfo["salery"]);
			$("#worker-portrait").attr("src", workerInfo["portrait"]);
		}

		// Displays the description of the worker role
		var workerInfo = safeParse(localStorage.getItem("generatedWorker"));
		var workerRole = workerInfo["role"];
		displayDescription(workerRole);
			 
		// Check if the user hires the worker
		$("#hire").click(function(event){
	
			// Start process if the worker is not hired
			if(!$("#hire").hasClass("button-pressed")){
	
				// The information of the to be hired worker
				var workerInfo = safeParse(localStorage.getItem("generatedWorker"));
				var name = workerInfo["name"];
				var role = workerInfo["role"];
				var salery = workerInfo["salery"];
				var portrait = $("#worker-portrait").attr("src");
	
				// Check if the user has enough budget
				var budgetValue = parseInt(localStorage.getItem("budget"));
				var saleryValue = getSaleryValue(salery);
	
				if (budgetValue >= saleryValue) {
					// Marked as hired
					$("#hire").addClass("button-pressed");
					$("#hire").html("Worker Hired");
	
					// Deduct budget from salery
					budgetValue -= saleryValue;
					var formattedbudget = getDisplayCurrency(budgetValue);
					$("#budget-display").html(`Budget: ${formattedbudget}`);
					$("#income-display").html(`Income: ${getDisplayCurrency(income)}`);
					localStorage.setItem("budget", String(budgetValue));
	
					// Get the saved workers
					var savedWorkers = safeParse(localStorage.getItem("workers"));

					// Save it as a JSON
					savedWorkers.push({"name": name, "role": role, "salery": salery, "portrait":portrait});
					var outputJSON = JSON.stringify(savedWorkers);				
					localStorage.setItem("workers", outputJSON);
				}
			}
		})
	}

	// Code for goals page
	if($("body").hasClass("goal")) {

		// Worker goal status
		// Goal 1: Hire 4 workers
		goals["worker"][0] = checkWorkerAmount(userWorkers);

		// Goal 2: Have 6 unique worker types
		goals["worker"][1] = checkUniqueRoles(userWorkers);
		
		// Budget goal status
		// Goal 1: Have 100 Pounds Budget
		if (!goals["budget"][0]) {
			goals["budget"][0] = checkPoundValue(budget, 100);
		}

		// Goal 2: Have 300 Pounds Budget and 8 Pounds Income
		if (!goals["budget"][1]) {
			goals["budget"][1] = (checkPoundValue(budget, 300) && checkPoundValue(income, 8));
		}

		// Management Goal Status
		// Goal 1: Have 4 workers working at effective positions
		var correctPositions = 0;
		
		for (var i = 0; i < savedPosition.length; i++) {
			if (savedPosition[i]["efffective"]){
				correctPositions++;
			}
		}

		goals["management"][0] = (correctPositions >= 4);

		// Goal 2: Have 6 workers that have the senior rank
		var seniorAmount = 0;
		for (var i = 0; i < userWorkers.length; i++) {
			var workerRole = userWorkers[i]["role"];
			if (workerRole.match("Senior")) {
				seniorAmount++;
			}
		}

		goals["management"][1] = (seniorAmount >= 6);

		// Save the status of goals
		localStorage.setItem("goals", JSON.stringify(goals));

		// Display buttons for any goal that is complete
		$.each(goals ,function(key, table){
			for (var i = 0; i < table.length; i++) {
				var text = $(`.${key}-${i}`);
				var button = $(`#${key}-link-${i}`);
				// Activate link to message page
				if (table[i]) {
					text.addClass("crossed");
					text.html("<del>" + text.html() + "</del> (Completed)");
					button.html("Message From Inspector");
					button.removeClass("button-pressed");
					button.click(function(event){
						localStorage.setItem("message", `${key}-${i % 2}`);
					});
				} else {
					button.click(function(event){
						event.preventDefault();
					});
				}
			}
		});
	}

	// Code for message page
	if($("body").hasClass("message")) {
		var message = localStorage.getItem("message");
		$("#message-content").html(inspectorMessages[message]); 
	}

	// Code for scanner page
	if($("body").hasClass("scanner")) {

		// Hide the resume button
		$(".resume-button").css("transition-delay", "2s");
		$(".resume-button").css("transition-duration", "1s");
		$(".resume-button").click(function(event){
			event.preventDefault();
		});

		// Initialize the scanner
		options = {
			continuous: true,
			video: document.getElementById("preview"),
			mirror: false,
			captureImage: false,
			backgroundScan: false,
			refractoryPeriod: 10000,
			scanPeriod: 2
		};

		var scanner = new Instascan.Scanner(options);

		Instascan.Camera.getCameras().then(function (cameras) {
			console.log(cameras);
			if (cameras.length > 0) {
				scanner.start(cameras[0]);
			} else {
				console.error('Camera unavailable');
			}
		}).catch(function (e) {
			console.error(e);
		});

		// Get scanner content
		scanner.addListener("scan", function(content){
			processScanner(content);
		})
		
	}

	// Code for about page
	if($("body").hasClass("about")) {
		// Clear all data
		$("#reset").click(function(event){
			localStorage.clear();
			budget = 2000;
		});
	}
});