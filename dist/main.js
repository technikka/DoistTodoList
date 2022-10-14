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

/***/ "./src/todo-item-view.js":
/*!*******************************!*\
  !*** ./src/todo-item-view.js ***!
  \*******************************/
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

const _displayExpandContractIcon = (container) => {
  let icon = document.createElement('img');
  icon.classList.add('expand-contract-icon');
  if (container.classList.contains('contracted')) {
    icon.src = '../src/assets/arrow-expand-down.png';
    icon.title = 'Expand View';
  } else {
    icon.src = '../src/assets/arrow-expand-up.png';
    icon.title = 'Contract View';
  }
  icon.addEventListener('click', _toggleExpandContractView);
  container.appendChild(icon);
}

const _todoContainerExpanded = (container, item) => {
  container.classList.toggle('contracted');

  let description = document.createElement('p');
  description.textContent = item.description;
  description.classList.add('todo-item-description');
  container.appendChild(description);
}

const _todoContainerContracted = (container, item) => {
  container.classList.toggle('contracted');

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
}

const _toggleExpandContractView = (container, item) => {
  container.textContent = '';

  if (container.classList.contains('contracted')) {
    _todoContainerContracted(container, item)
    _todoContainerExpanded(container, item);
  } else {
    _todoContainerContracted(container, item);
  }
  _displayExpandContractIcon(container);
}

const showAllTodos = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getItems)();

  items.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('todo-item-container');
    _setColorByPriority(container, item.priorityLevel);
    _toggleExpandContractView(container, item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTs7QUFFQSxjQUFjLG9EQUFROztBQUV0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLGtCQUFrQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBLGtDQUFrQyxZQUFZO0FBQzlDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsZ0JBQWdCLHVCQUF1QjtBQUN2Qzs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOzs7Ozs7OztVQ3pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7OztBQ044QztBQUNRO0FBQ0Q7QUFDUDtBQUNDOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSx3Q0FBd0MseURBQVk7O0FBRXBEO0FBQ0Esd0NBQXdDLHdEQUFXO0FBQ25EOztBQUVBLDREQUFnQjtBQUNoQixtRUFBd0I7QUFDeEIsb0VBQXNCO0FBQ3RCO0FBQ0EsNkRBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2hlYWRlci12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5cbmNvbnN0IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG4gIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCduZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29udGVudENvbnRhaW5lci5hcHBlbmRDaGlsZChtb2RhbCk7XG5cbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSAnTmV3IENhdGVnb3J5JztcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCAnbmV3LWNhdGVnb3J5Jyk7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdjcmVhdGUnO1xuICBtb2RhbC5hcHBlbmRDaGlsZChidG4pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVDYXRlZ29yeSk7XG59XG5cbmNvbnN0IHNob3dDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsKCk7XG5cbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnN0IGJhY2tkcm9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wJyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgYmFja2Ryb3AuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsIGlucHV0JykuZm9jdXMoKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoZHJvcGRvd25JdGVtc1tpXSA9PT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIW1vZGFsLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkgJiYgbW9kYWwgIT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICBiYWNrZHJvcC5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgfVxuICB9XG5cbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU9uQ2xpY2tBd2F5KTtcbn1cblxuXG5cbmV4cG9ydCB7IGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwsIHNob3dDYXRlZ29yeU1vZGFsIH0iLCJjb25zdCBhbGxDYXRlZ29yaWVzID0gW107XG5cbmNvbnN0IGdldENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIHJldHVybiBhbGxDYXRlZ29yaWVzXG59XG5cbmNvbnN0IF9zdG9yZUNhdGVnb3J5ID0gKGNhdGVnb3J5TmFtZSkgPT4ge1xuICBsZXQgY2F0SWQgPSBnZXRDYXRlZ29yaWVzKCkubGVuZ3RoICsgMVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY2F0ZWdvcnkke2NhdElkfWAsIGNhdGVnb3J5TmFtZSk7XG59XG5cbmNvbnN0IF9zdG9yZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ2NhdGVnb3J5JylcbiAgKVxuICByZXR1cm4gY2F0ZWdvcmllc1xufVxuXG5jb25zdCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gX3N0b3JlZENhdGVnb3JpZXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKykge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaChjYXRlZ29yaWVzW2ldWzFdKTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeSA9ICgpID0+IHtcbiAgbGV0IHVzZXJJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKCduZXctY2F0ZWdvcnknKVswXS52YWx1ZTtcblxuICBpZiAoYWxsQ2F0ZWdvcmllcy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgY29uc29sZS5sb2coJ3dpbGwgYWxlcnQgdXNlcicpO1xuICB9IGVsc2Uge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaCh1c2VySW5wdXQpO1xuICAgIF9zdG9yZUNhdGVnb3J5KHVzZXJJbnB1dCk7XG4gIH1cblxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5LCBnZXRDYXRlZ29yaWVzLCByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfVxuIiwiaW1wb3J0IHsgc2hvd0NhdGVnb3J5TW9kYWwgfSBmcm9tICcuL2NhdGVnb3J5LXZpZXcnO1xuXG5jb25zdCBjcmVhdGVDYXRlZ29yeURyb3Bkb3duID0gKCkgPT4ge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGFiJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xuICB0YWIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBuZXdDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Q2F0LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgbmV3Q2F0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2F0KTtcbiAgbmV3Q2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0NhdGVnb3J5TW9kYWwpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGlmICghdGFiLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfVxuIiwiaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1jb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgbGV0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSAnQWRkIGFuIGl0ZW0gdG8geW91ciBsaXN0JztcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBhZGQgdGl0bGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCd0ZXh0JywgeyB0ZXh0Q29udGVudDogJ1RpdGxlJywgZm9yOiAndGl0bGUnfSkpO1xuICAvLyBhZGQgZGVzY3JpcHRpb24gcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdEZXNjcmlwdGlvbicsIGZvcjogJ2Rlc2NyaXB0aW9uJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuICAvLyBhZGQgZHVlRGF0ZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ2RhdGUnLCB7IHRleHRDb250ZW50OiAnRHVlIERhdGUnLCBmb3I6ICdkdWVEYXRlJ30pKTtcbiAgLy8gYWRkIHByaW9yaXR5TGV2ZWwgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnUHJpb3JpdHknLCBmb3I6ICdwcmlvcml0eUxldmVsJ30sIHtcImdyZWVuXCI6IFwiTG93IFByaW9yaXR5XCIsIFwieWVsbG93XCI6IFwiTm9ybWFsIFByaW9yaXR5XCIsIFwib3JhbmdlXCI6IFwiU29tZXdoYXQgUHJpb3JpdHlcIiwgXCJyZWRcIjogXCJIaWdoIFByaW9yaXR5XCJ9LCBcInllbGxvd1wiKSk7XG4gIC8vIGFkZCBub3RlcyBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ05vdGVzJywgZm9yOiAnbm90ZXMnfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBjYXRlZ29yeSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdDYXRlZ29yeScsIGZvcjogJ2NhdGVnb3J5J30sIF9jYXRlZ29yaWVzU2VsZWN0T3B0aW9ucygpLCBcImRlZmF1bHRcIikpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtaXRlbScpO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChidG4pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVJdGVtKTtcbn1cblxuY29uc3QgX2FkZExhYmVsID0gKHBhcmVudCwgcHJvcGVydGllcykgPT4ge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHByb3BlcnRpZXMudGV4dENvbnRlbnQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcGVydGllcy5mb3IpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xufVxuXG5jb25zdCBfY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlLCBpbnB1dExhYmVsLCBpbnB1dFByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBpbnB1dExhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICBpbnB1dC5uYW1lID0gaW5wdXRMYWJlbC5mb3I7XG4gIGlmIChpbnB1dFByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpbnB1dFByb3BlcnRpZXMpKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgX2NyZWF0ZVRleHRBcmVhID0gKGFyZWFMYWJlbCwgYXJlYVByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBhcmVhTGFiZWwpO1xuXG4gIGxldCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgYXJlYS5uYW1lID0gYXJlYUxhYmVsLmZvcjtcbiAgaWYgKGFyZWFQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXJlYVByb3BlcnRpZXMpKSB7XG4gICAgICBhcmVhLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZWEpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IF9jYXRlZ29yaWVzU2VsZWN0T3B0aW9ucyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBnZXRDYXRlZ29yaWVzKCk7XG4gIGxldCBzZWxlY3RPcHRpb25zID0ge31cblxuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzIGluc3RhbmNlb2YgQXJyYXkpO1xuICAvLyBjb25zb2xlLmxvZyhnZXRDYXRlZ29yaWVzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcy5sZW5ndGgpO1xuXG4gIC8vIGZvciAobGV0IGk9MDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKysgKSB7XG4gIC8vICAgY29uc29sZS5sb2coY2F0ZWdvcmllc1tpXSk7XG4gIC8vICAgc2VsZWN0T3B0aW9uc1tjYXRlZ29yaWVzW2ldXSA9IGNhdGVnb3JpZXNbaV1cbiAgLy8gfVxuXG4gIC8vIGNhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IGNvbnNvbGUubG9nKGVsZW1lbnQpKTtcblxuICAvLyBjb25zb2xlLmxvZyhzZWxlY3RPcHRpb25zKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gIHJldHVybiBzZWxlY3RPcHRpb25zXG59XG5cbi8vIGFkZCBzZWxlY3REZWZhdWx0IG9wdGlvbiB3aXRoIG5hbWUgYXR0ciB0byBtYWtlIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbmNvbnN0IF9jcmVhdGVTZWxlY3QgPSAoc2VsZWN0TGFiZWwsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBzZWxlY3RMYWJlbCk7XG5cbiAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QubmFtZSA9IHNlbGVjdExhYmVsLmZvcjtcbiAgc2VsZWN0LmlkID0gc2VsZWN0Lm5hbWU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpXG5cbiAgZm9yIChjb25zdCBbdmFsdWUsIHRleHRDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhzZWxlY3RPcHRpb25zKSkge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBpZiAoc2VsZWN0RGVmYXVsdCAmJiBvcHRpb24udmFsdWUgPT09IHNlbGVjdERlZmF1bHQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgZGlzcGxheUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGNyZWF0ZUZvcm0oKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9ybSwgZGlzcGxheUZvcm0gfSIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmNvbnN0IF9zZXRDb2xvckJ5UHJpb3JpdHkgPSAoZWxlbWVudCwgcHJpb3JpdHlMZXZlbCkgPT4ge1xuICBsZXQgcHJpb3JpdHlDb2xvcjtcblxuICBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ2dyZWVuJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnIzJBOUQ4RidcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAnb3JhbmdlJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0Y0QTI2MSdcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAncmVkJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0U3NkY1MSc7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTlDNDZBJztcbiAgfVxuICBcbiAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHByaW9yaXR5Q29sb3Jcbn1cblxuY29uc3QgX2Rpc3BsYXlFeHBhbmRDb250cmFjdEljb24gPSAoY29udGFpbmVyKSA9PiB7XG4gIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGljb24uY2xhc3NMaXN0LmFkZCgnZXhwYW5kLWNvbnRyYWN0LWljb24nKTtcbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRyYWN0ZWQnKSkge1xuICAgIGljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvYXJyb3ctZXhwYW5kLWRvd24ucG5nJztcbiAgICBpY29uLnRpdGxlID0gJ0V4cGFuZCBWaWV3JztcbiAgfSBlbHNlIHtcbiAgICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2Fycm93LWV4cGFuZC11cC5wbmcnO1xuICAgIGljb24udGl0bGUgPSAnQ29udHJhY3QgVmlldyc7XG4gIH1cbiAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF90b2dnbGVFeHBhbmRDb250cmFjdFZpZXcpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5cbmNvbnN0IF90b2RvQ29udGFpbmVyRXhwYW5kZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG5cbiAgbGV0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1kZXNjcmlwdGlvbicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lckNvbnRyYWN0ZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG5cbiAgbGV0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGVsSWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9kZWxldGUtZm9yZXZlci5wbmcnO1xuICBkZWxJY29uLnRpdGxlID0gJ0RlbGV0ZSBJdGVtJztcbiAgZGVsSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsSWNvbik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNhdGVnb3J5LnRleHRDb250ZW50ID0gaXRlbS5jYXRlZ29yeTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcbn1cblxuY29uc3QgX3RvZ2dsZUV4cGFuZENvbnRyYWN0VmlldyA9IChjb250YWluZXIsIGl0ZW0pID0+IHtcbiAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG5cbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRyYWN0ZWQnKSkge1xuICAgIF90b2RvQ29udGFpbmVyQ29udHJhY3RlZChjb250YWluZXIsIGl0ZW0pXG4gICAgX3RvZG9Db250YWluZXJFeHBhbmRlZChjb250YWluZXIsIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIF90b2RvQ29udGFpbmVyQ29udHJhY3RlZChjb250YWluZXIsIGl0ZW0pO1xuICB9XG4gIF9kaXNwbGF5RXhwYW5kQ29udHJhY3RJY29uKGNvbnRhaW5lcik7XG59XG5cbmNvbnN0IHNob3dBbGxUb2RvcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICBsZXQgaXRlbXMgPSBnZXRJdGVtcygpO1xuXG4gIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgX3NldENvbG9yQnlQcmlvcml0eShjb250YWluZXIsIGl0ZW0ucHJpb3JpdHlMZXZlbCk7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSlcbn1cblxuZXhwb3J0IHsgc2hvd0FsbFRvZG9zIH0iLCJjb25zdCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gIHJldHVybiB0b2RvSXRlbXNcbn1cblxuY29uc3QgX3N0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBsZXQgaXRlbXMgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihcbiAgICBrZXkgPT4ga2V5WzBdLmluY2x1ZGVzKCd0b2RvSXRlbScpXG4gIClcbiAgcmV0dXJuIGl0ZW1zXG59XG5cbmNvbnN0IHBhcnNlU3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gX3N0b3JlZEl0ZW1zKCk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGl0ZW1zW2ldWzFdKTtcbiAgICB0b2RvSXRlbXMucHVzaChvYmopO1xuICB9XG59XG5cbmNvbnN0IHRvZG9JdGVtID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAgcHJvcGVydGllc1sndGl0bGUnXVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXNbJ2Rlc2NyaXB0aW9uJ107XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBwcm9wZXJ0aWVzWydwcmlvcml0eUxldmVsJ107XG4gIGNvbnN0IGR1ZURhdGUgPSBwcm9wZXJ0aWVzWydkdWVEYXRlJ107XG4gIGNvbnN0IGNhdGVnb3J5ID0gcHJvcGVydGllc1snY2F0ZWdvcnknXTtcbiAgY29uc3Qgbm90ZXMgPSBwcm9wZXJ0aWVzWydub3RlcyddO1xuXG4gIGNvbnN0IGlkID0gZ2V0SXRlbXMoKS5sZW5ndGggKyAxO1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7IFxuXG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eUxldmVsLCBkdWVEYXRlLCBjYXRlZ29yeSwgbm90ZXMsIGlkIH1cbn07XG5cbmNvbnN0IF9zdG9yZUl0ZW0gPSAodG9kb0l0ZW0pID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9JdGVtJHt0b2RvSXRlbS5pZH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtID0gKCkgPT4ge1xuICBsZXQgcHJvcGVydGllcyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAncHJpb3JpdHlMZXZlbCcsICdkdWVEYXRlJywgJ2NhdGVnb3J5JywgJ25vdGVzJ11cblxuICBsZXQgYXJncyA9IHt9XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgcHJvcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUocHJvcGVydGllc1tpXSlbMF0udmFsdWU7XG5cbiAgICBpZiAocHJvcFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBwcm9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdJdGVtID0gdG9kb0l0ZW0oYXJncyk7XG5cbiAgX3N0b3JlSXRlbShuZXdJdGVtKTtcbn1cblxuZXhwb3J0IHsgdG9kb0l0ZW0sIGNyZWF0ZUl0ZW0sIGdldEl0ZW1zLCBwYXJzZVN0b3JlZEl0ZW1zIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSAnLi90b2RvLWl0ZW0tZm9ybSdcbmltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfSBmcm9tICcuL2hlYWRlci12aWV3J1xuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IHBhcnNlU3RvcmVkSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSdcbmltcG9ydCB7IHNob3dBbGxUb2RvcyB9IGZyb20gJy4vdG9kby1pdGVtLXZpZXcnXG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY2F0ZWdvcnlUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH0gKVxuXG4gIGNvbnN0IG92ZXJ2aWV3VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ2aWV3LXRhYicpO1xuICBvdmVydmlld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGxUb2Rvcyk7XG5cbiAgY29uc3QgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRvZG9JdGVtLWZvcm0nKTtcbiAgdG9kb0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Rm9ybSk7XG59O1xuXG5wYXJzZVN0b3JlZEl0ZW1zKCk7XG5yZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMoKTtcbmNyZWF0ZUNhdGVnb3J5RHJvcGRvd24oKTtcbnNldEV2ZW50TGlzdGVuZXJzKCk7XG5zaG93QWxsVG9kb3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==