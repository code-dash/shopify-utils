function getRequest(url){
  return fetch(`/admin/api/${this.apiVersion}/${url}`, {
    method: "GET",
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'x-csrf-token': this.csrfToken
    },
    credentials: 'include'
  }).then(r => r.json()).then(res => res).catch(e => e.json())
};

module.exports = getRequest;