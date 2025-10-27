import React from 'react';
import { TrendingUp } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function ScalabilityPerformance({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Scalability & Performance</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Expected Growth
        </label>
        <textarea
          value={formData.expected_growth || ''}
          onChange={(e) => onChange('expected_growth', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Device growth projections, data volume increase over time, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Performance Requirements
        </label>
        <textarea
          value={formData.performance_requirements || ''}
          onChange={(e) => onChange('performance_requirements', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Throughput, response time, concurrent connections, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          High Availability Needs
        </label>
        <textarea
          value={formData.high_availability_needs || ''}
          onChange={(e) => onChange('high_availability_needs', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Uptime requirements, redundancy, failover, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Disaster Recovery
        </label>
        <textarea
          value={formData.disaster_recovery || ''}
          onChange={(e) => onChange('disaster_recovery', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Backup strategy, RTO/RPO requirements, etc."
        />
      </div>
    </div>
  );
}
