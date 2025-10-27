import React from 'react';
import { Wifi } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';
import FieldSuggestions from '../FieldSuggestions';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function ConnectivityRequirements({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <Wifi className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Connectivity Requirements</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Connectivity Type *
        </label>
        <FieldSuggestions
          field="connectivityType"
          value={formData.connectivity_type || ''}
          onChange={(value) => onChange('connectivity_type', value)}
          placeholder="e.g., Wi-Fi, Cellular, LoRaWAN"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Network Requirements
        </label>
        <textarea
          value={formData.network_requirements || ''}
          onChange={(e) => onChange('network_requirements', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Coverage area, reliability needs, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Latency Requirements
        </label>
        <input
          type="text"
          value={formData.latency_requirements || ''}
          onChange={(e) => onChange('latency_requirements', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., <100ms for real-time control"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Bandwidth Needs
        </label>
        <input
          type="text"
          value={formData.bandwidth_needs || ''}
          onChange={(e) => onChange('bandwidth_needs', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 1Mbps per device"
        />
      </div>
    </div>
  );
}
