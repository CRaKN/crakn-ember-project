import Route from '@ember/routing/route';

export default class TablesRoute extends Route {
  async model() {
    return this.store.findAll('decedent');
  }
}
