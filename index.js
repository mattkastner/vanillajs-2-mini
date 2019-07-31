const todo = (event) => {
    //stop bad things
    event.preventDefault()

    //create a new list item
    const item = document.createElement('li')
    item.innerText = document.querySelector('#item').value
    item.addEventListener('click', completeTodo)

    //make the little pink button
    let btn = document.createElement('button')
    btn.innerText = 'x'
    item.appendChild(btn)

    //if someone clicks this button remove this piece
    btn.addEventListener('click', removeTodo)

    //append the information to the list
    let ul = document.querySelector('ul')
    ul.appendChild(item)
}

document.querySelector('form').addEventListener('submit', todo)

const removeTodo = (event) => {
    event.target.parentNode.remove()
}

const completeTodo = (event) => {
    const check = event.target
    if(check.getAttribute('aria-checked') === "true") {
        check.setAttribute('aria-checked', 'false')
    }
    else {
        check.setAttribute('aria-checked', 'true')
    }
}