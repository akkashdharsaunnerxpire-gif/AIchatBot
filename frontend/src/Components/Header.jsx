import { IoSparkles } from "react-icons/io5";

function Header() {
  return (
    <div className="flex items-center px-6 py-4 border-b border-white/10 bg-gray-800/30 backdrop-blur-md">
      <div className="flex items-center gap-3 text-xl font-semibold">
        <IoSparkles className="text-blue-400 text-2xl" />
        <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          AI Assistant
        </span>
      </div>
      <div className="ml-auto text-sm text-gray-400 hidden sm:block">
        <span className="inline-flex items-center gap-1">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Online
        </span>
      </div>
    </div>
  );
}

export default Header;