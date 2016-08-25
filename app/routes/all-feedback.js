import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      products: this.store.findAll('product'),
      feedbacks: this.store.findAll('feedback')
    });
  },

  actions: {

  }
});
