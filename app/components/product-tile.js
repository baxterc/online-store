import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),
  isAdmin: false,
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      console.log(this.get('shoppingCart').total());
    },
    saveUpdate(product) {
      product.save()
    }
  }
});
