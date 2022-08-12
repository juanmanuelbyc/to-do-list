const newTaskDescription = document.querySelector('#new-task-title');
const container = document.querySelector('.mylist');
let checkboxes;
let descriptions;

export default class Tasks {
  tasks;

  constructor() {
    this.getFromLocalStorage();
  }

  setLocalStorage = (newTasks) => localStorage.setItem('tasks', JSON.stringify(newTasks));

  getFromLocalStorage = () => {
    this.tasks = JSON.parse(localStorage.getItem('tasks')) ?? [];
  };

  updateTasks = () => {
    let temp = this;
    this.getFromLocalStorage();
    container.innerHTML = '';
    this.tasks.forEach((task, i) => {
      task.index = i + 1;
      container.innerHTML += `<li>
      <div class="task-container list-row">
      <input class="checker" type="checkbox" id="${i + 1}">
      <input class="task-description" type="text" name="task-title" id="${i + 1}" value="${i + 1} ${task.description}"/>
      <div class="icon-container delete task-icon-container" id="${i + 1}"></div>
      </div>
    </li>`;
    });
    checkboxes = document.querySelectorAll('input[type=checkbox]');
    checkboxes.forEach((checkbox, i) => {
      if (temp.tasks[i].completed === true) {
        checkbox.checked = true;
        checkbox.nextSibling.nextSibling.classList.add('marked');
      }

      checkbox.addEventListener('change', () => {
        if (checkbox.checked === true) {
          checkbox.nextSibling.nextSibling.classList.add('marked');
          temp.tasks[i].completed = true;
        } else {
          checkbox.nextSibling.nextSibling.classList.remove('marked');
          temp.tasks[i].completed = false;
        }
        temp.setLocalStorage(temp.tasks);
      });
    });
    descriptions = document.querySelectorAll('.task-description');
    temp = this;
    descriptions.forEach((desc, i) => {
      desc.addEventListener('change', () => {
        temp.tasks[i].description = desc.value;
        temp.setLocalStorage(temp.tasks);
      });
    });
    console.log(this.tasks);
  };

  createTask = (e) => {
    e.preventDefault();
    const newTask = {
      description: newTaskDescription.value,
      completed: false,
      index: this.tasks.length + 1,
    };
    this.tasks.push(newTask);
    this.clear();
    this.setLocalStorage(this.tasks);
    this.updateTasks();
  };

  deleteTask = (i) => {
    const filteredTasks = this.tasks.filter((task) => task !== this.tasks[i]);
    this.setLocalStorage(filteredTasks);
    this.updateTasks();
  };

  clear = () => {
    newTaskDescription.value = '';
  };

  clearAllCompleted = () => {
    const notCompleted = this.tasks.filter((task) => task.completed !== true);
    this.setLocalStorage(notCompleted);
    this.updateTasks();
  }

}