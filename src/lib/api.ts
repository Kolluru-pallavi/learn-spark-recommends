import { supabase } from "@/integrations/supabase/client";

export const callAIRecommendations = async (userPreferences: any) => {
  try {
    const { data, error } = await supabase.functions.invoke('ai-recommendations', {
      body: { userPreferences }
    });

    if (error) {
      console.error('Supabase function error:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('AI Recommendations API error:', error);
    throw error;
  }
};