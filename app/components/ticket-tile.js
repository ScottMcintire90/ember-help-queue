import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({
  sort: ['date:desc'],
  sortedTickets: Ember.computed.sort('ticket.date', 'sort'),

  timeElapsed: Ember.computed('ticket', function(){
    var secondsElapsed = (moment().unix() - this.get('ticket.date')) / 60;
    if (secondsElapsed.toPrecision(2) > 0 && secondsElapsed.toPrecision(2) < 10) {
      return secondsElapsed.toPrecision(1);
    } else if (secondsElapsed.toPrecision(2) > 10 && secondsElapsed.toPrecision(2) < 100) {
      return secondsElapsed.toPrecision(2);
    } else {
      return secondsElapsed.toPrecision(3);
    }
  })
});
