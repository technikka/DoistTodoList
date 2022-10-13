/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-category-form.js":
/*!**********************************!*\
  !*** ./src/add-category-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewCategoryModal": () => (/* binding */ createNewCategoryModal)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/category.js");



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
  _event__WEBPACK_IMPORTED_MODULE_0__.Event.add(btn, 'click', _category__WEBPACK_IMPORTED_MODULE_1__.createCategory );
}





/***/ }),

/***/ "./src/add-item-form.js":
/*!******************************!*\
  !*** ./src/add-item-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createForm": () => (/* binding */ createForm)
/* harmony export */ });
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
  fieldset.appendChild(_createSelect({ textContent: 'Category', for: 'category'}, {"default": "Default"}, "default"));

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
    allCategories.push(categories[i]);
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
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/event.js");


const createCategoryDropdown = () => {
  const tab = document.querySelector('.category-tab');
  const container = document.createElement('div');
  container.classList.add('dropdown-content');
  tab.appendChild(container);

  const newCat = document.createElement('div');
  newCat.classList.add('dropdown-item');
  newCat.textContent = 'Create New';
  container.appendChild(newCat);
  _event__WEBPACK_IMPORTED_MODULE_0__.Event.add(newCat, 'click', _event__WEBPACK_IMPORTED_MODULE_0__.newCategoryForm);

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

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Event": () => (/* binding */ Event),
/* harmony export */   "newCategoryForm": () => (/* binding */ newCategoryForm),
/* harmony export */   "setEventListeners": () => (/* binding */ setEventListeners)
/* harmony export */ });
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");


const Event = (() => {
  const add = (element, type, callback) => {
    element.addEventListener(type, callback);
  }

  return { add }
})();

const newCategoryForm = () => {
  const modal = document.querySelector('.new-category-modal');
  const backdrop = document.getElementById('backdrop');
  modal.classList.add('show');
  backdrop.classList.add('show');

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

const setEventListeners = () => {
  const addItemBtn = document.querySelector('.btn-add-item');
  addItemBtn.addEventListener('click', _todo_item__WEBPACK_IMPORTED_MODULE_0__.createItem);

  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )
};




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
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/controls.js");
/* harmony import */ var _add_category_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category-form */ "./src/add-category-form.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");








(0,_add_item_form__WEBPACK_IMPORTED_MODULE_0__.createForm)();
(0,_controls__WEBPACK_IMPORTED_MODULE_2__.createCategoryDropdown)();
(0,_add_category_form__WEBPACK_IMPORTED_MODULE_3__.createNewCategoryModal)();
(0,_todo_item__WEBPACK_IMPORTED_MODULE_5__.parseStoredItems)();
(0,_category__WEBPACK_IMPORTED_MODULE_4__.retrieveStoredCategories)();
(0,_event__WEBPACK_IMPORTED_MODULE_1__.setEventListeners)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDRDtBQUNRO0FBQ1M7QUFDUTtBQUNaOzs7QUFHeEQsMERBQVU7QUFDVixpRUFBc0I7QUFDdEIsMEVBQXNCO0FBQ3RCLDREQUFnQjtBQUNoQixtRUFBd0I7QUFDeEIseURBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hZGQtY2F0ZWdvcnktZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbnRyb2xzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZXZlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnQsIGNsb3NlT25DbGlja0F3YXkgfSBmcm9tICcuL2V2ZW50J1xuaW1wb3J0IHsgY3JlYXRlQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5J1xuXG5jb25zdCBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBDYXRlZ29yeSc7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnY3JlYXRlJztcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgRXZlbnQuYWRkKGJ0biwgJ2NsaWNrJywgY3JlYXRlQ2F0ZWdvcnkgKTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgfSIsImNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1jb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgbGV0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSAnQWRkIGFuIGl0ZW0gdG8geW91ciBsaXN0JztcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBhZGQgdGl0bGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCd0ZXh0JywgeyB0ZXh0Q29udGVudDogJ1RpdGxlJywgZm9yOiAndGl0bGUnfSkpO1xuICAvLyBhZGQgZGVzY3JpcHRpb24gcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdEZXNjcmlwdGlvbicsIGZvcjogJ2Rlc2NyaXB0aW9uJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuICAvLyBhZGQgZHVlRGF0ZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ2RhdGUnLCB7IHRleHRDb250ZW50OiAnRHVlIERhdGUnLCBmb3I6ICdkdWVEYXRlJ30pKTtcbiAgLy8gYWRkIHByaW9yaXR5TGV2ZWwgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnUHJpb3JpdHknLCBmb3I6ICdwcmlvcml0eUxldmVsJ30sIHtcImdyZWVuXCI6IFwiTG93IFByaW9yaXR5XCIsIFwieWVsbG93XCI6IFwiTm9ybWFsIFByaW9yaXR5XCIsIFwib3JhbmdlXCI6IFwiU29tZXdoYXQgUHJpb3JpdHlcIiwgXCJyZWRcIjogXCJIaWdoIFByaW9yaXR5XCJ9LCBcInllbGxvd1wiKSk7XG4gIC8vIGFkZCBub3RlcyBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ05vdGVzJywgZm9yOiAnbm90ZXMnfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBjYXRlZ29yeSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdDYXRlZ29yeScsIGZvcjogJ2NhdGVnb3J5J30sIHtcImRlZmF1bHRcIjogXCJEZWZhdWx0XCJ9LCBcImRlZmF1bHRcIikpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtaXRlbScpO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChidG4pO1xufVxuXG5jb25zdCBfYWRkTGFiZWwgPSAocGFyZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcGVydGllcy50ZXh0Q29udGVudDtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wZXJ0aWVzLmZvcik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG59XG5cbmNvbnN0IF9jcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0TGFiZWwsIGlucHV0UHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGlucHV0TGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gIGlucHV0Lm5hbWUgPSBpbnB1dExhYmVsLmZvcjtcbiAgaWYgKGlucHV0UHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGlucHV0UHJvcGVydGllcykpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBfY3JlYXRlVGV4dEFyZWEgPSAoYXJlYUxhYmVsLCBhcmVhUHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGFyZWFMYWJlbCk7XG5cbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBhcmVhLm5hbWUgPSBhcmVhTGFiZWwuZm9yO1xuICBpZiAoYXJlYVByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhcmVhUHJvcGVydGllcykpIHtcbiAgICAgIGFyZWEuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJlYSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gYWRkIHNlbGVjdERlZmF1bHQgb3B0aW9uIHdpdGggbmFtZSBhdHRyIHRvIG1ha2Ugb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuY29uc3QgX2NyZWF0ZVNlbGVjdCA9IChzZWxlY3RMYWJlbCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIHNlbGVjdExhYmVsKTtcblxuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5uYW1lID0gc2VsZWN0TGFiZWwuZm9yO1xuICBzZWxlY3QuaWQgPSBzZWxlY3QubmFtZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdClcblxuICBmb3IgKGNvbnN0IFt2YWx1ZSwgdGV4dENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlbGVjdE9wdGlvbnMpKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlmIChzZWxlY3REZWZhdWx0ICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0RGVmYXVsdCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtIH0iLCJjb25zdCBhbGxDYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIHJldHVybiBhbGxDYXRlZ29yaWVzXG59XG5cbmNvbnN0IF9zdG9yZUNhdGVnb3J5ID0gKGNhdGVnb3J5TmFtZSkgPT4ge1xuICBsZXQgY2F0SWQgPSBnZXRDYXRlZ29yaWVzKCkubGVuZ3RoICsgMVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2F0ZWdvcnkke2NhdElkfWAsIGNhdGVnb3J5TmFtZSk7XG59XG5cbmNvbnN0IF9zdG9yZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ2NhdGVnb3J5JylcbiAgKVxuICByZXR1cm4gY2F0ZWdvcmllc1xufVxuXG5jb25zdCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gX3N0b3JlZENhdGVnb3JpZXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaChjYXRlZ29yaWVzW2ldKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcbiAgbGV0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCduZXctY2F0ZWdvcnknKVswXS52YWx1ZTtcblxuICBpZiAoYWxsQ2F0ZWdvcmllcy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgY29uc29sZS5sb2coJ3dpbGwgYWxlcnQgdXNlcicpO1xuICB9IGVsc2Uge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaCh1c2VySW5wdXQpO1xuICAgIF9zdG9yZUNhdGVnb3J5KHVzZXJJbnB1dCk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5LCBnZXRDYXRlZ29yaWVzLCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfVxuIiwiaW1wb3J0IHsgRXZlbnQsIG5ld0NhdGVnb3J5Rm9ybSB9IGZyb20gJy4vZXZlbnQnXG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gPSAoKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XG4gIHRhYi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IG5ld0NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDYXQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24taXRlbScpO1xuICBuZXdDYXQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIE5ldyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXQpO1xuICBFdmVudC5hZGQobmV3Q2F0LCAnY2xpY2snLCBuZXdDYXRlZ29yeUZvcm0pO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGlmICghdGFiLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfVxuIiwiaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1pdGVtJ1xuXG5jb25zdCBFdmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZCA9IChlbGVtZW50LCB0eXBlLCBjYWxsYmFjaykgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gIH1cblxuICByZXR1cm4geyBhZGQgfVxufSkoKTtcblxuY29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgY29uc3QgY2xvc2VPbkNsaWNrQXdheSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgZHJvcGRvd25JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhldmVudC50YXJnZXQpICYmIG1vZGFsICE9IGV2ZW50LnRhcmdldCkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hZGQtaXRlbScpO1xuICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlSXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGFiJyk7XG4gIGNhdGVnb3J5VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICB9IClcbn07XG5cbmV4cG9ydCB7IEV2ZW50LCBzZXRFdmVudExpc3RlbmVycywgbmV3Q2F0ZWdvcnlGb3JtIH1cbiIsImNvbnN0IHRvZG9JdGVtcyA9IFtdO1xuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgcmV0dXJuIHRvZG9JdGVtc1xufVxuXG5jb25zdCBfc3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGxldCBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ3RvZG9JdGVtJylcbiAgKVxuICByZXR1cm4gaXRlbXNcbn1cblxuY29uc3QgcGFyc2VTdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBfc3RvcmVkSXRlbXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoaXRlbXNbaV1bMV0pO1xuICAgIHRvZG9JdGVtcy5wdXNoKG9iaik7XG4gIH1cbn1cblxuY29uc3QgdG9kb0l0ZW0gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB0aXRsZSA9ICBwcm9wZXJ0aWVzWyd0aXRsZSddXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllc1snZGVzY3JpcHRpb24nXTtcbiAgY29uc3QgcHJpb3JpdHlMZXZlbCA9IHByb3BlcnRpZXNbJ3ByaW9yaXR5TGV2ZWwnXTtcbiAgY29uc3QgZHVlRGF0ZSA9IHByb3BlcnRpZXNbJ2R1ZURhdGUnXTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wZXJ0aWVzWydjYXRlZ29yeSddO1xuICBjb25zdCBub3RlcyA9IHByb3BlcnRpZXNbJ25vdGVzJ107XG5cbiAgY29uc3QgaWQgPSBnZXRJdGVtcygpLmxlbmd0aCArIDE7XG4gIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTsgXG5cbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5TGV2ZWwsIGR1ZURhdGUsIGNhdGVnb3J5LCBub3RlcywgaWQgfVxufTtcblxuY29uc3QgX3N0b3JlSXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb0l0ZW0ke3RvZG9JdGVtLmlkfWAsIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG59XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSAoKSA9PiB7XG4gIGxldCBwcm9wZXJ0aWVzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdwcmlvcml0eUxldmVsJywgJ2R1ZURhdGUnLCAnY2F0ZWdvcnknLCAnbm90ZXMnXVxuXG4gIGxldCBhcmdzID0ge31cblxuICBmb3IgKGxldCBpPTA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBwcm9wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShwcm9wZXJ0aWVzW2ldKVswXS52YWx1ZTtcblxuICAgIGlmIChwcm9wVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IHByb3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShhcmdzKTtcblxuICBfc3RvcmVJdGVtKG5ld0l0ZW0pO1xufVxuXG5leHBvcnQgeyB0b2RvSXRlbSwgY3JlYXRlSXRlbSwgZ2V0SXRlbXMsIHBhcnNlU3RvcmVkSXRlbXMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vYWRkLWl0ZW0tZm9ybSdcbmltcG9ydCB7IHNldEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9ldmVudCdcbmltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfSBmcm9tICcuL2NvbnRyb2xzJ1xuaW1wb3J0IHsgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCB9IGZyb20gJy4vYWRkLWNhdGVnb3J5LWZvcm0nXG5pbXBvcnQgeyBnZXRDYXRlZ29yaWVzLCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IHsgZ2V0SXRlbXMsIHBhcnNlU3RvcmVkSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSdcblxuXG5jcmVhdGVGb3JtKCk7XG5jcmVhdGVDYXRlZ29yeURyb3Bkb3duKCk7XG5jcmVhdGVOZXdDYXRlZ29yeU1vZGFsKCk7XG5wYXJzZVN0b3JlZEl0ZW1zKCk7XG5yZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMoKTtcbnNldEV2ZW50TGlzdGVuZXJzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=