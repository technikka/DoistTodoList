import { createCategory, isNewCategory } from './category'
import { compareAsc } from 'date-fns'

let todoItems = [];

const _removeFromTodoItems = (item) => {
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
  _removeFromTodoItems(item);
  addToCompletedItems(item);
  _storeCompleted(item);
  _removeTodoFromStorage(item);
}

const sortByDate = (items) => {
  let nulls = items.filter(item => item.dueDate === null);
  for (let i=0; i < nulls.length; i++) {
    let index = items.indexOf(nulls[i])
    items.splice(index, 1);
  }

  let sortedItems = items.sort(
    (a,b) => {
      compareAsc(new Date(a.dueDate), new Date(b.dueDate))
    }
  )

  return sortedItems.concat(nulls)
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

const deleteItem = (item) => {
  _removeFromTodoItems(item);
  _removeTodoFromStorage(item);
}

export { todoItem, createItem, getItems, parseStoredItems, sortByDate, sortByPriority, deleteItem, getCompletedItems, markItemComplete, parseStoredCompleted }