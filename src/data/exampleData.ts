import type { BusinessCase } from '../types/businessCase';

export const exampleCases: Partial<BusinessCase>[] = [
  {
    project_name: "Smart Manufacturing Floor",
    industry: "Manufacturing",
    business_objectives: "Reduce downtime by 30% and improve equipment efficiency",
    use_case_description: "Real-time monitoring of production equipment with predictive maintenance",
    sensor_types: "Temperature, Vibration, Pressure sensors",
    device_count: "500-1000",
    connectivity_type: "Industrial Ethernet, 5G",
    budget_range: "$500K - $1M"
  },
  {
    project_name: "Connected Fleet Management",
    industry: "Transportation & Logistics",
    business_objectives: "Optimize route planning and reduce fuel costs by 20%",
    use_case_description: "Track vehicle location, performance metrics, and driver behavior",
    sensor_types: "GPS, Fuel sensors, Engine diagnostics",
    device_count: "100-500",
    connectivity_type: "Cellular (4G/5G)",
    budget_range: "$250K - $500K"
  },
  {
    project_name: "Smart Building Automation",
    industry: "Real Estate & Facilities",
    business_objectives: "Reduce energy consumption by 25% and improve tenant comfort",
    use_case_description: "Automated HVAC, lighting, and security systems across commercial properties",
    sensor_types: "Occupancy, Temperature, Light, Air quality sensors",
    device_count: "1000+",
    connectivity_type: "Wi-Fi, Zigbee, BLE",
    budget_range: "$1M+"
  },
  {
    project_name: "Enterprise Smart Building - Complete System",
    industry: "Real Estate & Facilities",
    business_objectives: "Achieve 30% energy savings, improve occupant comfort by 40%, reduce operational costs by 25%, and achieve LEED Platinum certification",
    use_case_description: "Comprehensive building automation system for a 25-story Class A office building with intelligent HVAC, lighting, access control, energy management, and predictive maintenance",

    business_outcomes: "Reduce energy costs by $500K annually, improve tenant satisfaction scores from 7.2 to 9.0, decrease maintenance response time from 4 hours to 30 minutes, achieve carbon neutrality by 2026",
    stakeholders: "Building Owner, Property Management Team, Facility Operations, Tenants (15 companies, 2000+ employees), IT Department, Sustainability Officer, Security Team",
    success_metrics: "Energy consumption kWh per sq ft, Tenant satisfaction NPS, HVAC system uptime %, Average response time to issues, Indoor air quality scores (CO2, VOC levels), Cost per square foot reduction",
    current_process: "Manual HVAC scheduling with building-wide zones, manual light switches, separate access control system, reactive maintenance with quarterly inspections, no real-time energy monitoring",
    market_drivers: "Rising energy costs ($2.5M annually), tenant demands for sustainability, smart building premium (15% higher rent), regulatory compliance (ASHRAE 90.1, Title 24), aging HVAC systems (15 years old)",
    expected_benefits: "30% energy reduction ($750K savings), 25% maintenance cost reduction, 15% rent premium, improved ESG ratings, predictive equipment lifecycle management, real-time anomaly detection",

    operating_environment: "Urban Class A commercial office building, 25 floors, 450,000 sq ft, mixed-use (offices, retail, conference facilities, underground parking), 24/7 operation with variable occupancy",
    scale_details: "50 HVAC zones, 150 VAV boxes, 8 chillers, 6 boilers, 2500 lighting fixtures, 120 access points, 80 security cameras, 15 elevators, 6-level parking garage",
    environmental_conditions: "Indoor controlled environment (68-74°F), rooftop equipment exposed to weather (-10°F to 100°F), high humidity in basement levels, EMI from elevator motors and transformers",
    asset_mobility: "All assets are fixed installations, some sensors in ceiling/wall cavities requiring wireless connectivity, equipment rooms have wired infrastructure available",
    maintenance_ownership: "In-house facilities team (8 technicians) for day-to-day, HVAC vendor for quarterly maintenance, elevator company for monthly service, cleaning service contracts",

    device_types: "BACnet HVAC controllers, smart thermostats, occupancy sensors (PIR/ultrasonic), CO2 sensors, VOC sensors, particulate matter sensors, smart lighting fixtures with DALI drivers, door access readers (NFC/BLE), IP cameras, smart meters (electricity, gas, water), leak detection sensors, vibration sensors on motors",
    data_collection_specs: "HVAC: Temperature ±0.5°F, humidity ±2%, pressure ±0.1 PSI, flow rates. Lighting: lux levels, power consumption. Occupancy: presence/count detection. Air quality: CO2 (400-2000 ppm), VOC (ppb), PM2.5/PM10. Energy: 3-phase power monitoring, 1% accuracy",
    transmission_frequency: "Critical systems (HVAC, access control): Every 1-5 minutes. Environmental sensors: Every 10-15 minutes. Energy meters: Every 15 minutes. Cameras: Continuous streaming with motion-triggered recording. Alerts: Real-time push",
    real_time_needs: "Critical: Access control (immediate), HVAC alerts (30 seconds), Security cameras (live). Important: Occupancy patterns (5 min), Air quality anomalies (5 min). Routine: Energy consumption trends (15 min), Maintenance predictions (hourly)",
    edge_intelligence: "Local processing for: Privacy-preserving occupancy counting (no personal data), HVAC optimization algorithms, Lighting automation logic, Camera-based people counting, Predictive maintenance algorithms, Fail-over logic during internet outages",
    power_constraints: "Most sensors POE-powered (802.3af/at), wireless sensors battery-powered (2-5 year target), HVAC controllers wired 24VAC, critical systems on UPS backup, solar panels on roof for supplemental power",
    device_management: "Need centralized provisioning, OTA firmware updates for 2500+ devices, certificate-based authentication, device health monitoring, automated alerts for offline devices, bulk configuration management, integration with BMS",

    network_technologies: "Primary: Enterprise WiFi 6 (802.11ax) for admin/monitoring. Secondary: BACnet/IP over wired Ethernet for HVAC. Wireless: Zigbee mesh for sensors, BLE for access control. Backup: 4G LTE failover for critical systems",
    coverage_limitations: "Concrete/steel structure causes signal attenuation, elevator shafts are dead zones, basement parking has poor cellular reception, need 200+ access points for full coverage, interference from neighboring buildings",
    data_per_device: "HVAC controllers: 1-5 KB/min, Occupancy sensors: 0.1 KB/min, Cameras: 2-8 Mbps stream, Smart meters: 2 KB/15min, Access logs: 0.5 KB/event, Total: ~500 GB/month",
    throughput_needs: "Peak: 8am-9am arrival (1000+ access events/hour, all HVAC zones active). Normal: 100-500 events/minute. Cameras: 50 streams × 4 Mbps = 200 Mbps. Total bandwidth: 500 Mbps peak, 150 Mbps average",
    connectivity_scope: "Local: All devices within building connect to on-premise gateways. Cloud: Gateways relay to cloud for analytics, remote monitoring, and long-term storage. Hybrid architecture with local fail-over capability",

    data_location: "Hot data (7 days): On-premise time-series database for real-time dashboards. Warm data (90 days): Cloud storage for analytics. Cold data (7 years): Archive for compliance. PII data: On-premise only",
    analytics_capabilities: "Real-time: Anomaly detection, occupancy patterns, energy consumption monitoring. Historical: Predictive maintenance (bearing failures, filter changes), comfort optimization, energy forecasting, ROI analysis, What-if scenario modeling",
    enterprise_integration: "Must integrate with: Building Management System (Honeywell EBI), Work Order System (ServiceNow), Active Directory (SSO), Financial system (SAP for cost allocation), Visitor management, Conference room booking system",
    api_requirements: "RESTful APIs for tenant portals (room booking, comfort control), Mobile apps (iOS/Android) for facility staff, Third-party integrations (utility providers, weather services), Real-time WebSocket for dashboards, GraphQL for flexible queries",
    data_retention: "Raw sensor data: 90 days. Aggregated hourly data: 2 years. Daily summaries: 7 years (compliance). Security footage: 30 days. Access logs: 2 years. Maintenance records: Equipment lifetime",

    compliance_standards: "ASHRAE 90.1-2019 (energy), Title 24 California Energy Code, NIST Cybersecurity Framework, ISO 27001 (information security), GDPR (EU tenant data), ADA (accessibility), LEED v4 Platinum certification, WELL Building Standard",
    authentication_encryption: "Certificate-based device auth (X.509), TLS 1.3 for all communications, AES-256 encryption at rest, OAuth 2.0 + MFA for user access, Role-based access control (RBAC), Network segmentation (VLANs), Zero-trust architecture",
    data_ownership: "Building owner owns all sensor and operational data, Tenant comfort preferences stored separately with consent, Personal data (access logs, camera footage) subject to privacy policy and GDPR, No selling of data to third parties",
    security_risks: "High priority: Ransomware attacks on building controls, unauthorized access to physical spaces, data breaches of tenant information. Medium: IoT device vulnerabilities, insider threats, DDoS attacks on building network",

    device_growth: "Phase 1 (Year 1): Core HVAC and lighting (1500 devices). Phase 2 (Year 2): Add all sensors and access control (2500 devices). Phase 3 (Year 3+): Expand to 3 additional buildings in portfolio (8000+ devices total). 5-year plan: 15 buildings, 30,000+ devices",
    data_growth_rate: "Starting: 500 GB/month. Year 2: 1.5 TB/month. Year 5: 10 TB/month (multi-building). Archive: 500 TB over 7 years. Need elastic storage and processing capability",
    firmware_management: "Staged rollouts (test lab → single floor → full building), automated backup/rollback, scheduled maintenance windows (2am-5am), critical path redundancy, version control, vendor coordination (10+ vendors)",

    project_timeline: "18 months total - Planning & Design: 3 months, Infrastructure upgrade: 4 months, Sensor deployment: 6 months (floor-by-floor), System integration & testing: 3 months, Training & handoff: 2 months",
    critical_milestones: "Month 3: Infrastructure ready. Month 7: First 10 floors operational. Month 12: All sensors deployed. Month 15: Full integration complete. Month 18: LEED certification audit",
    budget_details: "Hardware (sensors, controllers, gateways): $2.5M. Infrastructure (network, cabling, POE switches): $1.2M. Software licenses (BMS, analytics platform): $500K. Cloud services: $150K/year. Integration & installation: $1.5M. Training: $100K. Contingency (15%): $900K. Total: $6.75M CAPEX + $450K annual OPEX",
    expected_roi: "Annual savings: $750K energy + $200K maintenance + $150K insurance discount = $1.1M. Rent premium (15% on 20% of space): $400K. Total: $1.5M annual benefit. Payback: 4.5 years. 10-year NPV: $8.2M",
    cost_constraints: "Must stay within $7M capital budget, require phased payments tied to milestones, OPEX must be offset by savings within 2 years, finance approval requires <5 year payback",
    solution_ownership: "Hybrid model: Internal IT team (network, cybersecurity, user management), Facilities team (daily operations, device management), Managed services partner (24/7 NOC, advanced analytics, predictive maintenance), Vendor support contracts (HVAC, elevators)",
    required_roles: "Project Manager, IoT Solutions Architect, Network Engineer, Controls Engineer (3x), Data Engineer, Cybersecurity Specialist, Integration Developer (2x), BMS Operator Training (8 staff), Change Management Lead",
    existing_vendors: "HVAC: Honeywell (15-year relationship), Security: Avigilon cameras + Lenel access control, Elevators: Otis (service contract), Network: Cisco infrastructure, BMS: Honeywell EBI R500, Want vendor-agnostic IoT platform to avoid lock-in",
    device_certifications: "All devices must be: UL listed, FCC certified, BACnet certified (HVAC), EnOcean Alliance (if wireless), DALI certified (lighting), Cybersecurity: IEC 62443 compliant",
    geographic_compliance: "San Francisco, California - Title 24 energy code, SF Building Code Chapter 13C (energy efficiency), Bay Area Air Quality Management District (BAAQMD), California Privacy Rights Act (CPRA)",

    solution_lifetime: "15 years planned operational life with technology refresh every 5-7 years (sensors), gateways/network every 5 years, cloud platform every 3-5 years, maintain backward compatibility",
    maintenance_plan: "Preventive: Quarterly sensor calibration, annual network audits, monthly security patches. Predictive: ML-driven HVAC component replacement, filter change optimization. Support: 24/7 NOC, 4-hour on-site response SLA",
    sustainability_goals: "Achieve LEED Platinum, 30% energy reduction vs baseline, 50% reduction in water usage, carbon neutrality by 2026, 90% waste diversion, renewable energy for 40% of consumption, quarterly ESG reporting",
    build_vs_buy: "Prefer buy for hardware and core platforms, custom integration layer for BMS and enterprise systems, use open-source where possible (MQTT broker, time-series DB), build proprietary ML models for predictive maintenance",
    platform_preferences: "Cloud: AWS or Azure (enterprise agreement exists), Edge: Open-source (Eclipse IoT, Node-RED) or vendor-neutral, Protocols: BACnet (HVAC standard), MQTT (IoT), REST APIs, Avoid: Single-vendor lock-in, proprietary protocols",
    vendor_lockin_tolerance: "Low tolerance - require open protocols, data portability, interoperability. Will pay 20% premium for open standards. Need exit strategy and data export capabilities",
    data_access_rights: "Facilities team: Full access. Tenants: Their space only (comfort control, energy usage). Management: Reports and analytics. Vendors: Limited scope during service. Auditors: Read-only for compliance",
    analytics_plan: "Phase 1: Descriptive (dashboards, reports). Phase 2: Diagnostic (root cause analysis). Phase 3: Predictive (equipment failures, energy forecasting). Phase 4: Prescriptive (automated optimization recommendations)",
    interoperability_needs: "Critical: Must integrate with existing Honeywell BMS, Lenel access control, Cisco network. Important: Weather APIs, utility provider APIs, mobile apps. Future: Smart city initiatives, EV charging integration, grid services (demand response)",
    connectivity_failure_plan: "Local autonomy: Edge gateways cache 7 days of data and run control logic locally. Automatic fail-over: 4G LTE backup for critical systems. Graceful degradation: HVAC continues on schedules, access control works offline with cached credentials, store-and-forward for analytics data",
    critical_failure_scenarios: "Power outage: UPS for 4 hours + generator backup. Network failure: Local control continues, 4G backup for alerts. Cyberattack: Network segmentation isolates compromised zones. Sensor failure: Redundant sensors in critical zones. Gateway failure: Mesh networking routes around failures",
    incident_response: "Automated: Immediate alerts for critical issues (fire, security breach). Escalation: 15 min → facilities team, 1 hour → vendor, 4 hours → executive. Playbooks for: cyberattacks, system outages, environmental hazards. Quarterly DR drills",

    sensor_types: "Occupancy (PIR), Temperature, Humidity, CO2, VOC, Particulate matter, Light level, Energy meters, Vibration, Water leak, Door/window contacts, Smart thermostats, IP cameras",
    device_count: "2500+",
    connectivity_type: "WiFi 6, BACnet/IP, Zigbee, BLE, 4G LTE backup",
    budget_range: "$6-7M"
  }
];

export const fieldSuggestions = {
  industry: [
    "Manufacturing",
    "Healthcare",
    "Transportation & Logistics",
    "Energy & Utilities",
    "Agriculture",
    "Retail",
    "Smart Cities",
    "Real Estate & Facilities"
  ],
  sensorTypes: [
    "Temperature sensors",
    "Pressure sensors",
    "Vibration sensors",
    "Motion/Occupancy sensors",
    "GPS/Location trackers",
    "Environmental sensors (humidity, air quality)",
    "Camera systems",
    "Energy meters"
  ],
  deviceCount: [
    "1-50",
    "50-100",
    "100-500",
    "500-1000",
    "1000+"
  ],
  connectivityType: [
    "Wi-Fi",
    "Cellular (4G/5G)",
    "LoRaWAN",
    "Zigbee",
    "Bluetooth/BLE",
    "Industrial Ethernet",
    "Satellite"
  ],
  budgetRange: [
    "Under $100K",
    "$100K - $250K",
    "$250K - $500K",
    "$500K - $1M",
    "$1M+"
  ]
};
