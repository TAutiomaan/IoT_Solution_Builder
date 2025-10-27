import React from 'react';
import { Shield } from 'lucide-react';
import type { BusinessCase } from '../../types/businessCase';

interface Props {
  formData: Partial<BusinessCase>;
  onChange: (field: keyof BusinessCase, value: string) => void;
}

export default function SecurityCompliance({ formData, onChange }: Props) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
      <div className="flex items-center mb-4">
        <Shield className="w-6 h-6 text-blue-600 mr-2" />
        <h2 className="text-2xl font-semibold text-slate-800">Security & Compliance</h2>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Compliance Requirements
        </label>
        <textarea
          value={formData.compliance_requirements || ''}
          onChange={(e) => onChange('compliance_requirements', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="GDPR, HIPAA, ISO 27001, industry-specific regulations, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Data Privacy Needs
        </label>
        <textarea
          value={formData.data_privacy_needs || ''}
          onChange={(e) => onChange('data_privacy_needs', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={3}
          placeholder="PII handling, data anonymization, consent management, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Authentication Requirements
        </label>
        <textarea
          value={formData.authentication_requirements || ''}
          onChange={(e) => onChange('authentication_requirements', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Device authentication, user access control, etc."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-700 mb-2">
          Encryption Needs
        </label>
        <textarea
          value={formData.encryption_needs || ''}
          onChange={(e) => onChange('encryption_needs', e.target.value)}
          className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Data in transit, at rest, end-to-end encryption, etc."
        />
      </div>
    </div>
  );
}
