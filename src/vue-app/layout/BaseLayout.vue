<template>
  <div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'BaseLayout' })
export default class BaseLayout extends Vue {}
</script>
