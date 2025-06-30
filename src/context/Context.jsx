import { Context } from "./Context";
import runChat from "../config/gemini";
import { useState } from "react";

const ContextProvider = ({ children }) => {
  const [prompt, setPrompt] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [result, setResult] = useState("");

  const newChat = () => {
    setPrompt("");
    setRecentPrompt("");
    setShowResult(false);
    setIsLoading(false);
    setIsTyping(false);
    setResult("");
  };

  const onSend = async (message) => {
    const promptToSend = message || prompt;

    if (!promptToSend.trim() || promptToSend === recentPrompt || isTyping)
      return;

    setResult("");
    setIsLoading(true);
    setShowResult(true);
    setRecentPrompt(promptToSend);
    if (prevPrompts.includes(promptToSend)) {
      setPrevPrompts(prevPrompts.filter((p) => p !== promptToSend));
    }
    setPrevPrompts([promptToSend, ...prevPrompts]);

    try {
      const response = await runChat(promptToSend);
      setIsLoading(false);
      setIsTyping(true);
      setPrompt("");

      let fullResponse = "";
      for await (const chunk of response) {
        if (chunk.text) {
          fullResponse += chunk.text
            .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
            .replace(/(^|[^*])\*(?!\*)([^*]|$)/g, "$1<br />$2");
          setResult(fullResponse);
        }
      }
      setIsTyping(false);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      setResult("Sorry, there was an error processing your request.");
      setIsLoading(false);
    }
  };

  const contextValue = {
    onSend,
    prompt,
    setPrompt,
    recentPrompt,
    setRecentPrompt,
    prevPrompts,
    setPrevPrompts,
    showResult,
    setShowResult,
    isLoading,
    setIsLoading,
    result,
    setResult,
    isTyping,
    setIsTyping,
    newChat,
  };
  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export default ContextProvider;
