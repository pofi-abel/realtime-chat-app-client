import { useState } from "react";
import { toast } from "sonner";
import { useAuthContext } from "../context/AuthContext";
import { LOGIN } from "../services/auth.service";
import { STORAGE_KEYS } from "../utils/keys";

const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const login = async (data: LoginCredentials) => {
    const success = handleInputErrors({ ...data });
    if (!success) return;

    setLoading(true);

    try {
      const response = await LOGIN(data);
      localStorage.setItem(STORAGE_KEYS.chat_user, JSON.stringify(response));
      setAuthUser(response);
    } catch (error: any) {
      toast.error(error.response.data.error || "Netowrk Error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, login };
};

const handleInputErrors = (data: LoginCredentials) => {
  if (!data.username || !data.password) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (data.password.length < 6) {
    toast.error("Passwords must be at least 6 characters");
    return false;
  }

  return true;
};

export default useLogin;
