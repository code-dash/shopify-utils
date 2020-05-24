async function duplicate_blog(element){
  element.title += this.duplicatePrefix;
  const response = await this.postRequest('blogs.json', "POST", {
    blog: element
  });
}

module.exports = duplicate_blog;