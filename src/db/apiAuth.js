import supabase from "./supabse";

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session, error } = await supabase.auth.getSession();
  if (!session.session) return null;
  if (error) throw new Error(error.message);
  return session.session?.user;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function signupWithGoogle() {
  const redirectTo =
    typeof window !== "undefined"
      ? `${window.location.origin}/dashboard`
      : undefined;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "google",
    options: { redirectTo },
  });

  if (error) {
    // provide a clearer message for disabled provider
    if (
      (error.message || "").toLowerCase().includes("provider") ||
      error.status === 400
    ) {
      throw new Error(
        "Google sign-in is not enabled for this Supabase project. Check your Supabase Auth settings and .env VITE_SUPABASE_URL."
      );
    }
    throw new Error(
      error.message || "An error occurred during Google sign-in."
    );
  }

  return data;
}
