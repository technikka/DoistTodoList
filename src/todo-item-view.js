import { getItems } from './todo-item'

const _setColorByPriority = (element, priorityLevel) => {
  let priorityColor;

  if (priorityLevel === 'green') {
    priorityColor = '#2A9D8F'
  } else if (priorityLevel === 'orange') {
    priorityColor = '#F4A261'
  } else if (priorityLevel === 'red') {
    priorityColor = '#E76F51';
  } else {
    priorityColor = '#E9C46A';
  }
  
  element.style.borderColor = priorityColor
}

const _todoContainerMinimized = (item) => {
  let container = document.createElement('div');
  container.classList.add('todo-item-container');

  _setColorByPriority(container, item.priorityLevel);

  // let deleteBtn = document.createElement('button');
  let delIcon = document.createElement('img');
  delIcon.src = '../src/assets/delete-forever.png';
  // deleteBtn.style.backgroundImage = '../src/assets/delete-forever.png';
  delIcon.classList.add('delete-icon');
  container.appendChild(delIcon);

  let title = document.createElement('span');
  title.textContent = item.title;
  container.appendChild(title);

  let dueDate = document.createElement('span');
  dueDate.textContent = item.dueDate;
  container.appendChild(dueDate);

  let category = document.createElement('span');
  category.textContent = item.category;
  container.appendChild(category);

  let expandIcon = document.createElement('img');
  expandIcon.src = '../src/assets/arrow-expand-down.png';
  expandIcon.classList.add('expand-icon');
  container.appendChild(expandIcon);

  return container;
}

const showAllTodos = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  let items = getItems();

  items.forEach(item => {
    content.appendChild(_todoContainerMinimized(item));
  })
}

export { showAllTodos }