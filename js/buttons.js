function gameFullscreen() {
    // Get The Frame With The Game In It
    let frame = document.getElementById("gameframe");

    // Make It Fullscreen
    frame.requestFullscreen();
}