import React from 'react';
import { Cloud } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function CloudDataPlatform({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <Cloud className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Cloud & Data Platform</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Data Storage Needs
        </label>
        <textarea
          value={formData.data_storage_needs || ''}
          onChange={(e) => onChange('data_storage_needs', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Hot/cold storage, retention policies, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Analytics Requirements
        </label>
        <textarea
          value={formData.analytics_requirements || ''}
          onChange={(e) => onChange('analytics_requirements', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Real-time analytics, ML/AI needs, batch processing, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Integration with Existing Systems
        </label>
        <textarea
          value={formData.integration_systems || ''}
          onChange={(e) => onChange('integration_systems', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="ERP, CRM, SCADA, or other systems to integrate with"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Visualization & Reporting Needs
        </label>
        <textarea
          value={formData.visualization_needs || ''}
          onChange={(e) => onChange('visualization_needs', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Dashboards, reports, mobile apps, etc."
        />
      </div>
    </div>
  );
}
