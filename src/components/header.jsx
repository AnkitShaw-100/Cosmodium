import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "./ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";
import { LogOut, LinkIcon } from "lucide-react";
import { UrlState } from "@/context";

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated, signOut } = UrlState();
  const [open, setOpen] = useState(false);

  return (
    <nav className="py-3 flex items-center px-4 sm:px-6 md:px-12 lg:px-20 xl:px-28 2xl:px-32">
      <div className="flex items-center flex-1">
        <Link to="/" className="flex items-center">
          <img
            src="/Logo.png"
            className="h-12 md:h-16 pl-0 md:pl-4"
            alt="Cosmodium Logo"
          />
        </Link>
      </div>

      {/* Desktop actions */}
      <div className="hidden md:flex items-center gap-4">
        {!isAuthenticated ? (
          <Button onClick={() => navigate("/auth")}>Login</Button>
        ) : (
          <DropdownMenu>
            <DropdownMenuTrigger className="w-8 rounded-full overflow-hidden">
              <Avatar>
                <AvatarImage
                  src={
                    user?.user_metadata?.profile_pic ||
                    "https://github.com/shadcn.png"
                  }
                />
                <AvatarFallback>
                  {(user?.user_metadata?.name || "User")
                    .split(" ")
                    .map((n) => n[0])
                    .slice(0, 2)
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {user?.user_metadata?.name || user?.email}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to="/dashboard" className="flex">
                  <LinkIcon className="mr-2 h-4 w-4" />
                  My Links
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem
                className="text-red-400"
                onClick={async () => {
                  try {
                    await signOut();
                  } finally {
                    navigate("/");
                  }
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden ml-2 relative">
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="p-2 rounded-md hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/10"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-56 bg-gray-900 border border-white/10 rounded-md shadow-lg p-3 z-50">
            {!isAuthenticated ? (
              <div>
                <button
                  onClick={() => {
                    setOpen(false);
                    navigate("/auth");
                  }}
                  className="w-full text-left px-3 py-2 bg-white/5 rounded hover:bg-white/10"
                >
                  Login
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-2 px-3 py-2 rounded hover:bg-white/5"
                >
                  <LinkIcon className="h-4 w-4" />
                  My Links
                </Link>
                <button
                  onClick={async () => {
                    try {
                      await signOut();
                    } finally {
                      setOpen(false);
                      navigate("/");
                    }
                  }}
                  className="w-full text-left px-3 py-2 text-red-400 rounded hover:bg-white/5"
                >
                  <LogOut className="inline mr-2 h-4 w-4" /> Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
