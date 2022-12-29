
$('.navigatsiya div').on('click', () => {
  $('.navigatsiya div').toggleClass('active');
  $('.navigatsiya nav').toggleClass('open');
  $('.navigatsiya nav ul').toggleClass('show');
});
for (let a = 1; a <= $(".navigatsiya ul li").length; a++) {
  $(".navigatsiya ul li:nth-child(" + a + ")").css("animation-delay", "." + (a + 1) + "s");
}


let modal = document.getElementById('myModal');
let button = document.getElementById("myBtn");
let div = document.getElementsByClassName("close")[0];

  button.onclick = function() {
    modal.style.display = "block";
  }
  div.onclick = function() {
    modal.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal) {
       modal.style.display = "none";
    }
  }
