import Ember from 'ember';

export default Ember.Component.extend({
  format: "h:mm:ss a",
  date: null,
  formattedDate: function() {
    var date = this.get('date'),
        format = this.get('format');
    return moment(date).format(format);
  }.property('date', 'format')

});
