import { duplicateIcon } from './icons';

export default function htmlSidebar(){
  return `
  <div class="${this.prefix}-sidebar">
    <span class="${this.prefix}-toggle js-${this.prefix}-toggle"></span>
    <div class="${this.prefix}-sidebar__inner">
      <div class="${this.prefix}-modals"></div>
      <ul>
        <li>
          <a href="#" class="js-${this.prefix}-action" data-type="duplicate">${duplicateIcon} Duplicate Selected</a>
        </li>
        <li>
          <a href="#" class="js-${this.prefix}-action" data-type="dynamic">Dynamic Content</a>
        </li>
      </ul>
    </div>
  </div>
  `;
}
