// Yahya Batuhan IRMAK - 21050151025

var level = 1;
var clicks = 0;
var timeout = 500; // a little fast, hard to catch. increase to test the code

document.getElementById("button").addEventListener("click",() => {
    clicks++;
    document.getElementById("click").innerText = "Click: " + clicks;
    if (clicks >= 3) {
        levelUp();
    }
})

function levelUp() {
    alert("Level Up!");
    level++;
    clicks = 0;
    timeout -= 100;
    document.getElementById("click").innerText = "Clicks: " + clicks;
    document.getElementById("level").innerText = "Level " + level;
}

function moveButton() {
    var button = document.getElementById("button");
    var marginTop = Math.random() * 400 + "px";
    var marginLeft = Math.random() * 400 + "px";
    button.style.marginTop = marginTop;
    button.style.marginLeft = marginLeft;
    setTimeout(moveButton, timeout);
}

moveButton();
