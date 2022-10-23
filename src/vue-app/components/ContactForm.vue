<template>
  <form @submit.prevent="handleSubmit" class="w-50 mt-5">
    <div class="mb-3">
      <label for="name" class="form-label d-block">
        Nombre:*
        <input required v-model="inputs.name" type="text" class="form-control" id="name" />
      </label>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label d-block">
        Correo Electrónico:*
        <input required v-model="inputs.email" type="email" class="form-control" id="email" />
      </label>
      <div id="emailHelp" class="form-text">
        Nunca compartiremos tu correo electrónico con nadie más.
      </div>
    </div>
    <div class="mb-3">
      <label for="address" class="form-label d-block">
        Residencia:*
        <input
          required
          v-model="inputs.address"
          type="text"
          name="address"
          id="address"
          class="form-control"
        />
      </label>
    </div>
    <div class="mb-3">
      <label for="description" class="form-label d-block">
        Dudas o sugerencias:*
        <textarea
          required
          v-model="inputs.details"
          id="description"
          rows="3"
          class="form-control"
        ></textarea>
      </label>
    </div>
    <div class="mb-3 form-check">
      <label class="form-check-label user-select-none" for="exampleCheck1">
        <input
          required
          v-model="inputs.terms_and_conditions"
          type="checkbox"
          class="form-check-input"
          id="exampleCheck1"
        />
        Acepto los términos y condiciones.*
      </label>
    </div>
    <div class="d-grid">
      <button type="submit" class="btn btn-primary btn-lg" :disabled="can_continue">Enviar</button>
    </div>
  </form>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import TYPES from '@/types';

// APPLICATION
import CreateContactFormCommand from '@/modules/contact-form/application/commands/create-contact-form-command';

// DOMAIN
import { RouterRepository } from '@/modules/shared/router/domain/repository/router-repository';
import { Notifier } from '@/modules/shared/notifier/domain/notifier';
import Inject from '@/modules/shared/di/domain/inject';

@Component({ name: 'ContactForm' })
export default class ContactForm extends Vue {
  @Inject(TYPES.CREATE_CONTACT_FORM_COMMAND)
  private readonly createContactFormCommand!: CreateContactFormCommand;

  @Inject(TYPES.ROUTER)
  private readonly router!: RouterRepository;

  @Inject(TYPES.NOTIFIER)
  private readonly notifier!: Notifier

  inputs = {
    name: '',
    email: '',
    address: '',
    details: '',
    terms_and_conditions: false,
  };

  get can_continue() {
    return (
      this.inputs.name
      && this.inputs.email
      && this.inputs.address
      && this.inputs.details
      && !this.inputs.terms_and_conditions
    );
  }

  async handleSubmit() {
    try {
      await this.createContactFormCommand.execute({
        name: this.inputs.name,
        email: this.inputs.email,
        address: this.inputs.address,
        details: this.inputs.details,
      });
      this.notifier.showSuccessNotification('Información enviada, Nos pondremos en contacto contigo muy pronto');
      this.router.navigate('/');
    } catch (e) {
      console.error(e);
      this.notifier.showErrorNotification('Ha ocurrido un error, vuelve a intentarlo más tarde');
    }
  }
}
</script>
