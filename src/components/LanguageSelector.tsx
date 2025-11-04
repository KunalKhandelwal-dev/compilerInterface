import { Code2 } from "lucide-react";

/**
 * A simple controlled LanguageSelector.
 * Props:
 *  - value: current language value (string)
 *  - onChange: (value: string) => void
 *
 * This keeps compatibility with the rest of your UI while exposing selection to the parent.
 */
type Language = { value: string; label: string };

const languages: Language[] = [
  { value: "python", label: "Python" },
  { value: "c", label: "C" },
  { value: "cpp", label: "C++" },
  { value: "java", label: "Java" },
  { value: "javascript", label: "JavaScript" }
];

type Props = {
  value: string;
  onChange: (v: string) => void;
};

export function LanguageSelector({ value, onChange }: Props) {
  return (
    <div className="w-full">
      {/* Use a native select for predictable controlled behavior and simple styling */}
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-gray-800/80 border border-cyan-500/40 text-cyan-100 px-3 py-2 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-cyan-500/30 appearance-none"
        >
          {languages.map((lang) => (
            <option key={lang.value} value={lang.value}>
              {lang.label}
            </option>
        ))}
        </select>
      </div>
    </div>
  );
}