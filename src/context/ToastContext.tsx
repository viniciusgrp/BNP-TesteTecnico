import React, { createContext, useContext, useState } from "react";
import { IToastMessage } from "@/types/toast-message";

const ToastContext = createContext<{
  messages: IToastMessage[];
  addToast: (newMessage: IToastMessage) => void;
  removeToast: (id: string) => void;
}>({
  messages: [],
  addToast: () => {},
  removeToast: () => {},
});

interface ToastProviderProps {
  children: React.ReactNode;
}

const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [messages, setMessages] = useState<IToastMessage[]>([]);

  const addToast = (newMessage: IToastMessage) => {
    setMessages([...messages, newMessage]);
  };

  const removeToast = (id: string) => {
    setMessages(messages.filter((message) => message.id !== id));
  };

  return (
    <ToastContext.Provider value={{ messages, addToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

export const useToast = () => useContext(ToastContext);

export default ToastProvider;
