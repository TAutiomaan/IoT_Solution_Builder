import { ArrowLeft, CheckCircle, DollarSign, Clock, Shield, TrendingUp } from 'lucide-react';

interface SolutionOption {
  name: string;
  description: string;
  pros: string[];
  cons: string[];
  estimated_cost: string;
  timeline: string;
  scalability: string;
  complexity: string;
}

interface Props {
  options: SolutionOption[];
  summary: string;
  onBack: () => void;
}

export default function SolutionComparison({ options, summary, onBack }: Props) {
  return (
    <div className="space-y-6">
      <button
        onClick={onBack}
        className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
      >
        <ArrowLeft className="w-5 h-5 mr-2" />
        Back to Main Solution
      </button>

      <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg shadow-md p-6 border border-green-100">
        <h2 className="text-2xl font-semibold text-slate-800 mb-4">Solution Comparison</h2>
        <p className="text-slate-700 whitespace-pre-wrap">{summary}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {options.map((option, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-slate-200">
            <h3 className="text-xl font-bold text-slate-800 mb-3">{option.name}</h3>
            <p className="text-slate-600 mb-4">{option.description}</p>

            <div className="space-y-4">
              <div>
                <div className="flex items-center mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                  <h4 className="font-semibold text-slate-800">Advantages</h4>
                </div>
                <ul className="space-y-1 ml-7">
                  {option.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-slate-700">• {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center mb-2">
                  <Shield className="w-5 h-5 text-orange-600 mr-2" />
                  <h4 className="font-semibold text-slate-800">Considerations</h4>
                </div>
                <ul className="space-y-1 ml-7">
                  {option.cons.map((con, i) => (
                    <li key={i} className="text-sm text-slate-700">• {con}</li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-slate-200 pt-4 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <DollarSign className="w-4 h-4 text-green-600 mr-2" />
                    <span className="font-medium text-slate-700">Cost:</span>
                  </div>
                  <span className="text-sm text-slate-800">{option.estimated_cost}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Clock className="w-4 h-4 text-blue-600 mr-2" />
                    <span className="font-medium text-slate-700">Timeline:</span>
                  </div>
                  <span className="text-sm text-slate-800">{option.timeline}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <TrendingUp className="w-4 h-4 text-purple-600 mr-2" />
                    <span className="font-medium text-slate-700">Scalability:</span>
                  </div>
                  <span className="text-sm text-slate-800">{option.scalability}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm">
                    <Shield className="w-4 h-4 text-orange-600 mr-2" />
                    <span className="font-medium text-slate-700">Complexity:</span>
                  </div>
                  <span className="text-sm text-slate-800">{option.complexity}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
