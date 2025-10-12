import { Lightbulb } from 'lucide-react';
import { useState } from 'react';

interface FieldSuggestionsProps {
  suggestions: string[];
}

export function FieldSuggestions({ suggestions }: FieldSuggestionsProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!suggestions || suggestions.length === 0) return null;

  return (
    <div className="mt-1">
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="text-xs text-blue-600 hover:text-blue-700 flex items-center gap-1"
      >
        <Lightbulb size={12} />
        {isExpanded ? 'Hide' : 'Show'} suggestions
      </button>
      {isExpanded && (
        <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-xs font-medium text-blue-900 mb-2">Consider including:</p>
          <ul className="text-xs text-blue-800 space-y-1">
            {suggestions.map((suggestion, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-600 mt-0.5">•</span>
                <span>{suggestion}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
