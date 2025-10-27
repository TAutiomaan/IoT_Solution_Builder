import { CheckCircle, DollarSign, Clock, Layers, ArrowLeft, GitCompare } from 'lucide-react';
import type { SolutionRecommendation } from '../lib/supabase';
import type { BusinessCase } from '../types/businessCase';

interface Props {
  solution: SolutionRecommendation;
  businessCase: BusinessCase | null;
  onNewCase: () => void;
  onShowComparison: () => void;
}

export default function SolutionDisplay({ solution, businessCase, onNewCase, onShowComparison }: Props) {
  const hasSolutionOptions = solution.solution_options && solution.solution_options.length > 0;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={onNewCase}
          className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Create New Case
        </button>
        {hasSolutionOptions && (
          <button
            onClick={onShowComparison}
            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            <GitCompare className="w-5 h-5 mr-2" />
            Compare Solutions
          </button>
        )}
      </div>

      {businessCase && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold text-slate-800 mb-4">
            {businessCase.project_name}
          </h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="font-medium text-slate-600">Industry:</span>
              <span className="ml-2 text-slate-800">{businessCase.industry}</span>
            </div>
            <div>
              <span className="font-medium text-slate-600">Budget:</span>
              <span className="ml-2 text-slate-800">{businessCase.budget_range}</span>
            </div>
          </div>
        </div>
      )}

      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg shadow-md p-6 border border-blue-100">
        <div className="flex items-center mb-4">
          <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
          <h2 className="text-2xl font-semibold text-slate-800">Recommended Solution</h2>
        </div>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 whitespace-pre-wrap">{solution.recommendation}</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Layers className="w-6 h-6 text-blue-600 mr-2" />
          <h3 className="text-xl font-semibold text-slate-800">Technology Stack</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.technologies.map((tech, index) => (
            <div key={index} className="border border-slate-200 rounded-lg p-4">
              <div className="font-semibold text-slate-800 mb-1">{tech.category}</div>
              <div className="text-blue-600 font-medium mb-2">{tech.name}</div>
              <div className="text-sm text-slate-600">{tech.purpose}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center mb-4">
          <Layers className="w-6 h-6 text-purple-600 mr-2" />
          <h3 className="text-xl font-semibold text-slate-800">Architecture Overview</h3>
        </div>
        <p className="text-slate-700 whitespace-pre-wrap">{solution.architecture_summary}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-3">
            <DollarSign className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-slate-800">Estimated Cost</h3>
          </div>
          <p className="text-slate-700">{solution.estimated_cost}</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-3">
            <Clock className="w-6 h-6 text-orange-600 mr-2" />
            <h3 className="text-xl font-semibold text-slate-800">Implementation Timeline</h3>
          </div>
          <p className="text-slate-700">{solution.implementation_timeline}</p>
        </div>
      </div>
    </div>
  );
}
