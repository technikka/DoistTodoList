import { createForm } from './add-item-form'
import { createCategoryDropdown } from './controls'
import { createNewCategoryModal } from './category-modal'
import { retrieveStoredCategories } from './category'
import { parseStoredItems, createItem } from './todo-item'
import { showAllTodos } from './display'

const setEventListeners = () => {
  const addItemBtn = document.querySelector('.btn-add-item');
  addItemBtn.addEventListener('click', createItem);

  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )

  const overviewTab = document.querySelector('.overview-tab');
  overviewTab.addEventListener('click', showAllTodos);
};

createForm();
createCategoryDropdown();
createNewCategoryModal();
parseStoredItems();
retrieveStoredCategories();
setEventListeners();
