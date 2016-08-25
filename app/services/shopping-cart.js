import Ember from 'ember';

export default Ember.Service.extend({
  products: [],
  add(product) {
    this.get('products').pushObject(product);
  },
  delete(product) {
    this.get('products').removeObject(product);
  },
  total() {
    var runningTotal = 0;
    this.products.forEach(function(product) {
      runningTotal += parseInt(product.get('price'));
    })
    return runningTotal;
  }
});
