import { createForm } from './add-item-form'
import { setEventListeners } from './event'

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


createForm();

if (_storedItems().length > 0) {
  _parseStoredItems();
}
setEventListeners();

export { getItems }