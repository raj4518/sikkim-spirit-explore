import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./button";
import { Menu, X, Mountain } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Map", path: "/map" },
  { name: "Archive", path: "/archive" },
  { name: "Calendar", path: "/calendar" },
  { name: "Community", path: "/community" },
  { name: "About", path: "/about" }
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 rounded-lg bg-gradient-monastery text-primary-foreground group-hover:animate-monastery-glow transition-all duration-300">
              <Mountain className="h-6 w-6" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Monastery360</span>
              <span className="text-xs text-muted-foreground">Digital Heritage</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-muted",
                  location.pathname === item.path
                    ? "bg-gradient-monastery text-primary-foreground shadow-monastery"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild variant="outline" size="sm" className="ml-4">
              <Link to="/signin">Sign In</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    location.pathname === item.path
                      ? "bg-gradient-monastery text-primary-foreground shadow-monastery"
                      : "text-foreground hover:bg-muted hover:text-primary"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}