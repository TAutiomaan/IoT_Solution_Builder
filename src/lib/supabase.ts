import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface BusinessCase {
  id?: string;
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
  created_at?: string;
}

export interface SolutionRecommendation {
  id?: string;
  business_case_id: string;
  recommendation: string;
  technologies: Array<{
    category: string;
    name: string;
    purpose: string;
  }>;
  architecture_summary: string;
  estimated_cost: string;
  implementation_timeline: string;
  created_at?: string;
}
