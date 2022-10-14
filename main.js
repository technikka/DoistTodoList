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

const _todoContainerMinimized = (item) => {
  let container = document.createElement('div');
  container.classList.add('todo-item-container');

  _setColorByPriority(container, item.priorityLevel);

  // let deleteBtn = document.createElement('button');
  let delIcon = document.createElement('img');
  delIcon.src = '../src/assets/delete-forever.png';
  // deleteBtn.style.backgroundImage = '../src/assets/delete-forever.png';
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

  let expandIcon = document.createElement('img');
  expandIcon.src = '../src/assets/arrow-expand-down.png';
  expandIcon.classList.add('expand-icon');
  container.appendChild(expandIcon);

  return container;
}

const showAllTodos = () => {
  const content = document.querySelector('#content');
  content.textContent = '';

  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getItems)();

  items.forEach(item => {
    content.appendChild(_todoContainerMinimized(item));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0Isa0JBQWtCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0Esa0NBQWtDLFlBQVk7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7O1VDekRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7O0FDTjhDO0FBQ1E7QUFDRDtBQUNQO0FBQ0M7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBLHdDQUF3Qyx5REFBWTs7QUFFcEQ7QUFDQSx3Q0FBd0Msd0RBQVc7QUFDbkQ7O0FBRUEsNERBQWdCO0FBQ2hCLG1FQUF3QjtBQUN4QixvRUFBc0I7QUFDdEI7QUFDQSw2REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2F0ZWdvcnktdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcblxuY29uc3QgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgQ2F0ZWdvcnknO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUNhdGVnb3J5KTtcbn1cblxuY29uc3Qgc2hvd0NhdGVnb3J5TW9kYWwgPSAoKSA9PiB7XG4gIGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwoKTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwgaW5wdXQnKS5mb2N1cygpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBtb2RhbCAhPSBldmVudC50YXJnZXQpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5cblxuZXhwb3J0IHsgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCwgc2hvd0NhdGVnb3J5TW9kYWwgfSIsImNvbnN0IGFsbENhdGVnb3JpZXMgPSBbXTtcblxuY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgcmV0dXJuIGFsbENhdGVnb3JpZXNcbn1cblxuY29uc3QgX3N0b3JlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlOYW1lKSA9PiB7XG4gIGxldCBjYXRJZCA9IGdldENhdGVnb3JpZXMoKS5sZW5ndGggKyAxXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjYXRlZ29yeSR7Y2F0SWR9YCwgY2F0ZWdvcnlOYW1lKTtcbn1cblxuY29uc3QgX3N0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygnY2F0ZWdvcnknKVxuICApXG4gIHJldHVybiBjYXRlZ29yaWVzXG59XG5cbmNvbnN0IHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBfc3RvcmVkQ2F0ZWdvcmllcygpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKGNhdGVnb3JpZXNbaV1bMV0pO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xuICBsZXQgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ25ldy1jYXRlZ29yeScpWzBdLnZhbHVlO1xuXG4gIGlmIChhbGxDYXRlZ29yaWVzLmluY2x1ZGVzKHVzZXJJbnB1dCkpIHtcbiAgICBjb25zb2xlLmxvZygnd2lsbCBhbGVydCB1c2VyJyk7XG4gIH0gZWxzZSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKHVzZXJJbnB1dCk7XG4gICAgX3N0b3JlQ2F0ZWdvcnkodXNlcklucHV0KTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrZHJvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2F0ZWdvcnksIGdldENhdGVnb3JpZXMsIHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcyB9XG4iLCJpbXBvcnQgeyBzaG93Q2F0ZWdvcnlNb2RhbCB9IGZyb20gJy4vY2F0ZWdvcnktdmlldyc7XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gPSAoKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XG4gIHRhYi5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IG5ld0NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDYXQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24taXRlbScpO1xuICBuZXdDYXQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIE5ldyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXQpO1xuICBuZXdDYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q2F0ZWdvcnlNb2RhbCk7XG5cbiAgY29uc3QgY2xvc2VPbkNsaWNrQXdheSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgaWYgKCF0YWIuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xuICAgICAgZm9yIChsZXQgaT0wOyBpIDwgZHJvcGRvd25JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZHJvcGRvd25JdGVtc1tpXSAhPT0gZXZlbnQudGFyZ2V0KSB7XG4gICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU9uQ2xpY2tBd2F5KTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biB9XG4iLCJpbXBvcnQgeyBnZXRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL3RvZG8taXRlbSdcblxuY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWNvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBsZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICBsZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdBZGQgYW4gaXRlbSB0byB5b3VyIGxpc3QnO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIC8vIGFkZCB0aXRsZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ3RleHQnLCB7IHRleHRDb250ZW50OiAnVGl0bGUnLCBmb3I6ICd0aXRsZSd9KSk7XG4gIC8vIGFkZCBkZXNjcmlwdGlvbiBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ0Rlc2NyaXB0aW9uJywgZm9yOiAnZGVzY3JpcHRpb24nfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBkdWVEYXRlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgnZGF0ZScsIHsgdGV4dENvbnRlbnQ6ICdEdWUgRGF0ZScsIGZvcjogJ2R1ZURhdGUnfSkpO1xuICAvLyBhZGQgcHJpb3JpdHlMZXZlbCBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdQcmlvcml0eScsIGZvcjogJ3ByaW9yaXR5TGV2ZWwnfSwge1wiZ3JlZW5cIjogXCJMb3cgUHJpb3JpdHlcIiwgXCJ5ZWxsb3dcIjogXCJOb3JtYWwgUHJpb3JpdHlcIiwgXCJvcmFuZ2VcIjogXCJTb21ld2hhdCBQcmlvcml0eVwiLCBcInJlZFwiOiBcIkhpZ2ggUHJpb3JpdHlcIn0sIFwieWVsbG93XCIpKTtcbiAgLy8gYWRkIG5vdGVzIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnTm90ZXMnLCBmb3I6ICdub3Rlcyd9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcbiAgLy8gYWRkIGNhdGVnb3J5IHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVTZWxlY3QoeyB0ZXh0Q29udGVudDogJ0NhdGVnb3J5JywgZm9yOiAnY2F0ZWdvcnknfSwgX2NhdGVnb3JpZXNTZWxlY3RPcHRpb25zKCksIFwiZGVmYXVsdFwiKSk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC1pdGVtJyk7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUl0ZW0pO1xufVxuXG5jb25zdCBfYWRkTGFiZWwgPSAocGFyZW50LCBwcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gcHJvcGVydGllcy50ZXh0Q29udGVudDtcbiAgbGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBwcm9wZXJ0aWVzLmZvcik7XG4gIHBhcmVudC5hcHBlbmRDaGlsZChsYWJlbCk7XG59XG5cbmNvbnN0IF9jcmVhdGVJbnB1dCA9IChpbnB1dFR5cGUsIGlucHV0TGFiZWwsIGlucHV0UHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGlucHV0TGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XG4gIGlucHV0Lm5hbWUgPSBpbnB1dExhYmVsLmZvcjtcbiAgaWYgKGlucHV0UHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGlucHV0UHJvcGVydGllcykpIHtcbiAgICAgIGlucHV0LnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBfY3JlYXRlVGV4dEFyZWEgPSAoYXJlYUxhYmVsLCBhcmVhUHJvcGVydGllcykgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIGFyZWFMYWJlbCk7XG5cbiAgbGV0IGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICBhcmVhLm5hbWUgPSBhcmVhTGFiZWwuZm9yO1xuICBpZiAoYXJlYVByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhhcmVhUHJvcGVydGllcykpIHtcbiAgICAgIGFyZWEuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYXJlYSk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgX2NhdGVnb3JpZXNTZWxlY3RPcHRpb25zID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKTtcbiAgbGV0IHNlbGVjdE9wdGlvbnMgPSB7fVxuXG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMgaW5zdGFuY2VvZiBBcnJheSk7XG4gIC8vIGNvbnNvbGUubG9nKGdldENhdGVnb3JpZXMuY29uc3RydWN0b3IubmFtZSk7XG4gIC8vIGNvbnNvbGUubG9nKGNhdGVnb3JpZXMpO1xuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzLmxlbmd0aCk7XG5cbiAgLy8gZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKyApIHtcbiAgLy8gICBjb25zb2xlLmxvZyhjYXRlZ29yaWVzW2ldKTtcbiAgLy8gICBzZWxlY3RPcHRpb25zW2NhdGVnb3JpZXNbaV1dID0gY2F0ZWdvcmllc1tpXVxuICAvLyB9XG5cbiAgLy8gY2F0ZWdvcmllcy5mb3JFYWNoKGVsZW1lbnQgPT4gY29uc29sZS5sb2coZWxlbWVudCkpO1xuXG4gIC8vIGNvbnNvbGUubG9nKHNlbGVjdE9wdGlvbnMpO1xuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgcmV0dXJuIHNlbGVjdE9wdGlvbnNcbn1cblxuLy8gYWRkIHNlbGVjdERlZmF1bHQgb3B0aW9uIHdpdGggbmFtZSBhdHRyIHRvIG1ha2Ugb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuY29uc3QgX2NyZWF0ZVNlbGVjdCA9IChzZWxlY3RMYWJlbCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIHNlbGVjdExhYmVsKTtcblxuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5uYW1lID0gc2VsZWN0TGFiZWwuZm9yO1xuICBzZWxlY3QuaWQgPSBzZWxlY3QubmFtZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdClcblxuICBmb3IgKGNvbnN0IFt2YWx1ZSwgdGV4dENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlbGVjdE9wdGlvbnMpKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlmIChzZWxlY3REZWZhdWx0ICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0RGVmYXVsdCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBkaXNwbGF5Rm9ybSA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgY3JlYXRlRm9ybSgpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb3JtLCBkaXNwbGF5Rm9ybSB9IiwiaW1wb3J0IHsgZ2V0SXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSdcblxuY29uc3QgX3NldENvbG9yQnlQcmlvcml0eSA9IChlbGVtZW50LCBwcmlvcml0eUxldmVsKSA9PiB7XG4gIGxldCBwcmlvcml0eUNvbG9yO1xuXG4gIGlmIChwcmlvcml0eUxldmVsID09PSAnZ3JlZW4nKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjMkE5RDhGJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdvcmFuZ2UnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRjRBMjYxJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdyZWQnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTc2RjUxJztcbiAgfSBlbHNlIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNFOUM0NkEnO1xuICB9XG4gIFxuICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gcHJpb3JpdHlDb2xvclxufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lck1pbmltaXplZCA9IChpdGVtKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1jb250YWluZXInKTtcblxuICBfc2V0Q29sb3JCeVByaW9yaXR5KGNvbnRhaW5lciwgaXRlbS5wcmlvcml0eUxldmVsKTtcblxuICAvLyBsZXQgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGxldCBkZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbEljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvZGVsZXRlLWZvcmV2ZXIucG5nJztcbiAgLy8gZGVsZXRlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcuLi9zcmMvYXNzZXRzL2RlbGV0ZS1mb3JldmVyLnBuZyc7XG4gIGRlbEljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEljb24pO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG5cbiAgbGV0IGV4cGFuZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZXhwYW5kSWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9hcnJvdy1leHBhbmQtZG93bi5wbmcnO1xuICBleHBhbmRJY29uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1pY29uJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBhbmRJY29uKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG5cbiAgbGV0IGl0ZW1zID0gZ2V0SXRlbXMoKTtcblxuICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoX3RvZG9Db250YWluZXJNaW5pbWl6ZWQoaXRlbSkpO1xuICB9KVxufVxuXG5leHBvcnQgeyBzaG93QWxsVG9kb3MgfSIsImNvbnN0IHRvZG9JdGVtcyA9IFtdO1xuXG5jb25zdCBnZXRJdGVtcyA9ICgpID0+IHtcbiAgcmV0dXJuIHRvZG9JdGVtc1xufVxuXG5jb25zdCBfc3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGxldCBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ3RvZG9JdGVtJylcbiAgKVxuICByZXR1cm4gaXRlbXNcbn1cblxuY29uc3QgcGFyc2VTdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBfc3RvcmVkSXRlbXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoaXRlbXNbaV1bMV0pO1xuICAgIHRvZG9JdGVtcy5wdXNoKG9iaik7XG4gIH1cbn1cblxuY29uc3QgdG9kb0l0ZW0gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB0aXRsZSA9ICBwcm9wZXJ0aWVzWyd0aXRsZSddXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllc1snZGVzY3JpcHRpb24nXTtcbiAgY29uc3QgcHJpb3JpdHlMZXZlbCA9IHByb3BlcnRpZXNbJ3ByaW9yaXR5TGV2ZWwnXTtcbiAgY29uc3QgZHVlRGF0ZSA9IHByb3BlcnRpZXNbJ2R1ZURhdGUnXTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wZXJ0aWVzWydjYXRlZ29yeSddO1xuICBjb25zdCBub3RlcyA9IHByb3BlcnRpZXNbJ25vdGVzJ107XG5cbiAgY29uc3QgaWQgPSBnZXRJdGVtcygpLmxlbmd0aCArIDE7XG4gIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTsgXG5cbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5TGV2ZWwsIGR1ZURhdGUsIGNhdGVnb3J5LCBub3RlcywgaWQgfVxufTtcblxuY29uc3QgX3N0b3JlSXRlbSA9ICh0b2RvSXRlbSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgdG9kb0l0ZW0ke3RvZG9JdGVtLmlkfWAsIEpTT04uc3RyaW5naWZ5KHRvZG9JdGVtKSk7XG59XG5cbmNvbnN0IGNyZWF0ZUl0ZW0gPSAoKSA9PiB7XG4gIGxldCBwcm9wZXJ0aWVzID0gWyd0aXRsZScsICdkZXNjcmlwdGlvbicsICdwcmlvcml0eUxldmVsJywgJ2R1ZURhdGUnLCAnY2F0ZWdvcnknLCAnbm90ZXMnXVxuXG4gIGxldCBhcmdzID0ge31cblxuICBmb3IgKGxldCBpPTA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBwcm9wVmFsdWUgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShwcm9wZXJ0aWVzW2ldKVswXS52YWx1ZTtcblxuICAgIGlmIChwcm9wVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IHByb3BWYWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShhcmdzKTtcblxuICBfc3RvcmVJdGVtKG5ld0l0ZW0pO1xufVxuXG5leHBvcnQgeyB0b2RvSXRlbSwgY3JlYXRlSXRlbSwgZ2V0SXRlbXMsIHBhcnNlU3RvcmVkSXRlbXMgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tICcuL3RvZG8taXRlbS1mb3JtJ1xuaW1wb3J0IHsgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biB9IGZyb20gJy4vaGVhZGVyLXZpZXcnXG5pbXBvcnQgeyByZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMgfSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IHsgcGFyc2VTdG9yZWRJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtJ1xuaW1wb3J0IHsgc2hvd0FsbFRvZG9zIH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3J5VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjYXRlZ29yeVRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHJvcGRvd24tY29udGVudCcpLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3cnKTtcbiAgfSApXG5cbiAgY29uc3Qgb3ZlcnZpZXdUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcub3ZlcnZpZXctdGFiJyk7XG4gIG92ZXJ2aWV3VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0FsbFRvZG9zKTtcblxuICBjb25zdCB0b2RvRm9ybUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tdG9kb0l0ZW0tZm9ybScpO1xuICB0b2RvRm9ybUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGb3JtKTtcbn07XG5cbnBhcnNlU3RvcmVkSXRlbXMoKTtcbnJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcygpO1xuY3JlYXRlQ2F0ZWdvcnlEcm9wZG93bigpO1xuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbnNob3dBbGxUb2RvcygpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9