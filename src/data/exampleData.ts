import type { BusinessCase } from '../types/businessCase';

export const exampleData: BusinessCase = {
  title: 'Smart Factory Predictive Maintenance System',
  industry: 'Manufacturing',
  business_problem: 'Our manufacturing facility experiences frequent unplanned downtime due to equipment failures, resulting in lost production time and high maintenance costs. We need a predictive maintenance solution to monitor critical machinery in real-time and predict failures before they occur, reducing downtime by 40% and maintenance costs by 25%.',
  scale: 'Medium (100-1000 devices)',
  devices_count: '500 sensors (vibration, temperature, pressure), 50 gateway devices',
  data_volume: 'Medium (1-100 GB/day)',
  latency_requirements: 'Near real-time (< 1s)',
  budget_range: '$200K - $500K',
  security_requirements: 'ISO 27001 compliance, encrypted data transmission, secure device authentication',
  integration_needs: 'SAP ERP integration, existing SCADA system, maintenance management software',
  geographic_scope: 'Single location - 200,000 sq ft manufacturing facility',

  business_outcomes: 'Reduce unplanned downtime by 40%, decrease maintenance costs by 25%, extend equipment lifespan by 15%, improve OEE (Overall Equipment Effectiveness) from 65% to 85%',
  stakeholders: 'Operations Manager, Maintenance Team, Plant Manager, IT Director, Production Line Supervisors',
  success_metrics: 'Mean Time Between Failures (MTBF) increase, reduction in emergency maintenance calls, equipment uptime percentage, cost savings from prevented failures',
  current_process: 'Currently using time-based preventive maintenance schedules. Technicians manually inspect equipment monthly. No real-time monitoring. High rate of unexpected breakdowns during production runs.',
  market_drivers: 'Industry 4.0 transformation initiative, competitive pressure to improve efficiency, rising labor costs for reactive maintenance',
  expected_benefits: 'Short-term: Immediate visibility into equipment health, reduced emergency repairs. Long-term: Optimized maintenance schedules, extended equipment life, data-driven capital planning',

  operating_environment: 'Industrial factory floor with CNC machines, robotic assembly lines, hydraulic presses, and conveyor systems. Temperature range 15-35°C, some dusty conditions',
  scale_details: '25 critical production machines, 3 production lines, 50,000 sq ft main production floor, 2 warehouses',
  environmental_conditions: 'Temperature: 15-35°C, humidity 40-70%, electrical noise from heavy machinery, some areas with metal shielding affecting wireless signals',
  asset_mobility: 'Fixed equipment - machines are stationary. Some mobile maintenance tablets for technicians',
  maintenance_ownership: 'In-house maintenance team (12 technicians), with external support contract for specialized equipment',

  device_types: 'Vibration sensors (accelerometers), temperature sensors (thermocouples, RTDs), pressure transducers, current sensors, acoustic sensors for bearing monitoring',
  data_collection_specs: 'Vibration: 10kHz sampling rate, Temperature: 1Hz, Pressure: 10Hz, Current: 1Hz. All with 16-bit precision',
  transmission_frequency: 'Continuous streaming for critical parameters, 1-second aggregated data for normal monitoring',
  real_time_needs: 'Alert generation within 1 second for critical threshold violations, 5-minute trend analysis for predictive algorithms',
  edge_intelligence: 'Local anomaly detection, FFT analysis for vibration data, threshold monitoring, data aggregation before cloud transmission',
  power_constraints: 'Most sensors powered from mains via PoE or 24V industrial power. Some wireless sensors use industrial batteries (3-5 year life)',
  device_management: 'Remote configuration, OTA firmware updates, automatic device registration, health monitoring, certificate-based authentication',

  network_technologies: 'Industrial Ethernet (existing backbone), Wi-Fi 6 for office areas, cellular LTE backup, considering industrial 5G for future expansion',
  coverage_limitations: 'Some metal enclosures block wireless signals, electrical interference in high-power areas, 200m maximum distance from network edge',
  data_per_device: 'Average 100KB per device per day (compressed), peak 1MB for high-frequency vibration analysis',
  throughput_needs: 'Aggregate 50Mbps peak, 10Mbps sustained, 99.5% uptime required, <100ms latency for alerts',
  connectivity_scope: 'Single site, local processing, cloud backup and analytics',

  data_location: 'Hybrid - edge processing on-premises, cloud for long-term storage and advanced analytics',
  analytics_capabilities: 'Real-time anomaly detection, predictive maintenance ML models (RUL estimation), trend analysis, root cause analysis, digital twin simulations',
  enterprise_integration: 'SAP PM module for work orders, Siemens SCADA for production data, SharePoint for documentation, Power BI for reporting',
  api_requirements: 'REST APIs for ERP integration, OPC-UA for SCADA connectivity, MQTT for device communication, webhooks for alerting',
  data_retention: 'Raw data: 90 days hot storage, Aggregated data: 7 years, Alerts and events: 10 years',

  compliance_standards: 'ISO 27001 for information security, IEC 62443 for industrial cybersecurity, GDPR for employee data',
  authentication_encryption: 'X.509 certificates for devices, TLS 1.3 for data in transit, AES-256 for data at rest, multi-factor authentication for users',
  data_ownership: 'Company owns all operational data, vendor has no data access, employee data protected per GDPR',
  security_risks: 'Potential production shutdown if systems compromised, intellectual property theft, safety risks if actuators controlled by attackers',

  device_growth: 'Starting with 500 sensors on critical equipment, expanding to 2000 sensors across all machinery within 3 years',
  data_growth_rate: 'Expected 150% growth in first 2 years as sensor density increases and sampling rates improve',
  firmware_management: 'Staged rollouts with A/B testing, automatic rollback on failures, version tracking, scheduled maintenance windows for updates',

  project_timeline: 'Phase 1 (Months 1-3): Pilot on 5 machines, Phase 2 (Months 4-6): Deploy to one production line, Phase 3 (Months 7-12): Full facility rollout',
  critical_milestones: 'Pilot results presentation at Month 3, Line 1 deployment before summer shutdown, full deployment before year-end audit',
  budget_details: 'CAPEX: $180K (sensors, gateways, edge servers), OPEX: $45K/year (connectivity, cloud services, licenses)',
  expected_roi: '18-month payback period based on reduced downtime and maintenance savings. 5-year NPV of $1.2M',
  cost_constraints: 'Sensor cost must be under $100/unit, prefer open-source analytics tools, maximize use of existing infrastructure',

  solution_ownership: 'Operations team owns day-to-day operations, IT team manages infrastructure and security, maintenance team consumes insights',
  required_roles: 'IoT architect, data engineer, ML engineer (consultant), automation technician, network engineer, cybersecurity specialist',
  existing_vendors: 'Current Siemens SCADA system must be integrated, preference for Azure cloud (existing enterprise agreement), SAP integration required',
  device_certifications: 'CE marking required, UL certification preferred, ATEX not needed (non-hazardous area)',
  geographic_compliance: 'US-based facility, data can remain in US region, no special compliance requirements',

  solution_lifetime: 'Minimum 10-year operational life, sensors should last 5+ years, plan for technology refresh at year 7',
  maintenance_plan: 'Quarterly sensor calibration, annual gateway replacement budget, continuous cloud service subscription, vendor support SLA',
  sustainability_goals: 'Energy-efficient sensors preferred, reduce paper-based maintenance logs, optimize machine efficiency to reduce energy consumption by 15%',

  build_vs_buy: 'Buy sensors and connectivity hardware, build custom analytics dashboard, use SaaS for ML model training, custom integration layer for ERP',
  platform_preferences: 'Prefer Azure IoT (existing enterprise agreement), open to AWS IoT, must support hybrid deployment, prefer open protocols',
  vendor_lockin_tolerance: 'Acceptable for cloud platform, but require portable data formats and APIs for analytics layer',

  data_access_rights: 'Operations and maintenance full access, management dashboard access, no external data sharing, potential future benchmarking with anonymized data',
  analytics_plan: 'Phase 1: Descriptive analytics and alerting, Phase 2: Predictive models for remaining useful life, Phase 3: Prescriptive recommendations and optimization',
  interoperability_needs: 'MQTT for devices, OPC-UA for SCADA integration, REST APIs for enterprise systems, standard data formats (JSON, CSV)',

  connectivity_failure_plan: 'Edge devices buffer data locally for 48 hours, critical alerts via SMS backup, continue local monitoring and alerting during outages',
  critical_failure_scenarios: 'Complete network failure, cloud platform outage, sensor failures, power loss, cybersecurity breach',
  incident_response: 'Isolated network segment for IoT, automated threat detection, incident response team trained on OT security, backup systems for critical monitoring'
};

export const fieldSuggestions: Record<string, string[]> = {
  business_outcomes: [
    'Cost reduction (specify percentage or amount)',
    'Revenue increase through new services',
    'Improved safety and reduced incidents',
    'Enhanced customer satisfaction',
    'Operational efficiency gains',
    'Reduced environmental impact'
  ],
  stakeholders: [
    'C-level executives (CEO, CTO, COO)',
    'Operations managers',
    'IT and technical teams',
    'End users (employees, customers)',
    'Compliance and legal teams',
    'External partners or vendors'
  ],
  success_metrics: [
    'Uptime percentage (e.g., 99.9%)',
    'Cost savings per year',
    'Response time reduction',
    'Error rate decrease',
    'User adoption rate',
    'ROI and payback period'
  ],
  device_types: [
    'Environmental sensors (temp, humidity, air quality)',
    'Motion and position sensors (accelerometers, GPS)',
    'Industrial sensors (pressure, flow, vibration)',
    'Smart cameras and vision systems',
    'RFID/NFC readers',
    'Actuators and controllers'
  ],
  network_technologies: [
    'Wi-Fi (2.4GHz, 5GHz, Wi-Fi 6)',
    'Cellular (4G LTE, 5G, NB-IoT, LTE-M)',
    'LPWAN (LoRaWAN, Sigfox)',
    'Short-range (Bluetooth, Zigbee, Z-Wave)',
    'Wired (Ethernet, Industrial Ethernet)',
    'Satellite (for remote locations)'
  ],
  data_location: [
    'Public cloud (AWS, Azure, Google Cloud)',
    'Private cloud or on-premises',
    'Hybrid (edge + cloud)',
    'Multi-cloud strategy',
    'Edge-only processing'
  ],
  compliance_standards: [
    'GDPR (EU data privacy)',
    'HIPAA (healthcare data)',
    'ISO 27001 (information security)',
    'SOC 2 (service organization controls)',
    'NIST frameworks',
    'Industry-specific regulations'
  ],
  power_constraints: [
    'Battery-powered (specify expected life)',
    'Mains/AC powered',
    'Power over Ethernet (PoE)',
    'Solar or energy harvesting',
    'Low-power requirements (<1W)',
    'Industrial power (24V DC)'
  ],
  analytics_capabilities: [
    'Real-time monitoring and dashboards',
    'Predictive analytics and forecasting',
    'Anomaly detection',
    'Machine learning models',
    'Business intelligence and reporting',
    'Computer vision and pattern recognition'
  ]
};
