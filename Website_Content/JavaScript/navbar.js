/* This is required to make the navbar change color when scrolled */

const navbar_change = document.querySelector('.navbar_change');

/* Do not know how to resolve this error */
window.onscroll = function() {
  var top = window.scrollY;
  if (top >= 50) {
    navbar_change.classList.add('active')
  } else {
    navbar_change.classList.remove('active');
  }
}

window.onresize = function() {
  var width = window.innerWidth;
  if (width < 577) {
    navbar_change.classList.add('active')
  } else {
    navbar_change.classList.remove('active');
  }
};

window.onload = function() {
  var width = window.innerWidth;
  if (width <= 577) {
    navbar_change.classList.add('active')
  } else {
    navbar_change.classList.remove('active');
  }
}

/* End here */
