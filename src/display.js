import { getItems } from './todo-item'

const _setColorByPriority = (element, priorityLevel) => {
  console.log(priorityLevel);
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
  
  element.style.backgroundColor = priorityColor
}

const showAllTodos = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  let items = getItems();

  items.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('todo-item-container');
    _setColorByPriority(container, item.priorityLevel);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Del";
    container.appendChild(deleteBtn);

    let title = document.createElement('span');
    title.textContent = item.title;
    container.appendChild(title);

    let dueDate = document.createElement('span');
    dueDate.textContent = item.dueDate;
    container.appendChild(dueDate);

    let category = document.createElement('span');
    category.textContent = item.category;
    container.appendChild(category);

    content.appendChild(container);
  })
}

export { showAllTodos }