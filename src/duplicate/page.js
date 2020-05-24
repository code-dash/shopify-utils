async function duplicate_page(element){
  element.title += this.duplicatePrefix;
  await this.postRequest('pages.json', "POST", {
    page: element
  });
}

module.exports = duplicate_page;