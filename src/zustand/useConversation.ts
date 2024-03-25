import { create } from "zustand";

type ConversationState = {
  messages: [];
  selectedConversation: Record<string, any> | null;
  setSelectedConversation: (selectedConversation: any) => void;
  setMessages: (messages: any) => void;
};

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation: any) => set({selectedConversation}),

  messages: [],
  setMessages: (messages: any) => set({messages}),
}));

export default useConversation;
