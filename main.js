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



// can pass object to set form fields to specific values.
const createForm = (optionalDefaults = {}) => {
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
  let defaultCategory = 'General';
  if (optionalDefaults['category']) {
    defaultCategory = optionalDefaults['category'];
  }
  const categoryContainer = _createSelect({ textContent: 'Category', for: 'category'}, categoriesSelectOptions(), defaultCategory)
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
/* harmony import */ var _todo_item_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item-form */ "./src/todo-item-form.js");



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

const createListHeader = (container, category) => {
  const header = document.createElement('header');
  const text = document.createElement('h2');
  text.textContent = category;
  header.appendChild(text);
  const btn = document.createElement('img');
  btn.src = '../src/assets/note-plus-outline.png';
  btn.title = `Add item to ${category}`;
  btn.addEventListener('click', () => {
    (0,_todo_item_form__WEBPACK_IMPORTED_MODULE_1__.createForm)( { category: category });
  })
  header.appendChild(btn);
  container.appendChild(header);
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
  createListHeader(content, category)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixrQkFBa0I7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxrQ0FBa0MsWUFBWTtBQUM5Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix3REFBYTtBQUNsQztBQUNBLFVBQVUseURBQWM7QUFDeEIsVUFBVTtBQUNWO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDekVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ1U7QUFDSDtBQUNQO0FBQ0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLHdDQUF3Qyx5REFBWTs7QUFFcEQ7QUFDQSx3Q0FBd0Msd0RBQVc7QUFDbkQ7O0FBRUEsNERBQWdCO0FBQ2hCLG1FQUF3QjtBQUN4QixzRUFBc0I7QUFDdEI7QUFDQSw2REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2F0ZWdvcnktdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRDYXRlZ29yaWVzLCBjcmVhdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBmaWx0ZXJCeUNhdGVnb3J5IH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcbmltcG9ydCB7IGFkZFNlbGVjdE9wdGlvbnMsIGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zIH0gZnJvbSAnLi90b2RvLWl0ZW0tZm9ybSdcblxuY29uc3QgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgQ2F0ZWdvcnknO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVDYXRlZ29yeShpbnB1dC52YWx1ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH0pO1xufVxuXG5jb25zdCBzaG93Q2F0ZWdvcnlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbmV3Q2F0ZWdvcnlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgaWYgKG5ld0NhdGVnb3J5TW9kYWwgPT09IG51bGwpIHtcbiAgICBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsKCk7XG4gIH1cblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwgaW5wdXQnKS5mb2N1cygpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBtb2RhbCAhPSBldmVudC50YXJnZXQpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5jb25zdCBhZGRDcmVhdGVOZXcgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IG5ld0NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDYXQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24taXRlbScpO1xuICBuZXdDYXQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIE5ldyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXQpO1xuICBuZXdDYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q2F0ZWdvcnlNb2RhbCk7XG59XG5cbmNvbnN0IGFkZENhdGVnb3JpZXMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBnZXRDYXRlZ29yaWVzKCkuc29ydCgpO1xuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnlDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biA9ICgpID0+IHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgdGFiLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgYWRkQ3JlYXRlTmV3KGNvbnRhaW5lcik7XG4gIGFkZENhdGVnb3JpZXMoY29udGFpbmVyKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBpZiAoIXRhYi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldICE9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5jb25zdCByZWxvYWRDYXRlZ29yeVRhYiA9ICgpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50Jyk7XG4gIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBhZGRDcmVhdGVOZXcoY29udGFpbmVyKTtcbiAgYWRkQ2F0ZWdvcmllcyhjb250YWluZXIpO1xufVxuXG5jb25zdCByZWxvYWRDYXRlZ29yeVRvZG9TZWxlY3QgPSAoKSA9PiB7XG4gIGxldCBzZWxlY3RCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKTtcbiAgc2VsZWN0Qm94LnRleHRDb250ZW50ID0gJyc7XG4gIGFkZFNlbGVjdE9wdGlvbnMoc2VsZWN0Qm94LCBjYXRlZ29yaWVzU2VsZWN0T3B0aW9ucygpLCAnR2VuZXJhbCcpO1xufVxuXG5cblxuZXhwb3J0IHsgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCwgc2hvd0NhdGVnb3J5TW9kYWwsIHJlbG9hZENhdGVnb3J5VGFiLCBjcmVhdGVDYXRlZ29yeURyb3Bkb3duLCByZWxvYWRDYXRlZ29yeVRvZG9TZWxlY3QgfSIsImltcG9ydCB7IHJlbG9hZENhdGVnb3J5VGFiLCByZWxvYWRDYXRlZ29yeVRvZG9TZWxlY3QgfSBmcm9tICcuL2NhdGVnb3J5LXZpZXcnXG5cbmNvbnN0IGFsbENhdGVnb3JpZXMgPSBbJ0dlbmVyYWwnXTtcblxuY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgcmV0dXJuIGFsbENhdGVnb3JpZXNcbn1cblxuY29uc3QgX3N0b3JlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlOYW1lKSA9PiB7XG4gIGxldCBjYXRJZCA9IGdldENhdGVnb3JpZXMoKS5sZW5ndGggKyAxXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjYXRlZ29yeSR7Y2F0SWR9YCwgY2F0ZWdvcnlOYW1lKTtcbn1cblxuY29uc3QgX3N0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygnY2F0ZWdvcnknKVxuICApXG4gIHJldHVybiBjYXRlZ29yaWVzXG59XG5cbmNvbnN0IHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBfc3RvcmVkQ2F0ZWdvcmllcygpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKGNhdGVnb3JpZXNbaV1bMV0pO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gKHVzZXJJbnB1dCkgPT4ge1xuICBpZiAoYWxsQ2F0ZWdvcmllcy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgLy8gc2ltcGx5IGRvbid0IGNyZWF0ZSBhIGRvdWJsZVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaCh1c2VySW5wdXQpO1xuICAgIF9zdG9yZUNhdGVnb3J5KHVzZXJJbnB1dCk7XG4gICAgcmVsb2FkQ2F0ZWdvcnlUYWIoKTtcbiAgICByZWxvYWRDYXRlZ29yeVRvZG9TZWxlY3QoKTtcbiAgfVxufVxuXG5jb25zdCBpc05ld0NhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGlmIChnZXRDYXRlZ29yaWVzKCkuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufSBcblxuZXhwb3J0IHsgY3JlYXRlQ2F0ZWdvcnksIGdldENhdGVnb3JpZXMsIHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcywgaXNOZXdDYXRlZ29yeSB9XG4iLCJpbXBvcnQgeyBnZXRDYXRlZ29yaWVzLCBjcmVhdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbi8vIGNhbiBwYXNzIG9iamVjdCB0byBzZXQgZm9ybSBmaWVsZHMgdG8gc3BlY2lmaWMgdmFsdWVzLlxuY29uc3QgY3JlYXRlRm9ybSA9IChvcHRpb25hbERlZmF1bHRzID0ge30pID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWNvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBsZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICBsZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdBZGQgYW4gaXRlbSB0byB5b3VyIGxpc3QnO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIC8vIGFkZCB0aXRsZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ3RleHQnLCB7IHRleHRDb250ZW50OiAnVGl0bGUnLCBmb3I6ICd0aXRsZSd9KSk7XG4gIC8vIGFkZCBkZXNjcmlwdGlvbiBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ0Rlc2NyaXB0aW9uJywgZm9yOiAnZGVzY3JpcHRpb24nfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBkdWVEYXRlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgnZGF0ZScsIHsgdGV4dENvbnRlbnQ6ICdEdWUgRGF0ZScsIGZvcjogJ2R1ZURhdGUnfSkpO1xuICAvLyBhZGQgcHJpb3JpdHlMZXZlbCBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdQcmlvcml0eScsIGZvcjogJ3ByaW9yaXR5TGV2ZWwnfSwge1wiZ3JlZW5cIjogXCJMb3cgUHJpb3JpdHlcIiwgXCJ5ZWxsb3dcIjogXCJOb3JtYWwgUHJpb3JpdHlcIiwgXCJvcmFuZ2VcIjogXCJTb21ld2hhdCBQcmlvcml0eVwiLCBcInJlZFwiOiBcIkhpZ2ggUHJpb3JpdHlcIn0sIFwieWVsbG93XCIpKTtcbiAgLy8gYWRkIG5vdGVzIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnTm90ZXMnLCBmb3I6ICdub3Rlcyd9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcblxuICAvLyBhZGQgY2F0ZWdvcnkgcHJvcGVydHkgaW5wdXRcbiAgbGV0IGRlZmF1bHRDYXRlZ29yeSA9ICdHZW5lcmFsJztcbiAgaWYgKG9wdGlvbmFsRGVmYXVsdHNbJ2NhdGVnb3J5J10pIHtcbiAgICBkZWZhdWx0Q2F0ZWdvcnkgPSBvcHRpb25hbERlZmF1bHRzWydjYXRlZ29yeSddO1xuICB9XG4gIGNvbnN0IGNhdGVnb3J5Q29udGFpbmVyID0gX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnQ2F0ZWdvcnknLCBmb3I6ICdjYXRlZ29yeSd9LCBjYXRlZ29yaWVzU2VsZWN0T3B0aW9ucygpLCBkZWZhdWx0Q2F0ZWdvcnkpXG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGNhdGVnb3J5Q29udGFpbmVyKTtcblxuICBsZXQgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW4tZm9ybS1hZGQtY2F0ZWdvcnknKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5wbGFjZWhvbGRlciA9ICdOZXcgQ2F0ZWdvcnkgTmFtZSc7XG4gIGlucHV0Lm5hbWUgPSAnY2F0ZWdvcnknO1xuXG4gIGlucHV0Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBjYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dENvbnRhaW5lcik7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpO1xuICBjYXRlZ29yaWVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSAnQ3JlYXRlIE5ldycpIHtcbiAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnc2hvdycpKSB7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC1pdGVtJyk7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUl0ZW0pO1xufVxuXG5jb25zdCBfYWRkTGFiZWwgPSAocGFyZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcGVydGllcy50ZXh0Q29udGVudDtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wZXJ0aWVzLmZvcik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG59XG5cbmNvbnN0IF9jcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0TGFiZWwsIGlucHV0UHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGlucHV0TGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gIGlucHV0Lm5hbWUgPSBpbnB1dExhYmVsLmZvcjtcbiAgaWYgKGlucHV0UHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGlucHV0UHJvcGVydGllcykpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBfY3JlYXRlVGV4dEFyZWEgPSAoYXJlYUxhYmVsLCBhcmVhUHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGFyZWFMYWJlbCk7XG5cbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBhcmVhLm5hbWUgPSBhcmVhTGFiZWwuZm9yO1xuICBpZiAoYXJlYVByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhcmVhUHJvcGVydGllcykpIHtcbiAgICAgIGFyZWEuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJlYSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMgPSAoc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKS5zb3J0KCk7XG4gIGxldCBzZWxlY3RPcHRpb25zID0ge307XG5cbiAgc2VsZWN0T3B0aW9uc1snQ3JlYXRlIE5ldyddID0gWydDcmVhdGUgTmV3IC4uLiddO1xuXG4gIGZvciAobGV0IGk9MDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgc2VsZWN0T3B0aW9uc1tjYXRlZ29yaWVzW2ldXSA9IGNhdGVnb3JpZXNbaV07XG4gIH1cblxuICByZXR1cm4gc2VsZWN0T3B0aW9ucztcbn1cblxuY29uc3QgYWRkU2VsZWN0T3B0aW9ucyA9IChzZWxlY3QsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpID0+IHtcbiAgZm9yIChjb25zdCBbdmFsdWUsIHRleHRDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhzZWxlY3RPcHRpb25zKSkge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBpZiAoc2VsZWN0RGVmYXVsdCAmJiBvcHRpb24udmFsdWUgPT09IHNlbGVjdERlZmF1bHQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG59XG5cbi8vIGFkZCBzZWxlY3REZWZhdWx0IG9wdGlvbiB3aXRoIG5hbWUgYXR0ciB0byBtYWtlIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbmNvbnN0IF9jcmVhdGVTZWxlY3QgPSAoc2VsZWN0TGFiZWwsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBzZWxlY3RMYWJlbCk7XG5cbiAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QubmFtZSA9IHNlbGVjdExhYmVsLmZvcjtcbiAgc2VsZWN0LmlkID0gc2VsZWN0Lm5hbWU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXG4gIGFkZFNlbGVjdE9wdGlvbnMoc2VsZWN0LCBzZWxlY3RPcHRpb25zLCBzZWxlY3REZWZhdWx0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBkaXNwbGF5Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY3JlYXRlRm9ybSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtLCBkaXNwbGF5Rm9ybSwgYWRkU2VsZWN0T3B0aW9ucywgY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMgfSIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5pbXBvcnQgeyBjcmVhdGVGb3JtIH0gZnJvbSAnLi90b2RvLWl0ZW0tZm9ybSdcblxuY29uc3QgX3NldENvbG9yQnlQcmlvcml0eSA9IChlbGVtZW50LCBwcmlvcml0eUxldmVsKSA9PiB7XG4gIGxldCBwcmlvcml0eUNvbG9yO1xuXG4gIGlmIChwcmlvcml0eUxldmVsID09PSAnZ3JlZW4nKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjMkE5RDhGJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdvcmFuZ2UnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRjRBMjYxJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdyZWQnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTc2RjUxJztcbiAgfSBlbHNlIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNFOUM0NkEnO1xuICB9XG4gIFxuICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gcHJpb3JpdHlDb2xvclxufVxuXG5jb25zdCBfdXNlclJlYWRhYmxlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgaWYgKHByaW9yaXR5ID09PSAnZ3JlZW4nKSB7XG4gICAgcmV0dXJuICdMb3cnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICd5ZWxsb3cnKSB7XG4gICAgcmV0dXJuICdOb3JtYWwnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdvcmFuZ2UnKSB7XG4gICAgcmV0dXJuICdNb2RlcmF0ZSdcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ0hpZ2gnO1xuICB9XG59XG5cbmNvbnN0IF9kaXNwbGF5RXhwYW5kQ29udHJhY3RJY29uID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1jb250cmFjdC1pY29uJyk7XG4gIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250cmFjdGVkJykpIHtcbiAgICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2Fycm93LWV4cGFuZC1kb3duLnBuZyc7XG4gICAgaWNvbi50aXRsZSA9ICdFeHBhbmQgVmlldyc7XG4gIH0gZWxzZSB7XG4gICAgaWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9hcnJvdy1leHBhbmQtdXAucG5nJztcbiAgICBpY29uLnRpdGxlID0gJ0NvbnRyYWN0IFZpZXcnO1xuICB9XG4gIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pXG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5cbmNvbnN0IF90b2RvQ29udGFpbmVyRXhwYW5kZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBsZXQgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVzLnRleHRDb250ZW50ID0gaXRlbS5ub3RlcztcbiAgbm90ZXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLW5vdGVzJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgbGV0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7X3VzZXJSZWFkYWJsZVByaW9yaXR5KGl0ZW0ucHJpb3JpdHlMZXZlbCl9YDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWwpO1xufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lckNvbnRyYWN0ZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGxldCBkZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbEljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvZGVsZXRlLWZvcmV2ZXIucG5nJztcbiAgZGVsSWNvbi50aXRsZSA9ICdEZWxldGUgSXRlbSc7XG4gIGRlbEljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEljb24pO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG5cbiAgbGV0IG1hcmtDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtYXJrQ29tcGxldGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWNvbXBsZXRlLWJ0bicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFya0NvbXBsZXRlKTtcblxuICBfZGlzcGxheUV4cGFuZENvbnRyYWN0SWNvbihjb250YWluZXIsIGl0ZW0pO1xufVxuXG5jb25zdCBfdG9nZ2xlRXhwYW5kQ29udHJhY3RWaWV3ID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRyYWN0ZWQnKSkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG4gICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gICAgX3RvZG9Db250YWluZXJFeHBhbmRlZChjb250YWluZXIsIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG4gICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gIH1cbn1cblxuY29uc3QgZGlzcGxheUl0ZW1zID0gKGl0ZW1zQXJyYXkpID0+IHtcbiAgaXRlbXNBcnJheS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWNvbnRhaW5lcicpO1xuICAgIF9zZXRDb2xvckJ5UHJpb3JpdHkoY29udGFpbmVyLCBpdGVtLnByaW9yaXR5TGV2ZWwpO1xuICAgIF90b2dnbGVFeHBhbmRDb250cmFjdFZpZXcoY29udGFpbmVyLCBpdGVtKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH0pXG59XG5cbmNvbnN0IGNyZWF0ZUxpc3RIZWFkZXIgPSAoY29udGFpbmVyLCBjYXRlZ29yeSkgPT4ge1xuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgY29uc3QgdGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHRleHQudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKHRleHQpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgYnRuLnNyYyA9ICcuLi9zcmMvYXNzZXRzL25vdGUtcGx1cy1vdXRsaW5lLnBuZyc7XG4gIGJ0bi50aXRsZSA9IGBBZGQgaXRlbSB0byAke2NhdGVnb3J5fWA7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVGb3JtKCB7IGNhdGVnb3J5OiBjYXRlZ29yeSB9KTtcbiAgfSlcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGJ0bik7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5jb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGxldCBpdGVtcyA9IGdldEl0ZW1zKCk7XG4gIGRpc3BsYXlJdGVtcyhpdGVtcyk7XG59XG5cbmNvbnN0IGZpbHRlckJ5Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGl0ZW1zID0gZ2V0SXRlbXMoY2F0ZWdvcnkpO1xuICBjcmVhdGVMaXN0SGVhZGVyKGNvbnRlbnQsIGNhdGVnb3J5KVxuICBkaXNwbGF5SXRlbXMoaXRlbXMpO1xufVxuXG5leHBvcnQgeyBzaG93QWxsVG9kb3MsIGZpbHRlckJ5Q2F0ZWdvcnkgfSIsImltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5LCBpc05ld0NhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcblxuY29uc3QgdG9kb0l0ZW1zID0gW107XG5cbmNvbnN0IGdldEl0ZW1zID0gKGNhdGVnb3J5KSA9PiB7XG4gIGlmIChjYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRvZG9JdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRvZG9JdGVtc1xuICB9XG59XG5cbmNvbnN0IF9zdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgbGV0IGl0ZW1zID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygndG9kb0l0ZW0nKVxuICApXG4gIHJldHVybiBpdGVtc1xufVxuXG5jb25zdCBwYXJzZVN0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IF9zdG9yZWRJdGVtcygpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShpdGVtc1tpXVsxXSk7XG4gICAgdG9kb0l0ZW1zLnB1c2gob2JqKTtcbiAgfVxufVxuXG5jb25zdCB0b2RvSXRlbSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gIHByb3BlcnRpZXNbJ3RpdGxlJ11cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzWydkZXNjcmlwdGlvbiddO1xuICBjb25zdCBwcmlvcml0eUxldmVsID0gcHJvcGVydGllc1sncHJpb3JpdHlMZXZlbCddO1xuICBjb25zdCBkdWVEYXRlID0gcHJvcGVydGllc1snZHVlRGF0ZSddO1xuICBjb25zdCBjYXRlZ29yeSA9IHByb3BlcnRpZXNbJ2NhdGVnb3J5J107XG4gIGNvbnN0IG5vdGVzID0gcHJvcGVydGllc1snbm90ZXMnXTtcblxuICBjb25zdCBpZCA9IGdldEl0ZW1zKCkubGVuZ3RoICsgMTtcbiAgY29uc3QgaXNDb21wbGV0ZSA9IGZhbHNlOyBcblxuICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHlMZXZlbCwgZHVlRGF0ZSwgY2F0ZWdvcnksIG5vdGVzLCBpZCB9XG59O1xuXG5jb25zdCBfc3RvcmVJdGVtID0gKHRvZG9JdGVtKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvSXRlbSR7dG9kb0l0ZW0uaWR9YCwgSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW0pKTtcbn1cblxuY29uc3QgY3JlYXRlSXRlbSA9ICgpID0+IHtcbiAgbGV0IHByb3BlcnRpZXMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ3ByaW9yaXR5TGV2ZWwnLCAnZHVlRGF0ZScsICdjYXRlZ29yeScsICdub3RlcyddXG5cbiAgbGV0IGFyZ3MgPSB7fVxuXG4gIGZvciAobGV0IGk9MDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IHByb3BWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHByb3BlcnRpZXNbaV0pWzBdLnZhbHVlO1xuICAgIGlmIChwcm9wVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgLy8gaGFuZGxlIHdoZW4gYSBuZXcgY2F0ZWdvcnkgaXMgYmVpbmcgc2V0XG4gICAgICBpZiAocHJvcGVydGllc1tpXSA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW4tZm9ybS1hZGQtY2F0ZWdvcnkgPiBpbnB1dCcpLnZhbHVlXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc05ld0NhdGVnb3J5KGlucHV0KSkge1xuICAgICAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBpbnB1dDtcbiAgICAgICAgICBjcmVhdGVDYXRlZ29yeShpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9ICdHZW5lcmFsJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IHByb3BWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShhcmdzKTtcbiAgXG4gIF9zdG9yZUl0ZW0obmV3SXRlbSk7XG59XG5cbmV4cG9ydCB7IHRvZG9JdGVtLCBjcmVhdGVJdGVtLCBnZXRJdGVtcywgcGFyc2VTdG9yZWRJdGVtcyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gJy4vdG9kby1pdGVtLWZvcm0nXG5pbXBvcnQgeyBjcmVhdGVDYXRlZ29yeURyb3Bkb3duIH0gZnJvbSAnLi9jYXRlZ29yeS12aWV3J1xuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IHBhcnNlU3RvcmVkSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSdcbmltcG9ydCB7IHNob3dBbGxUb2RvcyB9IGZyb20gJy4vdG9kby1pdGVtLXZpZXcnXG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY2F0ZWdvcnlUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH0gKVxuXG4gIGNvbnN0IG92ZXJ2aWV3VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ2aWV3LXRhYicpO1xuICBvdmVydmlld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGxUb2Rvcyk7XG5cbiAgY29uc3QgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRvZG9JdGVtLWZvcm0nKTtcbiAgdG9kb0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Rm9ybSk7XG59O1xuXG5wYXJzZVN0b3JlZEl0ZW1zKCk7XG5yZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMoKTtcbmNyZWF0ZUNhdGVnb3J5RHJvcGRvd24oKTtcbnNldEV2ZW50TGlzdGVuZXJzKCk7XG5zaG93QWxsVG9kb3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==