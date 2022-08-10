// import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'cleaning',
    completed: false,
    index: 0,
  },
  {
    description: 'accounting',
    completed: false,
    index: 1,
  },
  {
    description: 'cooking',
    completed: false,
    index: 2,
  },
];

document.querySelector('.mylist').innerHTML = tasks.map((task) => `<li>
    <div class="task-container list-row">
    <input type="checkbox" id="checkbox${task.index}">  
    <h4 class="task-description">${task.description}</h4>
    <div class="icon-container task-icon-container"></div>
    </div>
  </li>`).join('');
