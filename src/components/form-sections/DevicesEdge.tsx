import React from 'react';
import { Cpu } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';
import FieldSuggestions from '../FieldSuggestions';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function DevicesEdge({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <Cpu className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Devices & Edge</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Sensor/Device Types *
        </label>
        <FieldSuggestions
          field="sensorTypes"
          value={formData.sensor_types || ''}
          onChange={(value) => onChange('sensor_types', value)}
          placeholder="e.g., Temperature sensors, GPS trackers"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Expected Device Count *
        </label>
        <FieldSuggestions
          field="deviceCount"
          value={formData.device_count || ''}
          onChange={(value) => onChange('device_count', value)}
          placeholder="e.g., 100-500"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Data Volume per Device
        </label>
        <input
          type="text"
          value={formData.data_volume || ''}
          onChange={(e) => onChange('data_volume', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 1KB per minute, 10MB per hour"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Edge Processing Requirements
        </label>
        <textarea
          value={formData.edge_processing || ''}
          onChange={(e) => onChange('edge_processing', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="What processing needs to happen at the edge?"
        />
      </div>
    </div>
  );
}
