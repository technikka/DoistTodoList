import { createItem } from './todo-item'

const Event = (() => {
  const add = (element, type, callback) => {
    element.addEventListener(type, callback);
  }

  return { add }
})();

const newCategoryForm = () => {
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
      console.log(event.target);
      modal.classList.remove('show');
      backdrop.classList.remove('show');
    }
  }

  document.addEventListener('click', closeOnClickAway);
  // const closeModal = closeOnClickAway.bind(modal, modal); 
  // Event.add(document, 'click', closeModal);
}

// const closeOnClickAway = (obj, event) => {
//   if (!obj.contains(event.target)) {
//     console.log('removing show');
//     obj.classList.remove('show');
//   }
// }


const setEventListeners = () => {
  const addItemBtn = document.querySelector('.btn-add-item');
  addItemBtn.addEventListener('click', createItem);

  const categoryTab = document.querySelector('.category-tab');
  categoryTab.addEventListener('click', () => {
    document.querySelector('.dropdown-content').classList.toggle('show');
  } )
};

export { Event, setEventListeners, newCategoryForm }