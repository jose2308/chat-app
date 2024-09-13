<template>
  <div v-if="isClient" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">{{ message }}</div>
  </div>

  <!-- Example Received Message -->
  <div v-else  class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      <span>{{  message }}</span>
      <img v-if="image" :src="image" alt="Mi imagen">
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { defineProps } from 'vue';

  interface Props {
    message: string;
    image?: string;
    isClient: boolean;
  }

  defineProps<Props>();
</script>
