import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { fieldSuggestions } from '../data/exampleData';

interface Props {
  field: keyof typeof fieldSuggestions;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function FieldSuggestions({ field, value, onChange, placeholder }: Props) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const suggestions = fieldSuggestions[field] || [];

  const handleSuggestionClick = (suggestion: string) => {
    if (value.includes(suggestion)) {
      return;
    }
    const newValue = value ? `${value}, ${suggestion}` : suggestion;
    onChange(newValue);
    setShowSuggestions(false);
  };

  return (
    <div ref={wrapperRef} className="relative">
      <div className="relative">
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setShowSuggestions(true)}
          className="w-full px-4 py-2 pr-10 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder={placeholder}
        />
        <button
          type="button"
          onClick={() => setShowSuggestions(!showSuggestions)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </div>

      {showSuggestions && suggestions.length > 0 && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-slate-200 rounded-lg shadow-lg max-h-60 overflow-y-auto">
          {suggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full text-left px-4 py-2 hover:bg-blue-50 transition-colors text-sm text-slate-700 border-b border-slate-100 last:border-b-0"
            >
              {suggestion}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
