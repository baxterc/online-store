import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    productCreate(params) {
      this.sendAction('productCreate', params);
    }
  }
});
