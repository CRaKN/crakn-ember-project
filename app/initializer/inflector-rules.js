import Inflector from 'ember-inflector';

export function initialize(/* application */) {
  const inflector = Inflector.inflector;

  inflector.irregular('decedent', 'decedents');
}

export default {
  name: 'custom-inflector-rules',
  initialize,
};
