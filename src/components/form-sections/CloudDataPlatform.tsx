import type { BusinessCase } from '../../types/businessCase';
import { FieldSuggestions } from '../FieldSuggestions';
import { fieldSuggestions } from '../../data/exampleData';

interface CloudDataPlatformProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function CloudDataPlatform({ formData, updateField }: CloudDataPlatformProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Cloud & Data Platform</h3>
        <p className="text-sm text-gray-600 mb-4">Specify cloud infrastructure and data processing requirements</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Data Storage & Processing Location
        </label>
        <input
          type="text"
          value={formData.data_location}
          onChange={(e) => updateField('data_location', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Cloud, on-premises, hybrid..."
        />
        <FieldSuggestions suggestions={fieldSuggestions.data_location || []} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Analytics & AI Capabilities
        </label>
        <textarea
          value={formData.analytics_capabilities}
          onChange={(e) => updateField('analytics_capabilities', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="e.g., Real-time analytics, predictive maintenance, batch processing..."
        />
        <FieldSuggestions suggestions={fieldSuggestions.analytics_capabilities || []} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Enterprise System Integration
        </label>
        <textarea
          value={formData.enterprise_integration}
          onChange={(e) => updateField('enterprise_integration', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="e.g., ERP (SAP, Oracle), CRM (Salesforce), SCADA, MES systems..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          API & Data Exchange Requirements
        </label>
        <input
          type="text"
          value={formData.api_requirements}
          onChange={(e) => updateField('api_requirements', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Expected APIs or data exchange mechanisms..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Data Retention & Archival Policies
        </label>
        <input
          type="text"
          value={formData.data_retention}
          onChange={(e) => updateField('data_retention', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 7 years hot storage, 10 years archival..."
        />
      </div>
    </div>
  );
}
