//Tasks page
const taskInput = document.querySelector('.task-input');
const taskButton = document.querySelector('.task-button');
const taskList = document.querySelector('.task-list');
const filterOption = document.querySelector('.filter-container');
const createTask = document.getElementById('createTask')
const taskPage = document.getElementById('tasks')
const welcome = document.getElementById('welcomePage')



taskButton.addEventListener('click', addTask);
taskList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTask);


createTask.addEventListener('click', () => {
    welcome.style.display = 'none'
    taskPage.style.display = 'flex'
    
})


//Add Task Function
function addTask(event){
    event.preventDefault()


    //create elements for new tasks based on user input
    const taskDiv = document.createElement('div');
    taskDiv.classList.add("task");

    //set new task element to read and display input value. 
    const newTask = document.createElement('input');
    newTask.classList.add("task");
    newTask.type = "text";
    newTask.value = taskInput.value;
    newTask.setAttribute("readonly", "readonly");
    newTask.classList.add('task-item');
    taskDiv.appendChild(newTask);


    //create buttons to allow for deleting tasks and checking completed tasks
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';  
    completedButton.classList.add("complete-btn"); 
    taskDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    taskDiv.appendChild(trashButton);
     

    const editButton = document.createElement('button');
    editButton.innerHTML = 'Edit';
    editButton.classList.add("edit-btn");
    taskDiv.appendChild(editButton)


    taskList.appendChild(taskDiv);
  

    taskInput.value = "";
    
//create edit button to allow for editing of previously created tasks and saving edits
    editButton.addEventListener('click', () => {
       if(editButton.innerText === "Edit") {
        newTask.removeAttribute("readonly");
        newTask.focus();
        editButton.innerText = "Save";
       }else{
           newTask.setAttribute("readonly", "readonly");
           editButton.innerText = "Edit";
       }
    })

}

//create function to delete tasks and toggle completed tasks 
function deleteCheck(e){
    const item = e.target;

    if(item.classList[0] === 'trash-btn') {
        const task = item.parentElement;
        task.classList.add("fall");
        task.remove();
    }

    if(item.classList[0] === 'complete-btn') {
        const task = item.parentElement;
        task.classList.toggle("completed");

    }

}
//create switch case statement to filter tasks based on designated ids for each filter button

const filterBtns = document.querySelectorAll('.filter-btn')

filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        console.log(e.currentTarget.dataset.id)
    })
})

function filterTask(e){
    const tasks = taskList.childNodes;
    tasks.forEach(function(task){
        switch(e.target.dataset.id){
            case "all":
                task.style.display = 'flex';
                break;
            case "completed":
                if(task.classList.contains('completed')){
                    task.style.display = 'flex';
                }else{
                    task.style.display = 'none';
                }
                break;
                case "pending":
                    if(!task.classList.contains('completed')){
                        task.style.display = 'flex';
                    }else{
                        task.style.display = 'none';
                    }
            
        }

    })

}

