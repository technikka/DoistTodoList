import { createCategory, isNewCategory } from './category'
import { compareAsc } from 'date-fns'

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
    (a,b) => compareAsc(new Date(a.dueDate), new Date(b.dueDate))
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
        if (input && isNewCategory(input)) {
          args[properties[i]] = input;
          createCategory(input);
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

export { todoItem, createItem, getItems, parseStoredItems, sortByDate, sortByPriority }