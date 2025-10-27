import { History, Trash2, Clock } from 'lucide-react';
import type { BusinessCase } from '../types/businessCase';

interface Props {
  cases: BusinessCase[];
  onLoadCase: (id: string) => void;
  onDeleteCase: (id: string) => void;
  currentCaseId?: string;
}

export default function CaseHistory({ cases, onLoadCase, onDeleteCase, currentCaseId }: Props) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
      <div className="flex items-center mb-4">
        <History className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-xl font-semibold text-slate-800">Case History</h2>
      </div>

      {cases.length === 0 ? (
        <p className="text-slate-500 text-sm">No saved cases yet. Create your first case!</p>
      ) : (
        <div className="space-y-3 max-h-[calc(100vh-200px)] overflow-y-auto">
          {cases.map((businessCase) => (
            <div
              key={businessCase.id}
              className={`border rounded-lg p-3 transition-all ${
                currentCaseId === businessCase.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-slate-200 hover:border-blue-300 hover:bg-slate-50'
              }`}
            >
              <div className="flex items-start justify-between">
                <button
                  onClick={() => onLoadCase(businessCase.id!)}
                  className="flex-1 text-left"
                >
                  <div className="font-medium text-slate-800 text-sm mb-1">
                    {businessCase.project_name}
                  </div>
                  <div className="text-xs text-slate-600 mb-2">
                    {businessCase.industry}
                  </div>
                  <div className="flex items-center text-xs text-slate-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {businessCase.created_at && formatDate(businessCase.created_at)}
                  </div>
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (confirm('Delete this case?')) {
                      onDeleteCase(businessCase.id!);
                    }
                  }}
                  className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
