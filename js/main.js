/* Start Go To Top Icon*/ 
var mybutton = document.getElementById("myBtn");

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
}

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/* End Go To Top Icon*/

/* Start Second NavBar*/
let firstNav = document.querySelector('.first-nav');
let secNav = document.querySelector('.second-nav');

let bodyScroll = document.querySelector(' html , body ');

window.addEventListener('scroll' , function(){
  if(bodyScroll.scrollTop >= 5){
    firstNav.style.display ='none';
    secNav.style.display = 'block';
    secNav.classList.add('animate__animated' , 'animate__slideInDown');
  }else{
    secNav.style.display = 'none';
    firstNav.style.display ='block';
    secNav.classList.remove('animate__animated' , 'animate__slideInDown');
  }
});

/* End Second NavBar*/