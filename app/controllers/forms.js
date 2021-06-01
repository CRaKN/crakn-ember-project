import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class FormsController extends Controller {
  @service store;
  @service notifications;

  // Disable the transition of the form and also disable the submission button while the save is processing
  @action
  submitSave(event) {
    event.preventDefault();

    if (event.submitter) {
      event.submitter.disabled = true;
    }

    try {
      this.save(this.model);
      this.model = this.store.createRecord('decedent');
    } finally {
      if (event.submitter) {
        event.submitter.disabled = false;
      }
    }

    false;
  }

  @action
  save(decedent) {
    // Write your code here
  }
}
