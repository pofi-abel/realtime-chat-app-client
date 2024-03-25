import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GET_CONVERSATIONS, GET_MESSAGES } from "../services/conversations.service";
import useConversation from "../zustand/useConversation";

export const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const response = await GET_MESSAGES(selectedConversation?._id);
        setMessages(response);
      } catch (error: any) {
        toast.error(error.response.data.error || "Netowrk Error");
      } finally {
        setLoading(false);
      }
    };

    if (selectedConversation?._id) getMessages();
  }, [selectedConversation?._id, setMessages]);

  return { messages, loading };
};
