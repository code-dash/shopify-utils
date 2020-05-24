async function duplicate_article(element){
  element.title += this.duplicatePrefix;
  const response = await this.postRequest('articles.json', "POST", {
    article: element
  });
}

module.exports = duplicate_article;