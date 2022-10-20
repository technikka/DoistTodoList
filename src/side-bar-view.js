import { showByDueDate, showByPriorityLevel, expandAll, contractAll, showCompleted } from './todo-item-view'

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

const createManageCategoryElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  const catHeading = document.createElement('h2');
  catHeading.textContent = 'Manage';
  container.appendChild(catHeading);

  const manageCat = document.createElement('li');
  manageCat.textContent = 'Categories';
  container.appendChild(manageCat);
  manageCat.addEventListener('click', () => {
    // function
  })
}

const createCompletedElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  const completedheading = document.createElement('h2');
  completedheading.textContent = 'Completed';
  container.appendChild(completedheading);

  const viewAll = document.createElement('li');
  viewAll .textContent = 'View All';
  container.appendChild(viewAll );
  viewAll .addEventListener('click', () => {
    showCompleted();
  })

}

const createSidebar = () => {
  createViewElement();
  createSortElement();
  createManageCategoryElement();
  createCompletedElement(); 
}

export { createSidebar }