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

    .${this.prefix}-sidepanel {
      position: absolute;
      top: 0;
      right: 100%;
      min-width: 300px;
      padding: 20px;
      height: auto;
      z-index: 2;
      background-color: #fff;
      transition: transform 0.3s;
      overflow: hidden;
      display: flex;
      align-items: center;
      transform: translateY(-100%);
      box-shadow: -5px 2px 5px rgba(0,0,0,.1);
    }

    .${this.prefix}-sidepanel.is-active {
      transform: translateY(0);
    }

    .${this.prefix}-sidepanel form {
      flex: 100%;
    }

    .${this.prefix}-sidepanel li {
      margin: 0 0 5px;
    }

    .${this.prefix}-sidepanel li label {
      display: flex;
      align-items: center;
    }

    .${this.prefix}-sidepanel li input {
      margin: 0 10px 0 0;
    }

    .${this.prefix}-sidepanel__close {
      position: absolute;
      top: 10px;
      right: 20px;
      width: 20px;
      height: 20px;
      cursor: pointer;
    }

    .${this.prefix}-sidepanel__close:before,
    .${this.prefix}-sidepanel__close:after {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      display: block;
      width: 1px;
      height: 20px;
      background:#000;
    }

    .${this.prefix}-sidepanel__close:before {
      transform: rotate(45deg);
    }

    .${this.prefix}-sidepanel__close:after {
      transform: rotate(-45deg);
    }

    .${this.prefix}-sidepanel .btn {
      width: 100%;
      padding: 5px 0;
      background: linear-gradient(180deg,#3f4eae,#3f4eae);
      border-color: #38469b;
      box-shadow: inset 0 0 0 0 transparent, 0 1px 0 0 rgba(22,29,37,.05), 0 0 1px 0 #38469b;
      font-size: 14px;
      color: #fff;
      line-height: 1.6rem;
      text-transform: none;
      letter-spacing: normal;
      border-radius: 5px;
      cursor: pointer;
    }

    .${this.prefix}-sidepanel .btn:hover {
      background: linear-gradient(180deg,#5c6ac4,#4959bd);
      text-decoration: none;
    }
  </style>
  `;
}

module.exports = styleTag;