import { supabase } from "@/integrations/supabase/client";

export const callAIRecommendations = async (userPreferences: any) => {
  const { data, error } = await supabase.functions.invoke('ai-recommendations', {
    body: { userPreferences }
  });

  if (error) {
    throw error;
  }

  return data;
};