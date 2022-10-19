import { showByDueDate, showByPriorityLevel, expandAll, contractAll } from './todo-item-view'

const sidebar = document.getElementById('side-bar');

const createSortElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  container.classList.add('sort-container');
  const sortHeading = document.createElement('h2');
  sortHeading.textContent = 'Sort By';
  container.appendChild(sortHeading);

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
}

const createViewElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  const viewHeading = document.createElement('h2');
  viewHeading.textContent = 'View';
  container.appendChild(viewHeading);

  const expand = document.createElement('li');
  expand.textContent = 'Expand All';
  container.appendChild(expand);
  expand.addEventListener('click', () => {
    expandAll();
  })

  const contract = document.createElement('li');
  contract.textContent = 'Contract All';
  container.appendChild(contract);
  contract.addEventListener('click', () => {
    contractAll();
  })

}

const createSidebar = () => {
  createViewElement();
  createSortElement();
}

export { createSidebar }