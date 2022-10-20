import { createCategoryDropdown } from './category-view'
import { retrieveStoredCategories } from './category'
import { parseStoredItems, parseStoredCompleted } from './todo-item'
import { showAllTodos } from './todo-item-view'
import { createSidebar } from './side-bar-view'
import { format } from 'date-fns'

const setEventListeners = () => {
  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )

  const overviewTab = document.querySelector('.overview-tab');
  overviewTab.addEventListener('click', showAllTodos);
};

const todaysDate = () => {
  return format(new Date(),'EEEE, LLLL do');
}

const displayHeaderDate = () => {
  const element = document.querySelector('.date');
  element.textContent = `Today is ${todaysDate()}`
}

parseStoredItems();
parseStoredCompleted();
retrieveStoredCategories();
createSidebar();
createCategoryDropdown();
setEventListeners();
showAllTodos();
displayHeaderDate();