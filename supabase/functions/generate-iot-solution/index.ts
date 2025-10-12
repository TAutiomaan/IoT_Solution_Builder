import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface BusinessCaseRequest {
  title: string;
  industry: string;
  business_problem: string;
  scale: string;
  devices_count: string;
  data_volume: string;
  latency_requirements: string;
  budget_range?: string;
  security_requirements?: string;
  integration_needs?: string;
  geographic_scope?: string;
  [key: string]: string | undefined;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const businessCase: BusinessCaseRequest = await req.json();

    const openAIKey = Deno.env.get("OPENAI_API_KEY");
    if (!openAIKey) {
      throw new Error("OpenAI API key not configured");
    }

    const buildPromptSection = (title: string, fields: Record<string, string | undefined>) => {
      const nonEmptyFields = Object.entries(fields)
        .filter(([_, value]) => value && value.trim() !== '')
        .map(([key, value]) => `- ${key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}: ${value}`);

      return nonEmptyFields.length > 0 ? `\n${title}:\n${nonEmptyFields.join('\n')}` : '';
    };

    const prompt = `You are an expert IoT solutions architect. Analyze this comprehensive business case and provide 3 DISTINCT solution options with detailed comparison.

Business Case:
- Title: ${businessCase.title}
- Industry: ${businessCase.industry}
- Problem: ${businessCase.business_problem}
- Scale: ${businessCase.scale}
- Number of Devices: ${businessCase.devices_count}
- Data Volume: ${businessCase.data_volume}
- Latency Requirements: ${businessCase.latency_requirements}
${businessCase.budget_range ? `- Budget Range: ${businessCase.budget_range}` : ''}
${businessCase.security_requirements ? `- Security Requirements: ${businessCase.security_requirements}` : ''}
${businessCase.integration_needs ? `- Integration Needs: ${businessCase.integration_needs}` : ''}
${businessCase.geographic_scope ? `- Geographic Scope: ${businessCase.geographic_scope}` : ''}
${buildPromptSection('Business Understanding', {
  'Business Outcomes': businessCase.business_outcomes,
  'Stakeholders': businessCase.stakeholders,
  'Success Metrics': businessCase.success_metrics,
  'Current Process': businessCase.current_process,
  'Market Drivers': businessCase.market_drivers,
  'Expected Benefits': businessCase.expected_benefits,
})}
${buildPromptSection('Operational Context', {
  'Operating Environment': businessCase.operating_environment,
  'Scale Details': businessCase.scale_details,
  'Environmental Conditions': businessCase.environmental_conditions,
  'Asset Mobility': businessCase.asset_mobility,
  'Maintenance Ownership': businessCase.maintenance_ownership,
})}
${buildPromptSection('Devices & Edge', {
  'Device Types': businessCase.device_types,
  'Data Collection Specs': businessCase.data_collection_specs,
  'Transmission Frequency': businessCase.transmission_frequency,
  'Real-time Needs': businessCase.real_time_needs,
  'Edge Intelligence': businessCase.edge_intelligence,
  'Power Constraints': businessCase.power_constraints,
  'Device Management': businessCase.device_management,
})}
${buildPromptSection('Connectivity', {
  'Network Technologies': businessCase.network_technologies,
  'Coverage Limitations': businessCase.coverage_limitations,
  'Data per Device': businessCase.data_per_device,
  'Throughput Needs': businessCase.throughput_needs,
  'Connectivity Scope': businessCase.connectivity_scope,
})}
${buildPromptSection('Cloud & Data Platform', {
  'Data Location': businessCase.data_location,
  'Analytics Capabilities': businessCase.analytics_capabilities,
  'Enterprise Integration': businessCase.enterprise_integration,
  'API Requirements': businessCase.api_requirements,
  'Data Retention': businessCase.data_retention,
})}
${buildPromptSection('Security & Compliance', {
  'Compliance Standards': businessCase.compliance_standards,
  'Authentication Encryption': businessCase.authentication_encryption,
  'Data Ownership': businessCase.data_ownership,
  'Security Risks': businessCase.security_risks,
})}
${buildPromptSection('Scalability & Performance', {
  'Device Growth': businessCase.device_growth,
  'Data Growth Rate': businessCase.data_growth_rate,
  'Firmware Management': businessCase.firmware_management,
})}
${buildPromptSection('Project Requirements', {
  'Project Timeline': businessCase.project_timeline,
  'Critical Milestones': businessCase.critical_milestones,
  'Budget Details': businessCase.budget_details,
  'Expected ROI': businessCase.expected_roi,
  'Cost Constraints': businessCase.cost_constraints,
  'Solution Ownership': businessCase.solution_ownership,
  'Required Roles': businessCase.required_roles,
  'Existing Vendors': businessCase.existing_vendors,
  'Device Certifications': businessCase.device_certifications,
  'Geographic Compliance': businessCase.geographic_compliance,
})}
${buildPromptSection('Strategic Considerations', {
  'Solution Lifetime': businessCase.solution_lifetime,
  'Maintenance Plan': businessCase.maintenance_plan,
  'Sustainability Goals': businessCase.sustainability_goals,
  'Build vs Buy': businessCase.build_vs_buy,
  'Platform Preferences': businessCase.platform_preferences,
  'Vendor Lockin Tolerance': businessCase.vendor_lockin_tolerance,
  'Data Access Rights': businessCase.data_access_rights,
  'Analytics Plan': businessCase.analytics_plan,
  'Interoperability Needs': businessCase.interoperability_needs,
  'Connectivity Failure Plan': businessCase.connectivity_failure_plan,
  'Critical Failure Scenarios': businessCase.critical_failure_scenarios,
  'Incident Response': businessCase.incident_response,
})}

Provide 3 DISTINCT solution options in this JSON format:
{
  "architecture_summary": "High-level overview comparing all 3 approaches (2-3 paragraphs)",
  "solution_options": [
    {
      "name": "Solution name (e.g., Enterprise Cloud-Native Solution, Hybrid Edge-Cloud Solution, Cost-Optimized Solution)",
      "description": "2-sentence description of this approach",
      "architecture_approach": "Detailed architecture description (2-3 paragraphs)",
      "technologies": {
        "sensors": [{"name": "Specific sensor/device", "specs": "Key specifications", "rationale": "Why chosen"}],
        "connectivity": [{"name": "Network tech", "protocol": "Protocol (MQTT, CoAP, etc.)", "rationale": "Why chosen"}],
        "edge_computing": [{"name": "Edge platform/gateway", "capabilities": "What it does", "rationale": "Why needed"}],
        "cloud_platform": [{"name": "Cloud provider/service", "services": "Specific services used", "rationale": "Why chosen"}],
        "data_storage": [{"name": "Database/storage", "type": "Time-series/NoSQL/etc.", "rationale": "Why chosen"}],
        "data_processing": [{"name": "Processing engine", "use_case": "What it handles", "rationale": "Why chosen"}],
        "analytics_ml": [{"name": "Analytics tool/platform", "capabilities": "What it enables", "rationale": "Why chosen"}],
        "security": [{"name": "Security solution", "coverage": "What it secures", "rationale": "Why necessary"}],
        "device_management": [{"name": "MDM/DM platform", "features": "Key features", "rationale": "Why needed"}]
      },
      "pros": ["Advantage 1", "Advantage 2", "Advantage 3"],
      "cons": ["Limitation 1", "Limitation 2", "Limitation 3"],
      "cost_breakdown": {
        "initial_capex": "Hardware, licenses, setup costs",
        "annual_opex": "Cloud, connectivity, maintenance costs",
        "total_3_year_tco": "Total cost of ownership estimate"
      },
      "implementation_complexity": "Low/Medium/High with explanation",
      "deployment_timeline": "Realistic timeline with phases",
      "best_for": "Ideal use cases and requirements"
    }
  ],
  "comparison_matrix": {
    "sensor_layer": "Comparison of sensor choices across solutions",
    "connectivity_layer": "Comparison of network/protocol choices",
    "edge_layer": "Comparison of edge computing approaches",
    "cloud_platform": "Comparison of cloud platform choices",
    "data_storage": "Comparison of storage solutions",
    "data_processing": "Comparison of processing approaches",
    "analytics": "Comparison of analytics capabilities",
    "security": "Comparison of security implementations",
    "scalability": "Comparison of scalability approaches",
    "cost": "Cost comparison with breakdown",
    "complexity": "Implementation complexity comparison",
    "vendor_lockin": "Vendor lock-in risk comparison"
  },
  "recommendation": "Which solution to choose and why (3-4 paragraphs addressing specific requirements)"
}

IMPORTANT:
- Make solutions DISTINCT (e.g., different cloud providers, different approaches like cloud-heavy vs edge-heavy)
- Use REAL technology names (AWS IoT Core, Azure IoT Hub, LoRaWAN, MQTT, InfluxDB, Kafka, etc.)
- Tailor to the specific industry, requirements, and constraints
- Provide realistic cost estimates
- Consider all stated requirements (budget, timeline, compliance, sustainability, etc.)`;

    const openAIResponse = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${openAIKey}`,
      },
      body: JSON.stringify({
        model: "gpt-4o",
        messages: [
          {
            role: "system",
            content: "You are an expert IoT solutions architect with 15+ years of experience. You provide multiple distinct solution options with detailed technology comparisons. You use real, specific technology names and provide practical, production-ready recommendations. You consider cost, complexity, scalability, security, and business requirements in your recommendations."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        max_tokens: 4000,
        response_format: { type: "json_object" }
      }),
    });

    if (!openAIResponse.ok) {
      const errorText = await openAIResponse.text();
      throw new Error(`OpenAI API error: ${errorText}`);
    }

    const openAIData = await openAIResponse.json();
    const aiResponse = JSON.parse(openAIData.choices[0].message.content);

    const result = {
      recommendation: aiResponse.recommendation || aiResponse.full_recommendation || "No recommendation provided",
      technologies: aiResponse.solution_options?.[0]?.technologies ?
        Object.entries(aiResponse.solution_options[0].technologies).flatMap(([category, items]: [string, any]) =>
          (Array.isArray(items) ? items : [items]).map((item: any) => ({
            category,
            name: item.name || 'N/A',
            purpose: item.rationale || item.specs || 'N/A'
          }))
        ) : [],
      architecture_summary: aiResponse.architecture_summary || "",
      estimated_cost: aiResponse.solution_options?.[0]?.cost_breakdown ?
        JSON.stringify(aiResponse.solution_options[0].cost_breakdown) : "",
      implementation_timeline: aiResponse.solution_options?.[0]?.deployment_timeline || "",
      solution_options: aiResponse.solution_options || [],
      comparison_summary: aiResponse.comparison_matrix ? JSON.stringify(aiResponse.comparison_matrix) : ""
    };

    return new Response(
      JSON.stringify(result),
      {
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({ error: error.message || "An error occurred" }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
