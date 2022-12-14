import { getItems, sortByDate, sortByPriority, deleteItem, markItemComplete, getCompletedItems } from './todo-item'
import { differenceInDays, format } from 'date-fns'
import ExpandIcon from '../src/assets/arrow-expand-down.png'
import ContractIcon from '../src/assets/arrow-expand-up.png'
import DeleteIcon from '../src/assets/delete-forever-outline.png'
import CheckboxIcon from '../src/assets/checkbox-blank-outline.png'
import CheckedBoxIcon from '../src/assets/checkbox-marked-outline.png'

let currentlyShowing = [];

const content = document.getElementById('content');
const displayItemsContainer = document.createElement('div');
displayItemsContainer.id = 'display-items-container';

content?.appendChild(displayItemsContainer);

const _setColorByPriority = (element, priorityLevel) => {
  let priorityColor;

  if (priorityLevel === 'green') {
    priorityColor = '#668d3c'
  } else if (priorityLevel === 'orange') {
    priorityColor = '#d57500'
  } else if (priorityLevel === 'red') {
    priorityColor = '#8f3b1b';
  } else {
    priorityColor = '#dbca69';
  }
  
  element.style.backgroundColor = priorityColor
}

const _userReadablePriority = (priority) => {
  if (priority === 'green') {
    return 'Low'
  } else if (priority === 'yellow') {
    return 'Normal'
  } else if (priority === 'orange') {
    return 'Moderate'
  } else {
    return 'High';
  }
}

const _displayExpandContractIcon = (container, item) => {
  let icon = document.createElement('img');
  icon.classList.add('expand-contract-icon');
  if (container.classList.contains('contracted')) {
    icon.src = ExpandIcon;
    icon.title = 'Expand View';
  } else {
    icon.src = ContractIcon;
    icon.title = 'Contract View';
  }
  icon.addEventListener('click', () => {
    _toggleExpandContractView(container, item)
  });
  container.appendChild(icon);
}

const _todoContainerExpanded = (container, item) => {
  let description = document.createElement('p');
  description.textContent = item.description;
  description.classList.add('todo-item-description');
  container.appendChild(description);

  let priorityLevel = document.createElement('div');
  priorityLevel.textContent = `Priority: ${_userReadablePriority(item.priorityLevel)}`;
  priorityLevel.classList.add('todo-item-priority');
  container.appendChild(priorityLevel);

  if (item.isComplete === false && item.dueDate !== null) {
    let dueDate = document.createElement('div');
    dueDate.textContent = `Due: ${format(new Date(item.dueDate),'EEE L/dd')} `
    dueDate.classList.add('todo-item-due-date');
    container.appendChild(dueDate);
  }

  let delIcon = document.createElement('img');
  delIcon.src = DeleteIcon;
  delIcon.title = 'Delete Item';
  delIcon.classList.add('todo-item-delete');
  container.appendChild(delIcon);
  delIcon.addEventListener('click', () => {
    deleteItem(item);
    container.remove();
  })
}

const _todoContainerContracted = (container, item) => {
  if (item.isComplete === false) {
    let markComplete = document.createElement('img');
    markComplete.src = CheckboxIcon;
    markComplete.classList.add('todo-item-complete-btn');
    markComplete.title = 'Mark Complete';
    container.appendChild(markComplete);
    markComplete.addEventListener('click', () => {
      markItemComplete(item);
      container.remove();
    })
  } else {
    let complete = document.createElement('img');
    complete.src = CheckedBoxIcon;
    complete.classList.add('todo-item-complete-btn');
    container.appendChild(complete);
  }

  let title = document.createElement('div');
  title.textContent = item.title;
  container.appendChild(title);

  let category = document.createElement('div');
  category.classList.add('todo-item-category');
  category.textContent = item.category;
  container.appendChild(category);

  const daysUntilDue = (dueDate) => {
    let date = new Date(dueDate);
    let days = differenceInDays(date, new Date());
    if (days === 0) {
      return 'Due today';
    } else if (days < 0) {
      return `${Math.abs(days)} days past due`;
    } else {
      return `Due in ${days} days`
    }
  }

  if (item.isComplete === false && item.dueDate !== null) {
    let dueDate = document.createElement('div');
    dueDate.classList.add('todo-item-due-days');
    dueDate.textContent = daysUntilDue(item.dueDate);
    container.appendChild(dueDate);
  }

  let color = document.createElement('span');
  color.classList.add('todo-item-priority-circle');
  container.appendChild(color);
  _setColorByPriority(color, item.priorityLevel);

  // Haven't implemented this feature yet

  // let editIcon = document.createElement('img');
  // editIcon.src = '../src/assets/square-edit-outline.png';
  // editIcon.title = 'Edit this item'
  // container.appendChild(editIcon);

  _displayExpandContractIcon(container, item);
}

const _toggleExpandContractView = (container, item) => {
  container.textContent = '';
  if (container.classList.contains('contracted')) {
    container.classList.toggle('contracted');
    _todoContainerContracted(container, item);
    _todoContainerExpanded(container, item);
  } else {
    container.classList.toggle('contracted');
    _todoContainerContracted(container, item);
  }
}

const displayItems = (itemsArray) => {
  

  itemsArray.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('todo-item-container');
    _toggleExpandContractView(container, item);
    displayItemsContainer.appendChild(container);
  })

  currentlyShowing = itemsArray;
}

const createListHeader = (container, category) => {
  const header = document.createElement('header');
  const text = document.createElement('h2');
  text.textContent = category;
  header.appendChild(text);
  container.prepend(header);
}

const showAllTodos = () => {
  const header = document.querySelector('#content > header');
  if (header) {
    header.remove();
  }
  displayItemsContainer.textContent = '';
  let items = getItems();
  displayItems(items);
}

const filterByCategory = (category) => {
  const heading = document.querySelector('#content > header > h2');
  if (heading) {
    heading.textContent = category ;
  } else {
    createListHeader(content, category);
  }

  displayItemsContainer.textContent = '';
  
  let items = getItems(category);
  displayItems(items);
}

const showByDueDate = () => {
  displayItemsContainer.textContent = '';
  let items = sortByDate(currentlyShowing);
  displayItems(items);
}

const showByPriorityLevel = () => {
  displayItemsContainer.textContent = '';
  let items = sortByPriority(currentlyShowing);
  displayItems(items);
}

const expandAll = () => {
  const containers = document.getElementsByClassName('todo-item-container');
  const items = currentlyShowing;

  for (let i=0; i < items.length; i++) {
    if (containers[i].classList.contains('contracted')) {
      containers[i].classList.remove('contracted');
      containers[i].textContent = '';
      _todoContainerContracted(containers[i], items[i]);
      _todoContainerExpanded(containers[i], items[i]);
    }
  }
}

const contractAll = () => {
  const containers = document.getElementsByClassName('todo-item-container');
  const items = currentlyShowing;

  for (let i=0; i < items.length; i++) {
    if (!containers[i].classList.contains('contracted')) {
      containers[i].classList.add('contracted');
      containers[i].textContent = '';
      _todoContainerContracted(containers[i], items[i]);
    }
  }
}

const showCompleted = () => {
  displayItemsContainer.textContent = '';
  let items = getCompletedItems();
  displayItems(items);
}

export { showAllTodos, filterByCategory, showByDueDate, showByPriorityLevel, expandAll, contractAll, showCompleted }