import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('ticket');
  this.route('student');
  this.route('teacher');
});

export default Router;
