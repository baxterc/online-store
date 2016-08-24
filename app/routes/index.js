import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    productCreate(params) {
      var newProduct = this.store.createRecord('product', params);
      newProduct.save();
    }
  }
});
