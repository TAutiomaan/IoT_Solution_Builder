/*
  # Add Legacy Form Fields

  ## Overview
  This migration adds backward-compatible fields from the original form interface
  to ensure compatibility with existing code.

  ## Changes to Tables

  ### `business_cases` - Additional Legacy Columns

  #### Original Schema Fields (if missing)
  - `title` (text) - Alternative to project_name
  - `project_name` (text) - Project name
  - `business_objectives` (text) - Business objectives
  - `use_case_description` (text) - Use case description
  - `sensor_types` (text) - Types of sensors

  ## Notes
  - All fields are optional for backward compatibility
  - Existing comprehensive fields remain unchanged
*/

-- Add legacy fields if they don't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'project_name') THEN
    ALTER TABLE business_cases ADD COLUMN project_name text DEFAULT '';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'business_objectives') THEN
    ALTER TABLE business_cases ADD COLUMN business_objectives text DEFAULT '';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'use_case_description') THEN
    ALTER TABLE business_cases ADD COLUMN use_case_description text DEFAULT '';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'sensor_types') THEN
    ALTER TABLE business_cases ADD COLUMN sensor_types text DEFAULT '';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'device_count') THEN
    ALTER TABLE business_cases ADD COLUMN device_count text DEFAULT '';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'connectivity_type') THEN
    ALTER TABLE business_cases ADD COLUMN connectivity_type text DEFAULT '';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'business_problem') THEN
    ALTER TABLE business_cases ADD COLUMN business_problem text DEFAULT '';
  END IF;

  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'scale') THEN
    ALTER TABLE business_cases ADD COLUMN scale text DEFAULT '';
  END IF;
END $$;
