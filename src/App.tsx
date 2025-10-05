import { useState } from 'react';
import { Cpu, Zap } from 'lucide-react';
import { BusinessCaseForm } from './components/BusinessCaseForm';
import { SolutionDisplay } from './components/SolutionDisplay';
import { CaseHistory } from './components/CaseHistory';
import { supabase } from './lib/supabase';
import type { BusinessCase, SolutionRecommendation } from './lib/supabase';

type AppState = 'form' | 'solution';

function App() {
  const [state, setState] = useState<AppState>('form');
  const [isLoading, setIsLoading] = useState(false);
  const [currentSolution, setCurrentSolution] = useState<SolutionRecommendation | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (businessCase: BusinessCase) => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: savedCase, error: saveError } = await supabase
        .from('business_cases')
        .insert([businessCase])
        .select()
        .single();

      if (saveError) throw saveError;

      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-iot-solution`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify(businessCase),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate solution');
      }

      const solutionData = await response.json();

      const solutionToSave: Omit<SolutionRecommendation, 'id' | 'created_at'> = {
        business_case_id: savedCase.id!,
        recommendation: solutionData.recommendation,
        technologies: solutionData.technologies,
        architecture_summary: solutionData.architecture_summary,
        estimated_cost: solutionData.estimated_cost,
        implementation_timeline: solutionData.implementation_timeline,
      };

      const { data: savedSolution, error: solutionError } = await supabase
        .from('solution_recommendations')
        .insert([solutionToSave])
        .select()
        .single();

      if (solutionError) throw solutionError;

      setCurrentSolution(savedSolution);
      setState('solution');
    } catch (err) {
      console.error('Error:', err);
      setError(err instanceof Error ? err.message : 'An error occurred while generating the solution');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setState('form');
    setCurrentSolution(null);
    setError(null);
  };

  const handleSelectCase = (_caseData: BusinessCase, solution: SolutionRecommendation) => {
    setCurrentSolution(solution);
    setState('solution');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

      <div className="relative">
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg">
                <Cpu className="text-white" size={28} />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  IoT Solution Finder
                </h1>
                <p className="text-gray-600 text-sm mt-1">
                  AI-powered architecture recommendations for your IoT projects
                </p>
              </div>
            </div>
          </div>
        </header>

        {state === 'form' && <CaseHistory onSelectCase={handleSelectCase} />}

        <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {error && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 font-medium">Error: {error}</p>
            </div>
          )}

          {state === 'form' ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <Zap className="text-blue-600" size={32} />
                  <h2 className="text-2xl font-bold text-gray-800">
                    Describe Your IoT Project
                  </h2>
                </div>
                <p className="text-gray-600">
                  Answer a few questions about your business needs, and we'll recommend the best IoT architecture and technology stack.
                </p>
              </div>

              <BusinessCaseForm onSubmit={handleSubmit} isLoading={isLoading} />
            </div>
          ) : currentSolution ? (
            <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
              <SolutionDisplay solution={currentSolution} onReset={handleReset} />
            </div>
          ) : null}
        </main>

        <footer className="bg-white border-t border-gray-200 mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <p className="text-center text-gray-600 text-sm">
              Powered by AI to help IoT architects make better technology decisions
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
