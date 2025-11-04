import { useState } from "react";
import { Terminal } from "lucide-react";

export function InputSection() {
  const [input, setInput] = useState("");

  return (
    <div className="h-full flex flex-col bg-gray-900/50 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-xl shadow-cyan-500/10 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-800/60 px-4 py-2.5 border-b border-cyan-500/20 flex items-center gap-2">
        <Terminal className="w-4 h-4 text-cyan-400" />
        <span className="text-cyan-400 text-sm">Input for Program</span>
        <span className="text-gray-500 text-xs ml-auto">(stdin)</span>
      </div>

      <div className="p-3 bg-[#1e1e1e] min-h-[120px] max-h-[40vh] overflow-auto">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full h-full bg-gray-900/50 border border-cyan-500/20 rounded-md text-gray-100 font-mono text-sm p-3 resize-none focus:outline-none focus:border-cyan-500/40 focus:ring-2 focus:ring-cyan-500/20 transition-all min-h-[120px]"
          placeholder="Enter input here (one value per line)..."
          spellCheck={false}
          style={{
            caretColor: "#06b6d4",
            tabSize: 4,
          }}
        />
      </div>
    </div>
  );
}