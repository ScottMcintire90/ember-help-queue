import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  newTicketShow: false,

  actions: {
    showTicket(){
      this.set('newTicketShow', true);
    },
    saveTicket(){
      var params = {
        name: this.get('name'),
        location: this.get('location'),
        message: this.get('message'),
        date: moment().format('MMMM Do YYYY, h:mm:ss a')
      };
      this.set('newTicketShow', false);
      this.sendAction('saveTicket', params);
    }
  }

});
