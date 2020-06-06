function getRequestAll(url){
  return new Promise((resolve, reject) => {
    fetch(`/admin/api/${this.apiVersion}/${url}`, {
      method: "GET",
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-csrf-token': this.csrfToken
      },
      credentials: 'include'
    }).then(r => {
      r.json().then((response) => {
        this.allItems = this.allItems.concat(Object.values(response).pop())
        console.log(this.allItems);
        const headerLink = r.headers.get('link');
        if(headerLink){
          const match = r.headers.get('link').match(/<[^;]+\/(\w+\.json[^;]+)>;\srel="next"/);
          if(match){
            this.getRequestAll(match[1])
          } else {
            resolve()
          }
        } else {
          resolve();
        }
      })
    })
  })
}

module.exports = getRequestAll;