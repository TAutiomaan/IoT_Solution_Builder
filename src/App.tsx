import { useState, useEffect } from 'react';
import { Lightbulb } from 'lucide-react';
import BusinessCaseForm from './components/BusinessCaseForm';
import SolutionDisplay from './components/SolutionDisplay';
import CaseHistory from './components/CaseHistory';
import SolutionComparison from './components/SolutionComparison';
import { supabase } from './lib/supabase';
import type { BusinessCase } from './types/businessCase';
import type { SolutionRecommendation } from './lib/supabase';

function App() {
  const [currentCase, setCurrentCase] = useState<BusinessCase | null>(null);
  const [solution, setSolution] = useState<SolutionRecommendation | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [savedCases, setSavedCases] = useState<BusinessCase[]>([]);
  const [showComparison, setShowComparison] = useState(false);

  useEffect(() => {
    loadSavedCases();
  }, []);

  const loadSavedCases = async () => {
    try {
      const { data, error } = await supabase
        .from('business_cases')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSavedCases(data || []);
    } catch (err) {
      console.error('Error loading cases:', err);
    }
  };

  const handleSubmit = async (caseData: BusinessCase) => {
    setLoading(true);
    setError(null);
    setSolution(null);
    setShowComparison(false);

    try {
      const { data: savedCase, error: caseError } = await supabase
        .from('business_cases')
        .insert([caseData])
        .select()
        .single();

      if (caseError) throw caseError;
      setCurrentCase(savedCase);

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-iot-solution`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          businessCaseId: savedCase.id,
          businessCase: savedCase
        })
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate solution');
      }

      const solutionData = await response.json();
      setSolution(solutionData);
      await loadSavedCases();

    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const handleLoadCase = async (caseId: string) => {
    setLoading(true);
    setError(null);
    setShowComparison(false);

    try {
      const { data: caseData, error: caseError } = await supabase
        .from('business_cases')
        .select('*')
        .eq('id', caseId)
        .single();

      if (caseError) throw caseError;
      setCurrentCase(caseData);

      const { data: solutionData, error: solutionError } = await supabase
        .from('solution_recommendations')
        .select('*')
        .eq('business_case_id', caseId)
        .single();

      if (solutionError) throw solutionError;
      setSolution(solutionData);

    } catch (err) {
      console.error('Error loading case:', err);
      setError(err instanceof Error ? err.message : 'Failed to load case');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteCase = async (caseId: string) => {
    try {
      const { error: solutionError } = await supabase
        .from('solution_recommendations')
        .delete()
        .eq('business_case_id', caseId);

      if (solutionError) throw solutionError;

      const { error: caseError } = await supabase
        .from('business_cases')
        .delete()
        .eq('id', caseId);

      if (caseError) throw caseError;

      await loadSavedCases();

      if (currentCase?.id === caseId) {
        setCurrentCase(null);
        setSolution(null);
        setShowComparison(false);
      }
    } catch (err) {
      console.error('Error deleting case:', err);
      setError(err instanceof Error ? err.message : 'Failed to delete case');
    }
  };

  const handleNewCase = () => {
    setCurrentCase(null);
    setSolution(null);
    setError(null);
    setShowComparison(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Lightbulb className="w-12 h-12 text-blue-600 mr-3" />
            <h1 className="text-4xl font-bold text-slate-800">IoT Solution Designer</h1>
          </div>
          <p className="text-lg text-slate-600">
            Define your business case and get AI-powered IoT solution recommendations
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            {!solution ? (
              <BusinessCaseForm
                onSubmit={handleSubmit}
                loading={loading}
                initialData={currentCase || undefined}
              />
            ) : (
              <div className="space-y-6">
                {showComparison && solution.solution_options ? (
                  <SolutionComparison
                    options={solution.solution_options}
                    summary={solution.comparison_summary || ''}
                    onBack={() => setShowComparison(false)}
                  />
                ) : (
                  <SolutionDisplay
                    solution={solution}
                    businessCase={currentCase}
                    onNewCase={handleNewCase}
                    onShowComparison={() => setShowComparison(true)}
                  />
                )}
              </div>
            )}

            {error && (
              <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">{error}</p>
              </div>
            )}
          </div>

          <div className="lg:col-span-1">
            <CaseHistory
              cases={savedCases}
              onLoadCase={handleLoadCase}
              onDeleteCase={handleDeleteCase}
              currentCaseId={currentCase?.id}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
