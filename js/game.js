var move = 0
var busy = []
var moveX = []
var moveO = []
var winX = "First player is a winner!"
var winO = "Second player is a winner!"

var cells = document.getElementsByClassName('cell')

const isIn = (a, list) =>{
    let is = false
    list.forEach(element => {
        if(element==a){
            is = true
        }
    });
    return is
}

const putX = (element) =>{
    element.innerHTML = '<span style="color: #00FF9C"><i class="fa-solid fa-x fa-3x"></i></span>'
    busy.push(element.getAttribute('data-cell'))
    moveX.push(element.getAttribute('data-cell'))
    move++
}

const putO = (element) =>{
    element.innerHTML = '<span style="color: #00FF9C"><i class="fa-solid fa-o fa-3x"></i></span>'
    busy.push(element.getAttribute('data-cell'))
    moveO.push(element.getAttribute('data-cell'))
    move++
}

var discount = " You will get 5% off, call our manager"

var isWinner = false

function winnerDet(){
    const winningCombinations = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7] // Diagonals
      ];
    for(let i = 0; i<winningCombinations.length; i++){
        if(!isWinner){
            if(ifIn(winningCombinations[i], moveX)){
                isWinner = true
                alert(winX+discount)
                break
            }
            else if(ifIn(winningCombinations[i], moveO)){
                alert(winO+discount)
                isWinner = true
                div2.addEventListener('click', showHome)
                break
            }
        }
    }
    if(!isWinner && busy.length==9){
        alert("Draw!")
        alert(discount)
    }
}

function ifIn(arr, moves){
    let count = 0
    for(let i = 0; i<arr.length; i++){
        if(isIn(arr[i], moves)){
            count++
        }
    }
    if(count==3){
        return true
    }
    else{
        return false
    }
}

  

const putElement = (element) =>{
    if(isIn(element.getAttribute('data-cell'), busy)){
        alert("This field is already busy, try another one")
    }
    else{
        if((move%2)==0){
            putX(element)
        }
        else{
            putO(element)
        }
    }
    winnerDet()
}

