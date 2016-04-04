import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr();
  seat: DS.attr();
  timeCreated: DS.attr();
  description: DS.attr();
});
