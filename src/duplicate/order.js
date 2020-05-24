async function duplicate_order(element){
  element.title += this.duplicatePrefix;
  if (element.tags === '') {
    delete element.tags;
  }
  delete element.source_name;
  delete element.fulfillments;
  delete element.tax_lines;
  if (element.customer) {
    delete element.customer.default_address;
  }
  delete element.customer;
  
  await this.postRequest('orders.json', "POST", {
    order: element
  });
}

module.exports = duplicate_order;