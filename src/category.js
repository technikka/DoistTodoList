// Serves as prototype for individual categories

// ATTENTION: category object should be in separate file from DOM stuff!
const Category = () => {
}

const createCategory = (name) => {
  newCategory = Category(name);
}

// when user adds a new category, create an object with its prototype category ..
// newCategory = Object.create(Category), then it will respond to instanceOf ??

const createNewCategoryModal = () => {
  const contentContainer = document.getElementById('content');

  let modal = document.createElement('div');
  modal.classList.add('new-category-modal');
  contentContainer.appendChild(modal);

  let label = document.createElement('label');
  label.textContent = 'New Category';
  label.setAttribute('for', 'category');
  modal.appendChild(label);

  let input = document.createElement('input');
  input.setAttribute('name', 'category');
  modal.appendChild(input);

  let btn = document.createElement('button');
  btn.textContent = 'create';
  modal.appendChild(btn);
  
}

export { createNewCategoryModal }