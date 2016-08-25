import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  score: DS.attr(),
  product: DS.belongsTo('product', { async: true })
});
