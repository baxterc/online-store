import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service(),

  actions: {
    removeProduct(product) {
      console.log(product);
      this.get('shoppingCart').delete(product);
    },
  }
});
