import { createClient } from '@supabase/supabase-js';
import type { BusinessCase } from '../types/businessCase';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type { BusinessCase };

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
  solution_options?: any[];
  comparison_summary?: string;
  created_at?: string;
}
