"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Grain } from "./Icons";

const links = [
  { href: "/", label: "Overview" },
  { href: "/mill-dashboard", label: "Mill Owner" },
  { href: "/dealer-app", label: "Dealers" },
  { href: "/driver-app", label: "Drivers" },
  { href: "/receiver-app", label: "Mill Workers" },
  { href: "/iot", label: "IoT" },
];

type Theme = "dark" | "light";

const Sun = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
);
const Moon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
);

export default function Nav() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    const t = document.documentElement.getAttribute("data-theme");
    setTheme(t === "light" ? "light" : "dark");
  }, []);

  const toggleTheme = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try { localStorage.setItem("oryza-theme", next); } catch {}
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark"><Grain size={20} /></span>
          <span>
            OryzaFlow
            <small>SYSTEM WALKTHROUGH</small>
          </span>
        </Link>
        <div className="nav-right">
          <nav className={`nav-links ${open ? "open" : ""}`}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} className={path === l.href ? "active" : ""} onClick={() => setOpen(false)}>
                {l.label}
              </Link>
            ))}
          </nav>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span className={theme === "light" ? "on" : ""}><Sun /></span>
            <span className={theme === "dark" ? "on" : ""}><Moon /></span>
          </button>
          <button className="nav-toggle" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
    </header>
  );
}
