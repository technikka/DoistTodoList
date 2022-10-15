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
  container.classList.toggle('contracted');

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
  container.classList.add('contracted');

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
}

const _toggleExpandContractView = (container, item) => {
  container.textContent = '';

  if (container.classList.contains('contracted')) {
    _todoContainerContracted(container, item);
    _todoContainerExpanded(container, item);
  } else {
    _todoContainerContracted(container, item);
  }
  _displayExpandContractIcon(container, item);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSx3Q0FBd0Msd0RBQVc7QUFDbkQ7O0FBRUEsNERBQWdCO0FBQ2hCLG1FQUF3QjtBQUN4QixvRUFBc0I7QUFDdEI7QUFDQSw2REFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2F0ZWdvcnktdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaGVhZGVyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcblxuY29uc3QgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgQ2F0ZWdvcnknO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUNhdGVnb3J5KTtcbn1cblxuY29uc3Qgc2hvd0NhdGVnb3J5TW9kYWwgPSAoKSA9PiB7XG4gIGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwoKTtcblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwgaW5wdXQnKS5mb2N1cygpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBtb2RhbCAhPSBldmVudC50YXJnZXQpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5cblxuZXhwb3J0IHsgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCwgc2hvd0NhdGVnb3J5TW9kYWwgfSIsImNvbnN0IGFsbENhdGVnb3JpZXMgPSBbXTtcblxuY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgcmV0dXJuIGFsbENhdGVnb3JpZXNcbn1cblxuY29uc3QgX3N0b3JlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlOYW1lKSA9PiB7XG4gIGxldCBjYXRJZCA9IGdldENhdGVnb3JpZXMoKS5sZW5ndGggKyAxXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjYXRlZ29yeSR7Y2F0SWR9YCwgY2F0ZWdvcnlOYW1lKTtcbn1cblxuY29uc3QgX3N0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygnY2F0ZWdvcnknKVxuICApXG4gIHJldHVybiBjYXRlZ29yaWVzXG59XG5cbmNvbnN0IHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBfc3RvcmVkQ2F0ZWdvcmllcygpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKGNhdGVnb3JpZXNbaV1bMV0pO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gKCkgPT4ge1xuICBsZXQgdXNlcklucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoJ25ldy1jYXRlZ29yeScpWzBdLnZhbHVlO1xuXG4gIGlmIChhbGxDYXRlZ29yaWVzLmluY2x1ZGVzKHVzZXJJbnB1dCkpIHtcbiAgICBjb25zb2xlLmxvZygnd2lsbCBhbGVydCB1c2VyJyk7XG4gIH0gZWxzZSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKHVzZXJJbnB1dCk7XG4gICAgX3N0b3JlQ2F0ZWdvcnkodXNlcklucHV0KTtcbiAgfVxuXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrZHJvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlQ2F0ZWdvcnksIGdldENhdGVnb3JpZXMsIHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcyB9XG4iLCJpbXBvcnQgeyBzaG93Q2F0ZWdvcnlNb2RhbCB9IGZyb20gJy4vY2F0ZWdvcnktdmlldyc7XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gPSAoKSA9PiB7XG4gIGNvbnN0IHRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1jb250ZW50Jyk7XG4gIFxuICB0YWIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb25zdCBuZXdDYXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbmV3Q2F0LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgbmV3Q2F0LnRleHRDb250ZW50ID0gJ0NyZWF0ZSBOZXcnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2F0KTtcbiAgbmV3Q2F0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0NhdGVnb3J5TW9kYWwpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGlmICghdGFiLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfVxuIiwiaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBjcmVhdGVJdGVtIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAoKSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1jb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgbGV0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSAnQWRkIGFuIGl0ZW0gdG8geW91ciBsaXN0JztcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBhZGQgdGl0bGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCd0ZXh0JywgeyB0ZXh0Q29udGVudDogJ1RpdGxlJywgZm9yOiAndGl0bGUnfSkpO1xuICAvLyBhZGQgZGVzY3JpcHRpb24gcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdEZXNjcmlwdGlvbicsIGZvcjogJ2Rlc2NyaXB0aW9uJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuICAvLyBhZGQgZHVlRGF0ZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ2RhdGUnLCB7IHRleHRDb250ZW50OiAnRHVlIERhdGUnLCBmb3I6ICdkdWVEYXRlJ30pKTtcbiAgLy8gYWRkIHByaW9yaXR5TGV2ZWwgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnUHJpb3JpdHknLCBmb3I6ICdwcmlvcml0eUxldmVsJ30sIHtcImdyZWVuXCI6IFwiTG93IFByaW9yaXR5XCIsIFwieWVsbG93XCI6IFwiTm9ybWFsIFByaW9yaXR5XCIsIFwib3JhbmdlXCI6IFwiU29tZXdoYXQgUHJpb3JpdHlcIiwgXCJyZWRcIjogXCJIaWdoIFByaW9yaXR5XCJ9LCBcInllbGxvd1wiKSk7XG4gIC8vIGFkZCBub3RlcyBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ05vdGVzJywgZm9yOiAnbm90ZXMnfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBjYXRlZ29yeSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdDYXRlZ29yeScsIGZvcjogJ2NhdGVnb3J5J30sIF9jYXRlZ29yaWVzU2VsZWN0T3B0aW9ucygpLCBcImRlZmF1bHRcIikpO1xuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtaXRlbScpO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChidG4pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVJdGVtKTtcbn1cblxuY29uc3QgX2FkZExhYmVsID0gKHBhcmVudCwgcHJvcGVydGllcykgPT4ge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHByb3BlcnRpZXMudGV4dENvbnRlbnQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcGVydGllcy5mb3IpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xufVxuXG5jb25zdCBfY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlLCBpbnB1dExhYmVsLCBpbnB1dFByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBpbnB1dExhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICBpbnB1dC5uYW1lID0gaW5wdXRMYWJlbC5mb3I7XG4gIGlmIChpbnB1dFByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpbnB1dFByb3BlcnRpZXMpKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgX2NyZWF0ZVRleHRBcmVhID0gKGFyZWFMYWJlbCwgYXJlYVByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBhcmVhTGFiZWwpO1xuXG4gIGxldCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgYXJlYS5uYW1lID0gYXJlYUxhYmVsLmZvcjtcbiAgaWYgKGFyZWFQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXJlYVByb3BlcnRpZXMpKSB7XG4gICAgICBhcmVhLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZWEpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IF9jYXRlZ29yaWVzU2VsZWN0T3B0aW9ucyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBnZXRDYXRlZ29yaWVzKCk7XG4gIGxldCBzZWxlY3RPcHRpb25zID0ge31cblxuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzIGluc3RhbmNlb2YgQXJyYXkpO1xuICAvLyBjb25zb2xlLmxvZyhnZXRDYXRlZ29yaWVzLmNvbnN0cnVjdG9yLm5hbWUpO1xuICAvLyBjb25zb2xlLmxvZyhjYXRlZ29yaWVzKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcy5sZW5ndGgpO1xuXG4gIC8vIGZvciAobGV0IGk9MDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKysgKSB7XG4gIC8vICAgY29uc29sZS5sb2coY2F0ZWdvcmllc1tpXSk7XG4gIC8vICAgc2VsZWN0T3B0aW9uc1tjYXRlZ29yaWVzW2ldXSA9IGNhdGVnb3JpZXNbaV1cbiAgLy8gfVxuXG4gIC8vIGNhdGVnb3JpZXMuZm9yRWFjaChlbGVtZW50ID0+IGNvbnNvbGUubG9nKGVsZW1lbnQpKTtcblxuICAvLyBjb25zb2xlLmxvZyhzZWxlY3RPcHRpb25zKTtcbiAgLy8gY29uc29sZS5sb2coY2F0ZWdvcmllcyk7XG4gIHJldHVybiBzZWxlY3RPcHRpb25zXG59XG5cbi8vIGFkZCBzZWxlY3REZWZhdWx0IG9wdGlvbiB3aXRoIG5hbWUgYXR0ciB0byBtYWtlIG9wdGlvbi5zZWxlY3RlZCA9IHRydWVcbmNvbnN0IF9jcmVhdGVTZWxlY3QgPSAoc2VsZWN0TGFiZWwsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBzZWxlY3RMYWJlbCk7XG5cbiAgbGV0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICBzZWxlY3QubmFtZSA9IHNlbGVjdExhYmVsLmZvcjtcbiAgc2VsZWN0LmlkID0gc2VsZWN0Lm5hbWU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpXG5cbiAgZm9yIChjb25zdCBbdmFsdWUsIHRleHRDb250ZW50XSBvZiBPYmplY3QuZW50cmllcyhzZWxlY3RPcHRpb25zKSkge1xuICAgIGxldCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICBvcHRpb24udmFsdWUgPSB2YWx1ZTtcbiAgICBvcHRpb24udGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcbiAgICBpZiAoc2VsZWN0RGVmYXVsdCAmJiBvcHRpb24udmFsdWUgPT09IHNlbGVjdERlZmF1bHQpIHtcbiAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgZGlzcGxheUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGNyZWF0ZUZvcm0oKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9ybSwgZGlzcGxheUZvcm0gfSIsImltcG9ydCB7IGdldEl0ZW1zIH0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmNvbnN0IF9zZXRDb2xvckJ5UHJpb3JpdHkgPSAoZWxlbWVudCwgcHJpb3JpdHlMZXZlbCkgPT4ge1xuICBsZXQgcHJpb3JpdHlDb2xvcjtcblxuICBpZiAocHJpb3JpdHlMZXZlbCA9PT0gJ2dyZWVuJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnIzJBOUQ4RidcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAnb3JhbmdlJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0Y0QTI2MSdcbiAgfSBlbHNlIGlmIChwcmlvcml0eUxldmVsID09PSAncmVkJykge1xuICAgIHByaW9yaXR5Q29sb3IgPSAnI0U3NkY1MSc7XG4gIH0gZWxzZSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTlDNDZBJztcbiAgfVxuICBcbiAgZWxlbWVudC5zdHlsZS5ib3JkZXJDb2xvciA9IHByaW9yaXR5Q29sb3Jcbn1cblxuY29uc3QgX3VzZXJSZWFkYWJsZVByaW9yaXR5ID0gKHByaW9yaXR5KSA9PiB7XG4gIGlmIChwcmlvcml0eSA9PT0gJ2dyZWVuJykge1xuICAgIHJldHVybiAnTG93J1xuICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAneWVsbG93Jykge1xuICAgIHJldHVybiAnTm9ybWFsJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5ID09PSAnb3JhbmdlJykge1xuICAgIHJldHVybiAnTW9kZXJhdGUnXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdIaWdoJztcbiAgfVxufVxuXG5jb25zdCBfZGlzcGxheUV4cGFuZENvbnRyYWN0SWNvbiA9IChjb250YWluZXIsIGl0ZW0pID0+IHtcbiAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgaWNvbi5jbGFzc0xpc3QuYWRkKCdleHBhbmQtY29udHJhY3QtaWNvbicpO1xuICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY29udHJhY3RlZCcpKSB7XG4gICAgaWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9hcnJvdy1leHBhbmQtZG93bi5wbmcnO1xuICAgIGljb24udGl0bGUgPSAnRXhwYW5kIFZpZXcnO1xuICB9IGVsc2Uge1xuICAgIGljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvYXJyb3ctZXhwYW5kLXVwLnBuZyc7XG4gICAgaWNvbi50aXRsZSA9ICdDb250cmFjdCBWaWV3JztcbiAgfVxuICBpY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIF90b2dnbGVFeHBhbmRDb250cmFjdFZpZXcoY29udGFpbmVyLCBpdGVtKVxuICB9KTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGljb24pO1xufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lckV4cGFuZGVkID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBjb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnY29udHJhY3RlZCcpO1xuXG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBsZXQgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVzLnRleHRDb250ZW50ID0gaXRlbS5ub3RlcztcbiAgbm90ZXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLW5vdGVzJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgbGV0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7X3VzZXJSZWFkYWJsZVByaW9yaXR5KGl0ZW0ucHJpb3JpdHlMZXZlbCl9YDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWwpO1xufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lckNvbnRyYWN0ZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250cmFjdGVkJyk7XG5cbiAgbGV0IGRlbEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgZGVsSWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9kZWxldGUtZm9yZXZlci5wbmcnO1xuICBkZWxJY29uLnRpdGxlID0gJ0RlbGV0ZSBJdGVtJztcbiAgZGVsSWNvbi5jbGFzc0xpc3QuYWRkKCdkZWxldGUtaWNvbicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsSWNvbik7XG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNhdGVnb3J5LnRleHRDb250ZW50ID0gaXRlbS5jYXRlZ29yeTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcblxuICBsZXQgbWFya0NvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIG1hcmtDb21wbGV0ZS50ZXh0Q29udGVudCA9ICdDb21wbGV0ZSc7XG4gIG1hcmtDb21wbGV0ZS5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29tcGxldGUtYnRuJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtYXJrQ29tcGxldGUpO1xufVxuXG5jb25zdCBfdG9nZ2xlRXhwYW5kQ29udHJhY3RWaWV3ID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcblxuICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnY29udHJhY3RlZCcpKSB7XG4gICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gICAgX3RvZG9Db250YWluZXJFeHBhbmRlZChjb250YWluZXIsIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIF90b2RvQ29udGFpbmVyQ29udHJhY3RlZChjb250YWluZXIsIGl0ZW0pO1xuICB9XG4gIF9kaXNwbGF5RXhwYW5kQ29udHJhY3RJY29uKGNvbnRhaW5lciwgaXRlbSk7XG59XG5cbmNvbnN0IHNob3dBbGxUb2RvcyA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcblxuICBsZXQgaXRlbXMgPSBnZXRJdGVtcygpO1xuXG4gIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgX3NldENvbG9yQnlQcmlvcml0eShjb250YWluZXIsIGl0ZW0ucHJpb3JpdHlMZXZlbCk7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgfSlcbn1cblxuZXhwb3J0IHsgc2hvd0FsbFRvZG9zIH0iLCJjb25zdCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgZ2V0SXRlbXMgPSAoKSA9PiB7XG4gIHJldHVybiB0b2RvSXRlbXNcbn1cblxuY29uc3QgX3N0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBsZXQgaXRlbXMgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihcbiAgICBrZXkgPT4ga2V5WzBdLmluY2x1ZGVzKCd0b2RvSXRlbScpXG4gIClcbiAgcmV0dXJuIGl0ZW1zXG59XG5cbmNvbnN0IHBhcnNlU3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGNvbnN0IGl0ZW1zID0gX3N0b3JlZEl0ZW1zKCk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrICkge1xuICAgIGxldCBvYmogPSBKU09OLnBhcnNlKGl0ZW1zW2ldWzFdKTtcbiAgICB0b2RvSXRlbXMucHVzaChvYmopO1xuICB9XG59XG5cbmNvbnN0IHRvZG9JdGVtID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAgcHJvcGVydGllc1sndGl0bGUnXVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXNbJ2Rlc2NyaXB0aW9uJ107XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBwcm9wZXJ0aWVzWydwcmlvcml0eUxldmVsJ107XG4gIGNvbnN0IGR1ZURhdGUgPSBwcm9wZXJ0aWVzWydkdWVEYXRlJ107XG4gIGNvbnN0IGNhdGVnb3J5ID0gcHJvcGVydGllc1snY2F0ZWdvcnknXTtcbiAgY29uc3Qgbm90ZXMgPSBwcm9wZXJ0aWVzWydub3RlcyddO1xuXG4gIGNvbnN0IGlkID0gZ2V0SXRlbXMoKS5sZW5ndGggKyAxO1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7IFxuXG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eUxldmVsLCBkdWVEYXRlLCBjYXRlZ29yeSwgbm90ZXMsIGlkIH1cbn07XG5cbmNvbnN0IF9zdG9yZUl0ZW0gPSAodG9kb0l0ZW0pID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9JdGVtJHt0b2RvSXRlbS5pZH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtID0gKCkgPT4ge1xuICBsZXQgcHJvcGVydGllcyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAncHJpb3JpdHlMZXZlbCcsICdkdWVEYXRlJywgJ2NhdGVnb3J5JywgJ25vdGVzJ11cblxuICBsZXQgYXJncyA9IHt9XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgcHJvcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUocHJvcGVydGllc1tpXSlbMF0udmFsdWU7XG5cbiAgICBpZiAocHJvcFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBwcm9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdJdGVtID0gdG9kb0l0ZW0oYXJncyk7XG5cbiAgX3N0b3JlSXRlbShuZXdJdGVtKTtcbn1cblxuZXhwb3J0IHsgdG9kb0l0ZW0sIGNyZWF0ZUl0ZW0sIGdldEl0ZW1zLCBwYXJzZVN0b3JlZEl0ZW1zIH0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGRpc3BsYXlGb3JtIH0gZnJvbSAnLi90b2RvLWl0ZW0tZm9ybSdcbmltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24gfSBmcm9tICcuL2hlYWRlci12aWV3J1xuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IHBhcnNlU3RvcmVkSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSdcbmltcG9ydCB7IHNob3dBbGxUb2RvcyB9IGZyb20gJy4vdG9kby1pdGVtLXZpZXcnXG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY2F0ZWdvcnlUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH0gKVxuXG4gIGNvbnN0IG92ZXJ2aWV3VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ2aWV3LXRhYicpO1xuICBvdmVydmlld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGxUb2Rvcyk7XG5cbiAgY29uc3QgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRvZG9JdGVtLWZvcm0nKTtcbiAgdG9kb0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Rm9ybSk7XG59O1xuXG5wYXJzZVN0b3JlZEl0ZW1zKCk7XG5yZXRyaWV2ZVN0b3JlZENhdGVnb3JpZXMoKTtcbmNyZWF0ZUNhdGVnb3J5RHJvcGRvd24oKTtcbnNldEV2ZW50TGlzdGVuZXJzKCk7XG5zaG93QWxsVG9kb3MoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==