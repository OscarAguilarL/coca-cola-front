import { Container } from 'inversify-props';
import TYPES from './types';

// INFRASTRUCTURE
import VueNotifier from '@/modules/shared/notifier/infrastructure/vue-notifier';

// DOMAIN
import { Notifier } from '@/modules/shared/notifier/domain/notifier';

export default function setupNotifierModule(container: Container) {
  container
    .bind<Notifier>(TYPES.NOTIFIER)
    .to(VueNotifier)
    .inSingletonScope();
}
