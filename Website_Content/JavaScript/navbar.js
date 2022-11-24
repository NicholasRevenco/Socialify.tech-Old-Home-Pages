/* This is required to make the navbar change color when scrolled */

const header = document.querySelector('.header');

window.onscroll = function() {
  var top = window.scrollY;
  if (top >= 50) {
    header.classList.add('active')
  } else {
    header.classList.remove('active');
  }
}

window.onresize = function() {
  var width = window.innerWidth;
  if (width < 576) {
    header.classList.add('active')
  } else {
    header.classList.remove('active');
  }
};

/* End here */
