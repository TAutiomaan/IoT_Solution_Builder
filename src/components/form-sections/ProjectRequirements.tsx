import type { BusinessCase } from '../../types/businessCase';

interface ProjectRequirementsProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function ProjectRequirements({ formData, updateField }: ProjectRequirementsProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Project Requirements</h3>
        <p className="text-sm text-gray-600 mb-4">Timeline, budget, team, and regulatory requirements</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Project Timeline
        </label>
        <input
          type="text"
          value={formData.project_timeline}
          onChange={(e) => updateField('project_timeline', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Target timeline for MVP, pilot, and full deployment..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Critical Milestones
        </label>
        <input
          type="text"
          value={formData.critical_milestones}
          onChange={(e) => updateField('critical_milestones', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Critical milestones or external dependencies..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Budget Details (CAPEX/OPEX)
        </label>
        <textarea
          value={formData.budget_details}
          onChange={(e) => updateField('budget_details', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Available budget breakdown..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Expected ROI / Payback Period
        </label>
        <input
          type="text"
          value={formData.expected_roi}
          onChange={(e) => updateField('expected_roi', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., 3-year payback, 200% ROI in 5 years..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cost Constraints
        </label>
        <input
          type="text"
          value={formData.cost_constraints}
          onChange={(e) => updateField('cost_constraints', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Cost constraints on devices, connectivity, or cloud services..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Solution Ownership
        </label>
        <input
          type="text"
          value={formData.solution_ownership}
          onChange={(e) => updateField('solution_ownership', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Who will own the solution after deployment?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Required Roles & Skills
        </label>
        <input
          type="text"
          value={formData.required_roles}
          onChange={(e) => updateField('required_roles', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Hardware, firmware, cloud, data analytics, UX..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Existing Vendors or Partners
        </label>
        <input
          type="text"
          value={formData.existing_vendors}
          onChange={(e) => updateField('existing_vendors', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Existing vendors or technology partners to align with..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Device Certifications Required
        </label>
        <input
          type="text"
          value={formData.device_certifications}
          onChange={(e) => updateField('device_certifications', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., CE, FCC, UL, ATEX..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Geographic Compliance Constraints
        </label>
        <input
          type="text"
          value={formData.geographic_compliance}
          onChange={(e) => updateField('geographic_compliance', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Data localization, telecom regulation..."
        />
      </div>
    </div>
  );
}
