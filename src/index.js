import { createForm } from './add-item-form'
import { createCategoryDropdown } from './controls'
import { createNewCategoryModal } from './category-modal'
import { getCategories, retrieveStoredCategories } from './category'
import { getItems, parseStoredItems, createItem } from './todo-item'

const setEventListeners = () => {
  const addItemBtn = document.querySelector('.btn-add-item');
  addItemBtn.addEventListener('click', createItem);

  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )
};

createForm();
createCategoryDropdown();
createNewCategoryModal();
parseStoredItems();
retrieveStoredCategories();
setEventListeners();
