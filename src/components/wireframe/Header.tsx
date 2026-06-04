import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { useLocation } from "react-router-dom";
import { toolCategories } from "@/data/toolCategories";

const navItems = [
  {
    label: "Courses",
    to: "/courses",
    children: [
      { label: "All Courses", to: "/courses" },
      { label: "My Free Guide", to: "/courses/list?type=own" },
      { label: "Top-Rated Online Affiliate Marketing Courses", to: "/courses/list?type=affiliate" },
    ],
  },
  {
    label: "Tools",
    to: "/tools",
    children: [
      { label: "All Tools", to: "/tools" },
      ...toolCategories.map((c) => ({
        label: c.title,
        to: `/best-affiliate-tools?category=${c.slug}`,
      })),
    ],
  },
  { label: "Networks", to: "/networks" },
  { label: "Blog", to: "/blog" },
  { label: "About", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  return (
    <header className="border-b-2 border-dashed border-border bg-header text-header-foreground sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="font-mono text-lg font-bold text-header-foreground tracking-tight">
          [ Affiliate Tour ]
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded hover:bg-white/10 transition-colors ${location.pathname.startsWith("/courses") ? "bg-white/10" : ""}`}
                >
                  {item.label}
                  <ChevronDown className="h-3 w-3" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-1 border-2 border-dashed border-border bg-card text-foreground rounded p-1 min-w-[280px] shadow-sm">
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        to={child.to}
                        onClick={() => setDropdownOpen(false)}
                        className="block px-3 py-2 text-sm hover:bg-accent rounded transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.label}
                to={item.to}
                className={`px-3 py-2 text-sm font-medium rounded hover:bg-white/10 transition-colors ${location.pathname === item.to || location.pathname.startsWith(item.to + "/") ? "bg-white/10" : ""}`}
              >
                {item.label}
              </Link>
            )
          )}
          <button className="ml-2 p-2 hover:bg-white/10 rounded transition-colors">
            <Search className="h-4 w-4 text-header-foreground/70" />
          </button>
        </nav>

        <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t-2 border-dashed border-border bg-header text-header-foreground px-4 py-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.label}>
              <Link to={item.to} onClick={() => setMobileOpen(false)} className="block px-3 py-2 text-sm font-medium hover:bg-white/10 rounded">
                {item.label}
              </Link>
              {item.children?.map((child) => (
                <Link key={child.label} to={child.to} onClick={() => setMobileOpen(false)} className="block px-6 py-2 text-sm text-header-foreground/70 hover:bg-white/10 rounded">
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </header>
  );
};
