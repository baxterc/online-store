import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('browse');
  this.route('product', {path: '/product/:id'});
  this.route('all-feedback');
});

export default Router;
