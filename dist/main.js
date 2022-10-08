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

/***/ "./src/event.js":
/*!**********************!*\
  !*** ./src/event.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setEventListeners": () => (/* binding */ setEventListeners)
/* harmony export */ });
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");


// const Event = (type) => {
//   type

//   const setListener = (type, callback) => {

//   }

//   return { setListener }
// }

const setEventListeners = () => {
  const addItemBtn = document.querySelector('.btn-add-item');
  addItemBtn.addEventListener('click', _todo_item__WEBPACK_IMPORTED_MODULE_0__.createItem);
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItems": () => (/* binding */ getItems)
/* harmony export */ });
/* harmony import */ var _add_item_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./add-item-form */ "./src/add-item-form.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event */ "./src/event.js");



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4Q0FBOEMsbUNBQW1DO0FBQ2pGO0FBQ0EseUNBQXlDLCtDQUErQyxJQUFJLDBCQUEwQjtBQUN0SDtBQUNBLDhDQUE4Qyx3Q0FBd0M7QUFDdEY7QUFDQSx1Q0FBdUMsOENBQThDLEdBQUcsNEdBQTRHO0FBQ3BNO0FBQ0EseUNBQXlDLG1DQUFtQyxJQUFJLDBCQUEwQjtBQUMxRztBQUNBLHVDQUF1Qyx5Q0FBeUMsR0FBRyxxQkFBcUI7O0FBRXhHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHd0M7O0FBRXhDO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsY0FBYztBQUNkOztBQUVBO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQVU7QUFDakQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0QztBQUNEOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSwyREFBVTs7QUFFVjtBQUNBO0FBQ0E7QUFDQSx5REFBaUI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCaUI7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsZ0RBQVE7QUFDckI7O0FBRUEsVUFBVTtBQUNWOztBQUVBO0FBQ0Esa0NBQWtDLFlBQVk7QUFDOUM7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxnQkFBZ0IsdUJBQXVCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN2Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FkZC1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9ldmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY3JlYXRlRm9ybSA9ICgpID0+IHtcbiAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuXG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2FkZC1pdGVtLWNvbnRhaW5lcicpO1xuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgbGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtKTtcblxuICBsZXQgZmllbGRzZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpO1xuICBmb3JtLmFwcGVuZENoaWxkKGZpZWxkc2V0KTtcblxuICBsZXQgbGVnZW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGVnZW5kJyk7XG4gIGxlZ2VuZC50ZXh0Q29udGVudCA9ICdBZGQgYW4gaXRlbSB0byB5b3VyIGxpc3QnO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChsZWdlbmQpO1xuXG4gIC8vIGFkZCB0aXRsZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ3RleHQnLCB7IHRleHRDb250ZW50OiAnVGl0bGUnLCBmb3I6ICd0aXRsZSd9KSk7XG4gIC8vIGFkZCBkZXNjcmlwdGlvbiBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ0Rlc2NyaXB0aW9uJywgZm9yOiAnZGVzY3JpcHRpb24nfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG4gIC8vIGFkZCBkdWVEYXRlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgnZGF0ZScsIHsgdGV4dENvbnRlbnQ6ICdEdWUgRGF0ZScsIGZvcjogJ2R1ZURhdGUnfSkpO1xuICAvLyBhZGQgcHJpb3JpdHlMZXZlbCBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdQcmlvcml0eScsIGZvcjogJ3ByaW9yaXR5TGV2ZWwnfSwge1wiZ3JlZW5cIjogXCJMb3cgUHJpb3JpdHlcIiwgXCJ5ZWxsb3dcIjogXCJOb3JtYWwgUHJpb3JpdHlcIiwgXCJvcmFuZ2VcIjogXCJTb21ld2hhdCBQcmlvcml0eVwiLCBcInJlZFwiOiBcIkhpZ2ggUHJpb3JpdHlcIn0sIFwieWVsbG93XCIpKTtcbiAgLy8gYWRkIG5vdGVzIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnTm90ZXMnLCBmb3I6ICdub3Rlcyd9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcbiAgLy8gYWRkIGNhdGVnb3J5IHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVTZWxlY3QoeyB0ZXh0Q29udGVudDogJ0NhdGVnb3J5JywgZm9yOiAnY2F0ZWdvcnknfSwge1wiZGVmYXVsdFwiOiBcIkRlZmF1bHRcIn0sIFwiZGVmYXVsdFwiKSk7XG5cbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIGJ0bi50ZXh0Q29udGVudCA9ICdBZGQnO1xuICBidG4uY2xhc3NMaXN0LmFkZCgnYnRuLWFkZC1pdGVtJyk7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGJ0bik7XG59XG5cbmNvbnN0IF9hZGRMYWJlbCA9IChwYXJlbnQsIHByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBwcm9wZXJ0aWVzLnRleHRDb250ZW50O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3BlcnRpZXMuZm9yKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbn1cblxuY29uc3QgX2NyZWF0ZUlucHV0ID0gKGlucHV0VHlwZSwgaW5wdXRMYWJlbCwgaW5wdXRQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgaW5wdXRMYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgaW5wdXQubmFtZSA9IGlucHV0TGFiZWwuZm9yO1xuICBpZiAoaW5wdXRQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaW5wdXRQcm9wZXJ0aWVzKSkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IF9jcmVhdGVUZXh0QXJlYSA9IChhcmVhTGFiZWwsIGFyZWFQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgYXJlYUxhYmVsKTtcblxuICBsZXQgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGFyZWEubmFtZSA9IGFyZWFMYWJlbC5mb3I7XG4gIGlmIChhcmVhUHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFyZWFQcm9wZXJ0aWVzKSkge1xuICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcmVhKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBhZGQgc2VsZWN0RGVmYXVsdCBvcHRpb24gd2l0aCBuYW1lIGF0dHIgdG8gbWFrZSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG5jb25zdCBfY3JlYXRlU2VsZWN0ID0gKHNlbGVjdExhYmVsLCBzZWxlY3RPcHRpb25zLCBzZWxlY3REZWZhdWx0KSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgc2VsZWN0TGFiZWwpO1xuXG4gIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0Lm5hbWUgPSBzZWxlY3RMYWJlbC5mb3I7XG4gIHNlbGVjdC5pZCA9IHNlbGVjdC5uYW1lO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KVxuXG4gIGZvciAoY29uc3QgW3ZhbHVlLCB0ZXh0Q29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoc2VsZWN0T3B0aW9ucykpIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdERlZmF1bHQgJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3REZWZhdWx0KSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvcm0gfSIsImltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL3RvZG8taXRlbSdcblxuLy8gY29uc3QgRXZlbnQgPSAodHlwZSkgPT4ge1xuLy8gICB0eXBlXG5cbi8vICAgY29uc3Qgc2V0TGlzdGVuZXIgPSAodHlwZSwgY2FsbGJhY2spID0+IHtcblxuLy8gICB9XG5cbi8vICAgcmV0dXJuIHsgc2V0TGlzdGVuZXIgfVxuLy8gfVxuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgYWRkSXRlbUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tYWRkLWl0ZW0nKTtcbiAgYWRkSXRlbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNyZWF0ZUl0ZW0pO1xufVxuXG5leHBvcnQgeyBzZXRFdmVudExpc3RlbmVycyB9IiwiaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vYWRkLWl0ZW0tZm9ybSdcbmltcG9ydCB7IHNldEV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi9ldmVudCdcblxuY29uc3QgdG9kb0l0ZW1zID0gW107XG5cbmNvbnN0IGdldEl0ZW1zID0gKCkgPT4ge1xuICByZXR1cm4gdG9kb0l0ZW1zXG59XG5cbmNvbnN0IF9zdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgbGV0IGl0ZW1zID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygndG9kb0l0ZW0nKVxuICApXG4gIHJldHVybiBpdGVtc1xufVxuXG5jb25zdCBfcGFyc2VTdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBfc3RvcmVkSXRlbXMoKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShpdGVtc1tpXVsxXSk7XG4gICAgdG9kb0l0ZW1zLnB1c2gob2JqKTtcbiAgfVxufVxuXG5cbmNyZWF0ZUZvcm0oKTtcblxuaWYgKF9zdG9yZWRJdGVtcygpLmxlbmd0aCA+IDApIHtcbiAgX3BhcnNlU3RvcmVkSXRlbXMoKTtcbn1cbnNldEV2ZW50TGlzdGVuZXJzKCk7XG5cbmV4cG9ydCB7IGdldEl0ZW1zIH0iLCJpbXBvcnQgeyBnZXRJdGVtcyB9IGZyb20gJy4vaW5kZXgnXG5cbmNvbnN0IHRvZG9JdGVtID0gKHByb3BlcnRpZXMpID0+IHtcbiAgY29uc3QgdGl0bGUgPSAgcHJvcGVydGllc1sndGl0bGUnXVxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHByb3BlcnRpZXNbJ2Rlc2NyaXB0aW9uJ107XG4gIGNvbnN0IHByaW9yaXR5TGV2ZWwgPSBwcm9wZXJ0aWVzWydwcmlvcml0eUxldmVsJ107XG4gIGNvbnN0IGR1ZURhdGUgPSBwcm9wZXJ0aWVzWydkdWVEYXRlJ107XG4gIGNvbnN0IGNhdGVnb3J5ID0gcHJvcGVydGllc1snY2F0ZWdvcnknXTtcbiAgY29uc3Qgbm90ZXMgPSBwcm9wZXJ0aWVzWydub3RlcyddO1xuXG4gIGNvbnN0IGlkID0gZ2V0SXRlbXMoKS5sZW5ndGggKyAxO1xuICBjb25zdCBpc0NvbXBsZXRlID0gZmFsc2U7IFxuXG4gIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eUxldmVsLCBkdWVEYXRlLCBjYXRlZ29yeSwgbm90ZXMsIGlkIH1cbn07XG5cbmNvbnN0IF9zdG9yZUl0ZW0gPSAodG9kb0l0ZW0pID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9JdGVtJHt0b2RvSXRlbS5pZH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xufVxuXG5jb25zdCBjcmVhdGVJdGVtID0gKCkgPT4ge1xuICBsZXQgcHJvcGVydGllcyA9IFsndGl0bGUnLCAnZGVzY3JpcHRpb24nLCAncHJpb3JpdHlMZXZlbCcsICdkdWVEYXRlJywgJ2NhdGVnb3J5JywgJ25vdGVzJ11cblxuICBsZXQgYXJncyA9IHt9XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgcHJvcFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUocHJvcGVydGllc1tpXSlbMF0udmFsdWU7XG5cbiAgICBpZiAocHJvcFZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBwcm9wVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIGxldCBuZXdJdGVtID0gdG9kb0l0ZW0oYXJncyk7XG5cbiAgLy8gQVRURU5USU9OOiBkb24ndCB3YW50IHN0b3JlSXRlbSBjYWxsIGhlcmVcbiAgX3N0b3JlSXRlbShuZXdJdGVtKTtcbn1cblxuZXhwb3J0IHsgdG9kb0l0ZW0sIGNyZWF0ZUl0ZW0gfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=