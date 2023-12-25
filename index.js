const screenWidth  =  window.innerWidth;
const screenHeight = window.innerHeight;


var gift = document.querySelector(".birthday-gift");
gift.style.left = screenWidth*0.6+'px';
gift.style.top = 1500 + "px";



//text


function reveal() {
    
    var reveals = document.querySelectorAll(".container",".reveal");
    for (var i = 1; i < reveals.length; i++) {
      var prev = reveals[i-1].getBoundingClientRect().top;
      console.log(prev)
      if (prev < 100) {
          console.log("true")
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
