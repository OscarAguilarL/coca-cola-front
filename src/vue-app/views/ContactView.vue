<template>
  <div class="container my-5 d-flex flex-column justify-content align-items-center">
    <h1 class="text-center">¿Quieres ser minorista?</h1>

    <contact-form />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ContactForm from '@/vue-app/components/ContactForm.vue';

@Component({ name: 'ContactView', components: { ContactForm } })
export default class ContactView extends Vue {}
</script>
