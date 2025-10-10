import type { BusinessCase } from '../../types/businessCase';

interface ConnectivityRequirementsProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function ConnectivityRequirements({ formData, updateField }: ConnectivityRequirementsProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Connectivity Requirements</h3>
        <p className="text-sm text-gray-600 mb-4">Define network and connectivity needs</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Network Technologies Available/Preferred
        </label>
        <textarea
          value={formData.network_technologies}
          onChange={(e) => updateField('network_technologies', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="e.g., Wi-Fi, LTE/5G, LoRaWAN, Zigbee, Ethernet, satellite..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Coverage or Bandwidth Limitations
        </label>
        <input
          type="text"
          value={formData.coverage_limitations}
          onChange={(e) => updateField('coverage_limitations', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Are there coverage or bandwidth limitations?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Data per Device per Day
        </label>
        <input
          type="text"
          value={formData.data_per_device}
          onChange={(e) => updateField('data_per_device', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 10 MB per device per day..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Throughput, Latency & Availability Needs
        </label>
        <textarea
          value={formData.throughput_needs}
          onChange={(e) => updateField('throughput_needs', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Expected data throughput, latency, and availability requirements..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Connectivity Scope
        </label>
        <input
          type="text"
          value={formData.connectivity_scope}
          onChange={(e) => updateField('connectivity_scope', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Is roaming or global connectivity required?"
        />
      </div>
    </div>
  );
}
