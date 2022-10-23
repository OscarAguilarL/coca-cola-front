import TYPES from '@/types';

// DOMAIN
import { ContactFormEntity } from '@/modules/contact-form/domain/entities/contact-form-entity';
import { ContactFormRepository } from '@/modules/contact-form/domain/repositories/contact-form-repository';
import Command from '@/modules/shared/use-cases/command';
import Inject from '@/modules/shared/di/domain/inject';
import Injectable from '@/modules/shared/di/domain/injectable';

@Injectable()
export default class CreateContactFormCommand extends Command<ContactFormEntity> {
  @Inject(TYPES.CONTACT_FORM_REPOSITORY)
  private readonly contactFormRepository!: ContactFormRepository;

  internalExecute(payload: ContactFormEntity): Promise<void> {
    return this.contactFormRepository.sendContactForm(payload);
  }
}
