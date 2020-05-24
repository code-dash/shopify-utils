function styleTag(){
  return `
  <style>
    .${this.prefix}-sidebar {
      position: fixed;
      top: 0;
      right: 0;
      height: 100vh;
      z-index: 9999;
    }
    
    .${this.prefix}-toggle {
      position: absolute;
      top: 50%;
      right: 100%;
      width: 20px;
      height: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
    
    .${this.prefix}-toggle:after {
      content: '';
      display: block;
      width: 7px;
      height: 7px;
      margin: 0 auto;
      border-bottom: 1px solid #000;
      border-left: 1px solid #000;
      transform: rotate(45deg);
    }
    
    .${this.prefix}-toggle.is-active:after {
      transform: rotate(-135deg);
    }
    
    .${this.prefix}-sidebar__inner {
      overflow: hidden;
      background-color: #fff;
      width: 0;
      height: 100vh;
      transition: width 0.5s, padding 0.5s;
      box-shadow: -2px 0 5px rgba(0,0,0,.1);
    }
    
    .${this.prefix}-sidebar__inner ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .${this.prefix}-sidebar__inner li {
      padding: 0 0 5px;
      border-bottom: 1px solid #dfe3e8;
    }
    
    .${this.prefix}-sidebar__inner ul a {
      display: flex;
      align-items: center;
      color: #454f5b;
      white-space: nowrap;
      text-decoration: none;
      opacity: 0.7;
    }
    
    .${this.prefix}-sidebar__inner ul a:hover {
      opacity: 1;
    } 
    
    .${this.prefix}-sidebar__inner ul svg {
      margin-right: 4px;
    }
    
    .${this.prefix}-sidebar__inner ul .icon-duplicate {
      width: 16px;
      height: 16px;
    }
    
    .${this.prefix}-sidebar.is-active .${this.prefix}-sidebar__inner {
      width: 200px;
      padding: 20px;
    }
  </style>
  `;
}

module.exports = styleTag;