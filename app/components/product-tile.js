import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),
  isAdmin: false,
  giveFeedback: false,
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
      console.log(this.get('shoppingCart').total());
    },
    saveUpdate(product) {
      product.save();
      this.get('shoppingCart').delete(product);
      this.get('shoppingCart').add(product);
      this.set('isAdmin', false);
    },
    leaveFeedback() {
      this.set('giveFeedback', true);
    }
  }
});
