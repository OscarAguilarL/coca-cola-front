import { Container } from 'inversify-props';
import setupSharedModule from '@/modules/shared/setup';
import setupContactFormModule from '@/modules/contact-form/setup';

export default function setupModules(container: Container) {
  setupSharedModule(container);
  setupContactFormModule(container);
}
