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

const _displayExpandContractIcon = (container) => {
  let icon = document.createElement('img');
  icon.classList.add('expand-contract-icon');
  if (container.classList.contains('contracted')) {
    icon.src = '../src/assets/arrow-expand-down.png';
    icon.title = 'Expand View';
  } else {
    icon.src = '../src/assets/arrow-expand-up.png';
    icon.title = 'Contract View';
  }
  icon.addEventListener('click', _toggleExpandContractView);
  container.appendChild(icon);
}

const _todoContainerExpanded = (container, item) => {
  container.classList.toggle('contracted');

  let description = document.createElement('p');
  description.textContent = item.description;
  description.classList.add('todo-item-description');
  container.appendChild(description);
}

const _todoContainerContracted = (container, item) => {
  container.classList.toggle('contracted');

  let delIcon = document.createElement('img');
  delIcon.src = '../src/assets/delete-forever.png';
  delIcon.title = 'Delete Item';
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
}

const _toggleExpandContractView = (container, item) => {
  container.textContent = '';

  if (container.classList.contains('contracted')) {
    _todoContainerContracted(container, item)
    _todoContainerExpanded(container, item);
  } else {
    _todoContainerContracted(container, item);
  }
  _displayExpandContractIcon(container);
}

const showAllTodos = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  let items = getItems();

  items.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('todo-item-container');
    _setColorByPriority(container, item.priorityLevel);
    _toggleExpandContractView(container, item);
    content.appendChild(container);
  })
}

export { showAllTodos }