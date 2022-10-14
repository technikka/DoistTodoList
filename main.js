/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-item-form.js":
/*!******************************!*\
  !*** ./src/add-item-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");


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
  let selectOptions = {}

  // console.log(categories instanceof Array);
  // console.log(getCategories.constructor.name);
  // console.log(categories);
  // console.log(categories.length);

  // for (let i=0; i < categories.length; i++ ) {
  //   console.log(categories[i]);
  //   selectOptions[categories[i]] = categories[i]
  // }

  // categories.forEach(element => console.log(element));

  // console.log(selectOptions);
  // console.log(categories);
  return selectOptions
}

// add selectDefault option with name attr to make option.selected = true
const _createSelect = (selectLabel, selectOptions, selectDefault) => {
  let container = document.createElement('div');
  _addLabel(container, selectLabel);

  let select = document.createElement('select');
  select.name = selectLabel.for;
  select.id = select.name;
  container.appendChild(select)

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



/***/ }),

/***/ "./src/category-modal.js":
/*!*******************************!*\
  !*** ./src/category-modal.js ***!
  \*******************************/
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

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createCategoryDropdown": () => (/* binding */ createCategoryDropdown)
/* harmony export */ });
/* harmony import */ var _category_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-modal */ "./src/category-modal.js");


const createCategoryDropdown = () => {
  const tab = document.querySelector('.category-tab');
  const container = document.createElement('div');
  container.classList.add('dropdown-content');
  tab.appendChild(container);

  const newCat = document.createElement('div');
  newCat.classList.add('dropdown-item');
  newCat.textContent = 'Create New';
  container.appendChild(newCat);
  newCat.addEventListener('click', _category_modal__WEBPACK_IMPORTED_MODULE_0__.showCategoryModal);

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

/***/ "./src/display.js":
/*!************************!*\
  !*** ./src/display.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "showAllTodos": () => (/* binding */ showAllTodos)
/* harmony export */ });
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");


const _setColorByPriority = (element, priorityLevel) => {
  console.log(priorityLevel);
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
  
  element.style.backgroundColor = priorityColor
}

const showAllTodos = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getItems)();

  items.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('todo-item-container');
    _setColorByPriority(container, item.priorityLevel);

    let deleteBtn = document.createElement('button');
    deleteBtn.textContent = "Del";
    container.appendChild(deleteBtn);

    let title = document.createElement('span');
    title.textContent = item.title;
    container.appendChild(title);

    let dueDate = document.createElement('span');
    dueDate.textContent = item.dueDate;
    container.appendChild(dueDate);

    let category = document.createElement('span');
    category.textContent = item.category;
    container.appendChild(category);

    content.appendChild(container);
  })
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

const getItems = () => {
  return todoItems
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
/* harmony import */ var _add_item_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item-form */ "./src/add-item-form.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/controls.js");
/* harmony import */ var _category_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category-modal */ "./src/category-modal.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./display */ "./src/display.js");







const setEventListeners = () => {
  const addItemBtn = document.querySelector('.btn-add-item');
  addItemBtn.addEventListener('click', _todo_item__WEBPACK_IMPORTED_MODULE_4__.createItem);

  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )

  const overviewTab = document.querySelector('.overview-tab');
  overviewTab.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_5__.showAllTodos);
};

(0,_add_item_form__WEBPACK_IMPORTED_MODULE_0__.createForm)();
(0,_controls__WEBPACK_IMPORTED_MODULE_1__.createCategoryDropdown)();
(0,_category_modal__WEBPACK_IMPORTED_MODULE_2__.createNewCategoryModal)();
(0,_todo_item__WEBPACK_IMPORTED_MODULE_4__.parseStoredItems)();
(0,_category__WEBPACK_IMPORTED_MODULE_3__.retrieveStoredCategories)();
setEventListeners();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxrQ0FBa0MsWUFBWTtBQUM5Qzs7QUFFQTtBQUNBOztBQUVBOztBQUVBLGdCQUFnQix1QkFBdUI7QUFDdkM7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7VUN6REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ087QUFDTTtBQUNKO0FBQ0s7QUFDbEI7O0FBRXhDO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQVU7O0FBRWpEO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSx3Q0FBd0Msa0RBQVk7QUFDcEQ7O0FBRUEsMERBQVU7QUFDVixpRUFBc0I7QUFDdEIsdUVBQXNCO0FBQ3RCLDREQUFnQjtBQUNoQixtRUFBd0I7QUFDeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS1tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5J1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWl0ZW0tY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG4gIGxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gJ0FkZCBhbiBpdGVtIHRvIHlvdXIgbGlzdCc7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgLy8gYWRkIHRpdGxlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgndGV4dCcsIHsgdGV4dENvbnRlbnQ6ICdUaXRsZScsIGZvcjogJ3RpdGxlJ30pKTtcbiAgLy8gYWRkIGRlc2NyaXB0aW9uIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnRGVzY3JpcHRpb24nLCBmb3I6ICdkZXNjcmlwdGlvbid9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcbiAgLy8gYWRkIGR1ZURhdGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCdkYXRlJywgeyB0ZXh0Q29udGVudDogJ0R1ZSBEYXRlJywgZm9yOiAnZHVlRGF0ZSd9KSk7XG4gIC8vIGFkZCBwcmlvcml0eUxldmVsIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVTZWxlY3QoeyB0ZXh0Q29udGVudDogJ1ByaW9yaXR5JywgZm9yOiAncHJpb3JpdHlMZXZlbCd9LCB7XCJncmVlblwiOiBcIkxvdyBQcmlvcml0eVwiLCBcInllbGxvd1wiOiBcIk5vcm1hbCBQcmlvcml0eVwiLCBcIm9yYW5nZVwiOiBcIlNvbWV3aGF0IFByaW9yaXR5XCIsIFwicmVkXCI6IFwiSGlnaCBQcmlvcml0eVwifSwgXCJ5ZWxsb3dcIikpO1xuICAvLyBhZGQgbm90ZXMgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdOb3RlcycsIGZvcjogJ25vdGVzJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuICAvLyBhZGQgY2F0ZWdvcnkgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnQ2F0ZWdvcnknLCBmb3I6ICdjYXRlZ29yeSd9LCBfY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMoKSwgXCJkZWZhdWx0XCIpKTtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLWl0ZW0nKTtcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnRuKTtcbn1cblxuY29uc3QgX2FkZExhYmVsID0gKHBhcmVudCwgcHJvcGVydGllcykgPT4ge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHByb3BlcnRpZXMudGV4dENvbnRlbnQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcGVydGllcy5mb3IpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xufVxuXG5jb25zdCBfY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlLCBpbnB1dExhYmVsLCBpbnB1dFByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBpbnB1dExhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICBpbnB1dC5uYW1lID0gaW5wdXRMYWJlbC5mb3I7XG4gIGlmIChpbnB1dFByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpbnB1dFByb3BlcnRpZXMpKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgX2NyZWF0ZVRleHRBcmVhID0gKGFyZWFMYWJlbCwgYXJlYVByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBhcmVhTGFiZWwpO1xuXG4gIGxldCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgYXJlYS5uYW1lID0gYXJlYUxhYmVsLmZvcjtcbiAgaWYgKGFyZWFQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXJlYVByb3BlcnRpZXMpKSB7XG4gICAgICBhcmVhLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZWEpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IF9jYXRlZ29yaWVzU2VsZWN0T3B0aW9ucyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBnZXRDYXRlZ29yaWVzKCk7XG4gIGxldCBzZWxlY3RPcHRpb25zID0ge31cblxuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzIGluc3RhbmNlb2YgQXJyYXkpO1xuICAvLyBjb25zb2xlLmxvZyhnZXRDYXRlZ29yaWVzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcy5sZW5ndGgpO1xuXG4gIC8vIGZvciAobGV0IGk9MDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKysgKSB7XG4gIC8vICAgY29uc29sZS5sb2coY2F0ZWdvcmllc1tpXSk7XG4gIC8vICAgc2VsZWN0T3B0aW9uc1tjYXRlZ29yaWVzW2ldXSA9IGNhdGVnb3JpZXNbaV1cbiAgLy8gfVxuXG4gIC8vIGNhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IGNvbnNvbGUubG9nKGVsZW1lbnQpKTtcblxuICAvLyBjb25zb2xlLmxvZyhzZWxlY3RPcHRpb25zKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gIHJldHVybiBzZWxlY3RPcHRpb25zXG59XG5cbi8vIGFkZCBzZWxlY3REZWZhdWx0IG9wdGlvbiB3aXRoIG5hbWUgYXR0ciB0byBtYWtlIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbmNvbnN0IF9jcmVhdGVTZWxlY3QgPSAoc2VsZWN0TGFiZWwsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBzZWxlY3RMYWJlbCk7XG5cbiAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QubmFtZSA9IHNlbGVjdExhYmVsLmZvcjtcbiAgc2VsZWN0LmlkID0gc2VsZWN0Lm5hbWU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpXG5cbiAgZm9yIChjb25zdCBbdmFsdWUsIHRleHRDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhzZWxlY3RPcHRpb25zKSkge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBpZiAoc2VsZWN0RGVmYXVsdCAmJiBvcHRpb24udmFsdWUgPT09IHNlbGVjdERlZmF1bHQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9ybSB9IiwiaW1wb3J0IHsgY3JlYXRlQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5J1xuXG5jb25zdCBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBDYXRlZ29yeSc7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnY3JlYXRlJztcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlQ2F0ZWdvcnkpO1xufVxuXG5jb25zdCBzaG93Q2F0ZWdvcnlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsIGlucHV0JykuZm9jdXMoKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZHJvcGRvd25JdGVtc1tpXSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1vZGFsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgbW9kYWwgIT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU9uQ2xpY2tBd2F5KTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwsIHNob3dDYXRlZ29yeU1vZGFsIH0iLCJjb25zdCBhbGxDYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIHJldHVybiBhbGxDYXRlZ29yaWVzXG59XG5cbmNvbnN0IF9zdG9yZUNhdGVnb3J5ID0gKGNhdGVnb3J5TmFtZSkgPT4ge1xuICBsZXQgY2F0SWQgPSBnZXRDYXRlZ29yaWVzKCkubGVuZ3RoICsgMVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2F0ZWdvcnkke2NhdElkfWAsIGNhdGVnb3J5TmFtZSk7XG59XG5cbmNvbnN0IF9zdG9yZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ2NhdGVnb3J5JylcbiAgKVxuICByZXR1cm4gY2F0ZWdvcmllc1xufVxuXG5jb25zdCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gX3N0b3JlZENhdGVnb3JpZXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaChjYXRlZ29yaWVzW2ldWzFdKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcbiAgbGV0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCduZXctY2F0ZWdvcnknKVswXS52YWx1ZTtcblxuICBpZiAoYWxsQ2F0ZWdvcmllcy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgY29uc29sZS5sb2coJ3dpbGwgYWxlcnQgdXNlcicpO1xuICB9IGVsc2Uge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaCh1c2VySW5wdXQpO1xuICAgIF9zdG9yZUNhdGVnb3J5KHVzZXJJbnB1dCk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5LCBnZXRDYXRlZ29yaWVzLCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfVxuIiwiaW1wb3J0IHsgc2hvd0NhdGVnb3J5TW9kYWwgfSBmcm9tICcuL2NhdGVnb3J5LW1vZGFsJztcblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biA9ICgpID0+IHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgdGFiLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgbmV3Q2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0NhdC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1pdGVtJyk7XG4gIG5ld0NhdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3JztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhdCk7XG4gIG5ld0NhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDYXRlZ29yeU1vZGFsKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBpZiAoIXRhYi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldICE9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDYXRlZ29yeURyb3Bkb3duIH1cbiIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmNvbnN0IF9zZXRDb2xvckJ5UHJpb3JpdHkgPSAoZWxlbWVudCwgcHJpb3JpdHlMZXZlbCkgPT4ge1xuICBjb25zb2xlLmxvZyhwcmlvcml0eUxldmVsKTtcbiAgbGV0IHByaW9yaXR5Q29sb3I7XG5cbiAgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdncmVlbicpIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyMyQTlEOEYnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ29yYW5nZScpIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNGNEEyNjEnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ3JlZCcpIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNFNzZGNTEnO1xuICB9IGVsc2Uge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0U5QzQ2QSc7XG4gIH1cbiAgXG4gIGVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gcHJpb3JpdHlDb2xvclxufVxuXG5jb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgbGV0IGl0ZW1zID0gZ2V0SXRlbXMoKTtcblxuICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWNvbnRhaW5lcicpO1xuICAgIF9zZXRDb2xvckJ5UHJpb3JpdHkoY29udGFpbmVyLCBpdGVtLnByaW9yaXR5TGV2ZWwpO1xuXG4gICAgbGV0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG5cbiAgICBsZXQgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBsZXQgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICAgIGxldCBjYXRlZ29yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSlcbn1cblxuZXhwb3J0IHsgc2hvd0FsbFRvZG9zIH0iLCJjb25zdCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gIHJldHVybiB0b2RvSXRlbXNcbn1cblxuY29uc3QgX3N0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBsZXQgaXRlbXMgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihcbiAgICBrZXkgPT4ga2V5WzBdLmluY2x1ZGVzKCd0b2RvSXRlbScpXG4gIClcbiAgcmV0dXJuIGl0ZW1zXG59XG5cbmNvbnN0IHBhcnNlU3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gX3N0b3JlZEl0ZW1zKCk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGl0ZW1zW2ldWzFdKTtcbiAgICB0b2RvSXRlbXMucHVzaChvYmopO1xuICB9XG59XG5cbmNvbnN0IHRvZG9JdGVtID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAgcHJvcGVydGllc1sndGl0bGUnXVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXNbJ2Rlc2NyaXB0aW9uJ107XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBwcm9wZXJ0aWVzWydwcmlvcml0eUxldmVsJ107XG4gIGNvbnN0IGR1ZURhdGUgPSBwcm9wZXJ0aWVzWydkdWVEYXRlJ107XG4gIGNvbnN0IGNhdGVnb3J5ID0gcHJvcGVydGllc1snY2F0ZWdvcnknXTtcbiAgY29uc3Qgbm90ZXMgPSBwcm9wZXJ0aWVzWydub3RlcyddO1xuXG4gIGNvbnN0IGlkID0gZ2V0SXRlbXMoKS5sZW5ndGggKyAxO1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7IFxuXG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eUxldmVsLCBkdWVEYXRlLCBjYXRlZ29yeSwgbm90ZXMsIGlkIH1cbn07XG5cbmNvbnN0IF9zdG9yZUl0ZW0gPSAodG9kb0l0ZW0pID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9JdGVtJHt0b2RvSXRlbS5pZH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtID0gKCkgPT4ge1xuICBsZXQgcHJvcGVydGllcyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAncHJpb3JpdHlMZXZlbCcsICdkdWVEYXRlJywgJ2NhdGVnb3J5JywgJ25vdGVzJ11cblxuICBsZXQgYXJncyA9IHt9XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgcHJvcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUocHJvcGVydGllc1tpXSlbMF0udmFsdWU7XG5cbiAgICBpZiAocHJvcFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBwcm9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdJdGVtID0gdG9kb0l0ZW0oYXJncyk7XG5cbiAgX3N0b3JlSXRlbShuZXdJdGVtKTtcbn1cblxuZXhwb3J0IHsgdG9kb0l0ZW0sIGNyZWF0ZUl0ZW0sIGdldEl0ZW1zLCBwYXJzZVN0b3JlZEl0ZW1zIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2FkZC1pdGVtLWZvcm0nXG5pbXBvcnQgeyBjcmVhdGVDYXRlZ29yeURyb3Bkb3duIH0gZnJvbSAnLi9jb250cm9scydcbmltcG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgfSBmcm9tICcuL2NhdGVnb3J5LW1vZGFsJ1xuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IHBhcnNlU3RvcmVkSXRlbXMsIGNyZWF0ZUl0ZW0gfSBmcm9tICcuL3RvZG8taXRlbSdcbmltcG9ydCB7IHNob3dBbGxUb2RvcyB9IGZyb20gJy4vZGlzcGxheSdcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGFkZEl0ZW1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLWFkZC1pdGVtJyk7XG4gIGFkZEl0ZW1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVJdGVtKTtcblxuICBjb25zdCBjYXRlZ29yeVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY2F0ZWdvcnlUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH0gKVxuXG4gIGNvbnN0IG92ZXJ2aWV3VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ2aWV3LXRhYicpO1xuICBvdmVydmlld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGxUb2Rvcyk7XG59O1xuXG5jcmVhdGVGb3JtKCk7XG5jcmVhdGVDYXRlZ29yeURyb3Bkb3duKCk7XG5jcmVhdGVOZXdDYXRlZ29yeU1vZGFsKCk7XG5wYXJzZVN0b3JlZEl0ZW1zKCk7XG5yZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMoKTtcbnNldEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=