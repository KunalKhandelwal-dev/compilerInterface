import { Terminal, CheckCircle2 } from "lucide-react";

export function OutputConsole() {
  // Mock output data
  const mockOutput = [
    { type: "info", text: ">>> Running Python code..." },
    { type: "success", text: "Hello, World!" },
    { type: "info", text: "" },
    { type: "success", text: "✓ Program executed successfully." },
    { type: "success", text: "Exit code: 0" },
    { type: "info", text: "Execution time: 0.045s" },
  ];

  return (
    <div className="h-full flex flex-col bg-gray-900/50 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-xl shadow-cyan-500/10 overflow-hidden">
      <div className="bg-gradient-to-r from-gray-800/80 to-gray-800/60 px-4 py-2.5 border-b border-cyan-500/20 flex items-center gap-2">
        <Terminal className="w-4 h-4 text-cyan-400" />
        <span className="text-cyan-400 text-sm">Output Console</span>
        <div className="ml-auto flex items-center gap-2">
          <CheckCircle2 className="w-3 h-3 text-green-400" />
          <span className="text-xs text-gray-400">Ready</span>
        </div>
      </div>

      <div className="flex-1 bg-black p-4 overflow-auto font-mono text-sm shadow-inner scrollbar-thin scrollbar-thumb-cyan-500/30 scrollbar-track-transparent">
        {mockOutput.map((line, index) => (
          <div
            key={index}
            className={
              line.type === "success"
                ? "text-green-400"
                : line.type === "error"
                ? "text-red-500"
                : "text-gray-400"
            }
          >
            {line.text || "\u00A0"}
          </div>
        ))}

        {/* Blinking cursor */}
        <div className="inline-block w-2 h-4 bg-green-400 animate-pulse ml-1 mt-1"></div>
      </div>
    </div>
  );
}