import httpTypes from './http/types';
import runnerTypes from './runner/types';
import routerTypes from './router/types';
import notifierTypes from './notifier/types';

export default {
  ...httpTypes,
  ...runnerTypes,
  ...routerTypes,
  ...notifierTypes,
};
