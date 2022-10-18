/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/category-view.js":
/*!******************************!*\
  !*** ./src/category-view.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCategoryDropdown": () => (/* binding */ createCategoryDropdown),
/* harmony export */   "createNewCategoryModal": () => (/* binding */ createNewCategoryModal),
/* harmony export */   "reloadCategoryTab": () => (/* binding */ reloadCategoryTab),
/* harmony export */   "reloadCategoryTodoSelect": () => (/* binding */ reloadCategoryTodoSelect),
/* harmony export */   "showCategoryModal": () => (/* binding */ showCategoryModal)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _todo_item_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item-view */ "./src/todo-item-view.js");
/* harmony import */ var _todo_item_form__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item-form */ "./src/todo-item-form.js");




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
    (0,_category__WEBPACK_IMPORTED_MODULE_0__.createCategory)(input.value);
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
  const categories = (0,_category__WEBPACK_IMPORTED_MODULE_0__.getCategories)().sort();

  for (const category of categories) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('dropdown-item');
    newDiv.textContent = category;
    container.appendChild(newDiv);
    newDiv.addEventListener('click', () => {
      (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_1__.filterByCategory)(category);
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
  (0,_todo_item_form__WEBPACK_IMPORTED_MODULE_2__.addSelectOptions)(selectBox, (0,_todo_item_form__WEBPACK_IMPORTED_MODULE_2__.categoriesSelectOptions)(), 'General');
}





/***/ }),

/***/ "./src/category.js":
/*!*************************!*\
  !*** ./src/category.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCategory": () => (/* binding */ createCategory),
/* harmony export */   "getCategories": () => (/* binding */ getCategories),
/* harmony export */   "isNewCategory": () => (/* binding */ isNewCategory),
/* harmony export */   "retrieveStoredCategories": () => (/* binding */ retrieveStoredCategories)
/* harmony export */ });
/* harmony import */ var _category_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-view */ "./src/category-view.js");


const allCategories = ['General'];

const getCategories = () => {
  return allCategories
}

const _storeCategory = (categoryName) => {
  let catId = getCategories().length + 1
  localStorage.setItem(`category${catId}`, categoryName);
}

const _storedCategories = () => {
  let categories = Object.entries(localStorage).filter(
    key => key[0].includes('category')
  )
  return categories
}

const retrieveStoredCategories = () => {
  let categories = _storedCategories();
  for (let i=0; i < categories.length; i++) {
    allCategories.push(categories[i][1]);
  }
}

const createCategory = (userInput) => {
  if (allCategories.includes(userInput)) {
    // simply don't create a double
    return
  } else {
    allCategories.push(userInput);
    _storeCategory(userInput);
    (0,_category_view__WEBPACK_IMPORTED_MODULE_0__.reloadCategoryTab)();
    (0,_category_view__WEBPACK_IMPORTED_MODULE_0__.reloadCategoryTodoSelect)();
  }
}

const isNewCategory = (category) => {
  if (getCategories().includes(category)) {
    return false
  } else {
    return true
  }
} 




/***/ }),

/***/ "./src/todo-item-form.js":
/*!*******************************!*\
  !*** ./src/todo-item-form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addSelectOptions": () => (/* binding */ addSelectOptions),
/* harmony export */   "categoriesSelectOptions": () => (/* binding */ categoriesSelectOptions),
/* harmony export */   "createForm": () => (/* binding */ createForm),
/* harmony export */   "displayForm": () => (/* binding */ displayForm)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");



const createForm = () => {
  let content = document.querySelector('#content');

  let container = document.createElement('div');
  container.classList.add('add-item-container');
  content.appendChild(container);

  let form = document.createElement('form');
  container.appendChild(form);

  let fieldset = document.createElement('fieldset');
  form.appendChild(fieldset);

  let legend = document.createElement('legend');
  legend.textContent = 'Add an item to your list';
  fieldset.appendChild(legend);

  // add title property input
  fieldset.appendChild(_createInput('text', { textContent: 'Title', for: 'title'}));
  // add description property input
  fieldset.appendChild(_createTextArea({ textContent: 'Description', for: 'description'}, { "cols": "30", "rows": "8"}));
  // add dueDate property input
  fieldset.appendChild(_createInput('date', { textContent: 'Due Date', for: 'dueDate'}));
  // add priorityLevel property input
  fieldset.appendChild(_createSelect({ textContent: 'Priority', for: 'priorityLevel'}, {"green": "Low Priority", "yellow": "Normal Priority", "orange": "Somewhat Priority", "red": "High Priority"}, "yellow"));
  // add notes property input
  fieldset.appendChild(_createTextArea({ textContent: 'Notes', for: 'notes'}, { "cols": "30", "rows": "8"}));

  // add category property input
  const categoryContainer = _createSelect({ textContent: 'Category', for: 'category'}, categoriesSelectOptions(), 'General')
  fieldset.appendChild(categoryContainer);

  let inputContainer = document.createElement('div');
  inputContainer.classList.add('in-form-add-category');

  let input = document.createElement('input');
  input.placeholder = 'New Category Name';
  input.name = 'category';

  inputContainer.appendChild(input);

  categoryContainer.appendChild(inputContainer);

  const categories = document.getElementById('category');
  categories.addEventListener('change', function() {
    if (this.value === 'Create New') {
      inputContainer.classList.toggle('show');
    } else {
      if (inputContainer.classList.contains('show')) {
        inputContainer.classList.remove('show');
      }
    }
  })

  const btn = document.createElement('button');
  btn.textContent = 'Add';
  btn.classList.add('btn-add-item');
  fieldset.appendChild(btn);
  btn.addEventListener('click', _todo_item__WEBPACK_IMPORTED_MODULE_1__.createItem);
}

const _addLabel = (parent, properties) => {
  let label = document.createElement('label');
  label.textContent = properties.textContent;
  label.setAttribute('for', properties.for);
  parent.appendChild(label);
}

const _createInput = (inputType, inputLabel, inputProperties) => {
  let container = document.createElement('div');
  _addLabel(container, inputLabel);

  let input = document.createElement('input');
  input.type = inputType;
  input.name = inputLabel.for;
  if (inputProperties) {
    for (const [key, value] of Object.entries(inputProperties)) {
      input.setAttribute(key, value);
    }
  }
  container.appendChild(input);

  return container;
}

const _createTextArea = (areaLabel, areaProperties) => {
  let container = document.createElement('div');
  _addLabel(container, areaLabel);

  let area = document.createElement('textarea');
  area.name = areaLabel.for;
  if (areaProperties) {
    for (const [key, value] of Object.entries(areaProperties)) {
      area.setAttribute(key, value);
    }
  }
  container.appendChild(area);

  return container;
}

const categoriesSelectOptions = (selectDefault) => {
  let categories = (0,_category__WEBPACK_IMPORTED_MODULE_0__.getCategories)().sort();
  let selectOptions = {};

  selectOptions['Create New'] = ['Create New ...'];

  for (let i=0; i < categories.length; i++ ) {
    selectOptions[categories[i]] = categories[i];
  }

  return selectOptions;
}

const addSelectOptions = (select, selectOptions, selectDefault) => {
  for (const [value, textContent] of Object.entries(selectOptions)) {
    let option = document.createElement('option');
    option.value = value;
    option.textContent = textContent;
    if (selectDefault && option.value === selectDefault) {
      option.selected = true;
    }
    select.appendChild(option);
  }
}

// add selectDefault option with name attr to make option.selected = true
const _createSelect = (selectLabel, selectOptions, selectDefault) => {
  let container = document.createElement('div');
  _addLabel(container, selectLabel);

  let select = document.createElement('select');
  select.name = selectLabel.for;
  select.id = select.name;
  container.appendChild(select);

  addSelectOptions(select, selectOptions, selectDefault);

  return container;
}



const displayForm = () => {
  const content = document.querySelector('#content');
  content.textContent = '';
  createForm();
}



/***/ }),

/***/ "./src/todo-item-view.js":
/*!*******************************!*\
  !*** ./src/todo-item-view.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterByCategory": () => (/* binding */ filterByCategory),
/* harmony export */   "showAllTodos": () => (/* binding */ showAllTodos)
/* harmony export */ });
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");


const _setColorByPriority = (element, priorityLevel) => {
  let priorityColor;

  if (priorityLevel === 'green') {
    priorityColor = '#2A9D8F'
  } else if (priorityLevel === 'orange') {
    priorityColor = '#F4A261'
  } else if (priorityLevel === 'red') {
    priorityColor = '#E76F51';
  } else {
    priorityColor = '#E9C46A';
  }
  
  element.style.borderColor = priorityColor
}

const _userReadablePriority = (priority) => {
  if (priority === 'green') {
    return 'Low'
  } else if (priority === 'yellow') {
    return 'Normal'
  } else if (priority === 'orange') {
    return 'Moderate'
  } else {
    return 'High';
  }
}

const _displayExpandContractIcon = (container, item) => {
  let icon = document.createElement('img');
  icon.classList.add('expand-contract-icon');
  if (container.classList.contains('contracted')) {
    icon.src = '../src/assets/arrow-expand-down.png';
    icon.title = 'Expand View';
  } else {
    icon.src = '../src/assets/arrow-expand-up.png';
    icon.title = 'Contract View';
  }
  icon.addEventListener('click', () => {
    _toggleExpandContractView(container, item)
  });
  container.appendChild(icon);
}

const _todoContainerExpanded = (container, item) => {
  let description = document.createElement('p');
  description.textContent = item.description;
  description.classList.add('todo-item-description');
  container.appendChild(description);

  let notes = document.createElement('p');
  notes.textContent = item.notes;
  notes.classList.add('todo-item-notes');
  container.appendChild(notes);

  let priorityLevel = document.createElement('span');
  priorityLevel.textContent = `Priority: ${_userReadablePriority(item.priorityLevel)}`;
  container.appendChild(priorityLevel);
}

const _todoContainerContracted = (container, item) => {
  let delIcon = document.createElement('img');
  delIcon.src = '../src/assets/delete-forever.png';
  delIcon.title = 'Delete Item';
  delIcon.classList.add('delete-icon');
  container.appendChild(delIcon);

  let title = document.createElement('span');
  title.textContent = item.title;
  container.appendChild(title);

  let dueDate = document.createElement('span');
  dueDate.textContent = item.dueDate;
  container.appendChild(dueDate);

  let category = document.createElement('span');
  category.textContent = item.category;
  container.appendChild(category);

  let markComplete = document.createElement('button');
  markComplete.textContent = 'Complete';
  markComplete.classList.add('todo-item-complete-btn');
  container.appendChild(markComplete);

  _displayExpandContractIcon(container, item);
}

const _toggleExpandContractView = (container, item) => {
  container.textContent = '';
  if (container.classList.contains('contracted')) {
    container.classList.toggle('contracted');
    _todoContainerContracted(container, item);
    _todoContainerExpanded(container, item);
  } else {
    container.classList.toggle('contracted');
    _todoContainerContracted(container, item);
  }
}

const displayItems = (itemsArray) => {
  itemsArray.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('todo-item-container');
    _setColorByPriority(container, item.priorityLevel);
    _toggleExpandContractView(container, item);
    content.appendChild(container);
  })
}

const showAllTodos = () => {
  const content = document.querySelector('#content');
  content.textContent = '';
  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getItems)();
  displayItems(items);
}

const filterByCategory = (category) => {
  const content = document.querySelector('#content');
  content.textContent = '';
  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getItems)(category);
  displayItems(items);

}



/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItem": () => (/* binding */ createItem),
/* harmony export */   "getItems": () => (/* binding */ getItems),
/* harmony export */   "parseStoredItems": () => (/* binding */ parseStoredItems),
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");


const todoItems = [];

const getItems = (category) => {
  if (category !== undefined) {
    return todoItems.filter(item => item.category === category);
  } else {
    return todoItems
  }
}

const _storedItems = () => {
  let items = Object.entries(localStorage).filter(
    key => key[0].includes('todoItem')
  )
  return items
}

const parseStoredItems = () => {
  const items = _storedItems();
  for (let i=0; i < items.length; i++ ) {
    let obj = JSON.parse(items[i][1]);
    todoItems.push(obj);
  }
}

const todoItem = (properties) => {
  const title =  properties['title']
  const description = properties['description'];
  const priorityLevel = properties['priorityLevel'];
  const dueDate = properties['dueDate'];
  const category = properties['category'];
  const notes = properties['notes'];

  const id = getItems().length + 1;
  const isComplete = false; 

  return {title, description, priorityLevel, dueDate, category, notes, id }
};

const _storeItem = (todoItem) => {
  localStorage.setItem(`todoItem${todoItem.id}`, JSON.stringify(todoItem));
}

const createItem = () => {
  let properties = ['title', 'description', 'priorityLevel', 'dueDate', 'category', 'notes']

  let args = {}

  for (let i=0; i < properties.length; i++ ) {
    let propValue = document.getElementsByName(properties[i])[0].value;
    if (propValue.length > 0) {
      // handle when a new category is being set
      if (properties[i] === 'category') {
        let input = document.querySelector('.in-form-add-category > input').value
        if (input && (0,_category__WEBPACK_IMPORTED_MODULE_0__.isNewCategory)(input)) {
          args[properties[i]] = input;
          (0,_category__WEBPACK_IMPORTED_MODULE_0__.createCategory)(input);
        } else {
          args[properties[i]] = 'General';
        }
      } else {
        args[properties[i]] = propValue;
      }
    } else {
      args[properties[i]] = null;
    }
  }

  let newItem = todoItem(args);
  
  _storeItem(newItem);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todo_item_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-form */ "./src/todo-item-form.js");
/* harmony import */ var _category_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-view */ "./src/category-view.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _todo_item_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-item-view */ "./src/todo-item-view.js");






const setEventListeners = () => {
  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )

  const overviewTab = document.querySelector('.overview-tab');
  overviewTab.addEventListener('click', _todo_item_view__WEBPACK_IMPORTED_MODULE_4__.showAllTodos);

  const todoFormBtn = document.querySelector('.btn-todoItem-form');
  todoFormBtn.addEventListener('click', _todo_item_form__WEBPACK_IMPORTED_MODULE_0__.displayForm);
};

(0,_todo_item__WEBPACK_IMPORTED_MODULE_3__.parseStoredItems)();
(0,_category__WEBPACK_IMPORTED_MODULE_2__.retrieveStoredCategories)();
(0,_category_view__WEBPACK_IMPORTED_MODULE_1__.createCategoryDropdown)();
setEventListeners();
(0,_todo_item_view__WEBPACK_IMPORTED_MODULE_4__.showAllTodos)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxZQUFZO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHdEQUFhO0FBQ2xDO0FBQ0EsVUFBVSx5REFBYztBQUN4QixVQUFVO0FBQ1Y7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6RUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOOEM7QUFDVTtBQUNIO0FBQ1A7QUFDQzs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKO0FBQ0Esd0NBQXdDLHlEQUFZOztBQUVwRDtBQUNBLHdDQUF3Qyx3REFBVztBQUNuRDs7QUFFQSw0REFBZ0I7QUFDaEIsbUVBQXdCO0FBQ3hCLHNFQUFzQjtBQUN0QjtBQUNBLDZEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENhdGVnb3JpZXMsIGNyZWF0ZUNhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IGZpbHRlckJ5Q2F0ZWdvcnkgfSBmcm9tICcuL3RvZG8taXRlbS12aWV3J1xuaW1wb3J0IHsgYWRkU2VsZWN0T3B0aW9ucywgY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMgfSBmcm9tICcuL3RvZG8taXRlbS1mb3JtJ1xuXG5jb25zdCBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBDYXRlZ29yeSc7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnY3JlYXRlJztcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZUNhdGVnb3J5KGlucHV0LnZhbHVlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrZHJvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfSk7XG59XG5cbmNvbnN0IHNob3dDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBuZXdDYXRlZ29yeU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBpZiAobmV3Q2F0ZWdvcnlNb2RhbCA9PT0gbnVsbCkge1xuICAgIGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwoKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZHJvcCcpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCBpbnB1dCcpLmZvY3VzKCk7XG5cbiAgY29uc3QgY2xvc2VPbkNsaWNrQXdheSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgZHJvcGRvd25JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhldmVudC50YXJnZXQpICYmIG1vZGFsICE9IGV2ZW50LnRhcmdldCkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmNvbnN0IGFkZENyZWF0ZU5ldyA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgbmV3Q2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0NhdC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1pdGVtJyk7XG4gIG5ld0NhdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3JztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhdCk7XG4gIG5ld0NhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDYXRlZ29yeU1vZGFsKTtcbn1cblxuY29uc3QgYWRkQ2F0ZWdvcmllcyA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKS5zb3J0KCk7XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCeUNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeURyb3Bkb3duID0gKCkgPT4ge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGFiJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xuICB0YWIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBhZGRDcmVhdGVOZXcoY29udGFpbmVyKTtcbiAgYWRkQ2F0ZWdvcmllcyhjb250YWluZXIpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGlmICghdGFiLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmNvbnN0IHJlbG9hZENhdGVnb3J5VGFiID0gKCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcbiAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGFkZENyZWF0ZU5ldyhjb250YWluZXIpO1xuICBhZGRDYXRlZ29yaWVzKGNvbnRhaW5lcik7XG59XG5cbmNvbnN0IHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCA9ICgpID0+IHtcbiAgbGV0IHNlbGVjdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpO1xuICBzZWxlY3RCb3gudGV4dENvbnRlbnQgPSAnJztcbiAgYWRkU2VsZWN0T3B0aW9ucyhzZWxlY3RCb3gsIGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zKCksICdHZW5lcmFsJyk7XG59XG5cblxuXG5leHBvcnQgeyBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsLCBzaG93Q2F0ZWdvcnlNb2RhbCwgcmVsb2FkQ2F0ZWdvcnlUYWIsIGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24sIHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCB9IiwiaW1wb3J0IHsgcmVsb2FkQ2F0ZWdvcnlUYWIsIHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCB9IGZyb20gJy4vY2F0ZWdvcnktdmlldydcblxuY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFsnR2VuZXJhbCddO1xuXG5jb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICByZXR1cm4gYWxsQ2F0ZWdvcmllc1xufVxuXG5jb25zdCBfc3RvcmVDYXRlZ29yeSA9IChjYXRlZ29yeU5hbWUpID0+IHtcbiAgbGV0IGNhdElkID0gZ2V0Q2F0ZWdvcmllcygpLmxlbmd0aCArIDFcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNhdGVnb3J5JHtjYXRJZH1gLCBjYXRlZ29yeU5hbWUpO1xufVxuXG5jb25zdCBfc3RvcmVkQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihcbiAgICBrZXkgPT4ga2V5WzBdLmluY2x1ZGVzKCdjYXRlZ29yeScpXG4gIClcbiAgcmV0dXJuIGNhdGVnb3JpZXNcbn1cblxuY29uc3QgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IF9zdG9yZWRDYXRlZ29yaWVzKCk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBhbGxDYXRlZ29yaWVzLnB1c2goY2F0ZWdvcmllc1tpXVsxXSk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnkgPSAodXNlcklucHV0KSA9PiB7XG4gIGlmIChhbGxDYXRlZ29yaWVzLmluY2x1ZGVzKHVzZXJJbnB1dCkpIHtcbiAgICAvLyBzaW1wbHkgZG9uJ3QgY3JlYXRlIGEgZG91YmxlXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKHVzZXJJbnB1dCk7XG4gICAgX3N0b3JlQ2F0ZWdvcnkodXNlcklucHV0KTtcbiAgICByZWxvYWRDYXRlZ29yeVRhYigpO1xuICAgIHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCgpO1xuICB9XG59XG5cbmNvbnN0IGlzTmV3Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgaWYgKGdldENhdGVnb3JpZXMoKS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59IFxuXG5leHBvcnQgeyBjcmVhdGVDYXRlZ29yeSwgZ2V0Q2F0ZWdvcmllcywgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzLCBpc05ld0NhdGVnb3J5IH1cbiIsImltcG9ydCB7IGdldENhdGVnb3JpZXMsIGNyZWF0ZUNhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL3RvZG8taXRlbSdcblxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWNvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBsZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICBsZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdBZGQgYW4gaXRlbSB0byB5b3VyIGxpc3QnO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIC8vIGFkZCB0aXRsZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ3RleHQnLCB7IHRleHRDb250ZW50OiAnVGl0bGUnLCBmb3I6ICd0aXRsZSd9KSk7XG4gIC8vIGFkZCBkZXNjcmlwdGlvbiBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ0Rlc2NyaXB0aW9uJywgZm9yOiAnZGVzY3JpcHRpb24nfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBkdWVEYXRlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgnZGF0ZScsIHsgdGV4dENvbnRlbnQ6ICdEdWUgRGF0ZScsIGZvcjogJ2R1ZURhdGUnfSkpO1xuICAvLyBhZGQgcHJpb3JpdHlMZXZlbCBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdQcmlvcml0eScsIGZvcjogJ3ByaW9yaXR5TGV2ZWwnfSwge1wiZ3JlZW5cIjogXCJMb3cgUHJpb3JpdHlcIiwgXCJ5ZWxsb3dcIjogXCJOb3JtYWwgUHJpb3JpdHlcIiwgXCJvcmFuZ2VcIjogXCJTb21ld2hhdCBQcmlvcml0eVwiLCBcInJlZFwiOiBcIkhpZ2ggUHJpb3JpdHlcIn0sIFwieWVsbG93XCIpKTtcbiAgLy8gYWRkIG5vdGVzIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnTm90ZXMnLCBmb3I6ICdub3Rlcyd9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcblxuICAvLyBhZGQgY2F0ZWdvcnkgcHJvcGVydHkgaW5wdXRcbiAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdDYXRlZ29yeScsIGZvcjogJ2NhdGVnb3J5J30sIGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zKCksICdHZW5lcmFsJylcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlDb250YWluZXIpO1xuXG4gIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbi1mb3JtLWFkZC1jYXRlZ29yeScpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gJ05ldyBDYXRlZ29yeSBOYW1lJztcbiAgaW5wdXQubmFtZSA9ICdjYXRlZ29yeSc7XG5cbiAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5Jyk7XG4gIGNhdGVnb3JpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09ICdDcmVhdGUgTmV3Jykge1xuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLWl0ZW0nKTtcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlSXRlbSk7XG59XG5cbmNvbnN0IF9hZGRMYWJlbCA9IChwYXJlbnQsIHByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBwcm9wZXJ0aWVzLnRleHRDb250ZW50O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3BlcnRpZXMuZm9yKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbn1cblxuY29uc3QgX2NyZWF0ZUlucHV0ID0gKGlucHV0VHlwZSwgaW5wdXRMYWJlbCwgaW5wdXRQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgaW5wdXRMYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgaW5wdXQubmFtZSA9IGlucHV0TGFiZWwuZm9yO1xuICBpZiAoaW5wdXRQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaW5wdXRQcm9wZXJ0aWVzKSkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IF9jcmVhdGVUZXh0QXJlYSA9IChhcmVhTGFiZWwsIGFyZWFQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgYXJlYUxhYmVsKTtcblxuICBsZXQgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGFyZWEubmFtZSA9IGFyZWFMYWJlbC5mb3I7XG4gIGlmIChhcmVhUHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFyZWFQcm9wZXJ0aWVzKSkge1xuICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcmVhKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBjYXRlZ29yaWVzU2VsZWN0T3B0aW9ucyA9IChzZWxlY3REZWZhdWx0KSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gZ2V0Q2F0ZWdvcmllcygpLnNvcnQoKTtcbiAgbGV0IHNlbGVjdE9wdGlvbnMgPSB7fTtcblxuICBzZWxlY3RPcHRpb25zWydDcmVhdGUgTmV3J10gPSBbJ0NyZWF0ZSBOZXcgLi4uJ107XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKyApIHtcbiAgICBzZWxlY3RPcHRpb25zW2NhdGVnb3JpZXNbaV1dID0gY2F0ZWdvcmllc1tpXTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RPcHRpb25zO1xufVxuXG5jb25zdCBhZGRTZWxlY3RPcHRpb25zID0gKHNlbGVjdCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBmb3IgKGNvbnN0IFt2YWx1ZSwgdGV4dENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlbGVjdE9wdGlvbnMpKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlmIChzZWxlY3REZWZhdWx0ICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0RGVmYXVsdCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cbn1cblxuLy8gYWRkIHNlbGVjdERlZmF1bHQgb3B0aW9uIHdpdGggbmFtZSBhdHRyIHRvIG1ha2Ugb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuY29uc3QgX2NyZWF0ZVNlbGVjdCA9IChzZWxlY3RMYWJlbCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIHNlbGVjdExhYmVsKTtcblxuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5uYW1lID0gc2VsZWN0TGFiZWwuZm9yO1xuICBzZWxlY3QuaWQgPSBzZWxlY3QubmFtZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG5cbiAgYWRkU2VsZWN0T3B0aW9ucyhzZWxlY3QsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cblxuXG5jb25zdCBkaXNwbGF5Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY3JlYXRlRm9ybSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtLCBkaXNwbGF5Rm9ybSwgYWRkU2VsZWN0T3B0aW9ucywgY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMgfSIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmNvbnN0IF9zZXRDb2xvckJ5UHJpb3JpdHkgPSAoZWxlbWVudCwgcHJpb3JpdHlMZXZlbCkgPT4ge1xuICBsZXQgcHJpb3JpdHlDb2xvcjtcblxuICBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ2dyZWVuJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnIzJBOUQ4RidcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAnb3JhbmdlJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0Y0QTI2MSdcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAncmVkJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0U3NkY1MSc7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTlDNDZBJztcbiAgfVxuICBcbiAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHByaW9yaXR5Q29sb3Jcbn1cblxuY29uc3QgX3VzZXJSZWFkYWJsZVByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gIGlmIChwcmlvcml0eSA9PT0gJ2dyZWVuJykge1xuICAgIHJldHVybiAnTG93J1xuICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAneWVsbG93Jykge1xuICAgIHJldHVybiAnTm9ybWFsJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnb3JhbmdlJykge1xuICAgIHJldHVybiAnTW9kZXJhdGUnXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdIaWdoJztcbiAgfVxufVxuXG5jb25zdCBfZGlzcGxheUV4cGFuZENvbnRyYWN0SWNvbiA9IChjb250YWluZXIsIGl0ZW0pID0+IHtcbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtY29udHJhY3QtaWNvbicpO1xuICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY29udHJhY3RlZCcpKSB7XG4gICAgaWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9hcnJvdy1leHBhbmQtZG93bi5wbmcnO1xuICAgIGljb24udGl0bGUgPSAnRXhwYW5kIFZpZXcnO1xuICB9IGVsc2Uge1xuICAgIGljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvYXJyb3ctZXhwYW5kLXVwLnBuZyc7XG4gICAgaWNvbi50aXRsZSA9ICdDb250cmFjdCBWaWV3JztcbiAgfVxuICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIF90b2dnbGVFeHBhbmRDb250cmFjdFZpZXcoY29udGFpbmVyLCBpdGVtKVxuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lckV4cGFuZGVkID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBsZXQgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWRlc2NyaXB0aW9uJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG5cbiAgbGV0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBub3Rlcy50ZXh0Q29udGVudCA9IGl0ZW0ubm90ZXM7XG4gIG5vdGVzLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1ub3RlcycpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobm90ZXMpO1xuXG4gIGxldCBwcmlvcml0eUxldmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBwcmlvcml0eUxldmVsLnRleHRDb250ZW50ID0gYFByaW9yaXR5OiAke191c2VyUmVhZGFibGVQcmlvcml0eShpdGVtLnByaW9yaXR5TGV2ZWwpfWA7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsKTtcbn1cblxuY29uc3QgX3RvZG9Db250YWluZXJDb250cmFjdGVkID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBsZXQgZGVsSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBkZWxJY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2RlbGV0ZS1mb3JldmVyLnBuZyc7XG4gIGRlbEljb24udGl0bGUgPSAnRGVsZXRlIEl0ZW0nO1xuICBkZWxJY29uLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZS1pY29uJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxJY29uKTtcblxuICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBpdGVtLmNhdGVnb3J5O1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnkpO1xuXG4gIGxldCBtYXJrQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgbWFya0NvbXBsZXRlLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlJztcbiAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1jb21wbGV0ZS1idG4nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hcmtDb21wbGV0ZSk7XG5cbiAgX2Rpc3BsYXlFeHBhbmRDb250cmFjdEljb24oY29udGFpbmVyLCBpdGVtKTtcbn1cblxuY29uc3QgX3RvZ2dsZUV4cGFuZENvbnRyYWN0VmlldyA9IChjb250YWluZXIsIGl0ZW0pID0+IHtcbiAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250cmFjdGVkJykpIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udHJhY3RlZCcpO1xuICAgIF90b2RvQ29udGFpbmVyQ29udHJhY3RlZChjb250YWluZXIsIGl0ZW0pO1xuICAgIF90b2RvQ29udGFpbmVyRXhwYW5kZWQoY29udGFpbmVyLCBpdGVtKTtcbiAgfSBlbHNlIHtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udHJhY3RlZCcpO1xuICAgIF90b2RvQ29udGFpbmVyQ29udHJhY3RlZChjb250YWluZXIsIGl0ZW0pO1xuICB9XG59XG5cbmNvbnN0IGRpc3BsYXlJdGVtcyA9IChpdGVtc0FycmF5KSA9PiB7XG4gIGl0ZW1zQXJyYXkuZm9yRWFjaChpdGVtID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1jb250YWluZXInKTtcbiAgICBfc2V0Q29sb3JCeVByaW9yaXR5KGNvbnRhaW5lciwgaXRlbS5wcmlvcml0eUxldmVsKTtcbiAgICBfdG9nZ2xlRXhwYW5kQ29udHJhY3RWaWV3KGNvbnRhaW5lciwgaXRlbSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9KVxufVxuXG5jb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGxldCBpdGVtcyA9IGdldEl0ZW1zKCk7XG4gIGRpc3BsYXlJdGVtcyhpdGVtcyk7XG59XG5cbmNvbnN0IGZpbHRlckJ5Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGl0ZW1zID0gZ2V0SXRlbXMoY2F0ZWdvcnkpO1xuICBkaXNwbGF5SXRlbXMoaXRlbXMpO1xuXG59XG5cbmV4cG9ydCB7IHNob3dBbGxUb2RvcywgZmlsdGVyQnlDYXRlZ29yeSB9IiwiaW1wb3J0IHsgY3JlYXRlQ2F0ZWdvcnksIGlzTmV3Q2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5J1xuXG5jb25zdCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgZ2V0SXRlbXMgPSAoY2F0ZWdvcnkpID0+IHtcbiAgaWYgKGNhdGVnb3J5ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdG9kb0l0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT09IGNhdGVnb3J5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdG9kb0l0ZW1zXG4gIH1cbn1cblxuY29uc3QgX3N0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBsZXQgaXRlbXMgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihcbiAgICBrZXkgPT4ga2V5WzBdLmluY2x1ZGVzKCd0b2RvSXRlbScpXG4gIClcbiAgcmV0dXJuIGl0ZW1zXG59XG5cbmNvbnN0IHBhcnNlU3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gX3N0b3JlZEl0ZW1zKCk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGl0ZW1zW2ldWzFdKTtcbiAgICB0b2RvSXRlbXMucHVzaChvYmopO1xuICB9XG59XG5cbmNvbnN0IHRvZG9JdGVtID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAgcHJvcGVydGllc1sndGl0bGUnXVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXNbJ2Rlc2NyaXB0aW9uJ107XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBwcm9wZXJ0aWVzWydwcmlvcml0eUxldmVsJ107XG4gIGNvbnN0IGR1ZURhdGUgPSBwcm9wZXJ0aWVzWydkdWVEYXRlJ107XG4gIGNvbnN0IGNhdGVnb3J5ID0gcHJvcGVydGllc1snY2F0ZWdvcnknXTtcbiAgY29uc3Qgbm90ZXMgPSBwcm9wZXJ0aWVzWydub3RlcyddO1xuXG4gIGNvbnN0IGlkID0gZ2V0SXRlbXMoKS5sZW5ndGggKyAxO1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7IFxuXG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eUxldmVsLCBkdWVEYXRlLCBjYXRlZ29yeSwgbm90ZXMsIGlkIH1cbn07XG5cbmNvbnN0IF9zdG9yZUl0ZW0gPSAodG9kb0l0ZW0pID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9JdGVtJHt0b2RvSXRlbS5pZH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtID0gKCkgPT4ge1xuICBsZXQgcHJvcGVydGllcyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAncHJpb3JpdHlMZXZlbCcsICdkdWVEYXRlJywgJ2NhdGVnb3J5JywgJ25vdGVzJ11cblxuICBsZXQgYXJncyA9IHt9XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgcHJvcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUocHJvcGVydGllc1tpXSlbMF0udmFsdWU7XG4gICAgaWYgKHByb3BWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAvLyBoYW5kbGUgd2hlbiBhIG5ldyBjYXRlZ29yeSBpcyBiZWluZyBzZXRcbiAgICAgIGlmIChwcm9wZXJ0aWVzW2ldID09PSAnY2F0ZWdvcnknKSB7XG4gICAgICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbi1mb3JtLWFkZC1jYXRlZ29yeSA+IGlucHV0JykudmFsdWVcbiAgICAgICAgaWYgKGlucHV0ICYmIGlzTmV3Q2F0ZWdvcnkoaW5wdXQpKSB7XG4gICAgICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IGlucHV0O1xuICAgICAgICAgIGNyZWF0ZUNhdGVnb3J5KGlucHV0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhcmdzW3Byb3BlcnRpZXNbaV1dID0gJ0dlbmVyYWwnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhcmdzW3Byb3BlcnRpZXNbaV1dID0gcHJvcFZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzW3Byb3BlcnRpZXNbaV1dID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsZXQgbmV3SXRlbSA9IHRvZG9JdGVtKGFyZ3MpO1xuICBcbiAgX3N0b3JlSXRlbShuZXdJdGVtKTtcbn1cblxuZXhwb3J0IHsgdG9kb0l0ZW0sIGNyZWF0ZUl0ZW0sIGdldEl0ZW1zLCBwYXJzZVN0b3JlZEl0ZW1zIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSAnLi90b2RvLWl0ZW0tZm9ybSdcbmltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfSBmcm9tICcuL2NhdGVnb3J5LXZpZXcnXG5pbXBvcnQgeyByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IHsgcGFyc2VTdG9yZWRJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtJ1xuaW1wb3J0IHsgc2hvd0FsbFRvZG9zIH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjYXRlZ29yeVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tY29udGVudCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfSApXG5cbiAgY29uc3Qgb3ZlcnZpZXdUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcnZpZXctdGFiJyk7XG4gIG92ZXJ2aWV3VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbFRvZG9zKTtcblxuICBjb25zdCB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdG9kb0l0ZW0tZm9ybScpO1xuICB0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcbn07XG5cbnBhcnNlU3RvcmVkSXRlbXMoKTtcbnJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcygpO1xuY3JlYXRlQ2F0ZWdvcnlEcm9wZG93bigpO1xuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnNob3dBbGxUb2RvcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9