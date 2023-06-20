var bg = document.getElementById('bg')

var popUpForm = document.querySelector('#pop-up-form')
var div = document.getElementById('div1')
var div2 = document.getElementById('div2')

var disc = document.getElementById('discount')

div.addEventListener('click', showHome)

function showHome(){
    bg.classList.add('bg')
    popUpForm.style.display = 'flex'
    disc.style.display = 'block'
}

function hideHome(){
    bg.classList.remove('bg')
    popUpForm.style.display = 'none'
    disc.style.display = 'none'
}

bg.addEventListener('click', hideHome)

var disc = document.getElementById('discount')
var clicked = 0

function choose(element) {
    clicked++
    element.style.background = 'none'
    element.style.border = '1px solid #00FF9C'
    element.style.color = '#00FF9C'
    switch(clicked){
        case 2:
            disc.textContent = "Ваша скидка: 15%"
            break
        case 3:
            disc.textContent = "Ваша скидка: 15%"
            break
        case 4:
            disc.textContent = "Ваша скидка: 20%"
            break
        case 5:
            disc.textContent = "Ваша скидка: 20%"
            break
        case 6:
            disc.textContent = "Ваша скидка: 25%"
            break
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }