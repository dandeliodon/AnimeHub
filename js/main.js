var menu = document.getElementById('menu')
var bg = document.getElementById('bg')

const showMenu = () =>{
    menu.classList.add('show-menu')
    bg.classList.add('bg')
    document.getElementById('rs-menu').classList.add('rs-show')
}

const hideMenu = () =>{
    menu.classList.remove('show-menu')
    bg.classList.remove('bg')
    document.getElementById('rs-menu').classList.remove('rs-show')
}

document.getElementById('menu-btn').addEventListener('click', showMenu)
document.getElementById('cls-menu').addEventListener('click', hideMenu)

const popUpOpen = () =>{
    bg.classList.add('bg')
    bg.classList.add('d-flex')
    document.getElementById('pop-up-form').style.display ='block'
}

document.getElementById('pop-up').addEventListener('click', popUpOpen)

const popUpClose = () =>{
    bg.classList.remove('bg')
    bg.classList.remove('d-flex')
    document.getElementById('pop-up-form').style.display ='none'
}

bg.addEventListener('click', popUpClose)

var form1 = document.getElementById('frm1')
var form2 = document.getElementById('frm2')

const subForm = (val) =>{
    if(val){
        var name1 = form1.name.value
        console.log(name1 + " " + form1.tel.value)
        alert("Thank you " + name1 + " for filling form, we will call you soon!")
    }
    else{
        var name2 = form2.name.value
        console.log(name2 + " " + form2.tel.value)
        alert("Thank you " + name2 + " for filling form, we will call you soon!")
    }
    

}

form1.addEventListener('submit', subForm, true)
form2.addEventListener('submit', subForm, false)

var pool = new Audio('audio/relax.mp3')
var button = document.getElementById('audio-but')
var isPlaing = false

const play = () =>{
    if(isPlaing){
        pool.pause()
        pool.currentTime = 0;
        isPlaing = false
    }
    else{
        pool.play()
        isPlaing = true
    }
}

button.addEventListener('click', play)

var burgerButton = document.getElementById('cls-menu');
var burgerMenu = document.getElementById('rs-menu');

function toggleMenu() {
  burgerMenu.classList.toggle('disappear');
}

burgerButton.addEventListener('click', toggleMenu);

var gal1 = document.querySelector('#gal1')

gal1.addEventListener('mouseover', function() {
    gal1.style.transform = 'scale(0.95)';
    gal1.style.transition = 'transform 0.3s ease';
  });
  
  gal1.addEventListener('mouseout', function() {
    gal1.style.transform = 'scale(1)';
  });



var gal2 = document.querySelector('#gal2')
gal2.addEventListener('mouseover', function() {
    gal2.style.transform = 'scale(0.95)';
    gal2.style.transition = 'transform 0.3s ease';
  });
  
  gal2.addEventListener('mouseout', function() {
    gal2.style.transform = 'scale(1)';
  });


var gal3 = document.querySelector('#gal3')
gal3.addEventListener('mouseover', function() {
    gal3.style.transform = 'scale(0.95)';
    gal3.style.transition = 'transform 0.3s ease';
  });
  
  gal3.addEventListener('mouseout', function() {
    gal3.style.transform = 'scale(1)';
});

var gal4 = document.querySelector('#gal4')

gal4.addEventListener('mouseover', function() {
    gal4.style.transform = 'scale(0.95)';
    gal4.style.transition = 'transform 0.3s ease';
  });
  
  gal4.addEventListener('mouseout', function() {
    gal4.style.transform = 'scale(1)';
  });



var gal5 = document.querySelector('#gal5')
gal5.addEventListener('mouseover', function() {
    gal5.style.transform = 'scale(0.95)';
    gal5.style.transition = 'transform 0.3s ease';
  });
  
  gal5.addEventListener('mouseout', function() {
    gal5.style.transform = 'scale(1)';
  });


var gal6 = document.querySelector('#gal6')
gal6.addEventListener('mouseover', function() {
    gal6.style.transform = 'scale(0.95)';
    gal6.style.transition = 'transform 0.3s ease';
  });
  
  gal6.addEventListener('mouseout', function() {
    gal6.style.transform = 'scale(1)';
});


window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
      acc.style.backgroud = "black";
    }
  });
}
