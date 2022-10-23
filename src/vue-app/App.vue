<template>
  <div id="app">
    <navbar />
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from '@/vue-app/components/Navbar.vue';

@Component({ name: 'App', components: { Navbar } })
export default class App extends Vue {}
</script>
