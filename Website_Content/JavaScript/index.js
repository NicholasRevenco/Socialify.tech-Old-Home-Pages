// This is important for the Quick and Simple Section

top_text = document.getElementById("top_text");
bottom_text = document.getElementById("bottom_text");

function size() {
  if (window.innerWidth < 769) {
    top_text.style.display = "none";
    bottom_text.style.display = "block";
  } else if (window.innerWidth > 768) {
    top_text.style.display = "block";
    bottom_text.style.display = "none";
  }
}
window.onresize = function() {
  size();
}

window.onload = function() {
  size();
}
