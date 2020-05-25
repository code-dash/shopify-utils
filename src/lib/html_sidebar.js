import { duplicateIcon } from './icons';

export default function htmlSidebar(){
  return `
  <div class="${this.prefix}-sidebar">
    <span class="${this.prefix}-toggle js-${this.prefix}-toggle"></span>
    <div class="${this.prefix}-sidebar__inner">
      ${this.duplicateHTML()}
      <ul>
        <li>
          <a href="#" class="js-${this.prefix}-action" data-type="duplicate">${duplicateIcon} Duplicate Selected</a>
        </li>
      </ul>
    </div>
  </div>
  `;
}
