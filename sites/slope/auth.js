function checkauth() {
  let auth=sessionStorage.getItem ("auth");
  let longauth=localStorage.getItem("longauth");
  if (auth=="true") {
  }
  else if (longauth=="true") {
  }
  else {
    window.open("/index.html", "_top", "", "true");
  }
}
