import { showCategoryModal } from './category-view';

const createCategoryDropdown = () => {
  const tab = document.querySelector('.category-tab');
  const container = document.createElement('div');
  container.classList.add('dropdown-content');
  tab.appendChild(container);

  const newCat = document.createElement('div');
  newCat.classList.add('dropdown-item');
  newCat.textContent = 'Create New';
  container.appendChild(newCat);
  newCat.addEventListener('click', showCategoryModal);

  const closeOnClickAway = (event) => {
    const dropdownItems = document.getElementsByClassName('dropdown-item');
    if (!tab.contains(event.target)) {
      for (let i=0; i < dropdownItems.length; i++) {
        if (dropdownItems[i] !== event.target) {
          container.classList.remove('show');
        }
      }
    }
  }
  
  document.addEventListener('click', closeOnClickAway);
}

export { createCategoryDropdown }
