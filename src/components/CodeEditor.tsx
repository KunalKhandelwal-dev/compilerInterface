import { useCallback, useEffect, useRef, useState } from "react";
import { FileCode } from "lucide-react";
import Editor, { OnMount } from "@monaco-editor/react";
import type * as monacoEditor from "monaco-editor";

type Props = {
  language?: string;
};

const DEFAULT_CODE: Record<string, string> = {
  python: `# Write your Python code here
def hello_world():
    print("Hello, World!")

hello_world()`,
  c: `/* C (gcc) example */
#include <stdio.h>
int main(void) {
  printf("Hello, World!\\n");
  return 0;
}`,
  cpp: `// C++ example
#include <bits/stdc++.h>
using namespace std;
int main() {
  cout << "Hello, World!" << endl;
  return 0;
}`,
  java: `// Java example
public class Main {
  public static void main(String[] args) {
    System.out.println("Hello, World!");
  }
}`,
  javascript: `// JavaScript Node.js example
console.log("Hello, World!");`,
};

export function CodeEditor({ language = "python" }: Props) {
  const [code, setCode] = useState<string>(DEFAULT_CODE[language] ?? "");
  const editorRef = useRef<monacoEditor.editor.IStandaloneCodeEditor | null>(null);

  // Keep editor content in sync when language changes:
  useEffect(() => {
    // Only auto-insert the default snippet if editor is empty or currently holds the previous default
    const currentValue = editorRef.current?.getValue() ?? code;
    const isEmpty = currentValue.trim() === "";
    const wasDefault = Object.values(DEFAULT_CODE).some(
      (d) => d.trim() === currentValue.trim()
    );

    if (isEmpty || wasDefault) {
      const newDefault = DEFAULT_CODE[language] ?? "";
      setCode(newDefault);
      if (editorRef.current) {
        editorRef.current.setValue(newDefault);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [language]);

  const handleEditorMount: OnMount = useCallback((editor, monaco) => {
    editorRef.current = editor;
    if (code) editor.setValue(code);
    // ensure nice default view
    editor.setPosition({ lineNumber: 1, column: 1 });
    editor.focus();
  }, [code]);

  const handleEditorChange = useCallback((value: string | undefined) => {
    setCode(value ?? "");
  }, []);

  return (
    <div className="h-full flex flex-col bg-gray-900/50 backdrop-blur-sm rounded-lg border border-cyan-500/30 shadow-xl shadow-cyan-500/10 overflow-hidden relative">
      <div className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-gray-800/80 to-gray-800/60 border-b border-cyan-500/20">
        <FileCode className="w-4 h-4 text-cyan-400 shrink-0" />
        <span className="text-cyan-400 text-sm">Code Editor</span>
        <div className="ml-auto flex gap-1">
          <div className="w-3 h-3 rounded-full bg-red-500/50" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
          <div className="w-3 h-3 rounded-full bg-green-500/50" />
        </div>
      </div>

      <div className="flex-1 min-h-0 bg-[#1e1e1e]">
        {/* Monaco needs a parent with an explicit height — container has flex-1 and min-h-0 */}
        <Editor
          height="100%"
          defaultLanguage={language}
          language={language}
          value={code}
          theme="vs-dark"
          onMount={handleEditorMount}
          onChange={handleEditorChange}
          options={{
            minimap: { enabled: false },
            automaticLayout: true,
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            tabSize: 4,
            scrollBeyondLastLine: false,
            wordWrap: "on",
            wrappingIndent: "indent",
            glyphMargin: false,
            folding: true,
            renderLineHighlight: "all",
            contextmenu: true,
          }}
        />
      </div>
    </div>
  );
}