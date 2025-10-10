import type { BusinessCase } from '../../types/businessCase';

interface BusinessUnderstandingProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function BusinessUnderstanding({ formData, updateField }: BusinessUnderstandingProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Business Understanding</h3>
        <p className="text-sm text-gray-600 mb-4">Help us understand the business context and objectives</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Expected Business Outcomes
        </label>
        <textarea
          value={formData.business_outcomes}
          onChange={(e) => updateField('business_outcomes', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="e.g., Cost reduction, new revenue streams, safety improvement..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Key Stakeholders & End-Users
        </label>
        <textarea
          value={formData.stakeholders}
          onChange={(e) => updateField('stakeholders', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Who are the key stakeholders and end-users?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Success Metrics / KPIs
        </label>
        <textarea
          value={formData.success_metrics}
          onChange={(e) => updateField('success_metrics', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="What are the key success metrics or KPIs for this project?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Current Process & Pain Points
        </label>
        <textarea
          value={formData.current_process}
          onChange={(e) => updateField('current_process', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="What is the current process or system in place? What are its pain points or inefficiencies?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Market or Regulatory Drivers
        </label>
        <textarea
          value={formData.market_drivers}
          onChange={(e) => updateField('market_drivers', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Are there specific market or regulatory drivers for this IoT initiative?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Expected Benefits (Short-term & Long-term)
        </label>
        <textarea
          value={formData.expected_benefits}
          onChange={(e) => updateField('expected_benefits', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="What are the expected short-term and long-term benefits?"
        />
      </div>
    </div>
  );
}
