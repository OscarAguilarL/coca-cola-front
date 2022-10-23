<template>
  <div id="app">
    <notification-wrapper />
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/vue-app/components/Navbar.vue';
import NotificationWrapper from '@/vue-app/components/notification-wrapper.vue';

@Component({ name: 'App', components: { NotificationWrapper, Navbar } })
export default class App extends Vue {}
</script>
