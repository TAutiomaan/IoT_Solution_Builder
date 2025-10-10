import type { BusinessCase } from '../../types/businessCase';

interface ScalabilityPerformanceProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function ScalabilityPerformance({ formData, updateField }: ScalabilityPerformanceProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Scalability & Performance</h3>
        <p className="text-sm text-gray-600 mb-4">Plan for growth and performance requirements</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Device Growth Plan
        </label>
        <input
          type="text"
          value={formData.device_growth}
          onChange={(e) => updateField('device_growth', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Devices needed now and in the future..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Expected Data Growth Rate
        </label>
        <input
          type="text"
          value={formData.data_growth_rate}
          onChange={(e) => updateField('data_growth_rate', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 20% annually, doubling every 2 years..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Firmware & Version Management
        </label>
        <textarea
          value={formData.firmware_management}
          onChange={(e) => updateField('firmware_management', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="How to handle firmware upgrades and version management..."
        />
      </div>
    </div>
  );
}
