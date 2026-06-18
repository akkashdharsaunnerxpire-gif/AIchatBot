import { useState, useEffect, useRef } from "react";
import { IoSend } from "react-icons/io5";

import Header from "./Components/Header";
import Sidebar from "./components/Sidebar";
import Message from "./components/Message";
import Welcome from "./components/Welcome";
import TypingLoader from "./components/TypingLoader";

function App() {
  const [msg, setMsg] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const API = import.meta.env.VITE_BACKEND_URL;

  const sendMessage = async () => {
    if (!msg.trim()) return;
    const currentMsg = msg;

    setMessages((prev) => [...prev, { type: "user", text: currentMsg }]);
    setMsg("");
    setLoading(true);

    try {
      const res = await fetch(`${API}/chat?msg=${encodeURIComponent(currentMsg)}`);
      const data = await res.json();
      setMessages((prev) => [...prev, { type: "bot", text: data.response }]);
    } catch {
      setMessages((prev) => [...prev, { type: "bot", text: "Server Error" }]);
    }
    setLoading(false);
  };

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden">
      {/* Background blur effect */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>

      <Sidebar />

      <div className="flex-1 flex flex-col h-full backdrop-blur-sm bg-white/5 border-l border-white/10">
        <Header />

        <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
          {messages.length === 0 && <Welcome />}
          {messages.map((message, index) => (
            <Message key={index} type={message.type} text={message.text} />
          ))}
          {loading && <TypingLoader />}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 bg-gray-800/50 backdrop-blur-md border-t border-white/10">
          <div className="flex items-center gap-3 max-w-4xl mx-auto">
            <input
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Ask anything..."
              className="flex-1 px-5 py-3 rounded-2xl bg-gray-700/50 border border-white/10 focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-400 transition"
            />
            <button
              onClick={sendMessage}
              className="p-3 rounded-2xl bg-blue-600 hover:bg-blue-700 transition shadow-lg shadow-blue-500/30 disabled:opacity-50"
              disabled={loading}
            >
              <IoSend className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;