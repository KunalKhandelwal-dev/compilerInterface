import { useState } from "react";
import { Header } from "./components/Header";
import { CodeEditor } from "./components/CodeEditor";
import { InputSection } from "./components/InputSection";
import { OutputConsole } from "./components/OutputConsole";

export default function App() {
  const [language, setLanguage] = useState<string>("python");

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900">
      {/* Top header (language selection + run button) */}
      <Header language={language} setLanguage={setLanguage} />

      {/* Main area */}
      <div className="flex-1 p-4 lg:p-6 overflow-hidden">
        {/* Use a two-column layout on large screens:
            - Left: code editor (primary, takes more width)
            - Right: stacked input (top) and output (bottom)
           Use min-h-0 on flex children so scrollable children can size correctly.
        */}
        <div className="h-full flex flex-col lg:flex-row gap-4">
          {/* Left: Code editor */}
          <div className="flex-1 lg:flex-[0.62] min-h-0">
            {/* make sure the CodeEditor can stretch to the parent's height */}
            <div className="h-full min-h-0">
              <CodeEditor language={language} />
              <div className="absolute pointer-events-none -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-sm -z-10 opacity-50" />
            </div>
          </div>

          {/* Right: input (top) and output (bottom) stacked */}
          <div className="flex flex-col lg:flex-[0.38] gap-4 min-h-0">
            {/* Input: occupy about 35-40% of the height on large screens */}
            <div className="min-h-[140px] lg:h-[35%] h-auto">
              <InputSection />
              <div className="absolute pointer-events-none -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-sm -z-10 opacity-30" />
            </div>

            {/* Output: fill remaining space and be scrollable */}
            <div className="flex-1 min-h-0">
              <OutputConsole />
              <div className="absolute pointer-events-none -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg blur-sm -z-10 opacity-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}