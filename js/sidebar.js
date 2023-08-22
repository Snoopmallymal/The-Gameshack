function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}

    /* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function sidebarlaunchGame(path) {
    window.open(path, "_self", "", "false"	)
}

function sidebaropenHome() {
    window.open("/index.html", "_self", "", "false");
}

// Opens The News Page
function sidebaropenNews() {
    window.open("/news.html", "_blank", "", "false");
}
