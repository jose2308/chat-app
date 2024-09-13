<template>
  <div ref="chatRef" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <!-- Example Message -->
      <MessageBubble v-for="message in messages" :key="message.id" v-bind="message"/>
    </div>
  </div>
</template>
<script lang="ts" setup>
  import type { ChatInterface } from '@/interfaces/chat.interface';
  import MessageBubble from './MessageBubble.vue';
  import { watch, ref } from 'vue';
  interface Props {
    messages: ChatInterface[];
  }

  const { messages } = defineProps<Props>();

  const chatRef = ref<HTMLDivElement | null>(null);
  watch(messages, () => {
    setTimeout(() => {

    }, 100);
  });

</script>