import Ember from 'ember';

export function priceIndicator(params) {
  var productPrice = params[0].get('price');
  if (productPrice >= 1000) {
    return '$$$$';
  } else if (productPrice >= 250) {
    return '$$$';
  } else if (productPrice >= 100) {
    return '$$';
  } else {
    return '$';
  }
}

export default Ember.Helper.helper(priceIndicator);
