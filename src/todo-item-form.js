import { getCategories } from './category'
import { createItem } from './todo-item'

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

  let form = document.createElement('form');
  container.appendChild(form);

  let legend = document.createElement('legend');
  legend.textContent = 'Create New Task';
  form.appendChild(legend);

  addExitBtn(form);

  _createInput('text', { textContent: 'Title', for: 'title'});
  _createTextArea({ textContent: 'Description', for: 'description'}, { "cols": "20", "rows": "8"});
  _createInput('date', { textContent: 'Due Date', for: 'dueDate'});
  _createSelect({ textContent: 'Priority', for: 'priorityLevel'}, {"green": "Low Priority", "yellow": "Normal Priority", "orange": "Somewhat Priority", "red": "High Priority"}, "yellow");

  let defaultCategory = 'General';
  _createSelect({ textContent: 'Category', for: 'category'}, categoriesSelectOptions(), defaultCategory)
  _createCategoryInput();

  const btn = document.createElement('button');
  btn.textContent = 'Create';
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
    document.querySelector('.add-item-container').classList.remove('show');
    document.getElementById('backdrop').classList.remove('show');
  })
}

const _addLabel = (parent, properties) => {
  let label = document.createElement('label');
  label.textContent = properties.textContent;
  label.setAttribute('for', properties.for);
  parent?.appendChild(label);
}

const _createInput = (inputType, inputLabel, inputProperties) => {
  let form = document.querySelector('form');
  _addLabel(form, inputLabel);

  let input = document.createElement('input');
  input.type = inputType;
  input.name = inputLabel.for;
  if (inputProperties) {
    for (const [key, value] of Object.entries(inputProperties)) {
      input.setAttribute(key, value);
    }
  }
  form?.appendChild(input);
}

const _createTextArea = (areaLabel, areaProperties) => {
  let form = document.querySelector('form');
  _addLabel(form, areaLabel);

  let area = document.createElement('textarea');
  area.name = areaLabel.for;
  if (areaProperties) {
    for (const [key, value] of Object.entries(areaProperties)) {
      area.setAttribute(key, value);
    }
  }
  form?.appendChild(area);
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
  let form = document.querySelector('form');
  _addLabel(form, selectLabel);

  let select = document.createElement('select');
  select.name = selectLabel.for;
  select.id = select.name;
  form?.appendChild(select);

  addSelectOptions(select, selectOptions, selectDefault);
}

const _createCategoryInput = () => {
  let form = document.querySelector('form');
  let inputContainer = document.createElement('div');
  inputContainer.classList.add('in-form-add-category');

  let input = document.createElement('input');
  input.placeholder = 'New Category Name';
  input.name = 'category';

  inputContainer.appendChild(input);

  form?.appendChild(inputContainer);

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
}

const displayForm = () => {
  const form = document.querySelector('.add-item-container');
  const backdrop = document.getElementById('backdrop');
  form.classList.add('show');
  backdrop.classList.add('show');
}

export { createForm, displayForm, addSelectOptions, categoriesSelectOptions }
