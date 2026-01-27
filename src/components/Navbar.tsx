'use client';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
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
            { href: '/', label: 'Home' },
            { href: '/about', label: 'About Me' },
            { href: '/experience', label: 'Experience' },
            { href: '/projects', label: 'Projects' },
            { href: '/contact', label: 'Contact' },
          ].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)}
               className="block px-4 py-3 rounded-md font-semibold text-white border border-transparent hover:border-indigo-500 hover:bg-indigo-500/10">
              {item.label}
            </a>
          ))}
        </nav>
      </div>

      {open && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30" onClick={() => setOpen(false)} />
      )}
    </>
  );
}
