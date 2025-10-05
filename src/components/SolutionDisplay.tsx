import { CheckCircle, Clock, DollarSign, Layers, ArrowLeft } from 'lucide-react';
import type { SolutionRecommendation } from '../lib/supabase';

interface SolutionDisplayProps {
  solution: SolutionRecommendation;
  onReset: () => void;
}

export function SolutionDisplay({ solution, onReset }: SolutionDisplayProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
          <CheckCircle className="text-green-500" size={32} />
          Solution Generated
        </h2>
        <button
          onClick={onReset}
          className="px-4 py-2 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 flex items-center gap-2 transition-colors"
        >
          <ArrowLeft size={18} />
          New Analysis
        </button>
      </div>

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center gap-2">
          <Layers size={24} className="text-blue-600" />
          Architecture Summary
        </h3>
        <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
          {solution.architecture_summary || 'No architecture summary provided.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {solution.estimated_cost && (
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <DollarSign size={22} className="text-green-600" />
              Estimated Cost
            </h3>
            <p className="text-gray-700">{solution.estimated_cost}</p>
          </div>
        )}

        {solution.implementation_timeline && (
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
              <Clock size={22} className="text-blue-600" />
              Implementation Timeline
            </h3>
            <p className="text-gray-700">{solution.implementation_timeline}</p>
          </div>
        )}
      </div>

      {solution.technologies && solution.technologies.length > 0 && (
        <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Recommended Technologies
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {solution.technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg p-4 border border-gray-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-semibold text-blue-600 uppercase tracking-wide mb-1">
                      {tech.category}
                    </div>
                    <h4 className="font-bold text-gray-800 mb-1">{tech.name}</h4>
                    <p className="text-sm text-gray-600">{tech.purpose}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">
          Full Recommendation
        </h3>
        <div className="prose max-w-none text-gray-700 whitespace-pre-wrap leading-relaxed">
          {solution.recommendation}
        </div>
      </div>
    </div>
  );
}
