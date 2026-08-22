import { supabase } from "../lib/supabase";

export const login = async (
  email: string,
  password: string
) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const logout = async () => {
  return await supabase.auth.signOut();
};

export const getSession = async () => {
  return await supabase.auth.getSession();
};

export const getAdminSession = async () => {
  const { data, error } = await supabase.auth.getSession();

  if (error || !data.session) {
    return { session: null, isAdmin: false };
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.session.user.id)
    .maybeSingle();

  return {
    session: data.session,
    isAdmin: !profileError && profile?.role === "admin",
  };
};