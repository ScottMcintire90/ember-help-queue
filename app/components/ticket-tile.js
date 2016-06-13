import Ember from 'ember';
import moment from 'moment';

export default Ember.Component.extend({

  timeElapsed: Ember.computed('ticket', function(){
    var secondsElapsed = (moment().unix() - this.get('ticket.date')) / 60;
      return secondsElapsed.toPrecision('2');
  })
});
