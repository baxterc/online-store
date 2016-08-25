import Ember from 'ember';

export default Ember.Component.extend({
  shoppingCart: Ember.inject.service('shopping-cart'),
  isAdmin: false,
  giveFeedback: false,
  choice: null,
  averageScore: Ember.computed('product.feedbacks.@each.score', function() {
    var runningScore = 0;
    this.get('product').get('feedbacks').forEach(function(feedback){
      runningScore += parseInt(feedback.get('score'));
    })
    console.log(runningScore)
    return runningScore / this.get('product').get('feedbacks').get('length');
  }),
  productScore: Ember.computed('product.feedbacks.[]', function() {
    return this.get('product').averageScore();
  }),
  actions: {
    addToCart(item) {
      this.get('shoppingCart').add(item);
    },
    saveUpdate(product) {
      product.save();
      this.get('shoppingCart').delete(product);
      this.get('shoppingCart').add(product);
      this.set('isAdmin', false);
    },
    leaveFeedback() {
      this.set('giveFeedback', true);
    },
    scoreToggled(choice) {
      this.set('choice', choice);
    },
    createFeedback() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
        score: parseInt(this.get('choice')),
        product: this.get('product'),
      };
      this.sendAction('createFeedback', params);
    }
  }
});
