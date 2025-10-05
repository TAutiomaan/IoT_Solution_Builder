/*
  # IoT Solution Finder Database Schema

  ## Overview
  This migration creates the database structure for the IoT Architecture Solution Finder application.
  It stores business cases submitted by IoT architects and the AI-generated recommendations.

  ## New Tables

  ### `business_cases`
  Stores information about IoT business problems submitted by architects
  - `id` (uuid, primary key) - Unique identifier for each business case
  - `title` (text) - Short title describing the business case
  - `industry` (text) - Industry sector (e.g., Manufacturing, Healthcare, Agriculture)
  - `business_problem` (text) - Detailed description of the business problem
  - `scale` (text) - Project scale (Small, Medium, Large, Enterprise)
  - `devices_count` (text) - Estimated number of IoT devices
  - `data_volume` (text) - Expected data volume
  - `latency_requirements` (text) - Latency requirements (Real-time, Near real-time, Batch)
  - `budget_range` (text) - Budget constraints
  - `security_requirements` (text) - Security and compliance requirements
  - `integration_needs` (text) - Systems that need integration
  - `geographic_scope` (text) - Geographic deployment scope
  - `created_at` (timestamptz) - Timestamp when the case was created

  ### `solution_recommendations`
  Stores AI-generated technology recommendations for business cases
  - `id` (uuid, primary key) - Unique identifier for each recommendation
  - `business_case_id` (uuid, foreign key) - Reference to the business case
  - `recommendation` (text) - Full AI-generated recommendation text
  - `technologies` (jsonb) - Structured list of recommended technologies
  - `architecture_summary` (text) - High-level architecture overview
  - `estimated_cost` (text) - Cost estimation
  - `implementation_timeline` (text) - Timeline estimates
  - `created_at` (timestamptz) - Timestamp when recommendation was generated

  ## Security
  
  ### Row Level Security (RLS)
  - Both tables have RLS enabled
  - Public read access for all business cases and recommendations (demo/portfolio purposes)
  - Anyone can create new business cases and recommendations (no auth required for MVP)
  
  ## Notes
  - This is an MVP design allowing public access for demo purposes
  - Future versions can add user authentication and private cases
  - JSONB used for technologies to allow flexible structured data
*/

-- Create business_cases table
CREATE TABLE IF NOT EXISTS business_cases (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  industry text NOT NULL,
  business_problem text NOT NULL,
  scale text NOT NULL,
  devices_count text NOT NULL,
  data_volume text NOT NULL,
  latency_requirements text NOT NULL,
  budget_range text DEFAULT '',
  security_requirements text DEFAULT '',
  integration_needs text DEFAULT '',
  geographic_scope text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Create solution_recommendations table
CREATE TABLE IF NOT EXISTS solution_recommendations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_case_id uuid NOT NULL REFERENCES business_cases(id) ON DELETE CASCADE,
  recommendation text NOT NULL,
  technologies jsonb DEFAULT '[]'::jsonb,
  architecture_summary text DEFAULT '',
  estimated_cost text DEFAULT '',
  implementation_timeline text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE business_cases ENABLE ROW LEVEL SECURITY;
ALTER TABLE solution_recommendations ENABLE ROW LEVEL SECURITY;

-- Public read access for business cases
CREATE POLICY "Anyone can view business cases"
  ON business_cases
  FOR SELECT
  USING (true);

-- Public insert access for business cases
CREATE POLICY "Anyone can create business cases"
  ON business_cases
  FOR INSERT
  WITH CHECK (true);

-- Public read access for recommendations
CREATE POLICY "Anyone can view recommendations"
  ON solution_recommendations
  FOR SELECT
  USING (true);

-- Public insert access for recommendations
CREATE POLICY "Anyone can create recommendations"
  ON solution_recommendations
  FOR INSERT
  WITH CHECK (true);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_business_cases_created_at ON business_cases(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_solution_recommendations_business_case_id ON solution_recommendations(business_case_id);
CREATE INDEX IF NOT EXISTS idx_business_cases_industry ON business_cases(industry);
