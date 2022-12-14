import TYPES from '@/types';

import { VueConstructor } from 'vue';
import router from '@/vue-app/router';
import store from '@/vue-app/store';
import Notifications from 'vue-notification';

import './styles/index.css';

// Domain
import Injectable from '@/modules/shared/di/domain/injectable';
import Inject from '@/modules/shared/di/domain/inject';

@Injectable()
export default class Application {
  constructor(@Inject(TYPES.VUE) private readonly Vue: VueConstructor) {}

  create(app: VueConstructor) {
    this.Vue.config.productionTip = false;
    this.Vue.use(Notifications);

    return new this.Vue({
      router,
      store,
      render: (create) => create(app),
    }).$mount('#app');
  }
}
