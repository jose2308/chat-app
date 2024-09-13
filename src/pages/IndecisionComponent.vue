<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>
    <MessageComponent :messages="messages"/>
    <InputComponent @send-message="receiveMessage"/>
  </div>
</template>
<script lang="ts" setup>
  import InputComponent from '@/components/chat/InputComponent.vue';
  import MessageComponent from '@/components/chat/MessageComponent.vue';
import { chatUse } from '@/composables/chatApp';

  const { messages, receiveMessage } = chatUse();

</script>