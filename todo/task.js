let form = document.getElementById("tasks__form");

function submit(e) { 
    e.preventDefault()

    let task = document.getElementById('task__input').value
    
    if (task !== '') {
        const newTask = `<div class="task">
                            <div class="task__title">
                                ${task}
                            </div>
                            <a href="#" class="task__remove">&times;</a>
                        </div>`
        document.getElementById('tasks__list').insertAdjacentHTML('beforeend', newTask)
    }
}

form.addEventListener('submit', submit);

document.addEventListener('click', (e) => {
    let task = e.target.closest('div')
    if ( task !== null ){
        if (task.className === ('task')) {
            task.remove()
        }
    }
})

