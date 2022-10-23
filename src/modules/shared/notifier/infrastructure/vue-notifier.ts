import Vue from 'vue';

// DOMAIN
import { Notifier } from '@/modules/shared/notifier/domain/notifier';
import Injectable from '@/modules/shared/di/domain/injectable';

@Injectable()
export default class VueNotifier implements Notifier {
  showErrorNotification(message: string): void {
    Vue.notify({
      group: 'notifications',
      type: 'error',
      title: message,
      duration: 5000,
    });
  }

  showSuccessNotification(message: string): void {
    console.log(message);
    Vue.notify({
      group: 'notifications',
      type: 'success',
      title: message,
      duration: 5000,
    });
  }
}
