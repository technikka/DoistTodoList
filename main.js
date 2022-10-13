/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/add-category-form.js":
/*!**********************************!*\
  !*** ./src/add-category-form.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createNewCategoryModal": () => (/* binding */ createNewCategoryModal)
/* harmony export */ });
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_category__WEBPACK_IMPORTED_MODULE_1__);



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
  _event__WEBPACK_IMPORTED_MODULE_0__.Event.add(btn, 'click',  _category__WEBPACK_IMPORTED_MODULE_1__.createCategory );
}





/***/ }),

/***/ "./src/add-item-form.js":
/*!******************************!*\
  !*** ./src/add-item-form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
/***/ (() => {

// Serves as prototype for individual categories
const Category =  {
}

const createCategory = (name) => {
  newCategory = Category(name);
}

// when user adds a new category, create an object with its prototype category ..
// newCategory = Object.create(Category), then it will respond to instanceOf ??


/***/ }),

/***/ "./src/controls.js":
/*!*************************!*\
  !*** ./src/controls.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
          console.log(event.target);
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

"use strict";
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItems": () => (/* binding */ getItems)
/* harmony export */ });
/* harmony import */ var _add_item_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item-form */ "./src/add-item-form.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./controls */ "./src/controls.js");
/* harmony import */ var _add_category_form__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./add-category-form */ "./src/add-category-form.js");





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

const _parseStoredItems = () => {
  const items = _storedItems();
  for (let i = 0; i < items.length; i++ ) {
    let obj = JSON.parse(items[i][1]);
    todoItems.push(obj);
  }
}


;(0,_add_item_form__WEBPACK_IMPORTED_MODULE_0__.createForm)();
(0,_controls__WEBPACK_IMPORTED_MODULE_2__.createCategoryDropdown)();
(0,_add_category_form__WEBPACK_IMPORTED_MODULE_3__.createNewCategoryModal)();

if (_storedItems().length > 0) {
  _parseStoredItems();
}
(0,_event__WEBPACK_IMPORTED_MODULE_1__.setEventListeners)();



/***/ }),

/***/ "./src/todo-item.js":
/*!**************************!*\
  !*** ./src/todo-item.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createItem": () => (/* binding */ createItem),
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/index.js");


const todoItem = (properties) => {
  const title =  properties['title']
  const description = properties['description'];
  const priorityLevel = properties['priorityLevel'];
  const dueDate = properties['dueDate'];
  const category = properties['category'];
  const notes = properties['notes'];

  const id = (0,_index__WEBPACK_IMPORTED_MODULE_0__.getItems)().length + 1;
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

  // ATTENTION: don't want storeItem call here
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1jYXRlZ29yeS1mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWRkLWl0ZW0tZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29udHJvbHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudCwgY2xvc2VPbkNsaWNrQXdheSB9IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBjcmVhdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5cbmNvbnN0IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCduZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IENhdGVnb3J5JztcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdjcmVhdGUnO1xuICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xuICBFdmVudC5hZGQoYnRuLCAnY2xpY2snLCAgY3JlYXRlQ2F0ZWdvcnkgKTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgfSIsImNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1jb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgbGV0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSAnQWRkIGFuIGl0ZW0gdG8geW91ciBsaXN0JztcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBhZGQgdGl0bGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCd0ZXh0JywgeyB0ZXh0Q29udGVudDogJ1RpdGxlJywgZm9yOiAndGl0bGUnfSkpO1xuICAvLyBhZGQgZGVzY3JpcHRpb24gcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdEZXNjcmlwdGlvbicsIGZvcjogJ2Rlc2NyaXB0aW9uJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuICAvLyBhZGQgZHVlRGF0ZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ2RhdGUnLCB7IHRleHRDb250ZW50OiAnRHVlIERhdGUnLCBmb3I6ICdkdWVEYXRlJ30pKTtcbiAgLy8gYWRkIHByaW9yaXR5TGV2ZWwgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnUHJpb3JpdHknLCBmb3I6ICdwcmlvcml0eUxldmVsJ30sIHtcImdyZWVuXCI6IFwiTG93IFByaW9yaXR5XCIsIFwieWVsbG93XCI6IFwiTm9ybWFsIFByaW9yaXR5XCIsIFwib3JhbmdlXCI6IFwiU29tZXdoYXQgUHJpb3JpdHlcIiwgXCJyZWRcIjogXCJIaWdoIFByaW9yaXR5XCJ9LCBcInllbGxvd1wiKSk7XG4gIC8vIGFkZCBub3RlcyBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ05vdGVzJywgZm9yOiAnbm90ZXMnfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBjYXRlZ29yeSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdDYXRlZ29yeScsIGZvcjogJ2NhdGVnb3J5J30sIHtcImRlZmF1bHRcIjogXCJEZWZhdWx0XCJ9LCBcImRlZmF1bHRcIikpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtaXRlbScpO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChidG4pO1xufVxuXG5jb25zdCBfYWRkTGFiZWwgPSAocGFyZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcGVydGllcy50ZXh0Q29udGVudDtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wZXJ0aWVzLmZvcik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG59XG5cbmNvbnN0IF9jcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0TGFiZWwsIGlucHV0UHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGlucHV0TGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gIGlucHV0Lm5hbWUgPSBpbnB1dExhYmVsLmZvcjtcbiAgaWYgKGlucHV0UHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGlucHV0UHJvcGVydGllcykpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBfY3JlYXRlVGV4dEFyZWEgPSAoYXJlYUxhYmVsLCBhcmVhUHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGFyZWFMYWJlbCk7XG5cbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBhcmVhLm5hbWUgPSBhcmVhTGFiZWwuZm9yO1xuICBpZiAoYXJlYVByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhcmVhUHJvcGVydGllcykpIHtcbiAgICAgIGFyZWEuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJlYSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gYWRkIHNlbGVjdERlZmF1bHQgb3B0aW9uIHdpdGggbmFtZSBhdHRyIHRvIG1ha2Ugb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuY29uc3QgX2NyZWF0ZVNlbGVjdCA9IChzZWxlY3RMYWJlbCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIHNlbGVjdExhYmVsKTtcblxuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5uYW1lID0gc2VsZWN0TGFiZWwuZm9yO1xuICBzZWxlY3QuaWQgPSBzZWxlY3QubmFtZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdClcblxuICBmb3IgKGNvbnN0IFt2YWx1ZSwgdGV4dENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlbGVjdE9wdGlvbnMpKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlmIChzZWxlY3REZWZhdWx0ICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0RGVmYXVsdCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtIH0iLCIvLyBTZXJ2ZXMgYXMgcHJvdG90eXBlIGZvciBpbmRpdmlkdWFsIGNhdGVnb3JpZXNcbmNvbnN0IENhdGVnb3J5ID0gIHtcbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnkgPSAobmFtZSkgPT4ge1xuICBuZXdDYXRlZ29yeSA9IENhdGVnb3J5KG5hbWUpO1xufVxuXG4vLyB3aGVuIHVzZXIgYWRkcyBhIG5ldyBjYXRlZ29yeSwgY3JlYXRlIGFuIG9iamVjdCB3aXRoIGl0cyBwcm90b3R5cGUgY2F0ZWdvcnkgLi5cbi8vIG5ld0NhdGVnb3J5ID0gT2JqZWN0LmNyZWF0ZShDYXRlZ29yeSksIHRoZW4gaXQgd2lsbCByZXNwb25kIHRvIGluc3RhbmNlT2YgPz9cbiIsImltcG9ydCB7IEV2ZW50LCBuZXdDYXRlZ29yeUZvcm0gfSBmcm9tICcuL2V2ZW50J1xuXG5jb25zdCBjcmVhdGVDYXRlZ29yeURyb3Bkb3duID0gKCkgPT4ge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGFiJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xuICB0YWIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBuZXdDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Q2F0LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgbmV3Q2F0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2F0KTtcbiAgRXZlbnQuYWRkKG5ld0NhdCwgJ2NsaWNrJywgbmV3Q2F0ZWdvcnlGb3JtKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBpZiAoIXRhYi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldICE9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfVxuIiwiaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1pdGVtJ1xuXG5jb25zdCBFdmVudCA9ICgoKSA9PiB7XG4gIGNvbnN0IGFkZCA9IChlbGVtZW50LCB0eXBlLCBjYWxsYmFjaykgPT4ge1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBjYWxsYmFjayk7XG4gIH1cblxuICByZXR1cm4geyBhZGQgfVxufSkoKTtcblxuY29uc3QgbmV3Q2F0ZWdvcnlGb3JtID0gKCkgPT4ge1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG5cbiAgY29uc3QgY2xvc2VPbkNsaWNrQXdheSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgZHJvcGRvd25JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhldmVudC50YXJnZXQpICYmIG1vZGFsICE9IGV2ZW50LnRhcmdldCkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBhZGRJdGVtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hZGQtaXRlbScpO1xuICBhZGRJdGVtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlSXRlbSk7XG5cbiAgY29uc3QgY2F0ZWdvcnlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGFiJyk7XG4gIGNhdGVnb3J5VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICB9IClcbn07XG5cbmV4cG9ydCB7IEV2ZW50LCBzZXRFdmVudExpc3RlbmVycywgbmV3Q2F0ZWdvcnlGb3JtIH1cbiIsImltcG9ydCB7IGNyZWF0ZUZvcm0gfSBmcm9tICcuL2FkZC1pdGVtLWZvcm0nXG5pbXBvcnQgeyBzZXRFdmVudExpc3RlbmVycyB9IGZyb20gJy4vZXZlbnQnXG5pbXBvcnQgeyBjcmVhdGVDYXRlZ29yeURyb3Bkb3duIH0gZnJvbSAnLi9jb250cm9scydcbmltcG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgfSBmcm9tICcuL2FkZC1jYXRlZ29yeS1mb3JtJ1xuXG5jb25zdCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gIHJldHVybiB0b2RvSXRlbXNcbn1cblxuY29uc3QgX3N0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBsZXQgaXRlbXMgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihcbiAgICBrZXkgPT4ga2V5WzBdLmluY2x1ZGVzKCd0b2RvSXRlbScpXG4gIClcbiAgcmV0dXJuIGl0ZW1zXG59XG5cbmNvbnN0IF9wYXJzZVN0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IF9zdG9yZWRJdGVtcygpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGl0ZW1zW2ldWzFdKTtcbiAgICB0b2RvSXRlbXMucHVzaChvYmopO1xuICB9XG59XG5cblxuY3JlYXRlRm9ybSgpO1xuY3JlYXRlQ2F0ZWdvcnlEcm9wZG93bigpO1xuY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCgpO1xuXG5pZiAoX3N0b3JlZEl0ZW1zKCkubGVuZ3RoID4gMCkge1xuICBfcGFyc2VTdG9yZWRJdGVtcygpO1xufVxuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcblxuZXhwb3J0IHsgZ2V0SXRlbXMgfSIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi9pbmRleCdcblxuY29uc3QgdG9kb0l0ZW0gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB0aXRsZSA9ICBwcm9wZXJ0aWVzWyd0aXRsZSddXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllc1snZGVzY3JpcHRpb24nXTtcbiAgY29uc3QgcHJpb3JpdHlMZXZlbCA9IHByb3BlcnRpZXNbJ3ByaW9yaXR5TGV2ZWwnXTtcbiAgY29uc3QgZHVlRGF0ZSA9IHByb3BlcnRpZXNbJ2R1ZURhdGUnXTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wZXJ0aWVzWydjYXRlZ29yeSddO1xuICBjb25zdCBub3RlcyA9IHByb3BlcnRpZXNbJ25vdGVzJ107XG5cbiAgY29uc3QgaWQgPSBnZXRJdGVtcygpLmxlbmd0aCArIDE7XG4gIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTsgXG5cbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5TGV2ZWwsIGR1ZURhdGUsIGNhdGVnb3J5LCBub3RlcywgaWQgfVxufTtcblxuY29uc3QgX3N0b3JlSXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb0l0ZW0ke3RvZG9JdGVtLmlkfWAsIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG59XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSAoKSA9PiB7XG4gIGxldCBwcm9wZXJ0aWVzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdwcmlvcml0eUxldmVsJywgJ2R1ZURhdGUnLCAnY2F0ZWdvcnknLCAnbm90ZXMnXVxuXG4gIGxldCBhcmdzID0ge31cblxuICBmb3IgKGxldCBpPTA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBwcm9wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShwcm9wZXJ0aWVzW2ldKVswXS52YWx1ZTtcblxuICAgIGlmIChwcm9wVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IHByb3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShhcmdzKTtcblxuICAvLyBBVFRFTlRJT046IGRvbid0IHdhbnQgc3RvcmVJdGVtIGNhbGwgaGVyZVxuICBfc3RvcmVJdGVtKG5ld0l0ZW0pO1xufVxuXG5leHBvcnQgeyB0b2RvSXRlbSwgY3JlYXRlSXRlbSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9