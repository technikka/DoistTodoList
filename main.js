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
/* harmony export */   "createNewCategoryModal": () => (/* binding */ createNewCategoryModal),
/* harmony export */   "showCategoryModal": () => (/* binding */ showCategoryModal)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");


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
  btn.addEventListener('click', _category__WEBPACK_IMPORTED_MODULE_0__.createCategory);
}

const showCategoryModal = () => {
  createNewCategoryModal();

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
/* harmony export */   "retrieveStoredCategories": () => (/* binding */ retrieveStoredCategories)
/* harmony export */ });
const allCategories = [];

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

const createCategory = () => {
  let userInput = document.getElementsByName('new-category')[0].value;

  if (allCategories.includes(userInput)) {
    console.log('will alert user');
  } else {
    allCategories.push(userInput);
    _storeCategory(userInput);
  }

  document.querySelector('.new-category-modal').classList.remove('show');
  document.querySelector('#backdrop').classList.remove('show');
}




/***/ }),

/***/ "./src/header-view.js":
/*!****************************!*\
  !*** ./src/header-view.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCategoryDropdown": () => (/* binding */ createCategoryDropdown)
/* harmony export */ });
/* harmony import */ var _category_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-view */ "./src/category-view.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _todo_item_view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo-item-view */ "./src/todo-item-view.js");




const createCategoryDropdown = () => {
  const tab = document.querySelector('.category-tab');
  const container = document.createElement('div');
  container.classList.add('dropdown-content');
  
  tab.appendChild(container);

  const newCat = document.createElement('div');
  newCat.classList.add('dropdown-item');
  newCat.textContent = 'Create New';
  container.appendChild(newCat);
  newCat.addEventListener('click', _category_view__WEBPACK_IMPORTED_MODULE_0__.showCategoryModal);

  const categories = (0,_category__WEBPACK_IMPORTED_MODULE_1__.getCategories)();

  for (const category of categories) {
    const newDiv = document.createElement('div');
    newDiv.classList.add('dropdown-item');
    newDiv.textContent = category;
    container.appendChild(newDiv);
    newDiv.addEventListener('click', () => {
      (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_2__.filterByCategory)(category);
    });
  }

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




/***/ }),

/***/ "./src/todo-item-form.js":
/*!*******************************!*\
  !*** ./src/todo-item-form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
  fieldset.appendChild(_createSelect({ textContent: 'Category', for: 'category'}, _categoriesSelectOptions(), "default"));

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

const _categoriesSelectOptions = () => {
  let categories = (0,_category__WEBPACK_IMPORTED_MODULE_0__.getCategories)();
  let selectOptions = {};

  for (let i=0; i < categories.length; i++ ) {
    selectOptions[categories[i]] = categories[i];
  }

  return selectOptions;
}

// add selectDefault option with name attr to make option.selected = true
const _createSelect = (selectLabel, selectOptions, selectDefault) => {
  let container = document.createElement('div');
  _addLabel(container, selectLabel);

  let select = document.createElement('select');
  select.name = selectLabel.for;
  select.id = select.name;
  container.appendChild(select);

  for (const [value, textContent] of Object.entries(selectOptions)) {
    let option = document.createElement('option');
    option.value = value;
    option.textContent = textContent;
    if (selectDefault && option.value === selectDefault) {
      option.selected = true;
    }
    select.appendChild(option);
  }

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
      args[properties[i]] = propValue;
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
/* harmony import */ var _header_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-view */ "./src/header-view.js");
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
(0,_header_view__WEBPACK_IMPORTED_MODULE_1__.createCategoryDropdown)();
setEventListeners();
(0,_todo_item_view__WEBPACK_IMPORTED_MODULE_4__.showAllTodos)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTJDOztBQUUzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLHFEQUFjO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLDBCQUEwQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQ0FBa0MsTUFBTTtBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVrRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkNkO0FBQ1Y7QUFDUzs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLDZEQUFpQjs7QUFFcEQscUJBQXFCLHdEQUFhOztBQUVsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLGlFQUFnQjtBQUN0QixLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLDBCQUEwQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWlDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ1M7QUFDRjs7QUFFeEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhDQUE4QyxtQ0FBbUM7QUFDakY7QUFDQSx5Q0FBeUMsK0NBQStDLElBQUksMEJBQTBCO0FBQ3RIO0FBQ0EsOENBQThDLHdDQUF3QztBQUN0RjtBQUNBLHVDQUF1Qyw4Q0FBOEMsR0FBRyw0R0FBNEc7QUFDcE07QUFDQSx5Q0FBeUMsbUNBQW1DLElBQUksMEJBQTBCO0FBQzFHO0FBQ0EsdUNBQXVDLHlDQUF5Qzs7QUFFaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0Msa0RBQVU7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLHdEQUFhO0FBQ2hDOztBQUVBLGdCQUFnQix1QkFBdUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RIc0M7O0FBRXRDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkNBQTJDLDBDQUEwQztBQUNyRjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLG9EQUFRO0FBQ3RCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyxvREFBUTtBQUN0Qjs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVIQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztVQzdEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ044QztBQUNRO0FBQ0Q7QUFDUDtBQUNDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSx3Q0FBd0MseURBQVk7O0FBRXBEO0FBQ0Esd0NBQXdDLHdEQUFXO0FBQ25EOztBQUVBLDREQUFnQjtBQUNoQixtRUFBd0I7QUFDeEIsb0VBQXNCO0FBQ3RCO0FBQ0EsNkRBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hlYWRlci12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5cbmNvbnN0IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCduZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IENhdGVnb3J5JztcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdjcmVhdGUnO1xuICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVDYXRlZ29yeSk7XG59XG5cbmNvbnN0IHNob3dDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsKCk7XG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsIGlucHV0JykuZm9jdXMoKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZHJvcGRvd25JdGVtc1tpXSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1vZGFsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgbW9kYWwgIT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU9uQ2xpY2tBd2F5KTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwsIHNob3dDYXRlZ29yeU1vZGFsIH0iLCJjb25zdCBhbGxDYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIHJldHVybiBhbGxDYXRlZ29yaWVzXG59XG5cbmNvbnN0IF9zdG9yZUNhdGVnb3J5ID0gKGNhdGVnb3J5TmFtZSkgPT4ge1xuICBsZXQgY2F0SWQgPSBnZXRDYXRlZ29yaWVzKCkubGVuZ3RoICsgMVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2F0ZWdvcnkke2NhdElkfWAsIGNhdGVnb3J5TmFtZSk7XG59XG5cbmNvbnN0IF9zdG9yZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ2NhdGVnb3J5JylcbiAgKVxuICByZXR1cm4gY2F0ZWdvcmllc1xufVxuXG5jb25zdCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gX3N0b3JlZENhdGVnb3JpZXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaChjYXRlZ29yaWVzW2ldWzFdKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcbiAgbGV0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCduZXctY2F0ZWdvcnknKVswXS52YWx1ZTtcblxuICBpZiAoYWxsQ2F0ZWdvcmllcy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgY29uc29sZS5sb2coJ3dpbGwgYWxlcnQgdXNlcicpO1xuICB9IGVsc2Uge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaCh1c2VySW5wdXQpO1xuICAgIF9zdG9yZUNhdGVnb3J5KHVzZXJJbnB1dCk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5LCBnZXRDYXRlZ29yaWVzLCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfVxuIiwiaW1wb3J0IHsgc2hvd0NhdGVnb3J5TW9kYWwgfSBmcm9tICcuL2NhdGVnb3J5LXZpZXcnO1xuaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBmaWx0ZXJCeUNhdGVnb3J5IH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biA9ICgpID0+IHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgXG4gIHRhYi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IG5ld0NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDYXQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24taXRlbScpO1xuICBuZXdDYXQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIE5ldyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXQpO1xuICBuZXdDYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q2F0ZWdvcnlNb2RhbCk7XG5cbiAgY29uc3QgY2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKTtcblxuICBmb3IgKGNvbnN0IGNhdGVnb3J5IG9mIGNhdGVnb3JpZXMpIHtcbiAgICBjb25zdCBuZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdEaXYuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24taXRlbScpO1xuICAgIG5ld0Rpdi50ZXh0Q29udGVudCA9IGNhdGVnb3J5O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdEaXYpO1xuICAgIG5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGZpbHRlckJ5Q2F0ZWdvcnkoY2F0ZWdvcnkpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY2xvc2VPbkNsaWNrQXdheSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgaWYgKCF0YWIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZHJvcGRvd25JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZHJvcGRvd25JdGVtc1tpXSAhPT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU9uQ2xpY2tBd2F5KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biB9XG4iLCJpbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL3RvZG8taXRlbSdcblxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWNvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBsZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICBsZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdBZGQgYW4gaXRlbSB0byB5b3VyIGxpc3QnO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIC8vIGFkZCB0aXRsZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ3RleHQnLCB7IHRleHRDb250ZW50OiAnVGl0bGUnLCBmb3I6ICd0aXRsZSd9KSk7XG4gIC8vIGFkZCBkZXNjcmlwdGlvbiBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ0Rlc2NyaXB0aW9uJywgZm9yOiAnZGVzY3JpcHRpb24nfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBkdWVEYXRlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgnZGF0ZScsIHsgdGV4dENvbnRlbnQ6ICdEdWUgRGF0ZScsIGZvcjogJ2R1ZURhdGUnfSkpO1xuICAvLyBhZGQgcHJpb3JpdHlMZXZlbCBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdQcmlvcml0eScsIGZvcjogJ3ByaW9yaXR5TGV2ZWwnfSwge1wiZ3JlZW5cIjogXCJMb3cgUHJpb3JpdHlcIiwgXCJ5ZWxsb3dcIjogXCJOb3JtYWwgUHJpb3JpdHlcIiwgXCJvcmFuZ2VcIjogXCJTb21ld2hhdCBQcmlvcml0eVwiLCBcInJlZFwiOiBcIkhpZ2ggUHJpb3JpdHlcIn0sIFwieWVsbG93XCIpKTtcbiAgLy8gYWRkIG5vdGVzIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnTm90ZXMnLCBmb3I6ICdub3Rlcyd9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcbiAgLy8gYWRkIGNhdGVnb3J5IHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVTZWxlY3QoeyB0ZXh0Q29udGVudDogJ0NhdGVnb3J5JywgZm9yOiAnY2F0ZWdvcnknfSwgX2NhdGVnb3JpZXNTZWxlY3RPcHRpb25zKCksIFwiZGVmYXVsdFwiKSk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC1pdGVtJyk7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUl0ZW0pO1xufVxuXG5jb25zdCBfYWRkTGFiZWwgPSAocGFyZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcGVydGllcy50ZXh0Q29udGVudDtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wZXJ0aWVzLmZvcik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG59XG5cbmNvbnN0IF9jcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0TGFiZWwsIGlucHV0UHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGlucHV0TGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gIGlucHV0Lm5hbWUgPSBpbnB1dExhYmVsLmZvcjtcbiAgaWYgKGlucHV0UHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGlucHV0UHJvcGVydGllcykpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBfY3JlYXRlVGV4dEFyZWEgPSAoYXJlYUxhYmVsLCBhcmVhUHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGFyZWFMYWJlbCk7XG5cbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBhcmVhLm5hbWUgPSBhcmVhTGFiZWwuZm9yO1xuICBpZiAoYXJlYVByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhcmVhUHJvcGVydGllcykpIHtcbiAgICAgIGFyZWEuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJlYSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgX2NhdGVnb3JpZXNTZWxlY3RPcHRpb25zID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKTtcbiAgbGV0IHNlbGVjdE9wdGlvbnMgPSB7fTtcblxuICBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrICkge1xuICAgIHNlbGVjdE9wdGlvbnNbY2F0ZWdvcmllc1tpXV0gPSBjYXRlZ29yaWVzW2ldO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdE9wdGlvbnM7XG59XG5cbi8vIGFkZCBzZWxlY3REZWZhdWx0IG9wdGlvbiB3aXRoIG5hbWUgYXR0ciB0byBtYWtlIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbmNvbnN0IF9jcmVhdGVTZWxlY3QgPSAoc2VsZWN0TGFiZWwsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBzZWxlY3RMYWJlbCk7XG5cbiAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QubmFtZSA9IHNlbGVjdExhYmVsLmZvcjtcbiAgc2VsZWN0LmlkID0gc2VsZWN0Lm5hbWU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuXG4gIGZvciAoY29uc3QgW3ZhbHVlLCB0ZXh0Q29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoc2VsZWN0T3B0aW9ucykpIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdERlZmF1bHQgJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3REZWZhdWx0KSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IGRpc3BsYXlGb3JtID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBjcmVhdGVGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvcm0sIGRpc3BsYXlGb3JtIH0iLCJpbXBvcnQgeyBnZXRJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtJ1xuXG5jb25zdCBfc2V0Q29sb3JCeVByaW9yaXR5ID0gKGVsZW1lbnQsIHByaW9yaXR5TGV2ZWwpID0+IHtcbiAgbGV0IHByaW9yaXR5Q29sb3I7XG5cbiAgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdncmVlbicpIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyMyQTlEOEYnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ29yYW5nZScpIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNGNEEyNjEnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ3JlZCcpIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNFNzZGNTEnO1xuICB9IGVsc2Uge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0U5QzQ2QSc7XG4gIH1cbiAgXG4gIGVsZW1lbnQuc3R5bGUuYm9yZGVyQ29sb3IgPSBwcmlvcml0eUNvbG9yXG59XG5cbmNvbnN0IF91c2VyUmVhZGFibGVQcmlvcml0eSA9IChwcmlvcml0eSkgPT4ge1xuICBpZiAocHJpb3JpdHkgPT09ICdncmVlbicpIHtcbiAgICByZXR1cm4gJ0xvdydcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ3llbGxvdycpIHtcbiAgICByZXR1cm4gJ05vcm1hbCdcbiAgfSBlbHNlIGlmIChwcmlvcml0eSA9PT0gJ29yYW5nZScpIHtcbiAgICByZXR1cm4gJ01vZGVyYXRlJ1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnSGlnaCc7XG4gIH1cbn1cblxuY29uc3QgX2Rpc3BsYXlFeHBhbmRDb250cmFjdEljb24gPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWNvbnRyYWN0LWljb24nKTtcbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRyYWN0ZWQnKSkge1xuICAgIGljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvYXJyb3ctZXhwYW5kLWRvd24ucG5nJztcbiAgICBpY29uLnRpdGxlID0gJ0V4cGFuZCBWaWV3JztcbiAgfSBlbHNlIHtcbiAgICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2Fycm93LWV4cGFuZC11cC5wbmcnO1xuICAgIGljb24udGl0bGUgPSAnQ29udHJhY3QgVmlldyc7XG4gIH1cbiAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBfdG9nZ2xlRXhwYW5kQ29udHJhY3RWaWV3KGNvbnRhaW5lciwgaXRlbSlcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbn1cblxuY29uc3QgX3RvZG9Db250YWluZXJFeHBhbmRlZCA9IChjb250YWluZXIsIGl0ZW0pID0+IHtcbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1kZXNjcmlwdGlvbicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gIGxldCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgbm90ZXMudGV4dENvbnRlbnQgPSBpdGVtLm5vdGVzO1xuICBub3Rlcy5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tbm90ZXMnKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5vdGVzKTtcblxuICBsZXQgcHJpb3JpdHlMZXZlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgcHJpb3JpdHlMZXZlbC50ZXh0Q29udGVudCA9IGBQcmlvcml0eTogJHtfdXNlclJlYWRhYmxlUHJpb3JpdHkoaXRlbS5wcmlvcml0eUxldmVsKX1gO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlMZXZlbCk7XG59XG5cbmNvbnN0IF90b2RvQ29udGFpbmVyQ29udHJhY3RlZCA9IChjb250YWluZXIsIGl0ZW0pID0+IHtcbiAgbGV0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGVsSWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9kZWxldGUtZm9yZXZlci5wbmcnO1xuICBkZWxJY29uLnRpdGxlID0gJ0RlbGV0ZSBJdGVtJztcbiAgZGVsSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsSWNvbik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNhdGVnb3J5LnRleHRDb250ZW50ID0gaXRlbS5jYXRlZ29yeTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcblxuICBsZXQgbWFya0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1hcmtDb21wbGV0ZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG4gIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29tcGxldGUtYnRuJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXJrQ29tcGxldGUpO1xuXG4gIF9kaXNwbGF5RXhwYW5kQ29udHJhY3RJY29uKGNvbnRhaW5lciwgaXRlbSk7XG59XG5cbmNvbnN0IF90b2dnbGVFeHBhbmRDb250cmFjdFZpZXcgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY29udHJhY3RlZCcpKSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRyYWN0ZWQnKTtcbiAgICBfdG9kb0NvbnRhaW5lckNvbnRyYWN0ZWQoY29udGFpbmVyLCBpdGVtKTtcbiAgICBfdG9kb0NvbnRhaW5lckV4cGFuZGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gIH0gZWxzZSB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2NvbnRyYWN0ZWQnKTtcbiAgICBfdG9kb0NvbnRhaW5lckNvbnRyYWN0ZWQoY29udGFpbmVyLCBpdGVtKTtcbiAgfVxufVxuXG5jb25zdCBkaXNwbGF5SXRlbXMgPSAoaXRlbXNBcnJheSkgPT4ge1xuICBpdGVtc0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgX3NldENvbG9yQnlQcmlvcml0eShjb250YWluZXIsIGl0ZW0ucHJpb3JpdHlMZXZlbCk7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSlcbn1cblxuY29uc3Qgc2hvd0FsbFRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBsZXQgaXRlbXMgPSBnZXRJdGVtcygpO1xuICBkaXNwbGF5SXRlbXMoaXRlbXMpO1xufVxuXG5jb25zdCBmaWx0ZXJCeUNhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGxldCBpdGVtcyA9IGdldEl0ZW1zKGNhdGVnb3J5KTtcbiAgZGlzcGxheUl0ZW1zKGl0ZW1zKTtcblxufVxuXG5leHBvcnQgeyBzaG93QWxsVG9kb3MsIGZpbHRlckJ5Q2F0ZWdvcnkgfSIsImNvbnN0IHRvZG9JdGVtcyA9IFtdO1xuXG5jb25zdCBnZXRJdGVtcyA9IChjYXRlZ29yeSkgPT4ge1xuICBpZiAoY2F0ZWdvcnkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0b2RvSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0b2RvSXRlbXNcbiAgfVxufVxuXG5jb25zdCBfc3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGxldCBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ3RvZG9JdGVtJylcbiAgKVxuICByZXR1cm4gaXRlbXNcbn1cblxuY29uc3QgcGFyc2VTdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBfc3RvcmVkSXRlbXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoaXRlbXNbaV1bMV0pO1xuICAgIHRvZG9JdGVtcy5wdXNoKG9iaik7XG4gIH1cbn1cblxuY29uc3QgdG9kb0l0ZW0gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB0aXRsZSA9ICBwcm9wZXJ0aWVzWyd0aXRsZSddXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllc1snZGVzY3JpcHRpb24nXTtcbiAgY29uc3QgcHJpb3JpdHlMZXZlbCA9IHByb3BlcnRpZXNbJ3ByaW9yaXR5TGV2ZWwnXTtcbiAgY29uc3QgZHVlRGF0ZSA9IHByb3BlcnRpZXNbJ2R1ZURhdGUnXTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wZXJ0aWVzWydjYXRlZ29yeSddO1xuICBjb25zdCBub3RlcyA9IHByb3BlcnRpZXNbJ25vdGVzJ107XG5cbiAgY29uc3QgaWQgPSBnZXRJdGVtcygpLmxlbmd0aCArIDE7XG4gIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTsgXG5cbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5TGV2ZWwsIGR1ZURhdGUsIGNhdGVnb3J5LCBub3RlcywgaWQgfVxufTtcblxuY29uc3QgX3N0b3JlSXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb0l0ZW0ke3RvZG9JdGVtLmlkfWAsIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG59XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSAoKSA9PiB7XG4gIGxldCBwcm9wZXJ0aWVzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdwcmlvcml0eUxldmVsJywgJ2R1ZURhdGUnLCAnY2F0ZWdvcnknLCAnbm90ZXMnXVxuXG4gIGxldCBhcmdzID0ge31cblxuICBmb3IgKGxldCBpPTA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBwcm9wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShwcm9wZXJ0aWVzW2ldKVswXS52YWx1ZTtcblxuICAgIGlmIChwcm9wVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IHByb3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShhcmdzKTtcblxuICBfc3RvcmVJdGVtKG5ld0l0ZW0pO1xufVxuXG5leHBvcnQgeyB0b2RvSXRlbSwgY3JlYXRlSXRlbSwgZ2V0SXRlbXMsIHBhcnNlU3RvcmVkSXRlbXMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tICcuL3RvZG8taXRlbS1mb3JtJ1xuaW1wb3J0IHsgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biB9IGZyb20gJy4vaGVhZGVyLXZpZXcnXG5pbXBvcnQgeyByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IHsgcGFyc2VTdG9yZWRJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtJ1xuaW1wb3J0IHsgc2hvd0FsbFRvZG9zIH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjYXRlZ29yeVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tY29udGVudCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfSApXG5cbiAgY29uc3Qgb3ZlcnZpZXdUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcnZpZXctdGFiJyk7XG4gIG92ZXJ2aWV3VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbFRvZG9zKTtcblxuICBjb25zdCB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdG9kb0l0ZW0tZm9ybScpO1xuICB0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcbn07XG5cbnBhcnNlU3RvcmVkSXRlbXMoKTtcbnJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcygpO1xuY3JlYXRlQ2F0ZWdvcnlEcm9wZG93bigpO1xuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnNob3dBbGxUb2RvcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9