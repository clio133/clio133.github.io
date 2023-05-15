var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus();  // Set focus to the Name field when the application starts
	
};

function displayResults() {
	if (scores.length === 0) {
        return;
    }
    var average = 0;
    var maxScore = scores[0];
    var maxName = ""
    for (var i = 0; i < scores.length; i++) {
        average += scores[i];
        if (scores[i] > maxScore) {
            maxScore = scores[i];
            maxName = names[i];
        }
    }
    average /= scores.length;

    $("results").innerHTML = `<h2>Results</h2>
							  <p>Average score = ${average.toFixed(2)}</p>
                              <p>High score = ${maxName} with a score of ${maxScore}</p>`;
}


function displayScores() {
    var table = `<tr><th style="text-align:left">Name</th><th style="text-align:left">Score</th></tr>`;  // Table headers
    for (var i = 0; i < names.length; i++) {
        table += `<tr><td>${names[i]}</td><td>${scores[i]}</td></tr>`; // Table data, however, innerHTML causes XSS 
    }
    $("scores_table").innerHTML = `<h2>Scores</h2>` + table; // Add scores header and then table
}

function addScore() {
    var name = $("name").value;
    var score = Number($("score").value);
    if (name && score >= 0 && score <= 100) { // Data validation
        names.push(name);
        scores.push(score);
        $("name").value = '';
        $("score").value = '';
    } else {
        alert("You must enter a name and a valid score.");
    }
    $("name").focus(); // Set focus to the Name field
}

