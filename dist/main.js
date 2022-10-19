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
  const heading = document.createElement('h2');
  heading.textContent = 'Sort By';
  container.appendChild(heading);

  const sortByDate = document.createElement('li');
  sortByDate.textContent = 'Due Date';
  container.appendChild(sortByDate);
  sortByDate.addEventListener('click', () => {
    (0,_todo_item_view__WEBPACK_IMPORTED_MODULE_0__.showByDueDate)();
  });

  const sortByPriority = document.createElement('li');
  sortByPriority.textContent = 'Priority Level';
  container.appendChild(sortByPriority);

  const sortByCategory = document.createElement('li');
  sortByCategory.textContent = 'Category';
  container.appendChild(sortByCategory);
  
}

const createSidebar = () => {
  createSortElement();
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
/* harmony export */   "filterByCategory": () => (/* binding */ filterByCategory),
/* harmony export */   "showAllTodos": () => (/* binding */ showAllTodos),
/* harmony export */   "showByDueDate": () => (/* binding */ showByDueDate)
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
/* harmony export */   "sortByDate": () => (/* binding */ sortByDate),
/* harmony export */   "todoItem": () => (/* binding */ todoItem)
/* harmony export */ });
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category */ "./src/category.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");



const todoItems = [];

const getItems = (category) => {
  if (category !== undefined) {
    return todoItems.filter(item => item.category === category);
  } else {
    return todoItems
  }
}

const sortByDate = (items) => {
  let sortedItems = items.sort(
    (a,b) => (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(a.dueDate), new Date(b.dueDate))
  )
  return sortedItems
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
(0,_category__WEBPACK_IMPORTED_MODULE_2__.retrieveStoredCategories)();
(0,_side_bar_view__WEBPACK_IMPORTED_MODULE_5__.createSidebar)();
(0,_category_view__WEBPACK_IMPORTED_MODULE_1__.createCategoryDropdown)();
setEventListeners();
(0,_todo_item_view__WEBPACK_IMPORTED_MODULE_4__.showAllTodos)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFcEQ7QUFDQSx3Q0FBd0Msd0RBQVc7QUFDbkQ7O0FBRUEsNERBQWdCO0FBQ2hCLG1FQUF3QjtBQUN4Qiw2REFBYTtBQUNiLHNFQUFzQjtBQUN0QjtBQUNBLDZEQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vY29tcGFyZUFzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jYXRlZ29yeS12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zaWRlLWJhci12aWV3LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kby1pdGVtLWZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvLWl0ZW0tdmlldy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGNvbXBhcmVBc2NcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNvbXBhcmVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSByZXN1bHQgb2YgdGhlIGNvbXBhcmlzb25cbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29tcGFyZSAxMSBGZWJydWFyeSAxOTg3IGFuZCAxMCBKdWx5IDE5ODk6XG4gKiBjb25zdCByZXN1bHQgPSBjb21wYXJlQXNjKG5ldyBEYXRlKDE5ODcsIDEsIDExKSwgbmV3IERhdGUoMTk4OSwgNiwgMTApKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIGNvbnN0IHJlc3VsdCA9IFtcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk4OSwgNiwgMTApXG4gKiBdLnNvcnQoY29tcGFyZUFzYylcbiAqIC8vPT4gW1xuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDAsXG4gKiAvLyAgIE1vbiBKdWwgMTAgMTk4OSAwMDowMDowMCxcbiAqIC8vICAgU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKiAvLyBdXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuXG4gIGlmIChkaWZmIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmIChkaWZmID4gMCkge1xuICAgIHJldHVybiAxOyAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfTsgfSBlbHNlIHsgX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9OyB9IHJldHVybiBfdHlwZW9mKG9iaik7IH1cblxuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgcGFyc2VkIGRhdGUgaW4gdGhlIGxvY2FsIHRpbWUgem9uZVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7IC8vIENsb25lIHRoZSBkYXRlXG5cbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG5cbiAgICAgIGNvbnNvbGUud2FybihuZXcgRXJyb3IoKS5zdGFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJpbXBvcnQgeyBnZXRDYXRlZ29yaWVzLCBjcmVhdGVDYXRlZ29yeSB9IGZyb20gJy4vY2F0ZWdvcnknXG5pbXBvcnQgeyBmaWx0ZXJCeUNhdGVnb3J5IH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcbmltcG9ydCB7IGFkZFNlbGVjdE9wdGlvbnMsIGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zIH0gZnJvbSAnLi90b2RvLWl0ZW0tZm9ybSdcblxuY29uc3QgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgY29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbiAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ25ldy1jYXRlZ29yeS1tb2RhbCcpO1xuICBjb250ZW50Q29udGFpbmVyLmFwcGVuZENoaWxkKG1vZGFsKTtcblxuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9ICdOZXcgQ2F0ZWdvcnknO1xuICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIGlucHV0LnNldEF0dHJpYnV0ZSgnbmFtZScsICduZXctY2F0ZWdvcnknKTtcbiAgbW9kYWwuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgYnRuLnRleHRDb250ZW50ID0gJ2NyZWF0ZSc7XG4gIG1vZGFsLmFwcGVuZENoaWxkKGJ0bik7XG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBjcmVhdGVDYXRlZ29yeShpbnB1dC52YWx1ZSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1jYXRlZ29yeS1tb2RhbCcpLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFja2Ryb3AnKS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gIH0pO1xufVxuXG5jb25zdCBzaG93Q2F0ZWdvcnlNb2RhbCA9ICgpID0+IHtcbiAgY29uc3QgbmV3Q2F0ZWdvcnlNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgaWYgKG5ld0NhdGVnb3J5TW9kYWwgPT09IG51bGwpIHtcbiAgICBjcmVhdGVOZXdDYXRlZ29yeU1vZGFsKCk7XG4gIH1cblxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwnKTtcbiAgY29uc3QgYmFja2Ryb3AgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2Ryb3AnKTtcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICBiYWNrZHJvcC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctY2F0ZWdvcnktbW9kYWwgaW5wdXQnKS5mb2N1cygpO1xuXG4gIGNvbnN0IGNsb3NlT25DbGlja0F3YXkgPSAoZXZlbnQpID0+IHtcbiAgICBjb25zdCBkcm9wZG93bkl0ZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZHJvcGRvd24taXRlbScpO1xuICAgIGZvciAobGV0IGk9MDsgaSA8IGRyb3Bkb3duSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldID09PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbW9kYWwuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiBtb2RhbCAhPSBldmVudC50YXJnZXQpIHtcbiAgICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgIGJhY2tkcm9wLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICB9XG4gIH1cblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5jb25zdCBhZGRDcmVhdGVOZXcgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IG5ld0NhdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBuZXdDYXQuY2xhc3NMaXN0LmFkZCgnZHJvcGRvd24taXRlbScpO1xuICBuZXdDYXQudGV4dENvbnRlbnQgPSAnQ3JlYXRlIE5ldyc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChuZXdDYXQpO1xuICBuZXdDYXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q2F0ZWdvcnlNb2RhbCk7XG59XG5cbmNvbnN0IGFkZENhdGVnb3JpZXMgPSAoY29udGFpbmVyKSA9PiB7XG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBnZXRDYXRlZ29yaWVzKCkuc29ydCgpO1xuXG4gIGZvciAoY29uc3QgY2F0ZWdvcnkgb2YgY2F0ZWdvcmllcykge1xuICAgIGNvbnN0IG5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0Rpdi5jbGFzc0xpc3QuYWRkKCdkcm9wZG93bi1pdGVtJyk7XG4gICAgbmV3RGl2LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG5ld0Rpdik7XG4gICAgbmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgZmlsdGVyQnlDYXRlZ29yeShjYXRlZ29yeSk7XG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlEcm9wZG93biA9ICgpID0+IHtcbiAgY29uc3QgdGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhdGVnb3J5LXRhYicpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2Ryb3Bkb3duLWNvbnRlbnQnKTtcbiAgdGFiLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgYWRkQ3JlYXRlTmV3KGNvbnRhaW5lcik7XG4gIGFkZENhdGVnb3JpZXMoY29udGFpbmVyKTtcblxuICBjb25zdCBjbG9zZU9uQ2xpY2tBd2F5ID0gKGV2ZW50KSA9PiB7XG4gICAgY29uc3QgZHJvcGRvd25JdGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2Ryb3Bkb3duLWl0ZW0nKTtcbiAgICBpZiAoIXRhYi5jb250YWlucyhldmVudC50YXJnZXQpKSB7XG4gICAgICBmb3IgKGxldCBpPTA7IGkgPCBkcm9wZG93bkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkcm9wZG93bkl0ZW1zW2ldICE9PSBldmVudC50YXJnZXQpIHtcbiAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlT25DbGlja0F3YXkpO1xufVxuXG5jb25zdCByZWxvYWRDYXRlZ29yeVRhYiA9ICgpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50Jyk7XG4gIGNvbnRhaW5lci50ZXh0Q29udGVudCA9ICcnO1xuICBhZGRDcmVhdGVOZXcoY29udGFpbmVyKTtcbiAgYWRkQ2F0ZWdvcmllcyhjb250YWluZXIpO1xufVxuXG5jb25zdCByZWxvYWRDYXRlZ29yeVRvZG9TZWxlY3QgPSAoKSA9PiB7XG4gIGxldCBzZWxlY3RCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKTtcbiAgc2VsZWN0Qm94LnRleHRDb250ZW50ID0gJyc7XG4gIGFkZFNlbGVjdE9wdGlvbnMoc2VsZWN0Qm94LCBjYXRlZ29yaWVzU2VsZWN0T3B0aW9ucygpLCAnR2VuZXJhbCcpO1xufVxuXG5cblxuZXhwb3J0IHsgY3JlYXRlTmV3Q2F0ZWdvcnlNb2RhbCwgc2hvd0NhdGVnb3J5TW9kYWwsIHJlbG9hZENhdGVnb3J5VGFiLCBjcmVhdGVDYXRlZ29yeURyb3Bkb3duLCByZWxvYWRDYXRlZ29yeVRvZG9TZWxlY3QgfSIsImltcG9ydCB7IHJlbG9hZENhdGVnb3J5VGFiLCByZWxvYWRDYXRlZ29yeVRvZG9TZWxlY3QgfSBmcm9tICcuL2NhdGVnb3J5LXZpZXcnXG5cbmNvbnN0IGFsbENhdGVnb3JpZXMgPSBbJ0dlbmVyYWwnXTtcblxuY29uc3QgZ2V0Q2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgcmV0dXJuIGFsbENhdGVnb3JpZXNcbn1cblxuY29uc3QgX3N0b3JlQ2F0ZWdvcnkgPSAoY2F0ZWdvcnlOYW1lKSA9PiB7XG4gIGxldCBjYXRJZCA9IGdldENhdGVnb3JpZXMoKS5sZW5ndGggKyAxXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGBjYXRlZ29yeSR7Y2F0SWR9YCwgY2F0ZWdvcnlOYW1lKTtcbn1cblxuY29uc3QgX3N0b3JlZENhdGVnb3JpZXMgPSAoKSA9PiB7XG4gIGxldCBjYXRlZ29yaWVzID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygnY2F0ZWdvcnknKVxuICApXG4gIHJldHVybiBjYXRlZ29yaWVzXG59XG5cbmNvbnN0IHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcyA9ICgpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBfc3RvcmVkQ2F0ZWdvcmllcygpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgYWxsQ2F0ZWdvcmllcy5wdXNoKGNhdGVnb3JpZXNbaV1bMV0pO1xuICB9XG59XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5ID0gKHVzZXJJbnB1dCkgPT4ge1xuICBpZiAoYWxsQ2F0ZWdvcmllcy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgLy8gc2ltcGx5IGRvbid0IGNyZWF0ZSBhIGRvdWJsZVxuICAgIHJldHVyblxuICB9IGVsc2Uge1xuICAgIGFsbENhdGVnb3JpZXMucHVzaCh1c2VySW5wdXQpO1xuICAgIF9zdG9yZUNhdGVnb3J5KHVzZXJJbnB1dCk7XG4gICAgcmVsb2FkQ2F0ZWdvcnlUYWIoKTtcbiAgICAvLyBpZiBuZXcgdG9kbyBmb3JtIGlzIHNob3dpbmdcbiAgICBpZiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhdGVnb3J5JykpIHtcbiAgICAgIHJlbG9hZENhdGVnb3J5VG9kb1NlbGVjdCgpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBpc05ld0NhdGVnb3J5ID0gKGNhdGVnb3J5KSA9PiB7XG4gIGlmIChnZXRDYXRlZ29yaWVzKCkuaW5jbHVkZXMoY2F0ZWdvcnkpKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxufSBcblxuZXhwb3J0IHsgY3JlYXRlQ2F0ZWdvcnksIGdldENhdGVnb3JpZXMsIHJldHJpZXZlU3RvcmVkQ2F0ZWdvcmllcywgaXNOZXdDYXRlZ29yeSB9XG4iLCJpbXBvcnQgeyBzaG93QnlEdWVEYXRlIH0gZnJvbSAnLi90b2RvLWl0ZW0tdmlldydcblxuY29uc3Qgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlLWJhcicpO1xuXG5jb25zdCBjcmVhdGVTb3J0RWxlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc29ydC1jb250YWluZXInKTtcbiAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gIGhlYWRpbmcudGV4dENvbnRlbnQgPSAnU29ydCBCeSc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcblxuICBjb25zdCBzb3J0QnlEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc29ydEJ5RGF0ZS50ZXh0Q29udGVudCA9ICdEdWUgRGF0ZSc7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzb3J0QnlEYXRlKTtcbiAgc29ydEJ5RGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBzaG93QnlEdWVEYXRlKCk7XG4gIH0pO1xuXG4gIGNvbnN0IHNvcnRCeVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc29ydEJ5UHJpb3JpdHkudGV4dENvbnRlbnQgPSAnUHJpb3JpdHkgTGV2ZWwnO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydEJ5UHJpb3JpdHkpO1xuXG4gIGNvbnN0IHNvcnRCeUNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgc29ydEJ5Q2F0ZWdvcnkudGV4dENvbnRlbnQgPSAnQ2F0ZWdvcnknO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc29ydEJ5Q2F0ZWdvcnkpO1xuICBcbn1cblxuY29uc3QgY3JlYXRlU2lkZWJhciA9ICgpID0+IHtcbiAgY3JlYXRlU29ydEVsZW1lbnQoKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlU2lkZWJhciB9IiwiaW1wb3J0IHsgZ2V0Q2F0ZWdvcmllcywgY3JlYXRlQ2F0ZWdvcnkgfSBmcm9tICcuL2NhdGVnb3J5J1xuaW1wb3J0IHsgY3JlYXRlSXRlbSB9IGZyb20gJy4vdG9kby1pdGVtJ1xuXG4vLyBjYW4gcGFzcyBvYmplY3QgdG8gc2V0IGZvcm0gZmllbGRzIHRvIHNwZWNpZmljIHZhbHVlcy5cbmNvbnN0IGNyZWF0ZUZvcm0gPSAob3B0aW9uYWxEZWZhdWx0cyA9IHt9KSA9PiB7XG4gIGxldCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICBsZXQgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtaXRlbS1jb250YWluZXInKTtcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gIGxldCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybSk7XG5cbiAgbGV0IGZpZWxkc2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChmaWVsZHNldCk7XG5cbiAgbGV0IGxlZ2VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICBsZWdlbmQudGV4dENvbnRlbnQgPSAnQWRkIGFuIGl0ZW0gdG8geW91ciBsaXN0JztcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQobGVnZW5kKTtcblxuICAvLyBhZGQgdGl0bGUgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZUlucHV0KCd0ZXh0JywgeyB0ZXh0Q29udGVudDogJ1RpdGxlJywgZm9yOiAndGl0bGUnfSkpO1xuICAvLyBhZGQgZGVzY3JpcHRpb24gcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVRleHRBcmVhKHsgdGV4dENvbnRlbnQ6ICdEZXNjcmlwdGlvbicsIGZvcjogJ2Rlc2NyaXB0aW9uJ30sIHsgXCJjb2xzXCI6IFwiMzBcIiwgXCJyb3dzXCI6IFwiOFwifSkpO1xuICAvLyBhZGQgZHVlRGF0ZSBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlSW5wdXQoJ2RhdGUnLCB7IHRleHRDb250ZW50OiAnRHVlIERhdGUnLCBmb3I6ICdkdWVEYXRlJ30pKTtcbiAgLy8gYWRkIHByaW9yaXR5TGV2ZWwgcHJvcGVydHkgaW5wdXRcbiAgZmllbGRzZXQuYXBwZW5kQ2hpbGQoX2NyZWF0ZVNlbGVjdCh7IHRleHRDb250ZW50OiAnUHJpb3JpdHknLCBmb3I6ICdwcmlvcml0eUxldmVsJ30sIHtcImdyZWVuXCI6IFwiTG93IFByaW9yaXR5XCIsIFwieWVsbG93XCI6IFwiTm9ybWFsIFByaW9yaXR5XCIsIFwib3JhbmdlXCI6IFwiU29tZXdoYXQgUHJpb3JpdHlcIiwgXCJyZWRcIjogXCJIaWdoIFByaW9yaXR5XCJ9LCBcInllbGxvd1wiKSk7XG4gIC8vIGFkZCBub3RlcyBwcm9wZXJ0eSBpbnB1dFxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChfY3JlYXRlVGV4dEFyZWEoeyB0ZXh0Q29udGVudDogJ05vdGVzJywgZm9yOiAnbm90ZXMnfSwgeyBcImNvbHNcIjogXCIzMFwiLCBcInJvd3NcIjogXCI4XCJ9KSk7XG5cbiAgLy8gYWRkIGNhdGVnb3J5IHByb3BlcnR5IGlucHV0XG4gIGxldCBkZWZhdWx0Q2F0ZWdvcnkgPSAnR2VuZXJhbCc7XG4gIGlmIChvcHRpb25hbERlZmF1bHRzWydjYXRlZ29yeSddKSB7XG4gICAgZGVmYXVsdENhdGVnb3J5ID0gb3B0aW9uYWxEZWZhdWx0c1snY2F0ZWdvcnknXTtcbiAgfVxuICBjb25zdCBjYXRlZ29yeUNvbnRhaW5lciA9IF9jcmVhdGVTZWxlY3QoeyB0ZXh0Q29udGVudDogJ0NhdGVnb3J5JywgZm9yOiAnY2F0ZWdvcnknfSwgY2F0ZWdvcmllc1NlbGVjdE9wdGlvbnMoKSwgZGVmYXVsdENhdGVnb3J5KVxuICBmaWVsZHNldC5hcHBlbmRDaGlsZChjYXRlZ29yeUNvbnRhaW5lcik7XG5cbiAgbGV0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2luLWZvcm0tYWRkLWNhdGVnb3J5Jyk7XG5cbiAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgaW5wdXQucGxhY2Vob2xkZXIgPSAnTmV3IENhdGVnb3J5IE5hbWUnO1xuICBpbnB1dC5uYW1lID0gJ2NhdGVnb3J5JztcblxuICBpbnB1dENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgY2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXRDb250YWluZXIpO1xuXG4gIGNvbnN0IGNhdGVnb3JpZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2F0ZWdvcnknKTtcbiAgY2F0ZWdvcmllcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy52YWx1ZSA9PT0gJ0NyZWF0ZSBOZXcnKSB7XG4gICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdzaG93Jyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICB9XG4gICAgfVxuICB9KVxuXG4gIGNvbnN0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBidG4udGV4dENvbnRlbnQgPSAnQWRkJztcbiAgYnRuLmNsYXNzTGlzdC5hZGQoJ2J0bi1hZGQtaXRlbScpO1xuICBmaWVsZHNldC5hcHBlbmRDaGlsZChidG4pO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjcmVhdGVJdGVtKTtcbn1cblxuY29uc3QgX2FkZExhYmVsID0gKHBhcmVudCwgcHJvcGVydGllcykgPT4ge1xuICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICBsYWJlbC50ZXh0Q29udGVudCA9IHByb3BlcnRpZXMudGV4dENvbnRlbnQ7XG4gIGxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgcHJvcGVydGllcy5mb3IpO1xuICBwYXJlbnQuYXBwZW5kQ2hpbGQobGFiZWwpO1xufVxuXG5jb25zdCBfY3JlYXRlSW5wdXQgPSAoaW5wdXRUeXBlLCBpbnB1dExhYmVsLCBpbnB1dFByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBpbnB1dExhYmVsKTtcblxuICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICBpbnB1dC5uYW1lID0gaW5wdXRMYWJlbC5mb3I7XG4gIGlmIChpbnB1dFByb3BlcnRpZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhpbnB1dFByb3BlcnRpZXMpKSB7XG4gICAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgX2NyZWF0ZVRleHRBcmVhID0gKGFyZWFMYWJlbCwgYXJlYVByb3BlcnRpZXMpID0+IHtcbiAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBfYWRkTGFiZWwoY29udGFpbmVyLCBhcmVhTGFiZWwpO1xuXG4gIGxldCBhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgYXJlYS5uYW1lID0gYXJlYUxhYmVsLmZvcjtcbiAgaWYgKGFyZWFQcm9wZXJ0aWVzKSB7XG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXJlYVByb3BlcnRpZXMpKSB7XG4gICAgICBhcmVhLnNldEF0dHJpYnV0ZShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFyZWEpO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmNvbnN0IGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zID0gKHNlbGVjdERlZmF1bHQpID0+IHtcbiAgbGV0IGNhdGVnb3JpZXMgPSBnZXRDYXRlZ29yaWVzKCkuc29ydCgpO1xuICBsZXQgc2VsZWN0T3B0aW9ucyA9IHt9O1xuXG4gIHNlbGVjdE9wdGlvbnNbJ0NyZWF0ZSBOZXcnXSA9IFsnQ3JlYXRlIE5ldyAuLi4nXTtcblxuICBmb3IgKGxldCBpPTA7IGkgPCBjYXRlZ29yaWVzLmxlbmd0aDsgaSsrICkge1xuICAgIHNlbGVjdE9wdGlvbnNbY2F0ZWdvcmllc1tpXV0gPSBjYXRlZ29yaWVzW2ldO1xuICB9XG5cbiAgcmV0dXJuIHNlbGVjdE9wdGlvbnM7XG59XG5cbmNvbnN0IGFkZFNlbGVjdE9wdGlvbnMgPSAoc2VsZWN0LCBzZWxlY3RPcHRpb25zLCBzZWxlY3REZWZhdWx0KSA9PiB7XG4gIGZvciAoY29uc3QgW3ZhbHVlLCB0ZXh0Q29udGVudF0gb2YgT2JqZWN0LmVudHJpZXMoc2VsZWN0T3B0aW9ucykpIHtcbiAgICBsZXQgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgb3B0aW9uLnZhbHVlID0gdmFsdWU7XG4gICAgb3B0aW9uLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG4gICAgaWYgKHNlbGVjdERlZmF1bHQgJiYgb3B0aW9uLnZhbHVlID09PSBzZWxlY3REZWZhdWx0KSB7XG4gICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgfVxufVxuXG4vLyBhZGQgc2VsZWN0RGVmYXVsdCBvcHRpb24gd2l0aCBuYW1lIGF0dHIgdG8gbWFrZSBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlXG5jb25zdCBfY3JlYXRlU2VsZWN0ID0gKHNlbGVjdExhYmVsLCBzZWxlY3RPcHRpb25zLCBzZWxlY3REZWZhdWx0KSA9PiB7XG4gIGxldCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgX2FkZExhYmVsKGNvbnRhaW5lciwgc2VsZWN0TGFiZWwpO1xuXG4gIGxldCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgc2VsZWN0Lm5hbWUgPSBzZWxlY3RMYWJlbC5mb3I7XG4gIHNlbGVjdC5pZCA9IHNlbGVjdC5uYW1lO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcblxuICBhZGRTZWxlY3RPcHRpb25zKHNlbGVjdCwgc2VsZWN0T3B0aW9ucywgc2VsZWN0RGVmYXVsdCk7XG5cbiAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuY29uc3QgZGlzcGxheUZvcm0gPSAoKSA9PiB7XG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGVudCcpO1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGNyZWF0ZUZvcm0oKTtcbn1cblxuZXhwb3J0IHsgY3JlYXRlRm9ybSwgZGlzcGxheUZvcm0sIGFkZFNlbGVjdE9wdGlvbnMsIGNhdGVnb3JpZXNTZWxlY3RPcHRpb25zIH0iLCJpbXBvcnQgeyBnZXRJdGVtcywgc29ydEJ5RGF0ZSB9IGZyb20gJy4vdG9kby1pdGVtJ1xuaW1wb3J0IHsgY3JlYXRlRm9ybSB9IGZyb20gJy4vdG9kby1pdGVtLWZvcm0nXG5cbmxldCBjdXJyZW50bHlTaG93aW5nID0gW107XG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcblxuY29uc3QgX3NldENvbG9yQnlQcmlvcml0eSA9IChlbGVtZW50LCBwcmlvcml0eUxldmVsKSA9PiB7XG4gIGxldCBwcmlvcml0eUNvbG9yO1xuXG4gIGlmIChwcmlvcml0eUxldmVsID09PSAnZ3JlZW4nKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjMkE5RDhGJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdvcmFuZ2UnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRjRBMjYxJ1xuICB9IGVsc2UgaWYgKHByaW9yaXR5TGV2ZWwgPT09ICdyZWQnKSB7XG4gICAgcHJpb3JpdHlDb2xvciA9ICcjRTc2RjUxJztcbiAgfSBlbHNlIHtcbiAgICBwcmlvcml0eUNvbG9yID0gJyNFOUM0NkEnO1xuICB9XG4gIFxuICBlbGVtZW50LnN0eWxlLmJvcmRlckNvbG9yID0gcHJpb3JpdHlDb2xvclxufVxuXG5jb25zdCBfdXNlclJlYWRhYmxlUHJpb3JpdHkgPSAocHJpb3JpdHkpID0+IHtcbiAgaWYgKHByaW9yaXR5ID09PSAnZ3JlZW4nKSB7XG4gICAgcmV0dXJuICdMb3cnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICd5ZWxsb3cnKSB7XG4gICAgcmV0dXJuICdOb3JtYWwnXG4gIH0gZWxzZSBpZiAocHJpb3JpdHkgPT09ICdvcmFuZ2UnKSB7XG4gICAgcmV0dXJuICdNb2RlcmF0ZSdcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gJ0hpZ2gnO1xuICB9XG59XG5cbmNvbnN0IF9kaXNwbGF5RXhwYW5kQ29udHJhY3RJY29uID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBsZXQgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICBpY29uLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZC1jb250cmFjdC1pY29uJyk7XG4gIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb250cmFjdGVkJykpIHtcbiAgICBpY29uLnNyYyA9ICcuLi9zcmMvYXNzZXRzL2Fycm93LWV4cGFuZC1kb3duLnBuZyc7XG4gICAgaWNvbi50aXRsZSA9ICdFeHBhbmQgVmlldyc7XG4gIH0gZWxzZSB7XG4gICAgaWNvbi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9hcnJvdy1leHBhbmQtdXAucG5nJztcbiAgICBpY29uLnRpdGxlID0gJ0NvbnRyYWN0IFZpZXcnO1xuICB9XG4gIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pXG4gIH0pO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG59XG5cbmNvbnN0IF90b2RvQ29udGFpbmVyRXhwYW5kZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGxldCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tZGVzY3JpcHRpb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICBsZXQgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gIG5vdGVzLnRleHRDb250ZW50ID0gaXRlbS5ub3RlcztcbiAgbm90ZXMuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLW5vdGVzJyk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChub3Rlcyk7XG5cbiAgbGV0IHByaW9yaXR5TGV2ZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gIHByaW9yaXR5TGV2ZWwudGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7X3VzZXJSZWFkYWJsZVByaW9yaXR5KGl0ZW0ucHJpb3JpdHlMZXZlbCl9YDtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWwpO1xufVxuXG5jb25zdCBfdG9kb0NvbnRhaW5lckNvbnRyYWN0ZWQgPSAoY29udGFpbmVyLCBpdGVtKSA9PiB7XG4gIGxldCBkZWxJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGRlbEljb24uc3JjID0gJy4uL3NyYy9hc3NldHMvZGVsZXRlLWZvcmV2ZXIucG5nJztcbiAgZGVsSWNvbi50aXRsZSA9ICdEZWxldGUgSXRlbSc7XG4gIGRlbEljb24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLWljb24nKTtcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRlbEljb24pO1xuXG4gIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgdGl0bGUudGV4dENvbnRlbnQgPSBpdGVtLnRpdGxlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gIGxldCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBkdWVEYXRlLnRleHRDb250ZW50ID0gaXRlbS5kdWVEYXRlO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgbGV0IGNhdGVnb3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICBjYXRlZ29yeS50ZXh0Q29udGVudCA9IGl0ZW0uY2F0ZWdvcnk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjYXRlZ29yeSk7XG5cbiAgbGV0IG1hcmtDb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICBtYXJrQ29tcGxldGUudGV4dENvbnRlbnQgPSAnQ29tcGxldGUnO1xuICBtYXJrQ29tcGxldGUuY2xhc3NMaXN0LmFkZCgndG9kby1pdGVtLWNvbXBsZXRlLWJ0bicpO1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWFya0NvbXBsZXRlKTtcblxuICBfZGlzcGxheUV4cGFuZENvbnRyYWN0SWNvbihjb250YWluZXIsIGl0ZW0pO1xufVxuXG5jb25zdCBfdG9nZ2xlRXhwYW5kQ29udHJhY3RWaWV3ID0gKGNvbnRhaW5lciwgaXRlbSkgPT4ge1xuICBjb250YWluZXIudGV4dENvbnRlbnQgPSAnJztcbiAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2NvbnRyYWN0ZWQnKSkge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG4gICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gICAgX3RvZG9Db250YWluZXJFeHBhbmRlZChjb250YWluZXIsIGl0ZW0pO1xuICB9IGVsc2Uge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdjb250cmFjdGVkJyk7XG4gICAgX3RvZG9Db250YWluZXJDb250cmFjdGVkKGNvbnRhaW5lciwgaXRlbSk7XG4gIH1cbn1cblxuY29uc3QgZGlzcGxheUl0ZW1zID0gKGl0ZW1zQXJyYXkpID0+IHtcbiAgY29uc3QgZGlzcGxheUl0ZW1zQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpc3BsYXlJdGVtc0NvbnRhaW5lci5pZCA9ICdkaXNwbGF5LWl0ZW1zLWNvbnRhaW5lcic7XG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZGlzcGxheUl0ZW1zQ29udGFpbmVyKTtcblxuICBpdGVtc0FycmF5LmZvckVhY2goaXRlbSA9PiB7XG4gICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvLWl0ZW0tY29udGFpbmVyJyk7XG4gICAgX3NldENvbG9yQnlQcmlvcml0eShjb250YWluZXIsIGl0ZW0ucHJpb3JpdHlMZXZlbCk7XG4gICAgX3RvZ2dsZUV4cGFuZENvbnRyYWN0Vmlldyhjb250YWluZXIsIGl0ZW0pO1xuICAgIGRpc3BsYXlJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICB9KVxuXG4gIGN1cnJlbnRseVNob3dpbmcgPSBpdGVtc0FycmF5O1xufVxuXG5jb25zdCBjcmVhdGVMaXN0SGVhZGVyID0gKGNvbnRhaW5lciwgY2F0ZWdvcnkpID0+IHtcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gIGNvbnN0IHRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICB0ZXh0LnRleHRDb250ZW50ID0gY2F0ZWdvcnk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gIGJ0bi5zcmMgPSAnLi4vc3JjL2Fzc2V0cy9ub3RlLXBsdXMtb3V0bGluZS5wbmcnO1xuICBidG4udGl0bGUgPSBgQWRkIGl0ZW0gdG8gJHtjYXRlZ29yeX1gO1xuICBidG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY3JlYXRlRm9ybSggeyBjYXRlZ29yeTogY2F0ZWdvcnkgfSk7XG4gIH0pXG4gIGhlYWRlci5hcHBlbmRDaGlsZChidG4pO1xuICBjb250YWluZXIucHJlcGVuZChoZWFkZXIpO1xufVxuXG5jb25zdCBzaG93QWxsVG9kb3MgPSAoKSA9PiB7XG4gIGNvbnRlbnQudGV4dENvbnRlbnQgPSAnJztcbiAgbGV0IGl0ZW1zID0gZ2V0SXRlbXMoKTtcbiAgZGlzcGxheUl0ZW1zKGl0ZW1zKTtcbn1cblxuY29uc3QgZmlsdGVyQnlDYXRlZ29yeSA9IChjYXRlZ29yeSkgPT4ge1xuICBjb250ZW50LnRleHRDb250ZW50ID0gJyc7XG4gIGNyZWF0ZUxpc3RIZWFkZXIoY29udGVudCwgY2F0ZWdvcnkpO1xuICBsZXQgaXRlbXMgPSBnZXRJdGVtcyhjYXRlZ29yeSk7XG4gIGRpc3BsYXlJdGVtcyhpdGVtcyk7XG59XG5cbmNvbnN0IHNob3dCeUR1ZURhdGUgPSAoKSA9PiB7XG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkaXNwbGF5LWl0ZW1zLWNvbnRhaW5lcicpLnJlbW92ZSgpO1xuICBsZXQgaXRlbXMgPSBzb3J0QnlEYXRlKGN1cnJlbnRseVNob3dpbmcpO1xuICBkaXNwbGF5SXRlbXMoaXRlbXMpO1xufVxuXG5leHBvcnQgeyBzaG93QWxsVG9kb3MsIGZpbHRlckJ5Q2F0ZWdvcnksIHNob3dCeUR1ZURhdGUgfSIsImltcG9ydCB7IGNyZWF0ZUNhdGVnb3J5LCBpc05ld0NhdGVnb3J5IH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IGNvbXBhcmVBc2MgfSBmcm9tICdkYXRlLWZucydcblxuY29uc3QgdG9kb0l0ZW1zID0gW107XG5cbmNvbnN0IGdldEl0ZW1zID0gKGNhdGVnb3J5KSA9PiB7XG4gIGlmIChjYXRlZ29yeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRvZG9JdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09PSBjYXRlZ29yeSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRvZG9JdGVtc1xuICB9XG59XG5cbmNvbnN0IHNvcnRCeURhdGUgPSAoaXRlbXMpID0+IHtcbiAgbGV0IHNvcnRlZEl0ZW1zID0gaXRlbXMuc29ydChcbiAgICAoYSxiKSA9PiBjb21wYXJlQXNjKG5ldyBEYXRlKGEuZHVlRGF0ZSksIG5ldyBEYXRlKGIuZHVlRGF0ZSkpXG4gIClcbiAgcmV0dXJuIHNvcnRlZEl0ZW1zXG59XG5cbmNvbnN0IF9zdG9yZWRJdGVtcyA9ICgpID0+IHtcbiAgbGV0IGl0ZW1zID0gT2JqZWN0LmVudHJpZXMobG9jYWxTdG9yYWdlKS5maWx0ZXIoXG4gICAga2V5ID0+IGtleVswXS5pbmNsdWRlcygndG9kb0l0ZW0nKVxuICApXG4gIHJldHVybiBpdGVtc1xufVxuXG5jb25zdCBwYXJzZVN0b3JlZEl0ZW1zID0gKCkgPT4ge1xuICBjb25zdCBpdGVtcyA9IF9zdG9yZWRJdGVtcygpO1xuICBmb3IgKGxldCBpPTA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKyApIHtcbiAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShpdGVtc1tpXVsxXSk7XG4gICAgdG9kb0l0ZW1zLnB1c2gob2JqKTtcbiAgfVxufVxuXG5jb25zdCB0b2RvSXRlbSA9IChwcm9wZXJ0aWVzKSA9PiB7XG4gIGNvbnN0IHRpdGxlID0gIHByb3BlcnRpZXNbJ3RpdGxlJ11cbiAgY29uc3QgZGVzY3JpcHRpb24gPSBwcm9wZXJ0aWVzWydkZXNjcmlwdGlvbiddO1xuICBjb25zdCBwcmlvcml0eUxldmVsID0gcHJvcGVydGllc1sncHJpb3JpdHlMZXZlbCddO1xuICBjb25zdCBkdWVEYXRlID0gcHJvcGVydGllc1snZHVlRGF0ZSddO1xuICBjb25zdCBjYXRlZ29yeSA9IHByb3BlcnRpZXNbJ2NhdGVnb3J5J107XG4gIGNvbnN0IG5vdGVzID0gcHJvcGVydGllc1snbm90ZXMnXTtcblxuICBjb25zdCBpZCA9IGdldEl0ZW1zKCkubGVuZ3RoICsgMTtcbiAgY29uc3QgaXNDb21wbGV0ZSA9IGZhbHNlOyBcblxuICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHlMZXZlbCwgZHVlRGF0ZSwgY2F0ZWdvcnksIG5vdGVzLCBpZCB9XG59O1xuXG5jb25zdCBfc3RvcmVJdGVtID0gKHRvZG9JdGVtKSA9PiB7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGB0b2RvSXRlbSR7dG9kb0l0ZW0uaWR9YCwgSlNPTi5zdHJpbmdpZnkodG9kb0l0ZW0pKTtcbn1cblxuY29uc3QgY3JlYXRlSXRlbSA9ICgpID0+IHtcbiAgbGV0IHByb3BlcnRpZXMgPSBbJ3RpdGxlJywgJ2Rlc2NyaXB0aW9uJywgJ3ByaW9yaXR5TGV2ZWwnLCAnZHVlRGF0ZScsICdjYXRlZ29yeScsICdub3RlcyddXG5cbiAgbGV0IGFyZ3MgPSB7fVxuXG4gIGZvciAobGV0IGk9MDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKysgKSB7XG4gICAgbGV0IHByb3BWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKHByb3BlcnRpZXNbaV0pWzBdLnZhbHVlO1xuICAgIGlmIChwcm9wVmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgLy8gaGFuZGxlIHdoZW4gYSBuZXcgY2F0ZWdvcnkgaXMgYmVpbmcgc2V0XG4gICAgICBpZiAocHJvcGVydGllc1tpXSA9PT0gJ2NhdGVnb3J5Jykge1xuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW4tZm9ybS1hZGQtY2F0ZWdvcnkgPiBpbnB1dCcpLnZhbHVlXG4gICAgICAgIGlmIChpbnB1dCAmJiBpc05ld0NhdGVnb3J5KGlucHV0KSkge1xuICAgICAgICAgIGFyZ3NbcHJvcGVydGllc1tpXV0gPSBpbnB1dDtcbiAgICAgICAgICBjcmVhdGVDYXRlZ29yeShpbnB1dCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9ICdHZW5lcmFsJztcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IHByb3BWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXJnc1twcm9wZXJ0aWVzW2ldXSA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgbGV0IG5ld0l0ZW0gPSB0b2RvSXRlbShhcmdzKTtcbiAgXG4gIF9zdG9yZUl0ZW0obmV3SXRlbSk7XG59XG5cbmV4cG9ydCB7IHRvZG9JdGVtLCBjcmVhdGVJdGVtLCBnZXRJdGVtcywgcGFyc2VTdG9yZWRJdGVtcywgc29ydEJ5RGF0ZSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkaXNwbGF5Rm9ybSB9IGZyb20gJy4vdG9kby1pdGVtLWZvcm0nXG5pbXBvcnQgeyBjcmVhdGVDYXRlZ29yeURyb3Bkb3duIH0gZnJvbSAnLi9jYXRlZ29yeS12aWV3J1xuaW1wb3J0IHsgcmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzIH0gZnJvbSAnLi9jYXRlZ29yeSdcbmltcG9ydCB7IHBhcnNlU3RvcmVkSXRlbXMgfSBmcm9tICcuL3RvZG8taXRlbSdcbmltcG9ydCB7IHNob3dBbGxUb2RvcyB9IGZyb20gJy4vdG9kby1pdGVtLXZpZXcnXG5pbXBvcnQgeyBjcmVhdGVTaWRlYmFyIH0gZnJvbSAnLi9zaWRlLWJhci12aWV3J1xuXG5jb25zdCBzZXRFdmVudExpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3QgY2F0ZWdvcnlUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2F0ZWdvcnktdGFiJyk7XG4gIGNhdGVnb3J5VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kcm9wZG93bi1jb250ZW50JykuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdycpO1xuICB9IClcblxuICBjb25zdCBvdmVydmlld1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5vdmVydmlldy10YWInKTtcbiAgb3ZlcnZpZXdUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93QWxsVG9kb3MpO1xuXG4gIGNvbnN0IHRvZG9Gb3JtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi10b2RvSXRlbS1mb3JtJyk7XG4gIHRvZG9Gb3JtQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGlzcGxheUZvcm0pO1xufTtcblxucGFyc2VTdG9yZWRJdGVtcygpO1xucmV0cmlldmVTdG9yZWRDYXRlZ29yaWVzKCk7XG5jcmVhdGVTaWRlYmFyKCk7XG5jcmVhdGVDYXRlZ29yeURyb3Bkb3duKCk7XG5zZXRFdmVudExpc3RlbmVycygpO1xuc2hvd0FsbFRvZG9zKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=