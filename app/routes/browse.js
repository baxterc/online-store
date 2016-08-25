import Ember from 'ember';

export default Ember.Route.extend({
  shoppingCart: Ember.inject.service(),
  model() {
    return this.store.findAll('product');
  },

  actions: {
    createFeedback(params) {
      var newFeedback = this.store.createRecord('feedback', params);
      var product = params.product;
      product.get('feedbacks').addObject(newFeedback);
      newFeedback.save().then(function() {
        return product.save();
      })
    }
  }
});
