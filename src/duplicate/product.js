async function duplicate_product(element){
  element.title += this.duplicatePrefix;
  const response = await this.postRequest('products.json', "POST", {
    product: element
  });
  if(response.errors){
    alert(JSON.stringify(response.errors))
  }
}

module.exports = duplicate_product;