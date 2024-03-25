import { useEffect, useState } from "react";
import { toast } from "sonner";
import { GET_CONVERSATIONS } from "../services/conversations.service";

export const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const response = await GET_CONVERSATIONS();
        setConversations(response);
      } catch (error: any) {
        toast.error(error.response.data.error || "Netowrk Error");
      } finally {
        setLoading(false);
      }
    };

    getConversations();
  }, []);

  return { conversations, loading };
};
