import { sleep } from "@/helpers/utils";
import type { ChatInterface } from "@/interfaces/chat.interface";
import type { ResponseChat } from "@/interfaces/responseChat";
import { ref } from 'vue';

export const chatUse = () => {
  const messages = ref<ChatInterface []>([]);

  const requestApi = async (): Promise<ResponseChat> => {
    const data: ResponseChat = await fetch('https://yesno.wtf/api')
      .then(response => response.json());
    return data;
  }


  const receiveMessage = async (message: string) => {
    messages.value.push({
      id: new Date().getTime(),
      isClient: true,
      message
    });

    if (!message.endsWith('?')) return;
    const { answer, image } = await requestApi();
    await sleep();
    messages.value.push({
      id: new Date().getTime(),
      isClient: false,
      message:answer,
      image
    });
  }

  return {
    messages,
    receiveMessage
  }
}