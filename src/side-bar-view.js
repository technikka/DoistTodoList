import { showByDueDate, showByPriorityLevel } from './todo-item-view'

const sidebar = document.getElementById('side-bar');

const createSortElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  container.classList.add('sort-container');
  const heading = document.createElement('h2');
  heading.textContent = 'Sort By';
  container.appendChild(heading);

  const sortByDate = document.createElement('li');
  sortByDate.textContent = 'Due Date';
  container.appendChild(sortByDate);
  sortByDate.addEventListener('click', () => {
    showByDueDate();
  });

  const sortByPriority = document.createElement('li');
  sortByPriority.textContent = 'Priority Level';
  container.appendChild(sortByPriority);
  sortByPriority.addEventListener('click', () => {
    showByPriorityLevel();
  })

  const sortByCategory = document.createElement('li');
  sortByCategory.textContent = 'Category';
  container.appendChild(sortByCategory);
  
}

const createSidebar = () => {
  createSortElement();
}

export { createSidebar }