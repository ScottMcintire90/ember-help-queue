import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr(),
  location: DS.attr(),
  message: DS.attr(),
  date: DS.attr()
});
