import Ember from 'ember';

export default Ember.Component.extend({
  isAdmin: false,
  actions: {
    setAdmin() {
      this.toggleProperty('isAdmin')
    }
  }
});
