<template>
  <notifications group="notifications" position="top center" class="mt-5 py-3" width="600" />
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({ name: 'NotificationWrapper' })
export default class NotificationWrapper extends Vue {}
</script>
