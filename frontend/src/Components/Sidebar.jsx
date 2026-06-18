function Sidebar() {
  return (
    <aside className="hidden md:flex flex-col w-64 bg-gray-800/40 backdrop-blur-xl border-r border-white/10 p-6 h-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          🤖 AI Chatbot
        </h2>
        <p className="text-sm text-gray-400 mt-1">Powered by Groq AI</p>
      </div>

      <div className="space-y-2">
        <div className="menu-item">💡 React Help</div>
        <div className="menu-item">🚀 Startup Ideas</div>
        <div className="menu-item">📚 Learn AI</div>
        <div className="menu-item">🧠 AI Projects</div>
      </div>

      <div className="mt-auto pt-6 border-t border-white/10 text-xs text-gray-500">
        v2.0 · Advanced UI
      </div>
    </aside>
  );
}

export default Sidebar;