<!DOCTYPE html>
<html>
<head>
	<title>Registration Form Submission</title>
</head>
<body>
	<h2>Preview</h2>
	<?php
	// Check if form was submitted
	if ($_SERVER["REQUEST_METHOD"] == "POST") {
		// Retrieve form data
		$name = $_POST["name"];
		$username = $_POST["username"];
		$password = $_POST["password"];
		$address = $_POST["address"];
		$country = $_POST["country"];
		$zip = $_POST["zip"];
		$email = $_POST["email"];
		$sex = $_POST["sex"];
        $languages = isset($_POST['language']) ? $_POST['language'] : array("Not provided");
		$about = $_POST["about"];
		
		// Display form data
		echo ($name? $name : "Name: Not provided") . "<br>";
		echo ($username ? $username : "Username: Not provided") . "<br>";
		echo ($password ? $password : "Password: Not provided") . "<br>";
		echo ($address ? $address : "Address: Not provided") . "<br>";
		echo ($country ? $country : "Country: Not provided") . "<br>";
		echo ($zip ? $zip : "Zip: Not provided") . "<br>";
		echo ($email ? $email : "Email: Not provided") . "<br>";
		echo ($sex ? $sex : "Sex: Not provided") . "<br>";
        if ($languages[0] != "Not provided") {
			foreach ($languages as $lang) {
				echo $lang . "<br>";
			}
		} else {
			echo "Languages: Not provided <br>";
		}
		echo ($about ? $about : "About: Not provided") . "<br>";
	} else {
		echo "Use POST method.";
	}

	?>
</body>
</html>
