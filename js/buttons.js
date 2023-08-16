function gameFullscreen() {
    // Get The Frame With The Game In It
    let frame = document.getElementById("gameframe");

    // Make It Fullscreen
    frame.requestFullscreen();
}

function openHome() {
    window.open("/index.html", "_self", "", "false")
}

// Opens The News Page
function openNews() {
    window.open("path", "_blank", "", "false")
}