import { Container } from 'inversify-props';
import setupHttpModule from '@/modules/shared/http/setup';
import setupRunnerModule from '@/modules/shared/runner/setup';
import setupRouterModule from '@/modules/shared/router';
import setupNotifierModule from '@/modules/shared/notifier/setup';

export default function setupSharedModule(container: Container) {
  setupHttpModule(container);
  setupRunnerModule(container);
  setupRouterModule(container);
  setupNotifierModule(container);
}
