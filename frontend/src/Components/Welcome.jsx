function Welcome() {
  const suggestions = [
    { icon: "💡", label: "Explain React" },
    { icon: "🚀", label: "Startup Ideas" },
    { icon: "📚", label: "Learn Python" },
    { icon: "🧠", label: "AI Projects" },
  ];

  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-4 py-10">
      <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
        Hello 👋
      </h2>
      <p className="text-gray-300 mt-2 text-lg">Ask anything. AI is ready.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 w-full max-w-3xl">
        {suggestions.map((s, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:-translate-y-1 transition-all cursor-pointer shadow-lg"
          >
            <div className="text-3xl">{s.icon}</div>
            <p className="mt-2 text-sm font-medium">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Welcome;