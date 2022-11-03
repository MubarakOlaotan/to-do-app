const input = document.querySelector('input')
const addBtn = document.querySelector('.add-list')
const tasks = document.querySelector('.tasks')


function addBtnActive() {
    if (input.value.trim()) {
        addBtn.classList.add('active')
    } else {
        addBtn.classList.remove('active')
    }
}


function renderMovie() {
    const newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.innerHTML = `
    <p>${input.value}</p>
    <div class="item-btn">
        <i class="fa-solid fa-pencil"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>
    `
    tasks.appendChild(newItem)
    console.log(input.value)

    input.value = ''
    addBtnActive()
}



// EventListeners
addBtn.addEventListener('click', renderMovie)
input.addEventListener('keyup', addBtnActive)
