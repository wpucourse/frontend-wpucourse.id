import { useEffect, useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import chatbotService from "@/services/chatbot.service";
import { title } from "process";

const chatbotSchema = z.object({
  question: z.string(),
});

type qnaForm = z.infer<typeof chatbotSchema>;

const useChatbot = () => {
  const [conversation, setConversation] = useState<
    {
      role: string;
      content: string;
      options: {
        title: string;
        type: string;
        action: string;
      }[];
    }[]
  >([]);

  const chatbotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatbotRef?.current?.scrollTo({
      top: chatbotRef?.current?.scrollHeight,
      behavior: "smooth",
    });
  }, [chatbotRef.current?.scrollHeight]);

  useEffect(() => {
    if (conversation.length === 0) {
      chatbotMutate("tampilkan greetings");
    }
  }, [conversation]);

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<qnaForm>({
    resolver: zodResolver(chatbotSchema),
    mode: "onBlur",
  });

  const handleService = async (question: string) => {
    const response = await chatbotService.generateResponse({ question });
    return response.data;
  };

  const { isPending: chatbotPending, mutate: chatbotMutate } = useMutation({
    mutationFn: handleService,
    onSuccess: (data) => {
      setConversation((prev) => [
        ...prev,
        {
          role: "system",
          content: data.data.message,
          options: data.data.options,
        },
      ]);
    },
    onError: () => {
      setConversation((prev) => [
        ...prev,
        {
          role: "system",
          content: "Maaf, terjadi kesalahan pada sistem kami.",
          options: [],
        },
      ]);
      if (chatbotRef.current) {
        chatbotRef.current.scrollTop = chatbotRef.current.scrollHeight;
      }
    },
  });

  const handleSendMessage = (data: qnaForm) => {
    setConversation((prev) => [
      ...prev,
      {
        role: "user",
        content: data.question,
        options: [],
      },
    ]);
    chatbotMutate(data.question);
    reset();
  };

  return {
    control,
    handleSubmit,
    errors,
    isSubmitting,
    conversation,
    chatbotRef,
    chatbotPending,
    handleSendMessage,
  };
};

export default useChatbot;
