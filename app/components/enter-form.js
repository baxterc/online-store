import Ember from 'ember';

export default Ember.Component.extend({
  showItemForm: false,
  actions: {
    showItemFormToggle() {
      this.set('showItemForm', true);
    },
    productCreate() {
      var params = {
        name: this.get('product-name'),
        price: this.get('product-price'),
        description: this.get('product-description'),
        image: this.get('product-image'),
        email: this.get('product-email')
      };
      this.set('product-name', "");
      this.set('product-price', "");
      this.set('product-description', "");
      this.set('product-image', "");
      this.set('product-email', "");
      this.sendAction('productCreate', params);
    },
  }
});
