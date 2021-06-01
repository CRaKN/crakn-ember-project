import Model, { attr } from '@ember-data/model';

export default class DecendentModel extends Model {
  @attr firstName;
  @attr lastName;
  @attr location;
  @attr nextOfKin;
  @attr nokPhoneNumber; // next of kin phone number
  @attr birthDate;
  @attr deathDate;
}
