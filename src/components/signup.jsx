import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "./ui/card";
import { Button } from "./ui/button";
import { signupWithGoogle } from "@/db/apiAuth";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full max-w-md dark:border-gray-700">
      <CardHeader className="text-center space-y-2 pb-8 pt-10">
        <CardTitle className="text-3xl font-bold">Create an account</CardTitle>
        <CardDescription className="text-base">
          Sign up with your Google account to manage links and view analytics
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex flex-col gap-4 pb-10 px-8">
        <Button
          variant="outline"
          className="w-full h-12 text-base font-medium hover:bg-gray-700 dark:hover:bg-gray-800 transition-all duration-200 border-2"
          onClick={async () => {
            try {
              await signupWithGoogle();
            } catch (e) {
              // eslint-disable-next-line no-console
              console.error(e.message || e);
              alert(e.message || "Google sign-in failed");
            }
          }}
        >
          Continue with Google
        </Button>

        <Button
          variant="ghost"
          className="w-full h-10 text-sm text-gray-300 hover:bg-white/5"
          onClick={() => navigate("/auth?tab=login")}
        >
          Already have an account? Login
        </Button>

        <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-2">
          By continuing, you agree to our Terms of Service and Privacy Policy
        </p>
      </CardFooter>
    </Card>
  );
};

export default Signup;
