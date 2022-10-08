import { createItem } from './todo-item'

// const Event = (type) => {
//   type

//   const setListener = (type, callback) => {

//   }

//   return { setListener }
// }

const setEventListeners = () => {
  const addItemBtn = document.querySelector('.btn-add-item');
  addItemBtn.addEventListener('click', createItem);
}

export { setEventListeners }