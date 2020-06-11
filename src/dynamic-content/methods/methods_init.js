const lowercase = (type, item) => {
  return {
    id: item.id,
    [type]: item[type].toLowerCase()
  };
};
const uppercase = (type, item) => {
  return {
    id: item.id,
    [type]: item[type].toUpperCase()
  };
};
const insertBefore = (type, item, text) => {
  return {
    id: item.id,
    [type]: text + item[type]
  };
}
const insertAfter = (type, item, text) => {
  return {
    id: item.id,
    [type]: item[type] + text
  };
}
const replaceText = (type, item, input, output) => {
  return {
    id: item.id,
    [type]: item[type].replace(input, output)
  };
}
const replaceRegExText = (type, item, input, output) => {
  return {
    id: item.id,
    [type]: item[type].replace(new RegExp(input, 'g'), output)
  };
}

function callFunction(target, type, item, text = null, text2 = null){
  switch (type) {
    case 'Lowercase':
      return lowercase(target, item)
      break;
    case 'Uppercase':
      return uppercase(target, item)
      break;
    case 'Insert before':
      return insertBefore(target, item, text);
      break;
    case 'Insert after':
      return insertAfter(target, item, text);
      break;
    case 'Replace':
      return replaceText(target, item, text, text2);
      break;
    case 'Replace RegEx':
      return replaceRegExText(target, item, text, text2);
      break;
  }
}

function getObjectName(page) {
  if(page.indexOf('product') > -1){
    return 'product';
  } else if (page.indexOf('article') > -1){
    return 'article';
  } else if (page.indexOf('page') > -1){
    return 'page';
  } else if (page.indexOf('blog') > -1){
    return 'blog';
  }
}

async function methodInit(target, type, text1, text2){
  const currentPage = this.getCurrentPageType();
  const objName = getObjectName(currentPage[0]);
  for(let index = 0; index < this.filteredItems.length; index++){
    const item = this.filteredItems[index];
    if(type === 'Custom Code'){
      console.log(this.customCode.getValue());
      
      eval(this.customCode.getValue());
    } else {
      const updatedItem = {
        [objName]: callFunction(target, type, item, text1, text2)
      };
      await this.postRequest(`${currentPage[1]}/${item.id}.json`, "PUT", updatedItem);
    }
  }
  document.querySelector('.js-start-dynamic').classList.remove('is-loading');
  if(type !== 'Custom Code'){
    alert('Done! Please refresh the page to see the results!')
  }
}

export default methodInit;