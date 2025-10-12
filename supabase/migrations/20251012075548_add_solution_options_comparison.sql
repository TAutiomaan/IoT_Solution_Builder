/*
  # Add Solution Options and Comparison Support

  ## Overview
  This migration extends the solution_recommendations table to support multiple solution options
  and detailed comparisons across different technology layers.

  ## Changes to Tables

  ### `solution_recommendations` - New Columns Added
  - `solution_options` (jsonb) - Array of multiple solution options with detailed comparisons
  - `comparison_summary` (text) - Summary comparing all solution options

  ## Structure of solution_options JSON
  Each solution option includes:
  - name: Solution name/approach
  - description: Brief description
  - technologies: Detailed tech stack by layer
  - pros: Advantages
  - cons: Disadvantages
  - estimated_cost: Cost breakdown
  - implementation_complexity: Complexity rating
  - best_for: Ideal use cases

  ## Notes
  - Maintains backward compatibility with existing recommendation field
  - solution_options is the new preferred field for comprehensive solutions
  - Default empty array for new entries
*/

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'solution_recommendations' AND column_name = 'solution_options') THEN
    ALTER TABLE solution_recommendations ADD COLUMN solution_options jsonb DEFAULT '[]'::jsonb;
  END IF;
  
  IF NOT EXISTS (SELECT 1 FROM information_schema.columns WHERE table_name = 'solution_recommendations' AND column_name = 'comparison_summary') THEN
    ALTER TABLE solution_recommendations ADD COLUMN comparison_summary text DEFAULT '';
  END IF;
END $$;