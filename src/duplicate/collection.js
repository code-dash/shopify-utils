async function duplicate_collection(element){
  delete element.products_count;
  element.title += this.duplicatePrefix;
  if(element.collection_type === 'smart'){
    await this.postRequest('smart_collections.json', "POST", {
      smart_collection: element
    });
  } else {
    await this.postRequest('custom_collections.json', "POST", {
      custom_collection: element
    });
  }
}

module.exports = duplicate_collection;