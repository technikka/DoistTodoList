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

const displayForm = () => {
  const content = document.querySelector('#content');
  content.textContent = '';
  createForm();
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
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./display */ "./src/display.js");






const setEventListeners = () => {
  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )

  const overviewTab = document.querySelector('.overview-tab');
  overviewTab.addEventListener('click', _display__WEBPACK_IMPORTED_MODULE_4__.showAllTodos);

  const todoFormBtn = document.querySelector('.btn-todoItem-form');
  todoFormBtn.addEventListener('click', _add_item_form__WEBPACK_IMPORTED_MODULE_0__.displayForm);
};

(0,_todo_item__WEBPACK_IMPORTED_MODULE_3__.parseStoredItems)();
(0,_category__WEBPACK_IMPORTED_MODULE_2__.retrieveStoredCategories)();
(0,_controls__WEBPACK_IMPORTED_MODULE_1__.createCategoryDropdown)();
setEventListeners();
(0,_display__WEBPACK_IMPORTED_MODULE_4__.showAllTodos)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ042QztBQUNNO0FBQ0U7QUFDUDtBQUNOOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSx3Q0FBd0Msa0RBQVk7O0FBRXBEO0FBQ0Esd0NBQXdDLHVEQUFXO0FBQ25EOztBQUVBLDREQUFnQjtBQUNoQixtRUFBd0I7QUFDeEIsaUVBQXNCO0FBQ3RCO0FBQ0Esc0RBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS1tb2RhbC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldENhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1pdGVtJ1xuXG5jb25zdCBjcmVhdGVGb3JtID0gKCkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWl0ZW0tY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG4gIGxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gJ0FkZCBhbiBpdGVtIHRvIHlvdXIgbGlzdCc7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgLy8gYWRkIHRpdGxlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgndGV4dCcsIHsgdGV4dENvbnRlbnQ6ICdUaXRsZScsIGZvcjogJ3RpdGxlJ30pKTtcbiAgLy8gYWRkIGRlc2NyaXB0aW9uIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnRGVzY3JpcHRpb24nLCBmb3I6ICdkZXNjcmlwdGlvbid9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcbiAgLy8gYWRkIGR1ZURhdGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCdkYXRlJywgeyB0ZXh0Q29udGVudDogJ0R1ZSBEYXRlJywgZm9yOiAnZHVlRGF0ZSd9KSk7XG4gIC8vIGFkZCBwcmlvcml0eUxldmVsIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVTZWxlY3QoeyB0ZXh0Q29udGVudDogJ1ByaW9yaXR5JywgZm9yOiAncHJpb3JpdHlMZXZlbCd9LCB7XCJncmVlblwiOiBcIkxvdyBQcmlvcml0eVwiLCBcInllbGxvd1wiOiBcIk5vcm1hbCBQcmlvcml0eVwiLCBcIm9yYW5nZVwiOiBcIlNvbWV3aGF0IFByaW9yaXR5XCIsIFwicmVkXCI6IFwiSGlnaCBQcmlvcml0eVwifSwgXCJ5ZWxsb3dcIikpO1xuICAvLyBhZGQgbm90ZXMgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdOb3RlcycsIGZvcjogJ25vdGVzJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuICAvLyBhZGQgY2F0ZWdvcnkgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnQ2F0ZWdvcnknLCBmb3I6ICdjYXRlZ29yeSd9LCBfY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMoKSwgXCJkZWZhdWx0XCIpKTtcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLWl0ZW0nKTtcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlSXRlbSk7XG59XG5cbmNvbnN0IF9hZGRMYWJlbCA9IChwYXJlbnQsIHByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBwcm9wZXJ0aWVzLnRleHRDb250ZW50O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3BlcnRpZXMuZm9yKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbn1cblxuY29uc3QgX2NyZWF0ZUlucHV0ID0gKGlucHV0VHlwZSwgaW5wdXRMYWJlbCwgaW5wdXRQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgaW5wdXRMYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgaW5wdXQubmFtZSA9IGlucHV0TGFiZWwuZm9yO1xuICBpZiAoaW5wdXRQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaW5wdXRQcm9wZXJ0aWVzKSkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IF9jcmVhdGVUZXh0QXJlYSA9IChhcmVhTGFiZWwsIGFyZWFQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgYXJlYUxhYmVsKTtcblxuICBsZXQgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGFyZWEubmFtZSA9IGFyZWFMYWJlbC5mb3I7XG4gIGlmIChhcmVhUHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFyZWFQcm9wZXJ0aWVzKSkge1xuICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcmVhKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBfY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gZ2V0Q2F0ZWdvcmllcygpO1xuICBsZXQgc2VsZWN0T3B0aW9ucyA9IHt9XG5cbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcyBpbnN0YW5jZW9mIEFycmF5KTtcbiAgLy8gY29uc29sZS5sb2coZ2V0Q2F0ZWdvcmllcy5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMubGVuZ3RoKTtcblxuICAvLyBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrICkge1xuICAvLyAgIGNvbnNvbGUubG9nKGNhdGVnb3JpZXNbaV0pO1xuICAvLyAgIHNlbGVjdE9wdGlvbnNbY2F0ZWdvcmllc1tpXV0gPSBjYXRlZ29yaWVzW2ldXG4gIC8vIH1cblxuICAvLyBjYXRlZ29yaWVzLmZvckVhY2goZWxlbWVudCA9PiBjb25zb2xlLmxvZyhlbGVtZW50KSk7XG5cbiAgLy8gY29uc29sZS5sb2coc2VsZWN0T3B0aW9ucyk7XG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuICByZXR1cm4gc2VsZWN0T3B0aW9uc1xufVxuXG4vLyBhZGQgc2VsZWN0RGVmYXVsdCBvcHRpb24gd2l0aCBuYW1lIGF0dHIgdG8gbWFrZSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG5jb25zdCBfY3JlYXRlU2VsZWN0ID0gKHNlbGVjdExhYmVsLCBzZWxlY3RPcHRpb25zLCBzZWxlY3REZWZhdWx0KSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgc2VsZWN0TGFiZWwpO1xuXG4gIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0Lm5hbWUgPSBzZWxlY3RMYWJlbC5mb3I7XG4gIHNlbGVjdC5pZCA9IHNlbGVjdC5uYW1lO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KVxuXG4gIGZvciAoY29uc3QgW3ZhbHVlLCB0ZXh0Q29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoc2VsZWN0T3B0aW9ucykpIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdERlZmF1bHQgJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3REZWZhdWx0KSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IGRpc3BsYXlGb3JtID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBjcmVhdGVGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvcm0sIGRpc3BsYXlGb3JtIH0iLCJpbXBvcnQgeyBjcmVhdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5cbmNvbnN0IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCduZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IENhdGVnb3J5JztcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdjcmVhdGUnO1xuICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVDYXRlZ29yeSk7XG59XG5cbmNvbnN0IHNob3dDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsKCk7XG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsIGlucHV0JykuZm9jdXMoKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZHJvcGRvd25JdGVtc1tpXSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1vZGFsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgbW9kYWwgIT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU9uQ2xpY2tBd2F5KTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwsIHNob3dDYXRlZ29yeU1vZGFsIH0iLCJjb25zdCBhbGxDYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIHJldHVybiBhbGxDYXRlZ29yaWVzXG59XG5cbmNvbnN0IF9zdG9yZUNhdGVnb3J5ID0gKGNhdGVnb3J5TmFtZSkgPT4ge1xuICBsZXQgY2F0SWQgPSBnZXRDYXRlZ29yaWVzKCkubGVuZ3RoICsgMVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2F0ZWdvcnkke2NhdElkfWAsIGNhdGVnb3J5TmFtZSk7XG59XG5cbmNvbnN0IF9zdG9yZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ2NhdGVnb3J5JylcbiAgKVxuICByZXR1cm4gY2F0ZWdvcmllc1xufVxuXG5jb25zdCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gX3N0b3JlZENhdGVnb3JpZXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaChjYXRlZ29yaWVzW2ldWzFdKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcbiAgbGV0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCduZXctY2F0ZWdvcnknKVswXS52YWx1ZTtcblxuICBpZiAoYWxsQ2F0ZWdvcmllcy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgY29uc29sZS5sb2coJ3dpbGwgYWxlcnQgdXNlcicpO1xuICB9IGVsc2Uge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaCh1c2VySW5wdXQpO1xuICAgIF9zdG9yZUNhdGVnb3J5KHVzZXJJbnB1dCk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5LCBnZXRDYXRlZ29yaWVzLCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfVxuIiwiaW1wb3J0IHsgc2hvd0NhdGVnb3J5TW9kYWwgfSBmcm9tICcuL2NhdGVnb3J5LW1vZGFsJztcblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biA9ICgpID0+IHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgdGFiLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgbmV3Q2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0NhdC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1pdGVtJyk7XG4gIG5ld0NhdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3JztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhdCk7XG4gIG5ld0NhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDYXRlZ29yeU1vZGFsKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBpZiAoIXRhYi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldICE9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVDYXRlZ29yeURyb3Bkb3duIH1cbiIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmNvbnN0IF9zZXRDb2xvckJ5UHJpb3JpdHkgPSAoZWxlbWVudCwgcHJpb3JpdHlMZXZlbCkgPT4ge1xuICBsZXQgcHJpb3JpdHlDb2xvcjtcblxuICBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ2dyZWVuJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnIzJBOUQ4RidcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAnb3JhbmdlJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0Y0QTI2MSdcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAncmVkJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0U3NkY1MSc7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTlDNDZBJztcbiAgfVxuICBcbiAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHByaW9yaXR5Q29sb3Jcbn1cblxuY29uc3Qgc2hvd0FsbFRvZG9zID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuXG4gIGxldCBpdGVtcyA9IGdldEl0ZW1zKCk7XG5cbiAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1jb250YWluZXInKTtcbiAgICBfc2V0Q29sb3JCeVByaW9yaXR5KGNvbnRhaW5lciwgaXRlbS5wcmlvcml0eUxldmVsKTtcblxuICAgIGxldCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBkZWxldGVCdG4udGV4dENvbnRlbnQgPSBcIkRlbFwiO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuXG4gICAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIHRpdGxlLnRleHRDb250ZW50ID0gaXRlbS50aXRsZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGl0ZW0uZHVlRGF0ZTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY2F0ZWdvcnkudGV4dENvbnRlbnQgPSBpdGVtLmNhdGVnb3J5O1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gIH0pXG59XG5cbmV4cG9ydCB7IHNob3dBbGxUb2RvcyB9IiwiY29uc3QgdG9kb0l0ZW1zID0gW107XG5cbmNvbnN0IGdldEl0ZW1zID0gKCkgPT4ge1xuICByZXR1cm4gdG9kb0l0ZW1zXG59XG5cbmNvbnN0IF9zdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgbGV0IGl0ZW1zID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygndG9kb0l0ZW0nKVxuICApXG4gIHJldHVybiBpdGVtc1xufVxuXG5jb25zdCBwYXJzZVN0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IF9zdG9yZWRJdGVtcygpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShpdGVtc1tpXVsxXSk7XG4gICAgdG9kb0l0ZW1zLnB1c2gob2JqKTtcbiAgfVxufVxuXG5jb25zdCB0b2RvSXRlbSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gIHByb3BlcnRpZXNbJ3RpdGxlJ11cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzWydkZXNjcmlwdGlvbiddO1xuICBjb25zdCBwcmlvcml0eUxldmVsID0gcHJvcGVydGllc1sncHJpb3JpdHlMZXZlbCddO1xuICBjb25zdCBkdWVEYXRlID0gcHJvcGVydGllc1snZHVlRGF0ZSddO1xuICBjb25zdCBjYXRlZ29yeSA9IHByb3BlcnRpZXNbJ2NhdGVnb3J5J107XG4gIGNvbnN0IG5vdGVzID0gcHJvcGVydGllc1snbm90ZXMnXTtcblxuICBjb25zdCBpZCA9IGdldEl0ZW1zKCkubGVuZ3RoICsgMTtcbiAgY29uc3QgaXNDb21wbGV0ZSA9IGZhbHNlOyBcblxuICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHlMZXZlbCwgZHVlRGF0ZSwgY2F0ZWdvcnksIG5vdGVzLCBpZCB9XG59O1xuXG5jb25zdCBfc3RvcmVJdGVtID0gKHRvZG9JdGVtKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvSXRlbSR7dG9kb0l0ZW0uaWR9YCwgSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW0pKTtcbn1cblxuY29uc3QgY3JlYXRlSXRlbSA9ICgpID0+IHtcbiAgbGV0IHByb3BlcnRpZXMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ3ByaW9yaXR5TGV2ZWwnLCAnZHVlRGF0ZScsICdjYXRlZ29yeScsICdub3RlcyddXG5cbiAgbGV0IGFyZ3MgPSB7fVxuXG4gIGZvciAobGV0IGk9MDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IHByb3BWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHByb3BlcnRpZXNbaV0pWzBdLnZhbHVlO1xuXG4gICAgaWYgKHByb3BWYWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICBhcmdzW3Byb3BlcnRpZXNbaV1dID0gcHJvcFZhbHVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzW3Byb3BlcnRpZXNbaV1dID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBsZXQgbmV3SXRlbSA9IHRvZG9JdGVtKGFyZ3MpO1xuXG4gIF9zdG9yZUl0ZW0obmV3SXRlbSk7XG59XG5cbmV4cG9ydCB7IHRvZG9JdGVtLCBjcmVhdGVJdGVtLCBnZXRJdGVtcywgcGFyc2VTdG9yZWRJdGVtcyB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gJy4vYWRkLWl0ZW0tZm9ybSdcbmltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfSBmcm9tICcuL2NvbnRyb2xzJ1xuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IHBhcnNlU3RvcmVkSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSdcbmltcG9ydCB7IHNob3dBbGxUb2RvcyB9IGZyb20gJy4vZGlzcGxheSdcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjYXRlZ29yeVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tY29udGVudCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfSApXG5cbiAgY29uc3Qgb3ZlcnZpZXdUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcnZpZXctdGFiJyk7XG4gIG92ZXJ2aWV3VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbFRvZG9zKTtcblxuICBjb25zdCB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdG9kb0l0ZW0tZm9ybScpO1xuICB0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcbn07XG5cbnBhcnNlU3RvcmVkSXRlbXMoKTtcbnJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcygpO1xuY3JlYXRlQ2F0ZWdvcnlEcm9wZG93bigpO1xuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnNob3dBbGxUb2RvcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9