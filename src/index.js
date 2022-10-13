import { createForm } from './add-item-form'
import { setEventListeners } from './event'
import { createCategoryDropdown } from './controls'
import { createNewCategoryModal } from './add-category-form'
import { getCategories, retrieveStoredCategories } from './category'
import { getItems, parseStoredItems } from './todo-item'


createForm();
createCategoryDropdown();
createNewCategoryModal();
parseStoredItems();
retrieveStoredCategories();
setEventListeners();
