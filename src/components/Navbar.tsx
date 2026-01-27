'use client';
import { useState } from 'react';

interface NavbarProps {
  onNavigate?: (section: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [open, setOpen] = useState(false);
  
  const handleNavClick = (section: string) => {
    if (onNavigate) {
      onNavigate(section);
    } else {
      // Fallback to route navigation when used in routed pages
      const href = section === 'home' ? '/' : `/${section}`;
      window.location.assign(href);
    }
    setOpen(false);
  };
  
  return (
    <>
      <button
        aria-label="menu"
        onClick={() => setOpen(!open)}
        className="fixed top-5 right-5 z-50 w-12 h-12 rounded-lg border-2 border-slate-600 bg-slate-900/90 flex flex-col items-center justify-center gap-1.5 hover:border-indigo-500 transition"
      >
        <span className={`w-6 h-[3px] bg-white transition ${open ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-[3px] bg-white transition ${open ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-[3px] bg-white transition ${open ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      <div className={`fixed top-0 right-0 h-screen w-72 bg-slate-900/95 border-l border-slate-700 backdrop-blur-lg z-40 transition-transform ${open ? 'translate-x-0' : 'translate-x-full'}`}>
        <nav className="pt-24 px-6 space-y-3">
          {[
            { section: 'home', label: 'Home' },
            { section: 'about', label: 'About Me' },
            { section: 'experience', label: 'Experience' },
            { section: 'projects', label: 'Projects' },
            { section: 'contact', label: 'Contact' },
          ].map((item) => (
            onNavigate ? (
              <button
                key={item.section}
                onClick={() => handleNavClick(item.section)}
                className="w-full text-left px-4 py-3 rounded-md font-semibold text-white border border-transparent hover:border-indigo-500 hover:bg-indigo-500/10 transition"
              >
                {item.label}
              </button>
            ) : (
              <a
                key={item.section}
                href={item.section === 'home' ? '/' : `/${item.section}`}
                onClick={() => setOpen(false)}
                className="block px-4 py-3 rounded-md font-semibold text-white border border-transparent hover:border-indigo-500 hover:bg-indigo-500/10 transition"
              >
                {item.label}
              </a>
            )
          ))}
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
