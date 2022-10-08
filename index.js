/*---- js for toggle menu bar ----*/

function navSlide() {
  var burger = document.querySelector(".burger");
  var nav = document.querySelector(".nav-links");

  burger.addEventListener("click", function() {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });
}
navSlide();

/*---- js for toggle sign-up form ----------*/

function showSignup(){
  document.getElementById("signUp").style.display = "flex";
  document.getElementById("login").style.display = "none";
  document.getElementById("btns2").style.backgroundColor = "white";
  document.getElementById("btns1").style.backgroundColor = "#cdb4db";
}
function showLogin(){
  document.getElementById("signUp").style.display = "none";
  document.getElementById("login").style.display = "flex";
  document.getElementById("btns1").style.backgroundColor = "white";
  document.getElementById("btns2").style.backgroundColor = "#cdb4db";
}




/*----- product page toggle-----*/


var MainImg = document.getElementById('mainImg');
var smallImg = document.getElementsByClassName('Img');

smallImg[0].onclick = function(){
MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function(){
MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function(){
MainImg.src = smallImg[3].src;
}
smallImg[4].onclick = function(){
MainImg.src = smallImg[4].src;
}
smallImg[5].onclick = function(){
MainImg.src = smallImg[5].src;
}
$(document).on("click", ".previewImg img", function() {
$(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
});




// js for add to cart btn
