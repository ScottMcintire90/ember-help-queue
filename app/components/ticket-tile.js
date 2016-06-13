import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  timeElapsed: Ember.computed('ticket', function(){
    var secondsElapsed = (moment().unix() - this.get('ticket.date')) / 60;
    if (secondsElapsed.toPrecision(2) > 0 && secondsElapsed.toPrecision(2) < 10) {
      return secondsElapsed.toPrecision(1);
    } else {
      return secondsElapsed.toPrecision(2);
    }
  })
});
