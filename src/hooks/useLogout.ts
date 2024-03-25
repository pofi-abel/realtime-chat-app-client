import { useState } from "react";
import { toast } from "sonner";
import { LOGOUT } from "../services/auth.service";
import { useAuthContext } from "../context/AuthContext";
import { STORAGE_KEYS } from "../utils/keys";
import useConversation from "../zustand/useConversation";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();
  const { setSelectedConversation } = useConversation();

  const logout = async () => {
    setLoading(true);
    try {
      await LOGOUT();
      localStorage.removeItem(STORAGE_KEYS.chat_user);
      setSelectedConversation(null);
      setAuthUser(null);
    } catch (error: any) {
      toast.error(error.response.data.error || "Netowrk Error");
    } finally {
      setLoading(false);
    }
  };

  return { logout, loading };
};
