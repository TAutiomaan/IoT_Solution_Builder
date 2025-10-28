/*
  # Add Missing Expected Outcomes Field

  ## Overview
  This migration adds the expected_outcomes field that was referenced in the TypeScript interface
  but missing from the database schema.

  ## Changes to Tables

  ### `business_cases` - Add Missing Column
  - `expected_outcomes` (text) - Expected outcomes from the IoT project

  ## Notes
  - Field is optional for backward compatibility
*/

-- Add expected_outcomes field if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'business_cases' AND column_name = 'expected_outcomes') THEN
    ALTER TABLE business_cases ADD COLUMN expected_outcomes text DEFAULT '';
  END IF;
END $$;
