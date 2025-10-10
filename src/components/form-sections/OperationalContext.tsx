import type { BusinessCase } from '../../types/businessCase';

interface OperationalContextProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function OperationalContext({ formData, updateField }: OperationalContextProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Operational Context</h3>
        <p className="text-sm text-gray-600 mb-4">Tell us about the environment and operational conditions</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Operating Environment
        </label>
        <textarea
          value={formData.operating_environment}
          onChange={(e) => updateField('operating_environment', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="e.g., Factory floor, city infrastructure, logistics network, agriculture, healthcare facility..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Scale Details
        </label>
        <textarea
          value={formData.scale_details}
          onChange={(e) => updateField('scale_details', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Number of sites, devices, assets, or users involved..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Physical & Environmental Conditions
        </label>
        <textarea
          value={formData.environmental_conditions}
          onChange={(e) => updateField('environmental_conditions', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Temperature, humidity, distance, mobility, harsh conditions..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Asset Mobility
        </label>
        <input
          type="text"
          value={formData.asset_mobility}
          onChange={(e) => updateField('asset_mobility', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="How often do devices or assets move or change locations?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Maintenance & Management Ownership
        </label>
        <input
          type="text"
          value={formData.maintenance_ownership}
          onChange={(e) => updateField('maintenance_ownership', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Who will manage and maintain the system once deployed?"
        />
      </div>
    </div>
  );
}
