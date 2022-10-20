/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */

function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1; // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || _typeof(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

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
    // if new todo form is showing
    if (document.getElementById('category')) {
      (0,_category_view__WEBPACK_IMPORTED_MODULE_0__.reloadCategoryTodoSelect)();
    }
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

/***/ "./src/side-bar-view.js":
/*!******************************!*\
  !*** ./src/side-bar-view.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createSidebar": () => (/* binding */ createSidebar)
/* harmony export */ });
/* harmony import */ var _todo_item_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item-view */ "./src/todo-item-view.js");


const sidebar = document.getElementById('side-bar');

const createSortElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  container.classList.add('sort-container');
  const sortHeading = document.createElement('h2');
  sortHeading.textContent = 'Sort By';
  container.appendChild(sortHeading);

  const sortByDate = document.createElement('li');
  sortByDate.textContent = 'Due Date';
  container.appendChild(sortByDate);
  sortByDate.addEventListener('click', () => {
    (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_0__.showByDueDate)();
  });

  const sortByPriority = document.createElement('li');
  sortByPriority.textContent = 'Priority Level';
  container.appendChild(sortByPriority);
  sortByPriority.addEventListener('click', () => {
    (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_0__.showByPriorityLevel)();
  })
}

const createViewElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  const viewHeading = document.createElement('h2');
  viewHeading.textContent = 'View';
  container.appendChild(viewHeading);

  const expand = document.createElement('li');
  expand.textContent = 'Expand All';
  container.appendChild(expand);
  expand.addEventListener('click', () => {
    (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_0__.expandAll)();
  })

  const contract = document.createElement('li');
  contract.textContent = 'Contract All';
  container.appendChild(contract);
  contract.addEventListener('click', () => {
    (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_0__.contractAll)();
  })
}

const createManageCategoryElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  const catHeading = document.createElement('h2');
  catHeading.textContent = 'Manage';
  container.appendChild(catHeading);

  const manageCat = document.createElement('li');
  manageCat.textContent = 'Categories';
  container.appendChild(manageCat);
  manageCat.addEventListener('click', () => {
    // function
  })
}

const createCompletedElement = () => {
  const container = document.createElement('div');
  sidebar.appendChild(container);

  const completedheading = document.createElement('h2');
  completedheading.textContent = 'Completed';
  container.appendChild(completedheading);

  const viewAll = document.createElement('li');
  viewAll .textContent = 'View All';
  container.appendChild(viewAll );
  viewAll .addEventListener('click', () => {
    (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_0__.showCompleted)();
  })

}

const createSidebar = () => {
  createViewElement();
  createSortElement();
  createManageCategoryElement();
  createCompletedElement(); 
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
/* harmony export */   "contractAll": () => (/* binding */ contractAll),
/* harmony export */   "expandAll": () => (/* binding */ expandAll),
/* harmony export */   "filterByCategory": () => (/* binding */ filterByCategory),
/* harmony export */   "showAllTodos": () => (/* binding */ showAllTodos),
/* harmony export */   "showByDueDate": () => (/* binding */ showByDueDate),
/* harmony export */   "showByPriorityLevel": () => (/* binding */ showByPriorityLevel),
/* harmony export */   "showCompleted": () => (/* binding */ showCompleted)
/* harmony export */ });
/* harmony import */ var _todo_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo-item */ "./src/todo-item.js");
/* harmony import */ var _todo_item_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-item-form */ "./src/todo-item-form.js");



let currentlyShowing = [];
const content = document.getElementById('content');

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

  let delIcon = document.createElement('img');
  delIcon.src = '../src/assets/delete-forever.png';
  delIcon.title = 'Delete Item';
  delIcon.classList.add('delete-icon');
  container.appendChild(delIcon);
  delIcon.addEventListener('click', () => {
    (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.deleteItem)(item);
    container.remove();
  })
}

const _todoContainerContracted = (container, item) => {
  if (item.isComplete === false) {
    let markComplete = document.createElement('img');
    markComplete.src = '../src/assets/checkbox-blank-outline.png';
    markComplete.classList.add('todo-item-complete-btn');
    markComplete.title = 'Mark Complete';
    container.appendChild(markComplete);
    markComplete.addEventListener('click', () => {
      (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.markItemComplete)(item);
      container.remove();
    })
  } else {
    let complete = document.createElement('img');
    complete.src = '../src/assets/checkbox-marked-outline.png';
    complete.classList.add('todo-item-complete-btn');
    container.appendChild(complete);
  }
  

  let title = document.createElement('span');
  title.textContent = item.title;
  container.appendChild(title);

  let dueDate = document.createElement('span');
  dueDate.textContent = item.dueDate;
  container.appendChild(dueDate);

  let category = document.createElement('span');
  category.textContent = item.category;
  container.appendChild(category);

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
  const displayItemsContainer = document.createElement('div');
  displayItemsContainer.id = 'display-items-container';
  content.appendChild(displayItemsContainer);

  itemsArray.forEach(item => {
    let container = document.createElement('div');
    container.classList.add('todo-item-container');
    _setColorByPriority(container, item.priorityLevel);
    _toggleExpandContractView(container, item);
    displayItemsContainer.appendChild(container);
  })

  currentlyShowing = itemsArray;
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
  container.prepend(header);
}

const showAllTodos = () => {
  content.textContent = '';
  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getItems)();
  displayItems(items);
}

const filterByCategory = (category) => {
  content.textContent = '';
  createListHeader(content, category);
  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getItems)(category);
  displayItems(items);
}

const showByDueDate = () => {
  document.getElementById('display-items-container').remove();
  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.sortByDate)(currentlyShowing);
  displayItems(items);
}

const showByPriorityLevel = () => {
  document.getElementById('display-items-container').remove();
  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.sortByPriority)(currentlyShowing);
  displayItems(items);
}

const expandAll = () => {
  const containers = document.getElementsByClassName('todo-item-container');
  const items = currentlyShowing;

  for (let i=0; i < items.length; i++) {
    if (containers[i].classList.contains('contracted')) {
      containers[i].classList.remove('contracted');
      containers[i].textContent = '';
      _todoContainerContracted(containers[i], items[i]);
      _todoContainerExpanded(containers[i], items[i]);
    }
  }
}

const contractAll = () => {
  const containers = document.getElementsByClassName('todo-item-container');
  const items = currentlyShowing;

  for (let i=0; i < items.length; i++) {
    if (!containers[i].classList.contains('contracted')) {
      containers[i].classList.add('contracted');
      containers[i].textContent = '';
      _todoContainerContracted(containers[i], items[i]);
    }
  }
}

const showCompleted = () => {
  content.textContent = '';
  let items = (0,_todo_item__WEBPACK_IMPORTED_MODULE_0__.getCompletedItems)();
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
/* harmony export */   "deleteItem": () => (/* binding */ deleteItem),
/* harmony export */   "getCompletedItems": () => (/* binding */ getCompletedItems),
/* harmony export */   "getItems": () => (/* binding */ getItems),
/* harmony export */   "markItemComplete": () => (/* binding */ markItemComplete),
/* harmony export */   "parseStoredCompleted": () => (/* binding */ parseStoredCompleted),
/* harmony export */   "parseStoredItems": () => (/* binding */ parseStoredItems),
/* harmony export */   "sortByDate": () => (/* binding */ sortByDate),
/* harmony export */   "sortByPriority": () => (/* binding */ sortByPriority),
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");



let todoItems = [];

const removeFromTodoItems = (item) => {
  for (let i=0; i < todoItems.length; i++) {
    if (todoItems[i] === item) {
      todoItems.splice(i, 1);
    }
  }
}

const _removeTodoFromStorage = (item) => {
  let key = `todoItem${item.id}`
  localStorage.removeItem(key);
}

let completedItems = [];

const addToCompletedItems = (item) => {
  completedItems.push(item);
}

const getItems = (category) => {
  console.log(todoItems);
  if (category !== undefined) {
    return todoItems.filter(item => item.category === category);
  } else {
    return todoItems
  }
}

const getCompletedItems = () => {
  return completedItems
}

const markItemComplete = (item) => {
  item.isComplete = true;
  removeFromTodoItems(item);
  addToCompletedItems(item);
  _storeCompleted(item);
  _removeTodoFromStorage(item);
}

const sortByDate = (items) => {
  let sortedItems = items.sort(
    (a,b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(a.dueDate), new Date(b.dueDate))
  )
  return sortedItems
}

const sortByPriority = (items) => {
  const compare = (a, b) => {
    let priorityLevels = ['green', 'yellow', 'orange', 'red'];

    if (priorityLevels.indexOf(a) > priorityLevels.indexOf(b)) {
      return -1
    }
    if (priorityLevels.indexOf(a) < priorityLevels.indexOf(b)) {
      return 1
    }
    return 0
  }
  
  let sortedItems = items.sort(
    (a,b) => compare(a.priorityLevel, b.priorityLevel)
  )
  return sortedItems
}

const _storeCompleted = (completedItem) => {
  localStorage.setItem(`completedItem${completedItem.id}`, JSON.stringify(completedItem))
}

const _storedCompleted = () => {
  let items = Object.entries(localStorage).filter(
    key => key[0].includes('completedItem')
  )
  return items
}

const parseStoredCompleted = () => {
  let completed = _storedCompleted();
  for (let i=0; i < completed.length; i++) {
    let obj = JSON.parse(completed[i][1])
    completedItems.push(obj);
  }
}

const _storeItem = (todoItem) => {
  localStorage.setItem(`todoItem${todoItem.id}`, JSON.stringify(todoItem));
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

  return {title, description, priorityLevel, dueDate, category, notes, id, isComplete }
};

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

const deleteItem = (item) => {
  removeFromtodoItems(item);
  _removeTodoFromStorage(item);
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
/* harmony import */ var _side_bar_view__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./side-bar-view */ "./src/side-bar-view.js");







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
(0,_todo_item__WEBPACK_IMPORTED_MODULE_3__.parseStoredCompleted)();
(0,_category__WEBPACK_IMPORTED_MODULE_2__.retrieveStoredCategories)();
(0,_side_bar_view__WEBPACK_IMPORTED_MODULE_5__.createSidebar)();
(0,_category_view__WEBPACK_IMPORTED_MODULE_1__.createCategoryDropdown)();
setEventListeners();
(0,_todo_item_view__WEBPACK_IMPORTED_MODULE_4__.showAllTodos)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ044QztBQUNVO0FBQ0g7QUFDZTtBQUNyQjtBQUNBOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQSx3Q0FBd0MseURBQVk7O0FBRXBEO0FBQ0Esd0NBQXdDLHdEQUFXO0FBQ25EOztBQUVBLDREQUFnQjtBQUNoQixnRUFBb0I7QUFDcEIsbUVBQXdCO0FBQ3hCLDZEQUFhO0FBQ2Isc0VBQXNCO0FBQ3RCO0FBQ0EsNkRBQVkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NhdGVnb3J5LXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3NpZGUtYmFyLXZpZXcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlcXVpcmVkQXJncyhyZXF1aXJlZCwgYXJncykge1xuICBpZiAoYXJncy5sZW5ndGggPCByZXF1aXJlZCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocmVxdWlyZWQgKyAnIGFyZ3VtZW50JyArIChyZXF1aXJlZCA+IDEgPyAncycgOiAnJykgKyAnIHJlcXVpcmVkLCBidXQgb25seSAnICsgYXJncy5sZW5ndGggKyAnIHByZXNlbnQnKTtcbiAgfVxufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21wYXJlQXNjKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnQgPSB0b0RhdGUoZGlydHlEYXRlTGVmdCk7XG4gIHZhciBkYXRlUmlnaHQgPSB0b0RhdGUoZGlydHlEYXRlUmlnaHQpO1xuICB2YXIgZGlmZiA9IGRhdGVMZWZ0LmdldFRpbWUoKSAtIGRhdGVSaWdodC5nZXRUaW1lKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7IC8vIFJldHVybiAwIGlmIGRpZmYgaXMgMDsgcmV0dXJuIE5hTiBpZiBkaWZmIGlzIE5hTlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBkaWZmO1xuICB9XG59IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9OyB9IGVsc2UgeyBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH07IH0gcmV0dXJuIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTsgLy8gQ2xvbmUgdGhlIGRhdGVcblxuICBpZiAoYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8IF90eXBlb2YoYXJndW1lbnQpID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjc3RyaW5nLWFyZ3VtZW50c1wiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IGdldENhdGVnb3JpZXMsIGNyZWF0ZUNhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IGZpbHRlckJ5Q2F0ZWdvcnkgfSBmcm9tICcuL3RvZG8taXRlbS12aWV3J1xuaW1wb3J0IHsgYWRkU2VsZWN0T3B0aW9ucywgY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMgfSBmcm9tICcuL3RvZG8taXRlbS1mb3JtJ1xuXG5jb25zdCBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnbmV3LWNhdGVnb3J5LW1vZGFsJyk7XG4gIGNvbnRlbnRDb250YWluZXIuYXBwZW5kQ2hpbGQobW9kYWwpO1xuXG4gIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gIGxhYmVsLnRleHRDb250ZW50ID0gJ05ldyBDYXRlZ29yeSc7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgJ25ldy1jYXRlZ29yeScpO1xuICBtb2RhbC5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnY3JlYXRlJztcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNyZWF0ZUNhdGVnb3J5KGlucHV0LnZhbHVlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LWNhdGVnb3J5LW1vZGFsJykuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNiYWNrZHJvcCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgfSk7XG59XG5cbmNvbnN0IHNob3dDYXRlZ29yeU1vZGFsID0gKCkgPT4ge1xuICBjb25zdCBuZXdDYXRlZ29yeU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBpZiAobmV3Q2F0ZWdvcnlNb2RhbCA9PT0gbnVsbCkge1xuICAgIGNyZWF0ZU5ld0NhdGVnb3J5TW9kYWwoKTtcbiAgfVxuXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBjb25zdCBiYWNrZHJvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZHJvcCcpO1xuICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGJhY2tkcm9wLmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCBpbnB1dCcpLmZvY3VzKCk7XG5cbiAgY29uc3QgY2xvc2VPbkNsaWNrQXdheSA9IChldmVudCkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duSXRlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgZm9yIChsZXQgaT0wOyBpIDwgZHJvcGRvd25JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gPT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFtb2RhbC5jb250YWlucyhldmVudC50YXJnZXQpICYmIG1vZGFsICE9IGV2ZW50LnRhcmdldCkge1xuICAgICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgYmFja2Ryb3AuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgIH1cbiAgfVxuXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmNvbnN0IGFkZENyZWF0ZU5ldyA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgbmV3Q2F0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG5ld0NhdC5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1pdGVtJyk7XG4gIG5ld0NhdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgTmV3JztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0NhdCk7XG4gIG5ld0NhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDYXRlZ29yeU1vZGFsKTtcbn1cblxuY29uc3QgYWRkQ2F0ZWdvcmllcyA9IChjb250YWluZXIpID0+IHtcbiAgY29uc3QgY2F0ZWdvcmllcyA9IGdldENhdGVnb3JpZXMoKS5zb3J0KCk7XG5cbiAgZm9yIChjb25zdCBjYXRlZ29yeSBvZiBjYXRlZ29yaWVzKSB7XG4gICAgY29uc3QgbmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3RGl2LmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBuZXdEaXYudGV4dENvbnRlbnQgPSBjYXRlZ29yeTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3RGl2KTtcbiAgICBuZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBmaWx0ZXJCeUNhdGVnb3J5KGNhdGVnb3J5KTtcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBjcmVhdGVDYXRlZ29yeURyb3Bkb3duID0gKCkgPT4ge1xuICBjb25zdCB0YWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGFiJyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24tY29udGVudCcpO1xuICB0YWIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBhZGRDcmVhdGVOZXcoY29udGFpbmVyKTtcbiAgYWRkQ2F0ZWdvcmllcyhjb250YWluZXIpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGlmICghdGFiLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcbiAgICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGRyb3Bkb3duSXRlbXNbaV0gIT09IGV2ZW50LnRhcmdldCkge1xuICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VPbkNsaWNrQXdheSk7XG59XG5cbmNvbnN0IHJlbG9hZENhdGVnb3J5VGFiID0gKCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKTtcbiAgY29udGFpbmVyLnRleHRDb250ZW50ID0gJyc7XG4gIGFkZENyZWF0ZU5ldyhjb250YWluZXIpO1xuICBhZGRDYXRlZ29yaWVzKGNvbnRhaW5lcik7XG59XG5cbmNvbnN0IHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCA9ICgpID0+IHtcbiAgbGV0IHNlbGVjdEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXRlZ29yeScpO1xuICBzZWxlY3RCb3gudGV4dENvbnRlbnQgPSAnJztcbiAgYWRkU2VsZWN0T3B0aW9ucyhzZWxlY3RCb3gsIGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zKCksICdHZW5lcmFsJyk7XG59XG5cblxuXG5leHBvcnQgeyBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsLCBzaG93Q2F0ZWdvcnlNb2RhbCwgcmVsb2FkQ2F0ZWdvcnlUYWIsIGNyZWF0ZUNhdGVnb3J5RHJvcGRvd24sIHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCB9IiwiaW1wb3J0IHsgcmVsb2FkQ2F0ZWdvcnlUYWIsIHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCB9IGZyb20gJy4vY2F0ZWdvcnktdmlldydcblxuY29uc3QgYWxsQ2F0ZWdvcmllcyA9IFsnR2VuZXJhbCddO1xuXG5jb25zdCBnZXRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICByZXR1cm4gYWxsQ2F0ZWdvcmllc1xufVxuXG5jb25zdCBfc3RvcmVDYXRlZ29yeSA9IChjYXRlZ29yeU5hbWUpID0+IHtcbiAgbGV0IGNhdElkID0gZ2V0Q2F0ZWdvcmllcygpLmxlbmd0aCArIDFcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYGNhdGVnb3J5JHtjYXRJZH1gLCBjYXRlZ29yeU5hbWUpO1xufVxuXG5jb25zdCBfc3RvcmVkQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBPYmplY3QuZW50cmllcyhsb2NhbFN0b3JhZ2UpLmZpbHRlcihcbiAgICBrZXkgPT4ga2V5WzBdLmluY2x1ZGVzKCdjYXRlZ29yeScpXG4gIClcbiAgcmV0dXJuIGNhdGVnb3JpZXNcbn1cblxuY29uc3QgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzID0gKCkgPT4ge1xuICBsZXQgY2F0ZWdvcmllcyA9IF9zdG9yZWRDYXRlZ29yaWVzKCk7XG4gIGZvciAobGV0IGk9MDsgaSA8IGNhdGVnb3JpZXMubGVuZ3RoOyBpKyspIHtcbiAgICBhbGxDYXRlZ29yaWVzLnB1c2goY2F0ZWdvcmllc1tpXVsxXSk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnkgPSAodXNlcklucHV0KSA9PiB7XG4gIGlmIChhbGxDYXRlZ29yaWVzLmluY2x1ZGVzKHVzZXJJbnB1dCkpIHtcbiAgICAvLyBzaW1wbHkgZG9uJ3QgY3JlYXRlIGEgZG91YmxlXG4gICAgcmV0dXJuXG4gIH0gZWxzZSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKHVzZXJJbnB1dCk7XG4gICAgX3N0b3JlQ2F0ZWdvcnkodXNlcklucHV0KTtcbiAgICByZWxvYWRDYXRlZ29yeVRhYigpO1xuICAgIC8vIGlmIG5ldyB0b2RvIGZvcm0gaXMgc2hvd2luZ1xuICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKSkge1xuICAgICAgcmVsb2FkQ2F0ZWdvcnlUb2RvU2VsZWN0KCk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IGlzTmV3Q2F0ZWdvcnkgPSAoY2F0ZWdvcnkpID0+IHtcbiAgaWYgKGdldENhdGVnb3JpZXMoKS5pbmNsdWRlcyhjYXRlZ29yeSkpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZVxuICB9XG59IFxuXG5leHBvcnQgeyBjcmVhdGVDYXRlZ29yeSwgZ2V0Q2F0ZWdvcmllcywgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzLCBpc05ld0NhdGVnb3J5IH1cbiIsImltcG9ydCB7IHNob3dCeUR1ZURhdGUsIHNob3dCeVByaW9yaXR5TGV2ZWwsIGV4cGFuZEFsbCwgY29udHJhY3RBbGwsIHNob3dDb21wbGV0ZWQgfSBmcm9tICcuL3RvZG8taXRlbS12aWV3J1xuXG5jb25zdCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGUtYmFyJyk7XG5cbmNvbnN0IGNyZWF0ZVNvcnRFbGVtZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzb3J0LWNvbnRhaW5lcicpO1xuICBjb25zdCBzb3J0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIHNvcnRIZWFkaW5nLnRleHRDb250ZW50ID0gJ1NvcnQgQnknO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydEhlYWRpbmcpO1xuXG4gIGNvbnN0IHNvcnRCeURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzb3J0QnlEYXRlLnRleHRDb250ZW50ID0gJ0R1ZSBEYXRlJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNvcnRCeURhdGUpO1xuICBzb3J0QnlEYXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dCeUR1ZURhdGUoKTtcbiAgfSk7XG5cbiAgY29uc3Qgc29ydEJ5UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBzb3J0QnlQcmlvcml0eS50ZXh0Q29udGVudCA9ICdQcmlvcml0eSBMZXZlbCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0QnlQcmlvcml0eSk7XG4gIHNvcnRCeVByaW9yaXR5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dCeVByaW9yaXR5TGV2ZWwoKTtcbiAgfSlcbn1cblxuY29uc3QgY3JlYXRlVmlld0VsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3Qgdmlld0hlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB2aWV3SGVhZGluZy50ZXh0Q29udGVudCA9ICdWaWV3JztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHZpZXdIZWFkaW5nKTtcblxuICBjb25zdCBleHBhbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBleHBhbmQudGV4dENvbnRlbnQgPSAnRXhwYW5kIEFsbCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBhbmQpO1xuICBleHBhbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZXhwYW5kQWxsKCk7XG4gIH0pXG5cbiAgY29uc3QgY29udHJhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICBjb250cmFjdC50ZXh0Q29udGVudCA9ICdDb250cmFjdCBBbGwnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udHJhY3QpO1xuICBjb250cmFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjb250cmFjdEFsbCgpO1xuICB9KVxufVxuXG5jb25zdCBjcmVhdGVNYW5hZ2VDYXRlZ29yeUVsZW1lbnQgPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBzaWRlYmFyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgY29uc3QgY2F0SGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGNhdEhlYWRpbmcudGV4dENvbnRlbnQgPSAnTWFuYWdlJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdEhlYWRpbmcpO1xuXG4gIGNvbnN0IG1hbmFnZUNhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIG1hbmFnZUNhdC50ZXh0Q29udGVudCA9ICdDYXRlZ29yaWVzJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hbmFnZUNhdCk7XG4gIG1hbmFnZUNhdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyBmdW5jdGlvblxuICB9KVxufVxuXG5jb25zdCBjcmVhdGVDb21wbGV0ZWRFbGVtZW50ID0gKCkgPT4ge1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGNvbnN0IGNvbXBsZXRlZGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICBjb21wbGV0ZWRoZWFkaW5nLnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZWRoZWFkaW5nKTtcblxuICBjb25zdCB2aWV3QWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgdmlld0FsbCAudGV4dENvbnRlbnQgPSAnVmlldyBBbGwnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlld0FsbCApO1xuICB2aWV3QWxsIC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93Q29tcGxldGVkKCk7XG4gIH0pXG5cbn1cblxuY29uc3QgY3JlYXRlU2lkZWJhciA9ICgpID0+IHtcbiAgY3JlYXRlVmlld0VsZW1lbnQoKTtcbiAgY3JlYXRlU29ydEVsZW1lbnQoKTtcbiAgY3JlYXRlTWFuYWdlQ2F0ZWdvcnlFbGVtZW50KCk7XG4gIGNyZWF0ZUNvbXBsZXRlZEVsZW1lbnQoKTsgXG59XG5cbmV4cG9ydCB7IGNyZWF0ZVNpZGViYXIgfSIsImltcG9ydCB7IGdldENhdGVnb3JpZXMsIGNyZWF0ZUNhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuL3RvZG8taXRlbSdcblxuLy8gY2FuIHBhc3Mgb2JqZWN0IHRvIHNldCBmb3JtIGZpZWxkcyB0byBzcGVjaWZpYyB2YWx1ZXMuXG5jb25zdCBjcmVhdGVGb3JtID0gKG9wdGlvbmFsRGVmYXVsdHMgPSB7fSkgPT4ge1xuICBsZXQgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLWl0ZW0tY29udGFpbmVyJyk7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBsZXQgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gIGxldCBmaWVsZHNldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0Jyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZmllbGRzZXQpO1xuXG4gIGxldCBsZWdlbmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgbGVnZW5kLnRleHRDb250ZW50ID0gJ0FkZCBhbiBpdGVtIHRvIHlvdXIgbGlzdCc7XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKGxlZ2VuZCk7XG5cbiAgLy8gYWRkIHRpdGxlIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVJbnB1dCgndGV4dCcsIHsgdGV4dENvbnRlbnQ6ICdUaXRsZScsIGZvcjogJ3RpdGxlJ30pKTtcbiAgLy8gYWRkIGRlc2NyaXB0aW9uIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVUZXh0QXJlYSh7IHRleHRDb250ZW50OiAnRGVzY3JpcHRpb24nLCBmb3I6ICdkZXNjcmlwdGlvbid9LCB7IFwiY29sc1wiOiBcIjMwXCIsIFwicm93c1wiOiBcIjhcIn0pKTtcbiAgLy8gYWRkIGR1ZURhdGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCdkYXRlJywgeyB0ZXh0Q29udGVudDogJ0R1ZSBEYXRlJywgZm9yOiAnZHVlRGF0ZSd9KSk7XG4gIC8vIGFkZCBwcmlvcml0eUxldmVsIHByb3BlcnR5IGlucHV0XG4gIGZpZWxkc2V0LmFwcGVuZENoaWxkKF9jcmVhdGVTZWxlY3QoeyB0ZXh0Q29udGVudDogJ1ByaW9yaXR5JywgZm9yOiAncHJpb3JpdHlMZXZlbCd9LCB7XCJncmVlblwiOiBcIkxvdyBQcmlvcml0eVwiLCBcInllbGxvd1wiOiBcIk5vcm1hbCBQcmlvcml0eVwiLCBcIm9yYW5nZVwiOiBcIlNvbWV3aGF0IFByaW9yaXR5XCIsIFwicmVkXCI6IFwiSGlnaCBQcmlvcml0eVwifSwgXCJ5ZWxsb3dcIikpO1xuICAvLyBhZGQgbm90ZXMgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdOb3RlcycsIGZvcjogJ25vdGVzJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuXG4gIC8vIGFkZCBjYXRlZ29yeSBwcm9wZXJ0eSBpbnB1dFxuICBsZXQgZGVmYXVsdENhdGVnb3J5ID0gJ0dlbmVyYWwnO1xuICBpZiAob3B0aW9uYWxEZWZhdWx0c1snY2F0ZWdvcnknXSkge1xuICAgIGRlZmF1bHRDYXRlZ29yeSA9IG9wdGlvbmFsRGVmYXVsdHNbJ2NhdGVnb3J5J107XG4gIH1cbiAgY29uc3QgY2F0ZWdvcnlDb250YWluZXIgPSBfY3JlYXRlU2VsZWN0KHsgdGV4dENvbnRlbnQ6ICdDYXRlZ29yeScsIGZvcjogJ2NhdGVnb3J5J30sIGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zKCksIGRlZmF1bHRDYXRlZ29yeSlcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlDb250YWluZXIpO1xuXG4gIGxldCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbi1mb3JtLWFkZC1jYXRlZ29yeScpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnBsYWNlaG9sZGVyID0gJ05ldyBDYXRlZ29yeSBOYW1lJztcbiAgaW5wdXQubmFtZSA9ICdjYXRlZ29yeSc7XG5cbiAgaW5wdXRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGNhdGVnb3J5Q29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0Q29udGFpbmVyKTtcblxuICBjb25zdCBjYXRlZ29yaWVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5Jyk7XG4gIGNhdGVnb3JpZXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09ICdDcmVhdGUgTmV3Jykge1xuICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93JykpIHtcbiAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgfVxuICAgIH1cbiAgfSlcblxuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ0FkZCc7XG4gIGJ0bi5jbGFzc0xpc3QuYWRkKCdidG4tYWRkLWl0ZW0nKTtcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoYnRuKTtcbiAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY3JlYXRlSXRlbSk7XG59XG5cbmNvbnN0IF9hZGRMYWJlbCA9IChwYXJlbnQsIHByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgbGFiZWwudGV4dENvbnRlbnQgPSBwcm9wZXJ0aWVzLnRleHRDb250ZW50O1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIHByb3BlcnRpZXMuZm9yKTtcbiAgcGFyZW50LmFwcGVuZENoaWxkKGxhYmVsKTtcbn1cblxuY29uc3QgX2NyZWF0ZUlucHV0ID0gKGlucHV0VHlwZSwgaW5wdXRMYWJlbCwgaW5wdXRQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgaW5wdXRMYWJlbCk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgaW5wdXQubmFtZSA9IGlucHV0TGFiZWwuZm9yO1xuICBpZiAoaW5wdXRQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoaW5wdXRQcm9wZXJ0aWVzKSkge1xuICAgICAgaW5wdXQuc2V0QXR0cmlidXRlKGtleSwgdmFsdWUpO1xuICAgIH1cbiAgfVxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IF9jcmVhdGVUZXh0QXJlYSA9IChhcmVhTGFiZWwsIGFyZWFQcm9wZXJ0aWVzKSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgYXJlYUxhYmVsKTtcblxuICBsZXQgYXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gIGFyZWEubmFtZSA9IGFyZWFMYWJlbC5mb3I7XG4gIGlmIChhcmVhUHJvcGVydGllcykge1xuICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGFyZWFQcm9wZXJ0aWVzKSkge1xuICAgICAgYXJlYS5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhcmVhKTtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5jb25zdCBjYXRlZ29yaWVzU2VsZWN0T3B0aW9ucyA9IChzZWxlY3REZWZhdWx0KSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gZ2V0Q2F0ZWdvcmllcygpLnNvcnQoKTtcbiAgbGV0IHNlbGVjdE9wdGlvbnMgPSB7fTtcblxuICBzZWxlY3RPcHRpb25zWydDcmVhdGUgTmV3J10gPSBbJ0NyZWF0ZSBOZXcgLi4uJ107XG5cbiAgZm9yIChsZXQgaT0wOyBpIDwgY2F0ZWdvcmllcy5sZW5ndGg7IGkrKyApIHtcbiAgICBzZWxlY3RPcHRpb25zW2NhdGVnb3JpZXNbaV1dID0gY2F0ZWdvcmllc1tpXTtcbiAgfVxuXG4gIHJldHVybiBzZWxlY3RPcHRpb25zO1xufVxuXG5jb25zdCBhZGRTZWxlY3RPcHRpb25zID0gKHNlbGVjdCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBmb3IgKGNvbnN0IFt2YWx1ZSwgdGV4dENvbnRlbnRdIG9mIE9iamVjdC5lbnRyaWVzKHNlbGVjdE9wdGlvbnMpKSB7XG4gICAgbGV0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIG9wdGlvbi52YWx1ZSA9IHZhbHVlO1xuICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuICAgIGlmIChzZWxlY3REZWZhdWx0ICYmIG9wdGlvbi52YWx1ZSA9PT0gc2VsZWN0RGVmYXVsdCkge1xuICAgICAgb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gIH1cbn1cblxuLy8gYWRkIHNlbGVjdERlZmF1bHQgb3B0aW9uIHdpdGggbmFtZSBhdHRyIHRvIG1ha2Ugb3B0aW9uLnNlbGVjdGVkID0gdHJ1ZVxuY29uc3QgX2NyZWF0ZVNlbGVjdCA9IChzZWxlY3RMYWJlbCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCkgPT4ge1xuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIF9hZGRMYWJlbChjb250YWluZXIsIHNlbGVjdExhYmVsKTtcblxuICBsZXQgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gIHNlbGVjdC5uYW1lID0gc2VsZWN0TGFiZWwuZm9yO1xuICBzZWxlY3QuaWQgPSBzZWxlY3QubmFtZTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG5cbiAgYWRkU2VsZWN0T3B0aW9ucyhzZWxlY3QsIHNlbGVjdE9wdGlvbnMsIHNlbGVjdERlZmF1bHQpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IGRpc3BsYXlGb3JtID0gKCkgPT4ge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcbiAgY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICBjcmVhdGVGb3JtKCk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUZvcm0sIGRpc3BsYXlGb3JtLCBhZGRTZWxlY3RPcHRpb25zLCBjYXRlZ29yaWVzU2VsZWN0T3B0aW9ucyB9IiwiaW1wb3J0IHsgZ2V0SXRlbXMsIHNvcnRCeURhdGUsIHNvcnRCeVByaW9yaXR5LCBkZWxldGVJdGVtLCBtYXJrSXRlbUNvbXBsZXRlLCBnZXRDb21wbGV0ZWRJdGVtcyB9IGZyb20gJy4vdG9kby1pdGVtJ1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vdG9kby1pdGVtLWZvcm0nXG5cbmxldCBjdXJyZW50bHlTaG93aW5nID0gW107XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgX3NldENvbG9yQnlQcmlvcml0eSA9IChlbGVtZW50LCBwcmlvcml0eUxldmVsKSA9PiB7XG4gIGxldCBwcmlvcml0eUNvbG9yO1xuXG4gIGlmIChwcmlvcml0eUxldmVsID09PSAnZ3JlZW4nKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjMkE5RDhGJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdvcmFuZ2UnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRjRBMjYxJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdyZWQnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTc2RjUxJztcbiAgfSBlbHNlIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNFOUM0NkEnO1xuICB9XG4gIFxuICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gcHJpb3JpdHlDb2xvclxufVxuXG5jb25zdCBfdXNlclJlYWRhYmxlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgaWYgKHByaW9yaXR5ID09PSAnZ3JlZW4nKSB7XG4gICAgcmV0dXJuICdMb3cnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICd5ZWxsb3cnKSB7XG4gICAgcmV0dXJuICdOb3JtYWwnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdvcmFuZ2UnKSB7XG4gICAgcmV0dXJuICdNb2RlcmF0ZSdcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ0hpZ2gnO1xuICB9XG59XG5cbmNvbnN0IF9kaXNwbGF5RXhwYW5kQ29udHJhY3RJY29uID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1jb250cmFjdC1pY29uJyk7XG4gIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250cmFjdGVkJykpIHtcbiAgICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2Fycm93LWV4cGFuZC1kb3duLnBuZyc7XG4gICAgaWNvbi50aXRsZSA9ICdFeHBhbmQgVmlldyc7XG4gIH0gZWxzZSB7XG4gICAgaWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9hcnJvdy1leHBhbmQtdXAucG5nJztcbiAgICBpY29uLnRpdGxlID0gJ0NvbnRyYWN0IFZpZXcnO1xuICB9XG4gIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pXG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5cbmNvbnN0IF90b2RvQ29udGFpbmVyRXhwYW5kZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBsZXQgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVzLnRleHRDb250ZW50ID0gaXRlbS5ub3RlcztcbiAgbm90ZXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLW5vdGVzJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgbGV0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7X3VzZXJSZWFkYWJsZVByaW9yaXR5KGl0ZW0ucHJpb3JpdHlMZXZlbCl9YDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWwpO1xuXG4gIGxldCBkZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbEljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvZGVsZXRlLWZvcmV2ZXIucG5nJztcbiAgZGVsSWNvbi50aXRsZSA9ICdEZWxldGUgSXRlbSc7XG4gIGRlbEljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEljb24pO1xuICBkZWxJY29uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRlbGV0ZUl0ZW0oaXRlbSk7XG4gICAgY29udGFpbmVyLnJlbW92ZSgpO1xuICB9KVxufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lckNvbnRyYWN0ZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGlmIChpdGVtLmlzQ29tcGxldGUgPT09IGZhbHNlKSB7XG4gICAgbGV0IG1hcmtDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIG1hcmtDb21wbGV0ZS5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9jaGVja2JveC1ibGFuay1vdXRsaW5lLnBuZyc7XG4gICAgbWFya0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoJ3RvZG8taXRlbS1jb21wbGV0ZS1idG4nKTtcbiAgICBtYXJrQ29tcGxldGUudGl0bGUgPSAnTWFyayBDb21wbGV0ZSc7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1hcmtDb21wbGV0ZSk7XG4gICAgbWFya0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgbWFya0l0ZW1Db21wbGV0ZShpdGVtKTtcbiAgICAgIGNvbnRhaW5lci5yZW1vdmUoKTtcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIGxldCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbXBsZXRlLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2NoZWNrYm94LW1hcmtlZC1vdXRsaW5lLnBuZyc7XG4gICAgY29tcGxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWNvbXBsZXRlLWJ0bicpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG4gIH1cbiAgXG5cbiAgbGV0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICB0aXRsZS50ZXh0Q29udGVudCA9IGl0ZW0udGl0bGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgbGV0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGR1ZURhdGUudGV4dENvbnRlbnQgPSBpdGVtLmR1ZURhdGU7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkdWVEYXRlKTtcblxuICBsZXQgY2F0ZWdvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIGNhdGVnb3J5LnRleHRDb250ZW50ID0gaXRlbS5jYXRlZ29yeTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNhdGVnb3J5KTtcblxuICBfZGlzcGxheUV4cGFuZENvbnRyYWN0SWNvbihjb250YWluZXIsIGl0ZW0pO1xufVxuXG5jb25zdCBfdG9nZ2xlRXhwYW5kQ29udHJhY3RWaWV3ID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRyYWN0ZWQnKSkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG4gICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gICAgX3RvZG9Db250YWluZXJFeHBhbmRlZChjb250YWluZXIsIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG4gICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gIH1cbn1cblxuY29uc3QgZGlzcGxheUl0ZW1zID0gKGl0ZW1zQXJyYXkpID0+IHtcbiAgY29uc3QgZGlzcGxheUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpc3BsYXlJdGVtc0NvbnRhaW5lci5pZCA9ICdkaXNwbGF5LWl0ZW1zLWNvbnRhaW5lcic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheUl0ZW1zQ29udGFpbmVyKTtcblxuICBpdGVtc0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgX3NldENvbG9yQnlQcmlvcml0eShjb250YWluZXIsIGl0ZW0ucHJpb3JpdHlMZXZlbCk7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pO1xuICAgIGRpc3BsYXlJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9KVxuXG4gIGN1cnJlbnRseVNob3dpbmcgPSBpdGVtc0FycmF5O1xufVxuXG5jb25zdCBjcmVhdGVMaXN0SGVhZGVyID0gKGNvbnRhaW5lciwgY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJ0bi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9ub3RlLXBsdXMtb3V0bGluZS5wbmcnO1xuICBidG4udGl0bGUgPSBgQWRkIGl0ZW0gdG8gJHtjYXRlZ29yeX1gO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlRm9ybSggeyBjYXRlZ29yeTogY2F0ZWdvcnkgfSk7XG4gIH0pXG4gIGhlYWRlci5hcHBlbmRDaGlsZChidG4pO1xuICBjb250YWluZXIucHJlcGVuZChoZWFkZXIpO1xufVxuXG5jb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGl0ZW1zID0gZ2V0SXRlbXMoKTtcbiAgZGlzcGxheUl0ZW1zKGl0ZW1zKTtcbn1cblxuY29uc3QgZmlsdGVyQnlDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGNyZWF0ZUxpc3RIZWFkZXIoY29udGVudCwgY2F0ZWdvcnkpO1xuICBsZXQgaXRlbXMgPSBnZXRJdGVtcyhjYXRlZ29yeSk7XG4gIGRpc3BsYXlJdGVtcyhpdGVtcyk7XG59XG5cbmNvbnN0IHNob3dCeUR1ZURhdGUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWl0ZW1zLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICBsZXQgaXRlbXMgPSBzb3J0QnlEYXRlKGN1cnJlbnRseVNob3dpbmcpO1xuICBkaXNwbGF5SXRlbXMoaXRlbXMpO1xufVxuXG5jb25zdCBzaG93QnlQcmlvcml0eUxldmVsID0gKCkgPT4ge1xuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGlzcGxheS1pdGVtcy1jb250YWluZXInKS5yZW1vdmUoKTtcbiAgbGV0IGl0ZW1zID0gc29ydEJ5UHJpb3JpdHkoY3VycmVudGx5U2hvd2luZyk7XG4gIGRpc3BsYXlJdGVtcyhpdGVtcyk7XG59XG5cbmNvbnN0IGV4cGFuZEFsbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG8taXRlbS1jb250YWluZXInKTtcbiAgY29uc3QgaXRlbXMgPSBjdXJyZW50bHlTaG93aW5nO1xuXG4gIGZvciAobGV0IGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKGNvbnRhaW5lcnNbaV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250cmFjdGVkJykpIHtcbiAgICAgIGNvbnRhaW5lcnNbaV0uY2xhc3NMaXN0LnJlbW92ZSgnY29udHJhY3RlZCcpO1xuICAgICAgY29udGFpbmVyc1tpXS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lcnNbaV0sIGl0ZW1zW2ldKTtcbiAgICAgIF90b2RvQ29udGFpbmVyRXhwYW5kZWQoY29udGFpbmVyc1tpXSwgaXRlbXNbaV0pO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBjb250cmFjdEFsbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVycyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3RvZG8taXRlbS1jb250YWluZXInKTtcbiAgY29uc3QgaXRlbXMgPSBjdXJyZW50bHlTaG93aW5nO1xuXG4gIGZvciAobGV0IGk9MDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKCFjb250YWluZXJzW2ldLmNsYXNzTGlzdC5jb250YWlucygnY29udHJhY3RlZCcpKSB7XG4gICAgICBjb250YWluZXJzW2ldLmNsYXNzTGlzdC5hZGQoJ2NvbnRyYWN0ZWQnKTtcbiAgICAgIGNvbnRhaW5lcnNbaV0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgIF90b2RvQ29udGFpbmVyQ29udHJhY3RlZChjb250YWluZXJzW2ldLCBpdGVtc1tpXSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHNob3dDb21wbGV0ZWQgPSAoKSA9PiB7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGl0ZW1zID0gZ2V0Q29tcGxldGVkSXRlbXMoKTtcbiAgZGlzcGxheUl0ZW1zKGl0ZW1zKTtcbn1cblxuZXhwb3J0IHsgc2hvd0FsbFRvZG9zLCBmaWx0ZXJCeUNhdGVnb3J5LCBzaG93QnlEdWVEYXRlLCBzaG93QnlQcmlvcml0eUxldmVsLCBleHBhbmRBbGwsIGNvbnRyYWN0QWxsLCBzaG93Q29tcGxldGVkIH0iLCJpbXBvcnQgeyBjcmVhdGVDYXRlZ29yeSwgaXNOZXdDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBjb21wYXJlQXNjIH0gZnJvbSAnZGF0ZS1mbnMnXG5cbmxldCB0b2RvSXRlbXMgPSBbXTtcblxuY29uc3QgcmVtb3ZlRnJvbVRvZG9JdGVtcyA9IChpdGVtKSA9PiB7XG4gIGZvciAobGV0IGk9MDsgaSA8IHRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIGlmICh0b2RvSXRlbXNbaV0gPT09IGl0ZW0pIHtcbiAgICAgIHRvZG9JdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IF9yZW1vdmVUb2RvRnJvbVN0b3JhZ2UgPSAoaXRlbSkgPT4ge1xuICBsZXQga2V5ID0gYHRvZG9JdGVtJHtpdGVtLmlkfWBcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbn1cblxubGV0IGNvbXBsZXRlZEl0ZW1zID0gW107XG5cbmNvbnN0IGFkZFRvQ29tcGxldGVkSXRlbXMgPSAoaXRlbSkgPT4ge1xuICBjb21wbGV0ZWRJdGVtcy5wdXNoKGl0ZW0pO1xufVxuXG5jb25zdCBnZXRJdGVtcyA9IChjYXRlZ29yeSkgPT4ge1xuICBjb25zb2xlLmxvZyh0b2RvSXRlbXMpO1xuICBpZiAoY2F0ZWdvcnkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0b2RvSXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PT0gY2F0ZWdvcnkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0b2RvSXRlbXNcbiAgfVxufVxuXG5jb25zdCBnZXRDb21wbGV0ZWRJdGVtcyA9ICgpID0+IHtcbiAgcmV0dXJuIGNvbXBsZXRlZEl0ZW1zXG59XG5cbmNvbnN0IG1hcmtJdGVtQ29tcGxldGUgPSAoaXRlbSkgPT4ge1xuICBpdGVtLmlzQ29tcGxldGUgPSB0cnVlO1xuICByZW1vdmVGcm9tVG9kb0l0ZW1zKGl0ZW0pO1xuICBhZGRUb0NvbXBsZXRlZEl0ZW1zKGl0ZW0pO1xuICBfc3RvcmVDb21wbGV0ZWQoaXRlbSk7XG4gIF9yZW1vdmVUb2RvRnJvbVN0b3JhZ2UoaXRlbSk7XG59XG5cbmNvbnN0IHNvcnRCeURhdGUgPSAoaXRlbXMpID0+IHtcbiAgbGV0IHNvcnRlZEl0ZW1zID0gaXRlbXMuc29ydChcbiAgICAoYSxiKSA9PiBjb21wYXJlQXNjKG5ldyBEYXRlKGEuZHVlRGF0ZSksIG5ldyBEYXRlKGIuZHVlRGF0ZSkpXG4gIClcbiAgcmV0dXJuIHNvcnRlZEl0ZW1zXG59XG5cbmNvbnN0IHNvcnRCeVByaW9yaXR5ID0gKGl0ZW1zKSA9PiB7XG4gIGNvbnN0IGNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgIGxldCBwcmlvcml0eUxldmVscyA9IFsnZ3JlZW4nLCAneWVsbG93JywgJ29yYW5nZScsICdyZWQnXTtcblxuICAgIGlmIChwcmlvcml0eUxldmVscy5pbmRleE9mKGEpID4gcHJpb3JpdHlMZXZlbHMuaW5kZXhPZihiKSkge1xuICAgICAgcmV0dXJuIC0xXG4gICAgfVxuICAgIGlmIChwcmlvcml0eUxldmVscy5pbmRleE9mKGEpIDwgcHJpb3JpdHlMZXZlbHMuaW5kZXhPZihiKSkge1xuICAgICAgcmV0dXJuIDFcbiAgICB9XG4gICAgcmV0dXJuIDBcbiAgfVxuICBcbiAgbGV0IHNvcnRlZEl0ZW1zID0gaXRlbXMuc29ydChcbiAgICAoYSxiKSA9PiBjb21wYXJlKGEucHJpb3JpdHlMZXZlbCwgYi5wcmlvcml0eUxldmVsKVxuICApXG4gIHJldHVybiBzb3J0ZWRJdGVtc1xufVxuXG5jb25zdCBfc3RvcmVDb21wbGV0ZWQgPSAoY29tcGxldGVkSXRlbSkgPT4ge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShgY29tcGxldGVkSXRlbSR7Y29tcGxldGVkSXRlbS5pZH1gLCBKU09OLnN0cmluZ2lmeShjb21wbGV0ZWRJdGVtKSlcbn1cblxuY29uc3QgX3N0b3JlZENvbXBsZXRlZCA9ICgpID0+IHtcbiAgbGV0IGl0ZW1zID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygnY29tcGxldGVkSXRlbScpXG4gIClcbiAgcmV0dXJuIGl0ZW1zXG59XG5cbmNvbnN0IHBhcnNlU3RvcmVkQ29tcGxldGVkID0gKCkgPT4ge1xuICBsZXQgY29tcGxldGVkID0gX3N0b3JlZENvbXBsZXRlZCgpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBjb21wbGV0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShjb21wbGV0ZWRbaV1bMV0pXG4gICAgY29tcGxldGVkSXRlbXMucHVzaChvYmopO1xuICB9XG59XG5cbmNvbnN0IF9zdG9yZUl0ZW0gPSAodG9kb0l0ZW0pID0+IHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRvZG9JdGVtJHt0b2RvSXRlbS5pZH1gLCBKU09OLnN0cmluZ2lmeSh0b2RvSXRlbSkpO1xufVxuXG5jb25zdCBfc3RvcmVkSXRlbXMgPSAoKSA9PiB7XG4gIGxldCBpdGVtcyA9IE9iamVjdC5lbnRyaWVzKGxvY2FsU3RvcmFnZSkuZmlsdGVyKFxuICAgIGtleSA9PiBrZXlbMF0uaW5jbHVkZXMoJ3RvZG9JdGVtJylcbiAgKVxuICByZXR1cm4gaXRlbXNcbn1cblxuY29uc3QgcGFyc2VTdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgY29uc3QgaXRlbXMgPSBfc3RvcmVkSXRlbXMoKTtcbiAgZm9yIChsZXQgaT0wOyBpIDwgaXRlbXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IG9iaiA9IEpTT04ucGFyc2UoaXRlbXNbaV1bMV0pO1xuICAgIHRvZG9JdGVtcy5wdXNoKG9iaik7XG4gIH1cbn1cblxuY29uc3QgdG9kb0l0ZW0gPSAocHJvcGVydGllcykgPT4ge1xuICBjb25zdCB0aXRsZSA9ICBwcm9wZXJ0aWVzWyd0aXRsZSddXG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gcHJvcGVydGllc1snZGVzY3JpcHRpb24nXTtcbiAgY29uc3QgcHJpb3JpdHlMZXZlbCA9IHByb3BlcnRpZXNbJ3ByaW9yaXR5TGV2ZWwnXTtcbiAgY29uc3QgZHVlRGF0ZSA9IHByb3BlcnRpZXNbJ2R1ZURhdGUnXTtcbiAgY29uc3QgY2F0ZWdvcnkgPSBwcm9wZXJ0aWVzWydjYXRlZ29yeSddO1xuICBjb25zdCBub3RlcyA9IHByb3BlcnRpZXNbJ25vdGVzJ107XG5cbiAgY29uc3QgaWQgPSBnZXRJdGVtcygpLmxlbmd0aCArIDE7XG4gIGNvbnN0IGlzQ29tcGxldGUgPSBmYWxzZTsgXG5cbiAgcmV0dXJuIHt0aXRsZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5TGV2ZWwsIGR1ZURhdGUsIGNhdGVnb3J5LCBub3RlcywgaWQsIGlzQ29tcGxldGUgfVxufTtcblxuY29uc3QgY3JlYXRlSXRlbSA9ICgpID0+IHtcbiAgbGV0IHByb3BlcnRpZXMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ3ByaW9yaXR5TGV2ZWwnLCAnZHVlRGF0ZScsICdjYXRlZ29yeScsICdub3RlcyddXG5cbiAgbGV0IGFyZ3MgPSB7fVxuXG4gIGZvciAobGV0IGk9MDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IHByb3BWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHByb3BlcnRpZXNbaV0pWzBdLnZhbHVlO1xuICAgIGlmIChwcm9wVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgLy8gaGFuZGxlIHdoZW4gYSBuZXcgY2F0ZWdvcnkgaXMgYmVpbmcgc2V0XG4gICAgICBpZiAocHJvcGVydGllc1tpXSA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW4tZm9ybS1hZGQtY2F0ZWdvcnkgPiBpbnB1dCcpLnZhbHVlXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc05ld0NhdGVnb3J5KGlucHV0KSkge1xuICAgICAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBpbnB1dDtcbiAgICAgICAgICBjcmVhdGVDYXRlZ29yeShpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9ICdHZW5lcmFsJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IHByb3BWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShhcmdzKTtcbiAgXG4gIF9zdG9yZUl0ZW0obmV3SXRlbSk7XG59XG5cbmNvbnN0IGRlbGV0ZUl0ZW0gPSAoaXRlbSkgPT4ge1xuICByZW1vdmVGcm9tdG9kb0l0ZW1zKGl0ZW0pO1xuICBfcmVtb3ZlVG9kb0Zyb21TdG9yYWdlKGl0ZW0pO1xufVxuXG5leHBvcnQgeyB0b2RvSXRlbSwgY3JlYXRlSXRlbSwgZ2V0SXRlbXMsIHBhcnNlU3RvcmVkSXRlbXMsIHNvcnRCeURhdGUsIHNvcnRCeVByaW9yaXR5LCBkZWxldGVJdGVtLCBnZXRDb21wbGV0ZWRJdGVtcywgbWFya0l0ZW1Db21wbGV0ZSwgcGFyc2VTdG9yZWRDb21wbGV0ZWQgfSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgZGlzcGxheUZvcm0gfSBmcm9tICcuL3RvZG8taXRlbS1mb3JtJ1xuaW1wb3J0IHsgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biB9IGZyb20gJy4vY2F0ZWdvcnktdmlldydcbmltcG9ydCB7IHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcyB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBwYXJzZVN0b3JlZEl0ZW1zLCBwYXJzZVN0b3JlZENvbXBsZXRlZCB9IGZyb20gJy4vdG9kby1pdGVtJ1xuaW1wb3J0IHsgc2hvd0FsbFRvZG9zIH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcbmltcG9ydCB7IGNyZWF0ZVNpZGViYXIgfSBmcm9tICcuL3NpZGUtYmFyLXZpZXcnXG5cbmNvbnN0IHNldEV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCBjYXRlZ29yeVRhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXRlZ29yeS10YWInKTtcbiAgY2F0ZWdvcnlUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWNvbnRlbnQnKS5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gIH0gKVxuXG4gIGNvbnN0IG92ZXJ2aWV3VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ2aWV3LXRhYicpO1xuICBvdmVydmlld1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGxUb2Rvcyk7XG5cbiAgY29uc3QgdG9kb0Zvcm1CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnRuLXRvZG9JdGVtLWZvcm0nKTtcbiAgdG9kb0Zvcm1CdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5Rm9ybSk7XG59O1xuXG5wYXJzZVN0b3JlZEl0ZW1zKCk7XG5wYXJzZVN0b3JlZENvbXBsZXRlZCgpO1xucmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzKCk7XG5jcmVhdGVTaWRlYmFyKCk7XG5jcmVhdGVDYXRlZ29yeURyb3Bkb3duKCk7XG5zZXRFdmVudExpc3RlbmVycygpO1xuc2hvd0FsbFRvZG9zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=