function createMenu(data){
  const menuTitle = document.querySelector('#menu-item-name').value + this.duplicatePrefix;
  const menuHandle = document.querySelector('#menu-handle').value;
  return fetch('/admin/menus/apply_changes.json', {
    method: "POST",
    headers: {
        "x-csrf-token": this.csrfToken,
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
      changes: data,
      root: {
        title: menuTitle,
        handle: menuHandle,
      }
    })
  })
}

module.exports = createMenu;