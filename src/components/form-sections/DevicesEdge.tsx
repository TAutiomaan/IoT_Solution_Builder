import type { BusinessCase } from '../../types/businessCase';
import { FieldSuggestions } from '../FieldSuggestions';
import { fieldSuggestions } from '../../data/exampleData';

interface DevicesEdgeProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function DevicesEdge({ formData, updateField }: DevicesEdgeProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Devices & Edge Computing</h3>
        <p className="text-sm text-gray-600 mb-4">Specify device requirements and edge capabilities</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Device Types
        </label>
        <textarea
          value={formData.device_types}
          onChange={(e) => updateField('device_types', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="e.g., Sensors, actuators, gateways, vehicles, machines..."
        />
        <FieldSuggestions suggestions={fieldSuggestions.device_types || []} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Data Collection Specifications
        </label>
        <textarea
          value={formData.data_collection_specs}
          onChange={(e) => updateField('data_collection_specs', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Data type, frequency, format, precision required..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Data Transmission Frequency
        </label>
        <input
          type="text"
          value={formData.transmission_frequency}
          onChange={(e) => updateField('transmission_frequency', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Every second, every minute, hourly..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Real-time Processing Needs
        </label>
        <input
          type="text"
          value={formData.real_time_needs}
          onChange={(e) => updateField('real_time_needs', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Latency or real-time processing requirements..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Edge Intelligence Level
        </label>
        <input
          type="text"
          value={formData.edge_intelligence}
          onChange={(e) => updateField('edge_intelligence', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Level of device intelligence or edge computing needed..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Power Constraints
        </label>
        <input
          type="text"
          value={formData.power_constraints}
          onChange={(e) => updateField('power_constraints', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Battery-powered, mains, energy harvesting..."
        />
        <FieldSuggestions suggestions={fieldSuggestions.power_constraints || []} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Device Management Approach
        </label>
        <textarea
          value={formData.device_management}
          onChange={(e) => updateField('device_management', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Device provisioning, OTA updates, remote management requirements..."
        />
      </div>
    </div>
  );
}
