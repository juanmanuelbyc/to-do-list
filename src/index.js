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

document.querySelector('.mylist').innerHTML = tasks.map((task) =>`<li>
    <div class="task-container">
    <input type="checkbox" id="checkbox${task.index}">  
    <h4>${task.description}</h4>
    </div>
  </li>`).join('');
