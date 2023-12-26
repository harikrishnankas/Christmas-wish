var body = document.body,
    html = document.documentElement;

var height = Math.max( body.scrollHeight, body.offsetHeight, 
                       html.clientHeight, html.scrollHeight, html.offsetHeight );
console.log(height);

const screenWidth  =  window.innerWidth;
const screenHeight = window.innerHeight;
console.log(screenHeight);
var gift = document.querySelector(".birthday-gift");
if (screenWidth <= 900){
  gift.style.left = screenWidth*0.05+'px';
  // gift.style.top = 1650*0.88 + "px";
}
else{
  gift.style.left = screenWidth*0.7+'px';
  // gift.style.top = 1490 + "px";
}

gift.style.top = height*0.9 + "px";





//text


function reveal() {
    
    var reveals = document.querySelectorAll(".container",".reveal");
    for (var i = 1; i < reveals.length; i++) {
      var prev = reveals[i-1].getBoundingClientRect().top;
      if (prev < 100) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
