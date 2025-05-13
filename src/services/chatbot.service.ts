import environment from "@/config/environment";
import { CHATBOT_SERVICE } from "@/constants/services";
import instance from "@/libs/axios/instance";

const chatbotService = {
  generateResponse: (payload: { question: string }) =>
    instance.post(CHATBOT_SERVICE.GENERATE_RESPONSE, payload, {
      headers: {
        Authorization: `Basic ${environment.BASIC_AUTH_KEY}`,
      },
    }),
};

export default chatbotService;
