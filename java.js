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
const form = document.querySelector("form");
const submitButton = document.querySelector("button[type='submit']");

// Event Listeners
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  // Perform form validation and data processing here

  // Show the alert
  alert("Message sent!");
});

form.addEventListener("mouseover", function() {
  console.log("Mouse over form");
});

document.addEventListener("keypress", function(event) {
  console.log("Key pressed:", event.key);
});

// Animation
const introImg = document.querySelector(".intro-img");
let rotationAngle = 0;

function rotateImage() {
  rotationAngle += 5;
  introImg.style.transform = `rotate(${rotationAngle}deg)`;

  if (rotationAngle < 360) {
    requestAnimationFrame(rotateImage);
  }
}

introImg.addEventListener("click", function() {
  rotationAngle = 0;
  rotateImage();
});

// Background Music
const audio = new Audio("background_music.mp3");
const audioButton = document.createElement("button");
audioButton.textContent = "Mute";
audioButton.addEventListener("click", function() {
  if (audio.muted) {
    audio.muted = false;
    audioButton.textContent = "Mute";
  } else {
    audio.muted = true;
    audioButton.textContent = "Unmute";
  }
});

const footer = document.getElementById("footer");
footer.appendChild(audioButton);
