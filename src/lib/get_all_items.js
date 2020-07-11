function getRequestAll(url, items, csrfToken){
  return new Promise((resolve) => {
    fetch(`/admin/api/2020-10/${url}`, {
      method: "GET",
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'x-csrf-token': csrfToken
      },
      credentials: 'include'
    }).then(r => {
      r.json().then((response) => {
        items = items.concat(Object.values(response).pop())
        const headerLink = r.headers.get('link');
        if(headerLink){
          const match = r.headers.get('link').match(/<[^;]+\/(\w+\.json[^;]+)>;\srel="next"/);
          if(match){
            getRequestAll(match[1])
          } else {
            resolve(items)
          }
        } else {
          resolve(items);
        }
      })
    })
  })
}

export default getRequestAll;