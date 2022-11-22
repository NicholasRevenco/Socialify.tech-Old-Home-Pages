
const header = document.querySelector('.header');
const header2 = document.querySelector('.header2');

window.onscroll = function() {
  var top = window.scrollY;
  console.log(top);
  if (top >= 100) {
    header.classList.add('active')
    header2.classList.add('active')
  } else {
    header.classList.remove('active');
    header2.classList.remove('active');
  }
}
