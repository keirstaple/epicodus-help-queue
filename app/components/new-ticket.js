import Ember from 'ember';

export default Ember.Component.extend({
  addNewTicket: false,
  actions: {
    ticketFormShow() {
      this.set('addNewTicket', true);
    },

    save() {
      var params = {
        name: this.get('name'),
        seat: this.get('seat'),
        timeCreated: Firebase.ServerValue.TIMESTAMP,
        description: this.get('description')
      };
      this.set('addNewTicket', false);
      this.sendAction('save', params)
    }
  }
});
