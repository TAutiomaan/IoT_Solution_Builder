import { useState } from 'react';
import { Send, Sparkles } from 'lucide-react';
import type { BusinessCase } from '../types/businessCase';
import BusinessUnderstanding from './form-sections/BusinessUnderstanding';
import ProjectRequirements from './form-sections/ProjectRequirements';
import DevicesEdge from './form-sections/DevicesEdge';
import ConnectivityRequirements from './form-sections/ConnectivityRequirements';
import CloudDataPlatform from './form-sections/CloudDataPlatform';
import SecurityCompliance from './form-sections/SecurityCompliance';
import OperationalContext from './form-sections/OperationalContext';
import ScalabilityPerformance from './form-sections/ScalabilityPerformance';
import StrategicConsiderations from './form-sections/StrategicConsiderations';
import { exampleCases } from '../data/exampleData';

interface Props {
  onSubmit: (data: BusinessCase) => void;
  loading?: boolean;
  initialData?: Partial<BusinessCase>;
}

export default function BusinessCaseForm({ onSubmit, loading, initialData }: Props) {
  const [formData, setFormData] = useState<Partial<BusinessCase>>(initialData || {});

  const handleChange = (field: keyof BusinessCase, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData as BusinessCase);
  };

  const loadExample = (example: Partial<BusinessCase>) => {
    setFormData(example);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center mb-3">
          <Sparkles className="w-5 h-5 text-blue-600 mr-2" />
          <h3 className="font-semibold text-blue-900">Quick Start Examples</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
          {exampleCases.map((example, index) => (
            <button
              key={index}
              type="button"
              onClick={() => loadExample(example)}
              className="text-left p-3 bg-white rounded-lg hover:bg-blue-100 transition-colors border border-blue-200"
            >
              <div className="font-medium text-sm text-slate-800">{example.project_name}</div>
              <div className="text-xs text-slate-600 mt-1">{example.industry}</div>
            </button>
          ))}
        </div>
      </div>

      <BusinessUnderstanding formData={formData} onChange={handleChange} />
      <ProjectRequirements formData={formData} onChange={handleChange} />
      <DevicesEdge formData={formData} onChange={handleChange} />
      <ConnectivityRequirements formData={formData} onChange={handleChange} />
      <CloudDataPlatform formData={formData} onChange={handleChange} />
      <SecurityCompliance formData={formData} onChange={handleChange} />
      <OperationalContext formData={formData} onChange={handleChange} />
      <ScalabilityPerformance formData={formData} onChange={handleChange} />
      <StrategicConsiderations formData={formData} onChange={handleChange} />

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={loading}
          className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors font-medium"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
              Generating Solution...
            </>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Generate IoT Solution
            </>
          )}
        </button>
      </div>
    </form>
  );
}
