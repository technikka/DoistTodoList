import { getCategories, createCategory } from './category'
import { filterByCategory } from './todo-item-view'
import { addSelectOptions, categoriesSelectOptions } from './todo-item-form'

const createNewCategoryModal = () => {
  const contentContainer = document.getElementById('content');

  let modal = document.createElement('div');
  modal.classList.add('new-category-modal');
  contentContainer.appendChild(modal);

  let label = document.createElement('label');
  label.textContent = 'New Category';
  label.setAttribute('for', 'new-category');
  modal.appendChild(label);

  let input = document.createElement('input');
  input.setAttribute('name', 'new-category');
  modal.appendChild(input);

  let btn = document.createElement('button');
  btn.textContent = 'create';
  modal.appendChild(btn);
  btn.addEventListener('click', () => {
    createCategory(input.value);
    document.querySelector('.new-category-modal').classList.remove('show');
    document.querySelector('#backdrop').classList.remove('show');
  });
}

const showCategoryModal = () => {
  const newCategoryModal = document.querySelector('.new-category-modal');
  if (newCategoryModal === null) {
    createNewCategoryModal();
  }

  const modal = document.querySelector('.new-category-modal');
  const backdrop = document.getElementById('backdrop');
  modal.classList.add('show');
  backdrop.classList.add('show');
  document.querySelector('.new-category-modal input').focus();

  const closeOnClickAway = (event) => {
    const dropdownItems = document.getElementsByClassName('dropdown-item');
    for (let i=0; i < dropdownItems.length; i++) {
      if (dropdownItems[i] === event.target) {
        return
      }
    }
    if (!modal.contains(event.target) && modal != event.target) {
      modal.classList.remove('show');
      backdrop.classList.remove('show');
    }
  }

  document.addEventListener('click', closeOnClickAway);
}

const addCreateNew = (container) => {
  const newCat = document.createElement('div');
  newCat.classList.add('dropdown-item');
  newCat.textContent = 'Create New';
  container.appendChild(newCat);
  newCat.addEventListener('click', showCategoryModal);
}

const addCategories = (container) => {
  const categories = getCategories().sort();

  for (const category of categories) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('dropdown-item');
    newDiv.textContent = category;
    container.appendChild(newDiv);
    newDiv.addEventListener('click', () => {
      filterByCategory(category);
    });
  }
}

const createCategoryDropdown = () => {
  const tab = document.querySelector('.category-tab');
  const container = document.createElement('div');
  container.classList.add('dropdown-content');
  tab.appendChild(container);

  addCreateNew(container);
  addCategories(container);

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

const reloadCategoryTab = () => {
  let container = document.querySelector('.dropdown-content');
  container.textContent = '';
  addCreateNew(container);
  addCategories(container);
}

const reloadCategoryTodoSelect = () => {
  let selectBox = document.getElementById('category');
  selectBox.textContent = '';
  addSelectOptions(selectBox, categoriesSelectOptions(), 'General');
}



export { createNewCategoryModal, showCategoryModal, reloadCategoryTab, createCategoryDropdown, reloadCategoryTodoSelect }