/* This is required to make the navbar change color when scrolled */

/* Need to find a way to call all classes */

/*const navbar_change = document.querySelector('.navbar_change');
const navbar_link_scroll = document.querySelectorAll('.navbar_link_scroll');


window.onscroll = function() {
  var top = window.scrollY;
  if (top >= 50) {
    navbar_change.classList.add('active')
    navbar_link_scroll.classList.add('active');
  } else {
    navbar_change.classList.remove('active');
    navbar_link_scroll.classList.remove('active');
  }
}*/

const navbar_change = document.querySelector('.navbar_change');
const navbar_link_scroll_1 = document.querySelector('.navbar_link_scroll_1');
const navbar_link_scroll_2 = document.querySelector('.navbar_link_scroll_2');
const navbar_link_scroll_3 = document.querySelector('.navbar_link_scroll_3');


window.onscroll = function() {
  var top = window.scrollY;
  if (top >= 50) {
    navbar_change.classList.add('active')
    navbar_link_scroll_1.classList.add('active');
    navbar_link_scroll_2.classList.add('active');
    navbar_link_scroll_3.classList.add('active');
  } else {
    navbar_change.classList.remove('active');
    navbar_link_scroll_1.classList.remove('active');
    navbar_link_scroll_2.classList.remove('active');
    navbar_link_scroll_3.classList.remove('active');
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
