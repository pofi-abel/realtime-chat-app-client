import { useState } from "react";
import { toast } from "sonner";
import useConversation from "../zustand/useConversation";
import { SEND_MESSSAGE } from "../services/conversations.service";

export const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message: string) => {
    setLoading(true);
    try {
      const response = await SEND_MESSSAGE({ receiverId: selectedConversation?._id, message });
      setMessages([...messages, response]);
    } catch (error: any) {
      toast.error(error.response.data.error || "Netowrk Error");
    } finally {
      setLoading(false);
    }
  };
    
    

  return { sendMessage, loading };
};
