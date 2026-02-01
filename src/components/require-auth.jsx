import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { UrlState } from "@/context";

function RequireAuth({ children }) {
  const navigate = useNavigate();

  const { loading, isAuthenticated } = UrlState();

  useEffect(() => {
    if (!isAuthenticated && loading === false) navigate("/auth");
  }, [isAuthenticated, loading]);

  if (loading)
    return (
      <div className="w-full py-8 flex items-center justify-center">
        <div className="h-1 w-2/3 bg-muted animate-pulse rounded" />
      </div>
    );

  if (isAuthenticated) return children;

  return null;
}

export default RequireAuth;