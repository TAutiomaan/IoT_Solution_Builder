import { useState, useEffect } from 'react';
import { History, ExternalLink, Calendar, Building2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import type { BusinessCase, SolutionRecommendation } from '../lib/supabase';

interface CaseWithSolution extends BusinessCase {
  solution?: SolutionRecommendation;
}

interface CaseHistoryProps {
  onSelectCase: (caseData: BusinessCase, solution: SolutionRecommendation) => void;
}

export function CaseHistory({ onSelectCase }: CaseHistoryProps) {
  const [cases, setCases] = useState<CaseWithSolution[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    loadCases();
  }, []);

  const loadCases = async () => {
    try {
      const { data: casesData, error: casesError } = await supabase
        .from('business_cases')
        .select('*')
        .order('created_at', { ascending: false })
        .limit(10);

      if (casesError) throw casesError;

      if (casesData) {
        const casesWithSolutions = await Promise.all(
          casesData.map(async (businessCase) => {
            const { data: solutionData } = await supabase
              .from('solution_recommendations')
              .select('*')
              .eq('business_case_id', businessCase.id)
              .maybeSingle();

            return {
              ...businessCase,
              solution: solutionData || undefined,
            };
          })
        );

        setCases(casesWithSolutions);
      }
    } catch (error) {
      console.error('Error loading cases:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCaseClick = (caseData: CaseWithSolution) => {
    if (caseData.solution) {
      onSelectCase(caseData, caseData.solution);
      setIsOpen(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed top-6 right-6 bg-white border border-gray-300 rounded-lg px-4 py-2 shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2 font-medium text-gray-700 hover:bg-gray-50"
      >
        <History size={20} />
        View History ({cases.length})
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[80vh] overflow-hidden flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
              <History size={28} />
              Recent Cases
            </h2>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              ×
            </button>
          </div>
        </div>

        <div className="overflow-y-auto flex-1 p-6">
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <div className="w-8 h-8 border-4 border-blue-600 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : cases.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <History size={48} className="mx-auto mb-4 opacity-50" />
              <p className="text-lg">No cases found</p>
              <p className="text-sm">Generate your first IoT solution to see it here</p>
            </div>
          ) : (
            <div className="space-y-3">
              {cases.map((caseData) => (
                <div
                  key={caseData.id}
                  onClick={() => handleCaseClick(caseData)}
                  className={`p-4 border rounded-lg transition-all ${
                    caseData.solution
                      ? 'border-gray-200 hover:border-blue-400 hover:shadow-md cursor-pointer bg-white'
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                        {caseData.title}
                        {caseData.solution && (
                          <ExternalLink size={16} className="text-blue-600" />
                        )}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <Building2 size={14} />
                          {caseData.industry}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={14} />
                          {caseData.created_at && formatDate(caseData.created_at)}
                        </span>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium">
                          {caseData.scale}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mt-2 line-clamp-2">
                        {caseData.business_problem}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
