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


function renderList() {
    const newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.innerHTML = `
    <p class = 'input-text'>${input.value}</p>
    <div class="item-btn">
        <i class="fa-solid fa-pencil"></i>
        <i class="fa-solid fa-xmark"></i>
    </div>
    `
    tasks.appendChild(newItem)
    input.value = ''
    addBtnActive()

    updateLocalStorage()

    
}

// iconBtn functionalities
tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-xmark')) {
        e.target.parentElement.parentElement.remove()
    }
})

tasks.addEventListener('click', (e) => {
    if (e.target.classList.contains('fa-pencil')) {
        e.target.parentElement.parentElement.classList.toggle('completed')
    }
})

// localStorage.clear()

function updateLocalStorage() {
    const inputTexts = document.querySelectorAll('.input-text').textContent

    const inputs = []
    
    inputTexts.forEach(inputText => {
        inputs.push(inputText.textContent)
    });

    localStorage.setItem('inputs', JSON.stringify(inputs))
}

const inputFromLocalStorage = JSON.parse(localStorage.getItem('inputs'))
if (inputFromLocalStorage) {
    inputFromLocalStorage.forEach(inputText => renderList(inputText))
}



// EventListeners
addBtn.addEventListener('click', renderList)
input.addEventListener('keyup', addBtnActive)

