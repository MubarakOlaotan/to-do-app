const input = document.querySelector('input')
const addBtn = document.querySelector('.add-list')
const tasks = document.querySelector('.tasks')

input.addEventListener('keyup', () => {
    if (input.value.trim() === '') {
        addBtn.classList.remove('active')
    } else {
        addBtn.classList.add('active')
    }
})


addBtn.addEventListener('click', renderMovie)

function renderMovie() {
    const newItem = document.createElement('div')
    newItem.classList.add('item')
    newItem.innerHTML = `
    <p>${input.value}</p>
    <div class="item-btn">
        <i class="fa-solid fa-pencil"></i>
        <i class="fa-solid fa-xmark"></i>
    `
    tasks.appendChild(newItem)
    input.value = ''
    
    

    console.log(input.value.trim())
}