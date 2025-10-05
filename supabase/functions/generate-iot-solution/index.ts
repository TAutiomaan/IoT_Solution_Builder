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

    const prompt = `You are an expert IoT architect. Analyze the following business case and provide a comprehensive IoT solution recommendation.

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

Provide a detailed solution recommendation in the following JSON format:
{
  "architecture_summary": "High-level overview of the recommended architecture (2-3 paragraphs)",
  "technologies": [
    {
      "category": "Device Layer",
      "name": "Technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Connectivity",
      "name": "Technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Data Ingestion",
      "name": "Technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Data Storage",
      "name": "Technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Analytics & Processing",
      "name": "Technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Application Layer",
      "name": "Technology name",
      "purpose": "Why this technology is recommended"
    },
    {
      "category": "Security",
      "name": "Technology name",
      "purpose": "Why this technology is recommended"
    }
  ],
  "estimated_cost": "Cost estimate with breakdown",
  "implementation_timeline": "Timeline estimate with phases",
  "full_recommendation": "Detailed explanation of the complete solution, implementation approach, best practices, and considerations (4-6 paragraphs)"
}

Be specific with technology names (e.g., AWS IoT Core, Azure IoT Hub, MQTT, LoRaWAN, InfluxDB, TimescaleDB, Apache Kafka, etc.). Tailor the recommendation to the specific industry and requirements.`;

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
            content: "You are an expert IoT solutions architect with deep knowledge of IoT technologies, cloud platforms, edge computing, and industry-specific requirements. Provide practical, production-ready recommendations."
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
