import { getCategories } from './category'
import { createItem } from './todo-item'

// can pass object to set form fields to specific values.
const createForm = () => {
  let content = document.querySelector('#content');

  let container = document.createElement('div');
  container.classList.add('add-item-container');
  content?.appendChild(container);

  const closeOnClickAway = (event) => {
    const backdrop = document.getElementById('backdrop');
    const trigger = document.querySelector('#side-bar > img')

    if (event.target !== trigger && !container.contains(event.target) && container != event.target) {
      container.classList.remove('show');
      backdrop.classList.remove('show');
    }
  }

  document.addEventListener('click', (event) => {
    if (container.classList.contains('show')) {
      closeOnClickAway(event);
    }
  });

  addExitBtn(container);

  let form = document.createElement('form');
  container.appendChild(form);

  let legend = document.createElement('legend');
  legend.textContent = 'Add an item to your list';
  form.appendChild(legend);

  // add title property input
  form.appendChild(_createInput('text', { textContent: 'Title', for: 'title'}));
  // add description property input
  form.appendChild(_createTextArea({ textContent: 'Description', for: 'description'}, { "cols": "30", "rows": "8"}));
  // add dueDate property input
  form.appendChild(_createInput('date', { textContent: 'Due Date', for: 'dueDate'}));
  // add priorityLevel property input
  form.appendChild(_createSelect({ textContent: 'Priority', for: 'priorityLevel'}, {"green": "Low Priority", "yellow": "Normal Priority", "orange": "Somewhat Priority", "red": "High Priority"}, "yellow"));

  // add category property input
  let defaultCategory = 'General';
  const categoryContainer = _createSelect({ textContent: 'Category', for: 'category'}, categoriesSelectOptions(), defaultCategory)
  form.appendChild(categoryContainer);

  let inputContainer = document.createElement('div');
  inputContainer.classList.add('in-form-add-category');

  let input = document.createElement('input');
  input.placeholder = 'New Category Name';
  input.name = 'category';

  inputContainer.appendChild(input);

  categoryContainer.appendChild(inputContainer);

  const categories = document.getElementById('category');
  categories?.addEventListener('change', function() {
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
  form.appendChild(btn);
  btn.addEventListener('click', createItem);
}

const addExitBtn = (parent) => {
  let btn = document.createElement('img');
  btn.src = '../src/assets/close-thick.png';
  btn.title = 'Close Form';
  parent.appendChild(btn);
  btn.addEventListener('click', () => {
    parent.classList.remove('show');
    document.getElementById('backdrop').classList.remove('show');
  })
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
  let categories = getCategories().sort();
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
  const form = document.querySelector('.add-item-container');
  const backdrop = document.getElementById('backdrop');
  form.classList.add('show');
  backdrop.classList.add('show');
}

export { createForm, displayForm, addSelectOptions, categoriesSelectOptions }