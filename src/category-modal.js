import { createCategory } from './category'

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
  btn.addEventListener('click', createCategory);
  // add event for enter key
  // Event.add(btn, 'keypress', createCategory );
}

const showCategoryModal = () => {
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



export { createNewCategoryModal, showCategoryModal }