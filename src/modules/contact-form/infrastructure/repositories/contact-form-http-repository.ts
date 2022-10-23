import TYPES from '@/types';
import CONSTANTS from '@/modules/constants';

// DOMAIN
import { ContactFormRepository } from '@/modules/contact-form/domain/repositories/contact-form-repository';
import { ContactFormEntity } from '@/modules/contact-form/domain/entities/contact-form-entity';
import Inject from '@/modules/shared/di/domain/inject';
import HttpConnector from '@/modules/shared/http/domain/http-connector';
import Injectable from '@/modules/shared/di/domain/injectable';

@Injectable()
export default class ContactFormHttpRepository implements ContactFormRepository {
  @Inject(TYPES.HTTP_CONNECTOR)
  private readonly http_connector!: HttpConnector;

  private readonly endpoint = `${CONSTANTS.API_URL}/api/v1/contact-form`;

  sendContactForm(payload: ContactFormEntity): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http_connector
        .execute(this.endpoint, 'POST', payload)
        .then(() => resolve())
        .catch(reject);
    });
  }
}
