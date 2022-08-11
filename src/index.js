import './style.css';
import Tasks from './modules/tasksClass.js';

const enter = document.querySelector('#enter-btn');
const container = document.querySelector('.mylist');
const clearBtn = document.querySelector('.clear-button');

const task = new Tasks();

document.addEventListener('DOMContentLoaded', () => {
  task.updateTasks();
});

enter.addEventListener('click', task.createTask);

container.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    const targetId = +e.target.getAttribute('id');
    task.deleteTask(targetId);
  }
});

clearBtn.addEventListener('click', () => {
  let x = 0;
  task.tasks.forEach((t) => {
    if (t.completed) {
      task.deleteTask(t.index - x);
      x += 1;
    }
  });
});
