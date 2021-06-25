import { html, fixture, assert, fixtureCleanup } from '@open-wc/testing';
import '../cells-students-list-amc.js';

suite('CellsStudentsListAmc', () => {
  let el;

  teardown(() => fixtureCleanup());

  setup(async () => {
    el = await fixture(html`<cells-students-list-amc></cells-students-list-amc>`);
    await el.updateComplete;
  });

  test('instantiating the element with default properties works', () => {
    const element = el.shadowRoot.querySelector('p');
    assert.equal(element.innerText, 'Welcome to Cells');
  });

});
