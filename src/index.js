import { displayForm } from './add-item-form'
import { createCategoryDropdown } from './controls'
import { retrieveStoredCategories } from './category'
import { parseStoredItems } from './todo-item'
import { showAllTodos } from './display'

const setEventListeners = () => {
  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )

  const overviewTab = document.querySelector('.overview-tab');
  overviewTab.addEventListener('click', showAllTodos);

  const todoFormBtn = document.querySelector('.btn-todoItem-form');
  todoFormBtn.addEventListener('click', displayForm);
};

parseStoredItems();
retrieveStoredCategories();
createCategoryDropdown();
setEventListeners();
showAllTodos();
