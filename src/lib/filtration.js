const equal = (obj, item) => obj[item.conditionTargetSelected] === item.conditionCheckText.toString();
const notEqual = (obj, item) => obj[item.conditionTargetSelected] !== item.conditionCheckText.toString();
const isGreater = (obj, item) => {
  const prices = obj.variants.filter(variant => parseInt(variant.price.replace('.', ''))/100 > item.conditionCheckText);
  return prices.length;
};
const isLess = (obj, item) => {
  const prices = obj.variants.filter(variant => parseInt(variant.price.replace('.', ''))/100 < item.conditionCheckText);
  return prices.length;
};
const contains = (obj, item) => obj[item.conditionTargetSelected].indexOf(item.conditionCheckText) > -1;
const doesNotContains = (obj, item) => obj[item.conditionTargetSelected].indexOf(item.conditionCheckText) === -1;
const startsWith = (obj, item) => {
  const regexString = `^${item.conditionCheckText}`;
  const regex = new RegExp(regexString);
  if(obj[item.conditionTargetSelected].match(regex)){
    return true;
  }
};
const endsWith = (obj, item) => {
  const regexString = `${item.conditionCheckText}$`;
  const regex = new RegExp(regexString);
  if(obj[item.conditionTargetSelected].match(regex)){
    return true;
  }
};

function callFunction(obj, item){
  switch (item.conditionChecksSelected) {
    case '===':
      return equal(obj, item)
    case '!==':
      return notEqual(obj, item)
    case '>':
      return isGreater(obj, item)
    case '<':
      return isLess(obj, item)
    case '^':
      return startsWith(obj, item);
    case '$':
      return endsWith(obj, item);
    case 'contains':
      return contains(obj, item);
    case '!contains':
      return doesNotContains(obj, item);
  }
}

function filterInit(items, conditions, logicalOperator){
  let filteredItems = [];
  conditions.forEach(item => {
    if(logicalOperator === 'and'){
      const target = filteredItems.length ? filteredItems : items;
      filteredItems = target.filter(obj => callFunction(obj, item));
    } else {
      const results = items.reduce((acc, val) => {
        if(!filteredItems.some(obj => obj.id === val.id)){
          if(callFunction(val, item)){
            acc.push(val);
          }
        }
        return acc;
      }, [])
      filteredItems = filteredItems.concat(results);
    }
  });
  return filteredItems;
}

export default filterInit;