import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('student-confirmation-3', 'Integration | Component | student confirmation 3', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{student-confirmation-3}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#student-confirmation-3}}
      template block text
    {{/student-confirmation-3}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
