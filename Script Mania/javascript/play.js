function launch(type) {
  if (type == "back") {
    window.location.href = "../html/index.html";
  }
}

document.onkeydown = function(e) {
    e = e || window.event;
    var key = e.which || e.keyCode;
    if (key === 27) {
      setTimeout(function(){ launch("back"); }, 1);
    }
}
