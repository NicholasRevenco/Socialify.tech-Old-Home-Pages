/* This is required to make the navbar change color when scrolled */

const header = document.querySelector('.header');

/* Do not know how to resolve this error */
window.onscroll = function() {
  var top = window.scrollY;
  if (top >= 50 || past > 0) {
    const past = 1
    header.classList.add('active')
  } else {
    header.classList.remove('active');
  }
}

window.onresize = function() {
  var width = window.innerWidth;
  if (width < 577) {
    header.classList.add('active')
  } else {
    header.classList.remove('active');
  }
};

window.onload = function() {
  var width = window.innerWidth;
  if (width <= 577) {
    header.classList.add('active')
  } else {
    header.classList.remove('active');
  }
}

/* End here */
