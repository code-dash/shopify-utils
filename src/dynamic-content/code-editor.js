function isFullScreen(cm) {
  return /\bCodeMirror-fullscreen\b/.test(cm.getWrapperElement().className);
}
function winHeight() {
  return window.innerHeight || (document.documentElement || document.body).clientHeight;
}
function setFullScreen(cm, full) {
  var wrap = cm.getWrapperElement(), scroll = cm.getScrollerElement();
  if (full) {
    wrap.className += " CodeMirror-fullscreen";
    scroll.style.height = winHeight() + "px";
    document.documentElement.style.overflow = "hidden";
  } else {
    wrap.className = wrap.className.replace(" CodeMirror-fullscreen", "");
    scroll.style.height = "";
    document.documentElement.style.overflow = "";
  }
  cm.refresh();
}

export default function initCodeEditor(){
  const textarea = document.querySelector('.code-editor');
  return CodeMirror.fromTextArea(textarea, {
    lineWrapping: true,
    mode:  "javascript",
    theme: "dracula",
    extraKeys: {
      "Ctrl-Space": "autocomplete",
      "F11": function(cm) {
        setFullScreen(cm, !isFullScreen(cm));
      },
      "Esc": function(cm) {
        if (isFullScreen(cm)) setFullScreen(cm, false);
      }
    },
    gutters: ["CodeMirror-lint-markers"],
    lint: {
      esversion: 6
    }
  });
}
