// Animate Virtual Keyboard Project
// **********************************


// Dom Elements Selection
const $ = document
const inputElem = $.querySelector('.title')


// function when user keyUp on keyboard
document.addEventListener('keyup', function(event){

    appendValueToDom(event)
    
    let userEventKey = event.key
    let targetKeyElem = document.getElementById(userEventKey)

    targetKeyElem.classList.add('hit')

    targetKeyElem.addEventListener('animationend', function(){
        targetKeyElem.classList.remove('hit')
    })
})

// function when user keyUp keyboard backspace button
function appendValueToDom (event){

    if(event.key === 'Backspace'){
        inputElem.innerHTML = inputElem.innerHTML.slice(0, -1)
        return
    }

    if(event.key === 'Shift'){
        inputElem.innerHTML += '@'
        return
    }

    inputElem.innerHTML += event.key
}