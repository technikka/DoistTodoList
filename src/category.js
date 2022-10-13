const allCategories = [];

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
    allCategories.push(categories[i]);
  }
}

const createCategory = () => {
  let userInput = document.getElementsByName('new-category')[0].value;

  if (allCategories.includes(userInput)) {
    console.log('will alert user');
  } else {
    allCategories.push(userInput);
    _storeCategory(userInput);
  }

  document.querySelector('.new-category-modal').classList.remove('show');
  document.querySelector('#backdrop').classList.remove('show');
}

export { createCategory, getCategories, retrieveStoredCategories }
