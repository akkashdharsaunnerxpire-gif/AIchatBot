function TypingLoader() {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-700/70 backdrop-blur-sm px-5 py-3 rounded-2xl rounded-bl-none border border-white/10">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.3s]"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce [animation-delay:-0.15s]"></span>
          <span className="w-2.5 h-2.5 bg-gray-300 rounded-full animate-bounce"></span>
        </div>
      </div>
    </div>
  );
}

export default TypingLoader;