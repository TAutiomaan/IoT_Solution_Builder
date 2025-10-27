import React from 'react';
import { MapPin } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function OperationalContext({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <MapPin className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Operational Context</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Deployment Locations
        </label>
        <textarea
          value={formData.deployment_locations || ''}
          onChange={(e) => onChange('deployment_locations', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Indoor/outdoor, geographic distribution, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Environmental Conditions
        </label>
        <textarea
          value={formData.environmental_conditions || ''}
          onChange={(e) => onChange('environmental_conditions', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Temperature range, humidity, dust, vibration, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Maintenance Approach
        </label>
        <textarea
          value={formData.maintenance_approach || ''}
          onChange={(e) => onChange('maintenance_approach', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Remote monitoring, on-site maintenance, predictive maintenance, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Support Requirements
        </label>
        <textarea
          value={formData.support_requirements || ''}
          onChange={(e) => onChange('support_requirements', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="24/7 support, SLA requirements, incident response, etc."
        />
      </div>
    </div>
  );
}
