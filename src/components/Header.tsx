import { Button } from "./ui/button";
import { Play } from "lucide-react";
import { LanguageSelector } from "./LanguageSelector";

type Props = {
  language: string;
  setLanguage: (l: string) => void;
};

export function Header({ language, setLanguage }: Props) {
  return (
    <header className="border-b border-cyan-500/30 bg-gray-900/95 backdrop-blur-sm shadow-lg shadow-cyan-500/10">
      <div className="px-4 lg:px-6 py-4 flex items-center justify-between gap-4">
        {/* Logo Section */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 animate-pulse">
            <span className="text-white">&lt;/&gt;</span>
          </div>
          <span className="text-cyan-400 tracking-wide hidden sm:inline">
            CodeX Compiler
          </span>
        </div>

        {/* Center - Language Selector */}
        <div className="flex-1 flex justify-center max-w-xs">
          <LanguageSelector value={language} onChange={setLanguage} />
        </div>

        {/* Run Button */}
        <Button
          className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/70 hover:shadow-xl transition-all duration-300 border border-cyan-400/30 flex-shrink-0"
        >
          <Play className="w-4 h-4 mr-2 fill-white" />
          Run Code
        </Button>
      </div>
    </header>
  );
}