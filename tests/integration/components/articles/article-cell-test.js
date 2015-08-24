import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';


moduleForComponent('articles/article-cell', 'Integration | Component | articles/article cell', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{articles/article-cell}}`);

  assert.equal(this.$().text(), '');

  // Template block usage:
  this.render(hbs`
    {{#articles/article-cell}}
      template block text
    {{/articles/article-cell}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
