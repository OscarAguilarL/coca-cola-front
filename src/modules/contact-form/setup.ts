import { Container } from 'inversify-props';
import TYPES from './types';

// INFRASTRUCTURE
import ContactFormHttpRepository from '@/modules/contact-form/infrastructure/repositories/contact-form-http-repository';

// APPLICATION
import CreateContactFormCommand from '@/modules/contact-form/application/commands/create-contact-form-command';

// DOMAIN
import { ContactFormRepository } from '@/modules/contact-form/domain/repositories/contact-form-repository';

export default function setupContactFormModule(container: Container) {
  container
    .bind<ContactFormRepository>(TYPES.CONTACT_FORM_REPOSITORY)
    .to(ContactFormHttpRepository)
    .inSingletonScope();

  container
    .bind<CreateContactFormCommand>(TYPES.CREATE_CONTACT_FORM_COMMAND)
    .to(CreateContactFormCommand)
    .inSingletonScope();
}
