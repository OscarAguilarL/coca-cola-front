import { ContactFormEntity } from '@/modules/contact-form/domain/entities/contact-form-entity';

export interface ContactFormRepository {
  sendContactForm(payload: ContactFormEntity): Promise<void>;
}
