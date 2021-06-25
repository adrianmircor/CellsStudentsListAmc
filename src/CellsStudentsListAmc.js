import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import styles from './CellsStudentsListAmc-styles.js';
import '@cells-students-components/cells-students-student-amc/cells-students-student-amc';
/**
![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
<cells-students-list-amc></cells-students-list-amc>
```

##styling-doc

@customElement cells-students-list-amc
*/
export class CellsStudentsListAmc extends LitElement {
  static get is() {
    return 'cells-students-list-amc';
  }

  // Declare properties
  static get properties() {
    return {
      listStudents: { type: Array, },
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.listStudents = [];
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('cells-students-list-amc-shared-styles')
    ];
  }

  // Define a template
  render() {
    return html`
      <slot>
        <div class="list"> 
          ${this.listStudents.map(i => html`
            <cells-students-student-amc
              id="${i.id}"
              name="${i.name}" 
              .courses="${i.courses}">
            </cells-students-student-amc>
          `)}
        </div>
      </slot>
    `;
  }
}
