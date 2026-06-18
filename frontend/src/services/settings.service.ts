import { supabase } from "../lib/supabase";

export const getSiteSettings = async () => {
  const { data, error } = await supabase
    .from("site_settings")
    .select("*")
    .single();

  if (error) {
    console.error(error);
    return null;
  }

  return data;
};