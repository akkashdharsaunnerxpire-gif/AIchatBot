function Message({ type, text }) {
  const isUser = type === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] px-5 py-3 rounded-2xl shadow-lg ${
          isUser
            ? "bg-blue-600 text-white rounded-br-none"
            : "bg-gray-700/70 backdrop-blur-sm text-gray-100 rounded-bl-none border border-white/10"
        }`}
      >
        {text}
      </div>
    </div>
  );
}

export default Message;