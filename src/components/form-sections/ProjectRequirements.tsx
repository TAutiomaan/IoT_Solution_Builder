import React from 'react';
import { FileText } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function ProjectRequirements({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <FileText className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Project Requirements</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Use Case Description *
        </label>
        <textarea
          value={formData.use_case_description || ''}
          onChange={(e) => onChange('use_case_description', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="Describe your IoT use case in detail..."
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Expected Outcomes *
        </label>
        <textarea
          value={formData.expected_outcomes || ''}
          onChange={(e) => onChange('expected_outcomes', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="What specific outcomes do you expect?"
          required
        />
      </div>
    </div>
  );
}
