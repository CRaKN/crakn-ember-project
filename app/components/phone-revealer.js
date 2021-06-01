import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PhoneRevealerComponent extends Component {
  @tracked show = false;

  get lastFour() {
    return this.args.phoneNumber.substr(-4, 4);
  }

  @action
  toggle(bool) {
    this.show = bool;
  }
}
