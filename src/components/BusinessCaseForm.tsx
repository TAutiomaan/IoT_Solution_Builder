import { useState } from 'react';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';
import type { BusinessCase } from '../types/businessCase';
import { BusinessUnderstanding } from './form-sections/BusinessUnderstanding';
import { OperationalContext } from './form-sections/OperationalContext';
import { DevicesEdge } from './form-sections/DevicesEdge';
import { ConnectivityRequirements } from './form-sections/ConnectivityRequirements';
import { CloudDataPlatform } from './form-sections/CloudDataPlatform';
import { SecurityCompliance } from './form-sections/SecurityCompliance';
import { ScalabilityPerformance } from './form-sections/ScalabilityPerformance';
import { ProjectRequirements } from './form-sections/ProjectRequirements';
import { StrategicConsiderations } from './form-sections/StrategicConsiderations';

interface BusinessCaseFormProps {
  onSubmit: (data: BusinessCase) => void;
  isLoading: boolean;
}

export function BusinessCaseForm({ onSubmit, isLoading }: BusinessCaseFormProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BusinessCase>({
    title: '',
    industry: '',
    business_problem: '',
    scale: '',
    devices_count: '',
    data_volume: '',
    latency_requirements: '',
    budget_range: '',
    security_requirements: '',
    integration_needs: '',
    geographic_scope: '',
  });

  const updateField = (field: keyof BusinessCase, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const canProceed = () => {
    switch (step) {
      case 1:
        return formData.title && formData.industry && formData.business_problem;
      case 2:
        return true;
      case 3:
        return true;
      case 4:
        return formData.scale && formData.devices_count;
      case 5:
        return true;
      case 6:
        return true;
      case 7:
        return formData.data_volume && formData.latency_requirements;
      case 8:
        return true;
      case 9:
        return true;
      case 10:
        return true;
      default:
        return true;
    }
  };

  const stepLabels = [
    'Overview',
    'Business Context',
    'Operations',
    'Devices',
    'Connectivity',
    'Cloud & Data',
    'Performance',
    'Project Details',
    'Strategy',
    'Review'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-2">
          <div className="text-sm text-gray-600">
            Step {step} of {stepLabels.length}
          </div>
          <div className="text-sm font-medium text-blue-600">
            {stepLabels[step - 1]}
          </div>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${(step / stepLabels.length) * 100}%` }}
          />
        </div>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Project Overview</h2>
          <p className="text-gray-600">Let's start with the basics of your IoT project</p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => updateField('title', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Smart Factory Monitoring System"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Industry <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.industry}
              onChange={(e) => updateField('industry', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select industry...</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Healthcare">Healthcare</option>
              <option value="Agriculture">Agriculture</option>
              <option value="Smart Cities">Smart Cities</option>
              <option value="Retail">Retail</option>
              <option value="Energy">Energy & Utilities</option>
              <option value="Transportation">Transportation & Logistics</option>
              <option value="Building Automation">Building Automation</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Business Problem Description <span className="text-red-500">*</span>
            </label>
            <textarea
              value={formData.business_problem}
              onChange={(e) => updateField('business_problem', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={5}
              placeholder="Describe the business problem you're trying to solve with IoT..."
              required
            />
          </div>
        </div>
      )}

      {step === 2 && <BusinessUnderstanding formData={formData} updateField={updateField} />}
      {step === 3 && <OperationalContext formData={formData} updateField={updateField} />}
      {step === 4 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Technical Specifications</h2>
          <p className="text-gray-600">Define the scale and device requirements</p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Project Scale <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.scale}
              onChange={(e) => updateField('scale', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select scale...</option>
              <option value="Proof of Concept">Proof of Concept</option>
              <option value="Small (1-100 devices)">Small (1-100 devices)</option>
              <option value="Medium (100-1000 devices)">Medium (100-1000 devices)</option>
              <option value="Large (1000-10000 devices)">Large (1000-10000 devices)</option>
              <option value="Enterprise (10000+ devices)">Enterprise (10000+ devices)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Devices <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={formData.devices_count}
              onChange={(e) => updateField('devices_count', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., 500 sensors, 50 actuators"
              required
            />
          </div>

          <DevicesEdge formData={formData} updateField={updateField} />
        </div>
      )}

      {step === 5 && <ConnectivityRequirements formData={formData} updateField={updateField} />}
      {step === 6 && <CloudDataPlatform formData={formData} updateField={updateField} />}
      {step === 7 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Performance & Security</h2>
          <p className="text-gray-600">Define data volume, latency, and security requirements</p>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Expected Data Volume <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.data_volume}
              onChange={(e) => updateField('data_volume', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select data volume...</option>
              <option value="Low (< 1 GB/day)">Low (&lt; 1 GB/day)</option>
              <option value="Medium (1-100 GB/day)">Medium (1-100 GB/day)</option>
              <option value="High (100 GB - 1 TB/day)">High (100 GB - 1 TB/day)</option>
              <option value="Very High (> 1 TB/day)">Very High (&gt; 1 TB/day)</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Latency Requirements <span className="text-red-500">*</span>
            </label>
            <select
              value={formData.latency_requirements}
              onChange={(e) => updateField('latency_requirements', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            >
              <option value="">Select latency requirements...</option>
              <option value="Real-time (< 100ms)">Real-time (&lt; 100ms)</option>
              <option value="Near real-time (< 1s)">Near real-time (&lt; 1s)</option>
              <option value="Low latency (1-5s)">Low latency (1-5s)</option>
              <option value="Standard (5-30s)">Standard (5-30s)</option>
              <option value="Batch processing (minutes/hours)">Batch processing (minutes/hours)</option>
            </select>
          </div>

          <SecurityCompliance formData={formData} updateField={updateField} />
          <ScalabilityPerformance formData={formData} updateField={updateField} />
        </div>
      )}

      {step === 8 && (
        <div className="space-y-5">
          <ProjectRequirements formData={formData} updateField={updateField} />

          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Budget Range
            </label>
            <select
              value={formData.budget_range}
              onChange={(e) => updateField('budget_range', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Select budget range...</option>
              <option value="Under $50K">Under $50K</option>
              <option value="$50K - $200K">$50K - $200K</option>
              <option value="$200K - $500K">$200K - $500K</option>
              <option value="$500K - $1M">$500K - $1M</option>
              <option value="Over $1M">Over $1M</option>
              <option value="Flexible">Flexible</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Integration Requirements
            </label>
            <textarea
              value={formData.integration_needs}
              onChange={(e) => updateField('integration_needs', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="e.g., ERP systems, CRM, legacy databases, third-party APIs..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Geographic Scope
            </label>
            <input
              type="text"
              value={formData.geographic_scope}
              onChange={(e) => updateField('geographic_scope', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="e.g., Single location, Regional, Global"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Security Requirements (Legacy)
            </label>
            <textarea
              value={formData.security_requirements}
              onChange={(e) => updateField('security_requirements', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              rows={3}
              placeholder="e.g., HIPAA compliance, end-to-end encryption, ISO 27001..."
            />
          </div>
        </div>
      )}

      {step === 9 && <StrategicConsiderations formData={formData} updateField={updateField} />}

      {step === 10 && (
        <div className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800">Review & Submit</h2>
          <p className="text-gray-600">Review your information before generating the IoT solution</p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
            <div>
              <span className="font-semibold text-gray-700">Project:</span> {formData.title}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Industry:</span> {formData.industry}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Scale:</span> {formData.scale}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Devices:</span> {formData.devices_count}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Data Volume:</span> {formData.data_volume}
            </div>
            <div>
              <span className="font-semibold text-gray-700">Latency:</span> {formData.latency_requirements}
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-green-50 border border-blue-200 rounded-lg p-6">
            <p className="text-sm text-gray-800">
              Click "Generate Solution" to receive comprehensive AI-powered IoT architecture recommendations tailored to your specific requirements.
            </p>
          </div>
        </div>
      )}

      <div className="flex justify-between pt-6 border-t">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(1, s - 1))}
          disabled={step === 1}
          className="px-6 py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
        >
          <ChevronLeft size={20} />
          Previous
        </button>

        {step < stepLabels.length ? (
          <button
            type="button"
            onClick={() => setStep((s) => s + 1)}
            disabled={!canProceed()}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-colors"
          >
            Next
            <ChevronRight size={20} />
          </button>
        ) : (
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 transition-all"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Analyzing...
              </>
            ) : (
              <>
                <Sparkles size={20} />
                Generate Solution
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}
