import axios from "axios";

export const LOGIN = async (payload: Record<string, any>) => {
  try {
    const { data } = await axios.post("/api/auth/login", { ...payload });
    return data;
  } catch (error) {
    throw error;
  }
};

export const SIGNUP = async (payload: Record<string, any>) => {
  try {
    const { data } = await axios.post("/api/auth/signup", { ...payload });
    return data;
  } catch (error) {
    throw error;
  }
};

export const LOGOUT = async () => {
  try {
    const { data } = await axios.post("/api/auth/logout");
    return data;
  } catch (error) {
    throw error;
  }
};
