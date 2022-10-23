import SHARED_TYPES from '../modules/shared/types';
import MODULES_TYPES from '../modules/types';

export default {
  ...SHARED_TYPES,
  ...MODULES_TYPES,
  VUE: Symbol.for('VUE'),
  APPLICATION: Symbol.for('APPLICATION'),
  WINDOW: Symbol.for('WINDOW'),
};
