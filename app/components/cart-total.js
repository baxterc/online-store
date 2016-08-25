import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  cartTotal: Ember.computed('shoppingCart.products.[]', function() {
    return this.get('shoppingCart').total();
  })
});
