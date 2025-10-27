import React from 'react';
import { Target } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';
import FieldSuggestions from '../FieldSuggestions';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function StrategicConsiderations({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <Target className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Strategic Considerations</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Budget Range *
        </label>
        <FieldSuggestions
          field="budgetRange"
          value={formData.budget_range || ''}
          onChange={(value) => onChange('budget_range', value)}
          placeholder="e.g., $250K - $500K"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Timeline
        </label>
        <input
          type="text"
          value={formData.timeline || ''}
          onChange={(e) => onChange('timeline', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 6 months for MVP, 12 months for full deployment"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Existing Infrastructure
        </label>
        <textarea
          value={formData.existing_infrastructure || ''}
          onChange={(e) => onChange('existing_infrastructure', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="Current systems, cloud providers, network infrastructure, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Vendor Preferences
        </label>
        <textarea
          value={formData.vendor_preferences || ''}
          onChange={(e) => onChange('vendor_preferences', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Preferred cloud providers, technology partners, open source vs. commercial, etc."
        />
      </div>
    </div>
  );
}
