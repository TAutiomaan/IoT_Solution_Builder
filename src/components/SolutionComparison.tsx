import { Check, X, DollarSign, Clock, TrendingUp, AlertTriangle } from 'lucide-react';

interface SolutionOption {
  name: string;
  description: string;
  architecture_approach: string;
  technologies: Record<string, any[]>;
  pros: string[];
  cons: string[];
  cost_breakdown: {
    initial_capex: string;
    annual_opex: string;
    total_3_year_tco: string;
  };
  implementation_complexity: string;
  deployment_timeline: string;
  best_for: string;
}

interface SolutionComparisonProps {
  solutions: SolutionOption[];
  comparisonMatrix?: Record<string, string>;
  recommendation?: string;
}

export function SolutionComparison({ solutions, comparisonMatrix, recommendation }: SolutionComparisonProps) {
  if (!solutions || solutions.length === 0) {
    return null;
  }

  const parsedMatrix = typeof comparisonMatrix === 'string' ?
    JSON.parse(comparisonMatrix) : comparisonMatrix;

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Solution Options Comparison</h2>
        <p className="text-gray-600">
          We've analyzed your requirements and created {solutions.length} distinct IoT architecture solutions.
          Compare them below to choose the best fit for your needs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-blue-500 transition-colors"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{solution.name}</h3>
                <p className="text-sm text-gray-600">{solution.description}</p>
              </div>
              <div className="flex-shrink-0 ml-4">
                <div className="w-10 h-10 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  {index + 1}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <DollarSign size={16} className="text-green-600" />
                  Cost Estimate
                </h4>
                <div className="bg-gray-50 rounded-lg p-3 text-sm space-y-1">
                  <div>
                    <span className="font-medium">CAPEX:</span> {solution.cost_breakdown.initial_capex}
                  </div>
                  <div>
                    <span className="font-medium">Annual OPEX:</span> {solution.cost_breakdown.annual_opex}
                  </div>
                  <div className="pt-1 border-t border-gray-200">
                    <span className="font-semibold">3-Year TCO:</span> {solution.cost_breakdown.total_3_year_tco}
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Clock size={16} className="text-blue-600" />
                  Timeline
                </h4>
                <p className="text-sm text-gray-600 bg-blue-50 rounded-lg p-3">
                  {solution.deployment_timeline}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <TrendingUp size={16} className="text-orange-600" />
                  Complexity
                </h4>
                <p className="text-sm text-gray-600 bg-orange-50 rounded-lg p-3">
                  {solution.implementation_complexity}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <Check size={16} className="text-green-600" />
                  Advantages
                </h4>
                <ul className="space-y-1">
                  {solution.pros.map((pro, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <Check size={14} className="text-green-600 flex-shrink-0 mt-0.5" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <X size={16} className="text-red-600" />
                  Limitations
                </h4>
                <ul className="space-y-1">
                  {solution.cons.map((con, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start gap-2">
                      <X size={14} className="text-red-600 flex-shrink-0 mt-0.5" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                  <AlertTriangle size={16} className="text-amber-600" />
                  Best For
                </h4>
                <p className="text-sm text-gray-600 bg-amber-50 rounded-lg p-3">
                  {solution.best_for}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {parsedMatrix && (
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Detailed Technology Comparison</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(parsedMatrix).map(([key, value]) => (
              <div key={key} className="bg-white rounded-lg p-4">
                <h4 className="font-semibold text-gray-800 mb-2 capitalize">
                  {key.replace(/_/g, ' ')}
                </h4>
                <p className="text-sm text-gray-600">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {recommendation && (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
            <Check size={24} className="text-green-600" />
            Recommended Solution
          </h3>
          <div className="prose prose-sm max-w-none text-gray-700">
            {recommendation.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-3">{paragraph}</p>
            ))}
          </div>
        </div>
      )}

      {solutions.map((solution, index) => (
        <details key={index} className="bg-white border border-gray-200 rounded-xl">
          <summary className="cursor-pointer p-6 font-semibold text-lg text-gray-800 hover:bg-gray-50">
            {solution.name} - Detailed Architecture & Technology Stack
          </summary>
          <div className="p-6 pt-0 space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Architecture Approach</h4>
              <div className="prose prose-sm max-w-none text-gray-700">
                {solution.architecture_approach.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="mb-3">{paragraph}</p>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-3">Technology Stack by Layer</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(solution.technologies).map(([category, items]) => (
                  <div key={category} className="bg-gray-50 rounded-lg p-4">
                    <h5 className="font-semibold text-gray-700 mb-2 capitalize">
                      {category.replace(/_/g, ' ')}
                    </h5>
                    <div className="space-y-2">
                      {(Array.isArray(items) ? items : [items]).map((item: any, i: number) => (
                        <div key={i} className="text-sm">
                          <div className="font-medium text-gray-800">{item.name}</div>
                          {item.specs && (
                            <div className="text-gray-600 text-xs mt-1">{item.specs}</div>
                          )}
                          {item.protocol && (
                            <div className="text-gray-600 text-xs mt-1">Protocol: {item.protocol}</div>
                          )}
                          {item.capabilities && (
                            <div className="text-gray-600 text-xs mt-1">{item.capabilities}</div>
                          )}
                          {item.services && (
                            <div className="text-gray-600 text-xs mt-1">{item.services}</div>
                          )}
                          {item.rationale && (
                            <div className="text-blue-600 text-xs mt-1 italic">→ {item.rationale}</div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
