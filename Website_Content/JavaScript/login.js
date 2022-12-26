/* Required for the login change from sign up to log in*/

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

const large_screen = document.getElementById("large_screen");
const small_screen = document.getElementById("small_screen");

function size() {
  if (window.innerWidth <= 475) {
    large_screen.style.display = "none";
    small_screen.style.display = "block";
	console.log(large_screen.style.display);
  } else if (window.innerWidth > 475) {
    large_screen.style.display = "block";
    small_screen.style.display = "none";
	console.log(large_screen.style.display);
  }
}

window.onresize = function() {
	size();
  }

window.onload = function() {
  size();
}
