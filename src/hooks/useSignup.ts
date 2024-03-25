import { useState } from "react";
import { toast } from "sonner";
import { SIGNUP } from "../services/auth.service";
import { STORAGE_KEYS } from "../utils/keys";
import { useAuthContext } from "../context/AuthContext";

const useSignup = () => {
  const [loading, setLoading] = useState(false);

  const { setAuthUser } = useAuthContext();

  const signup = async (data: SignupInputsType) => {
    const success = handleInputErrors({ ...data });
    if (!success) return;

    setLoading(true);

    try {
      const response = await SIGNUP(data);
      localStorage.setItem(STORAGE_KEYS.chat_user, JSON.stringify(response));
      setAuthUser(response);
    } catch (error: any) {
      toast.error(error.response.data.error || "Netowrk Error");
    } finally {
      setLoading(false);
    }
  };

  return { loading, signup };
};

const handleInputErrors = (data: SignupInputsType) => {
  if (!data.fullName || !data.username || !data.gender || !data.password || !data.confirmPassword) {
    toast.error("Please fill in all fields");
    return false;
  }

  if (data.password != data.confirmPassword) {
    toast.error("Passwords do not match");
    return false;
  }

  if (data.password.length < 6) {
    toast.error("Passwords must be at least 6 characters");
    return false;
  }

  return true;
};

export default useSignup;
