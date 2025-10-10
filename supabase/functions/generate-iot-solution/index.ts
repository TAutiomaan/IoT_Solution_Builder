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

    const prompt = `You are an expert IoT architect. Analyze the following comprehensive business case and provide a detailed IoT solution recommendation.

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

Based on this comprehensive information, provide a detailed solution recommendation in the following JSON format:
{
  "architecture_summary": "High-level overview of the recommended architecture (3-4 paragraphs). Address the specific business context, operational requirements, and strategic considerations mentioned.",
  "technologies": [
    {
      "category": "Device Layer",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended based on the requirements"
    },
    {
      "category": "Connectivity",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Edge Computing",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Data Ingestion",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Data Storage",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Analytics & Processing",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Application Layer",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Security",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Device Management",
      "name": "Specific technology name",
      "purpose": "Why this technology is recommended"
    }
  ],
  "estimated_cost": "Detailed cost estimate with breakdown (CAPEX and OPEX if budget information provided)",
  "implementation_timeline": "Realistic timeline estimate with phases (align with any timeline constraints mentioned)",
  "full_recommendation": "Comprehensive explanation (5-8 paragraphs) covering: implementation approach, best practices, addressing specific concerns raised (security, scalability, sustainability), risk mitigation strategies, and success factors. Reference specific requirements and constraints mentioned in the business case."
}

Be specific with technology names (e.g., AWS IoT Core, Azure IoT Hub, Google Cloud IoT Core, MQTT, LoRaWAN, Sigfox, NB-IoT, InfluxDB, TimescaleDB, Apache Kafka, Grafana, etc.).

Tailor the recommendation to:
- The specific industry and use case
- The operational environment and constraints mentioned
- Any compliance or regulatory requirements stated
- Budget and timeline constraints
- Strategic considerations like sustainability, vendor lock-in tolerance, and data strategy
- Risk scenarios and contingency planning needs mentioned`;

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
            content: "You are an expert IoT solutions architect with 15+ years of experience across multiple industries. You have deep knowledge of IoT technologies, cloud platforms, edge computing, network protocols, security standards, and industry-specific requirements. You provide practical, production-ready, and cost-effective recommendations that address both technical and business requirements. You consider regulatory compliance, sustainability, risk management, and long-term strategic planning in your recommendations."
          },
          {
            role: "user",
            content: prompt
          }
        ],
        temperature: 0.7,
        response_format: { type: "json_object" }
      }),
    });

    if (!openAIResponse.ok) {
      const errorText = await openAIResponse.text();
      throw new Error(`OpenAI API error: ${errorText}`);
    }

    const openAIData = await openAIResponse.json();
    const recommendation = JSON.parse(openAIData.choices[0].message.content);

    const result = {
      recommendation: recommendation.full_recommendation || recommendation.recommendation || "No recommendation provided",
      technologies: recommendation.technologies || [],
      architecture_summary: recommendation.architecture_summary || "",
      estimated_cost: recommendation.estimated_cost || "",
      implementation_timeline: recommendation.implementation_timeline || "",
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
