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
