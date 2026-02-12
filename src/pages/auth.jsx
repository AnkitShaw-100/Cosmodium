import Login from "@/components/login";
import Signup from "@/components/signup";
import { UrlState } from "@/context";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function Auth() {
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isAuthenticated, loading } = UrlState();
  const longLink = searchParams.get("createNew");

  useEffect(() => {
    if (isAuthenticated && !loading)
      navigate(`/dashboard?${longLink ? `createNew=${longLink}` : ""}`);
  }, [isAuthenticated, loading, navigate]);

  const [tab, setTab] = useState(searchParams.get("tab") || "login");

  useEffect(() => {
    const p = searchParams.get("tab") || "login";
    setTab(p);
  }, [searchParams]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-start sm:justify-center px-4 py-12">
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-6">
        {searchParams.get("createNew")
          ? "Hold up! Let's login first.."
          : "Login / Signup"}
      </h1>

      <div className="w-full max-w-md">
        <div className="flex justify-center py-6">
          {tab === "signup" ? <Signup /> : <Login />}
        </div>
      </div>
    </div>
  );
}

export default Auth;
