function getRequest(url, method){
  return fetch(`/admin/api/${this.apiVersion}/${url}`, {
    method: method,
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'x-csrf-token': this.csrfToken
    },
    credentials: 'include'
  }).then(r => {
    // console.log(r.headers.get('link'));
    return r.json()
  }).then(res => res).catch(e => e.json())
};

module.exports = getRequest;