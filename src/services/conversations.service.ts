import axios from "axios";

export const GET_CONVERSATIONS = async () => {
  try {
    const { data } = await axios.get("/api/users");
    return data;
  } catch (error) {
    throw error;
  }
};

export const GET_MESSAGES = async (conversationId: string) => {
  try {
    const { data } = await axios.get(`/api/messages/${conversationId}`);
    return data;
  } catch (error) {
    throw error;
  }
};

export const SEND_MESSSAGE = async (payload: Record<string, any>) => {
  try {
    const { data } = await axios.post(`/api/messages/send/${payload.receiverId}`, {
      message: payload.message,
    });
    return data;
  } catch (error) {
    throw error;
  }
};
