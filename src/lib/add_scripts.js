function addScript(code){
  var head = document.getElementsByTagName('head')[0];
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.innerHTML = code;
  head.appendChild(script);
}


async function addAllScripts(){
  const scripts = [
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/codemirror.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/mode/javascript/javascript.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/addon/hint/javascript-hint.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/addon/lint/lint.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/addon/lint/javascript-lint.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.54.0/addon/hint/show-hint.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/jshint/2.11.0-rc1/jshint.min.js"
  ]

  for (let index = 0; index < scripts.length; index++) {
    const script = scripts[index];
    await fetch(script).then(res => res.text()).then(res => addScript(res))
  }
}

module.exports = addAllScripts;