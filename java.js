var width = $(window).width(); 
window.onscroll = function(){
if ((width >= 1000)){
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        $("#header").css("background","#fff");
        $("#header").css("color","#000");
        $("#header").css("box-shadow","0px 0px 20px rgba(0,0,0,0.09)");
        $("#header").css("padding","4vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid rgb(255, 44, 90)");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }else{
        $("#header").css("background","transparent");
        $("#header").css("color","#fff");
        $("#header").css("box-shadow","0px 0px 0px rgba(0,0,0,0)");
        $("#header").css("padding","6vh 4vw");
        $("#navigation a").hover(function(){
            $(this).css("border-bottom","2px solid #fff");
        },function(){
            $(this).css("border-bottom","2px solid transparent");
        });
    }
}
}

function magnify(imglink){
    $("#img_here").css("background",`url('${imglink}') center center`);
    $("#magnify").css("display","flex");
    $("#magnify").addClass("animated fadeIn");
    setTimeout(function(){
        $("#magnify").removeClass("animated fadeIn");
    },800);
}

function closemagnify(){
    $("#magnify").addClass("animated fadeOut");
    setTimeout(function(){
        $("#magnify").css("display","none");
        $("#magnify").removeClass("animated fadeOut");
        $("#img_here").css("background",`url('') center center`);
    },800);
}

setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
    },800);
},1650);

$(document).ready(function(){
    $("a").on('click', function(event) {
      if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('body,html').animate({
        scrollTop: $(hash).offset().top
        }, 1800, function(){
        window.location.hash = hash;
       });
       } 
      });
  });
  

// Selectors and Methods
const genresLink = document.querySelector("a[href='genres.html']");
const rankingLink = document.querySelector("a[href='ranking.html']");
const contactLink = document.querySelector("a[href='contact.html']");
const navbarToggler = document.querySelector(".navbar-toggler");
const navbarCollapse = document.querySelector(".navbar-collapse");

// Event Listeners
genresLink.addEventListener("click", function(event) {
  event.preventDefault();
  console.log("Genres link clicked");
});

rankingLink.addEventListener("mouseover", function() {
  console.log("Mouse over ranking link");
});

contactLink.addEventListener("keypress", function(event) {
  console.log("Key pressed on contact link:", event.key);
});

navbarToggler.addEventListener("click", function() {
  navbarCollapse.classList.toggle("show");
});

// Animation
function animateIntro() {
  const introImg = document.querySelector(".intro-img");
  let rotation = 0;
  const animationInterval = setInterval(function() {
    rotation += 1;
    introImg.style.transform = `rotate(${rotation}deg)`;
  }, 10);

  setTimeout(function() {
    clearInterval(animationInterval);
  }, 1000);
}

animateIntro();

// Background Music
const audio = new Audio("background_music.mp3");
audio.loop = true;
const audioButton = document.createElement("button");
audioButton.textContent = "Mute";
audioButton.addEventListener("click", function() {
  if (audio.paused) {
    audio.play();
    audioButton.textContent = "Mute";
  } else {
    audio.pause();
    audioButton.textContent = "Unmute";
  }
});

const footer = document.getElementById("footer");
footer.appendChild(audioButton);

