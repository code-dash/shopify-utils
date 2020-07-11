function getCSRFToken(){
  let csrfEl = window.top.document.querySelector('meta[name="csrf-token"')
  let token = null
  if (csrfEl) {
    this.csrfToken = csrfEl.getAttribute('content')
  } else {
    fetch(`${window.location.origin}/admin/articles`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        accept: 'text/html, application/xhtml+xml, application/xml',
        'x-shopify-web': '1',
      },
    })
    .then(res => {
      if (res.ok) {
        return res.text()
      } else {
        const err = new Error('Error fetching CSRF token.')
        err.status = 'ERROR_FETCHING_CSRF_TOKEN'
        throw err
      }
    })
    .then(data => {
      let container = window.top.document.createElement('div')
      container.innerHTML = data
      csrfEl = container.querySelector('meta[name="csrf-token"]')
      if (csrfEl) {
        this.csrfToken = csrfEl.getAttribute('content')
        const meta = window.top.document.createElement('meta')
        meta.setAttribute('name', 'csrf-token')
        meta.setAttribute('content', token)
        window.top.document.querySelector('head').appendChild(meta)
      } else {
        return;
      }
      container.remove()
      container = null
    })
  }
}

export default getCSRFToken;