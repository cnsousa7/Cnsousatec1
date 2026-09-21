import { useCallback, useMemo } from "react";

type UseAuthOptions = {
  redirectOnUnauthenticated?: boolean;
  redirectPath?: string;
};

type StaticUser = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
};

// Autenticação permanece desativada para a publicação estática no GitHub Pages.
export function useAuth(_options?: UseAuthOptions) {
  const logout = useCallback(async () => undefined, []);

  const state = useMemo(
    () => ({
      user: null as StaticUser | null,
      loading: false,
      error: null as Error | null,
      isAuthenticated: false,
    }),
    []
  );

  return {
    ...state,
    refresh: () => Promise.resolve(),
    logout,
  };
}
