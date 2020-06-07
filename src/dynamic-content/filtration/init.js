const equal = (obj, item) => obj[item[0]] === item[2];
const notEqual = (obj, item) => obj[item[0]] !== item[2];
const contains = (obj, item) => obj[item[0]].indexOf(item[2]) > -1;
const doesNotContains = (obj, item) => obj[item[0]].indexOf(item[2]) === -1;
const startsWith = (obj, item) => {
  const regexString = `^${item[2]}`;
  const regex = new RegExp(regexString);
  if(obj[item[0]].match(regex)){
    return true;
  }
};
const endsWith = (obj, item) => {
  const regexString = `${item[2]}$`;
  const regex = new RegExp(regexString);
  if(obj[item[0]].match(regex)){
    return true;
  }
};

function callFunction(obj, item){
  switch (item[1]) {
    case 'is equal to':
      return equal(obj, item)
      break;
    case 'is not equal to':
      return notEqual(obj, item)
      break;
    case 'starts with':
      return startsWith(obj, item);
      break;
    case 'ends with':
      return endsWith(obj, item);
      break;
    case 'contains':
      return contains(obj, item);
      break;
    case 'does not contain':
      return doesNotContains(obj, item);
      break;
  }
}

function filterInit(){
  const conditionType = this.sidebar.querySelector('[name="condition-type"]:checked').value;
  const conditionArray = Object.values(document.querySelectorAll('.dynamic-row')).reduce((acc, val) => {
    const type = val.querySelector('.dynamic-type').value;
    const condition = val.querySelector('.dynamic-condition').value;
    const check = val.querySelector('.dynamic-check').value;
    acc.push([type, condition, check]);
    return acc;
  }, []);
  this.filteredItems = conditionType === 'and' ? [...this.allItems] : [];
  conditionArray.forEach(item => {
    let resullts;
    if(conditionType === 'and'){
      resullts = this.filteredItems.filter(obj => callFunction(obj, item));
      this.filteredItems.concat(resullts);
    } else {
      resullts = this.allItems.reduce((acc, val) => {
        if(!this.filteredItems.some(obj => obj.id !== val.id)){
          if(callFunction(val, item)){
            acc.push(val);
          }
        }
        return acc;
      }, [])
    }
    this.filteredItems = this.filteredItems.concat(resullts);
  })
}




export default filterInit;