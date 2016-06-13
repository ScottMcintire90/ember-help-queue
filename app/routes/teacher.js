import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('ticket');
  },
  actions: {
    destroyTicket(ticket) {
      return ticket.destroyRecord();
      this.transitionTo('teacher');
    },
  }
});
