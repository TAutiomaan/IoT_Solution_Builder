import React from 'react';
import { Building2 } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';
import FieldSuggestions from '../FieldSuggestions';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function BusinessUnderstanding({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <Building2 className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Business Understanding</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Project Name *
        </label>
        <input
          type="text"
          value={formData.project_name || ''}
          onChange={(e) => onChange('project_name', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Smart Factory Initiative"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Industry *
        </label>
        <FieldSuggestions
          field="industry"
          value={formData.industry || ''}
          onChange={(value) => onChange('industry', value)}
          placeholder="e.g., Manufacturing"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Business Objectives *
        </label>
        <textarea
          value={formData.business_objectives || ''}
          onChange={(e) => onChange('business_objectives', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="What are the primary business goals?"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Key Stakeholders
        </label>
        <textarea
          value={formData.key_stakeholders || ''}
          onChange={(e) => onChange('key_stakeholders', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Who are the main stakeholders and decision-makers?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Success Metrics
        </label>
        <textarea
          value={formData.success_metrics || ''}
          onChange={(e) => onChange('success_metrics', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="How will you measure project success?"
        />
      </div>
    </div>
  );
}
