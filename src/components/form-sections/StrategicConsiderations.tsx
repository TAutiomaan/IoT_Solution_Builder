import type { BusinessCase } from '../../types/businessCase';

interface StrategicConsiderationsProps {
  formData: BusinessCase;
  updateField: (field: keyof BusinessCase, value: string) => void;
}

export function StrategicConsiderations({ formData, updateField }: StrategicConsiderationsProps) {
  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-3">Strategic Considerations</h3>
        <p className="text-sm text-gray-600 mb-4">Long-term planning, sustainability, and risk management</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Solution Lifetime & Device Lifetime
        </label>
        <input
          type="text"
          value={formData.solution_lifetime}
          onChange={(e) => updateField('solution_lifetime', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="How long must the solution operate?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Maintenance & Decommissioning Plan
        </label>
        <textarea
          value={formData.maintenance_plan}
          onChange={(e) => updateField('maintenance_plan', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Plan for maintenance, updates, and decommissioning..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Sustainability Goals
        </label>
        <input
          type="text"
          value={formData.sustainability_goals}
          onChange={(e) => updateField('sustainability_goals', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Low power, recyclability, carbon neutral..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Build vs Buy Strategy
        </label>
        <input
          type="text"
          value={formData.build_vs_buy}
          onChange={(e) => updateField('build_vs_buy', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Which parts will be custom vs off-the-shelf?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Platform Preferences
        </label>
        <input
          type="text"
          value={formData.platform_preferences}
          onChange={(e) => updateField('platform_preferences', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Preferred cloud or IoT platforms..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Vendor Lock-in Tolerance
        </label>
        <input
          type="text"
          value={formData.vendor_lockin_tolerance}
          onChange={(e) => updateField('vendor_lockin_tolerance', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Is vendor lock-in acceptable or should architecture be portable?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Data Access Rights
        </label>
        <input
          type="text"
          value={formData.data_access_rights}
          onChange={(e) => updateField('data_access_rights', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Who can access or monetize the data?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Analytics & ML Plan
        </label>
        <textarea
          value={formData.analytics_plan}
          onChange={(e) => updateField('analytics_plan', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Plan for analytics, dashboards, or machine learning..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Interoperability Needs
        </label>
        <input
          type="text"
          value={formData.interoperability_needs}
          onChange={(e) => updateField('interoperability_needs', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="e.g., Open standards, MQTT, OPC-UA..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Connectivity Failure Plan
        </label>
        <input
          type="text"
          value={formData.connectivity_failure_plan}
          onChange={(e) => updateField('connectivity_failure_plan', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="What happens if connectivity is lost?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Critical Failure Scenarios
        </label>
        <textarea
          value={formData.critical_failure_scenarios}
          onChange={(e) => updateField('critical_failure_scenarios', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="What are the critical failure scenarios?"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cybersecurity Incident Response
        </label>
        <textarea
          value={formData.incident_response}
          onChange={(e) => updateField('incident_response', e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={2}
          placeholder="Cybersecurity incident response plans..."
        />
      </div>
    </div>
  );
}
