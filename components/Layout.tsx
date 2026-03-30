"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const LAENDER = [
  { label: "BW", href: "/beamte/bw" },
  { label: "BY", href: "/beamte/by" },
  { label: "BE", href: "/beamte/be" },
  { label: "BB", href: "/beamte/bb" },
  { label: "HB", href: "/beamte/hb" },
  { label: "HH", href: "/beamte/hh" },
  { label: "HE", href: "/beamte/he" },
  { label: "MV", href: "/beamte/mv" },
  { label: "NI", href: "/beamte/ni" },
  { label: "NW", href: "/beamte/nw" },
  { label: "RP", href: "/beamte/rp" },
  { label: "SL", href: "/beamte/sl" },
  { label: "SN", href: "/beamte/sn" },
  { label: "ST", href: "/beamte/st" },
  { label: "SH", href: "/beamte/sh" },
  { label: "TH", href: "/beamte/th" },
];

const GROUPS = [
  {
    label: "Für Angestellte",
    key: "angestellte",
    items: [
      { label: "TVöD VKA", href: "/tvoed/vka" },
      { label: "TVöD Bund", href: "/tvoed/bund" },
      { label: "TVöD SuE", href: "/tvoed/sue" },
      { label: "TVöD-P", href: "/tvoed/p" },
      { label: "TVöD-S", href: "/tvoed/s" },
      { label: "TV-L", href: "/tv-l/allgemein" },
    ],
  },
  {
    label: "Für Beamte",
    key: "beamte",
    items: [
      { label: "Bundesbeamte", href: "/beamte/bund" },
    ],
  },
  {
    label: "Kirche & Wohlfahrt",
    key: "wohlfahrt",
    items: [
      { label: "Caritas AVR", href: "/wohlfahrt/caritas" },
      { label: "Diakonie AVR", href: "/wohlfahrt/diakonie" },
    ],
  },
];

const CATEGORY_NAV = [
  { label: "Rechner", href: "/rechner" },
  { label: "News", href: "/news" },
  { label: "Stellen", href: "/stellen" },
  { label: "Tarif-Finder", href: "/tarif-finder" },
  { label: "Pro", href: "/pro" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center flex-shrink-0">
      <img src="/logo.png" className="h-7 w-auto" alt="dienstkompass" />
    </Link>
  );
}

function SearchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

function BurgerIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function NavGroups({ activePath, onLinkClick }: { activePath?: string; onLinkClick?: () => void }) {
  const [open, setOpen] = useState<Record<string, boolean>>({
    angestellte: true,
    beamte: true,
    wohlfahrt: true,
  });

  function toggle(key: string) {
    setOpen(prev => ({ ...prev, [key]: !prev[key] }));
  }

  return (
    <div>
      <Link
        href="/tarif-finder"
        onClick={onLinkClick}
        className="flex items-center justify-center gap-1.5 w-full bg-blue-600 text-white text-sm font-medium px-3 py-2 rounded-lg mb-5 hover:bg-blue-700 transition-colors"
      >
        🧭 Tarif Finder
      </Link>

      {GROUPS.map((group, i) => (
        <div key={group.key}>
          {i > 0 && <div className="h-px bg-gray-100 my-3" />}
          <button
            onClick={() => toggle(group.key)}
            className="w-full flex items-center justify-between mb-1 px-1"
          >
            <span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
              {group.label}
            </span>
            <span className="text-gray-300 text-xs">{open[group.key] ? "▾" : "▸"}</span>
          </button>

          {open[group.key] && (
            <div className="space-y-0.5">
              {group.items.map(item => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onLinkClick}
                  className={`block text-sm px-2 py-1.5 rounded-md transition-colors ${
                    activePath === item.href
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {item.label}
                </Link>
              ))}

              {group.key === "beamte" && (
                <div className="grid grid-cols-4 gap-x-1 gap-y-0.5 px-2 pt-1 pb-0.5">
                  {LAENDER.map(l => (
                    <Link
                      key={l.href}
                      href={l.href}
                      onClick={onLinkClick}
                      className={`text-xs text-center py-1 rounded transition-colors ${
                        activePath === l.href
                          ? "text-blue-600 font-medium"
                          : "text-gray-400 hover:text-blue-600"
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function Sidebar({ activePath }: { activePath?: string }) {
  return (
    <aside className="w-52 flex-shrink-0 border-r border-gray-200 min-h-screen pt-4 pr-4">
      <NavGroups activePath={activePath} />
    </aside>
  );
}

function CategoryBar({ activePath }: { activePath?: string }) {
  return (
    <div className="sticky top-14 z-40 bg-white border-b border-gray-200 md:hidden">
      <div className="flex overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {CATEGORY_NAV.map(item => (
          <Link
            key={item.href}
            href={item.href}
            className={`flex-shrink-0 text-sm font-medium px-4 py-3 whitespace-nowrap border-b-2 transition-colors ${
              activePath === item.href
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-gray-900"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

function BurgerMenu({ isOpen, onClose, activePath }: { isOpen: boolean; onClose: () => void; activePath?: string }) {
  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40"
          style={{ top: 56 }}
          onClick={onClose}
        />
      )}
      {/* Drawer */}
      <div
        className={`fixed top-14 right-0 z-50 w-72 bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ height: "calc(100vh - 56px)" }}
      >
        <div className="p-5">
          <NavGroups activePath={activePath} onLinkClick={onClose} />
        </div>
      </div>
    </>
  );
}

function SearchOverlay({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed left-0 right-0 z-50 bg-white border-b border-gray-200 shadow-md px-4 py-3 flex items-center gap-3" style={{ top: 56 }}>
      <SearchIcon />
      <input
        ref={inputRef}
        type="text"
        placeholder="Tarifvertrag suchen..."
        className="flex-1 text-sm text-gray-900 outline-none placeholder-gray-400"
      />
      <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
        <CloseIcon size={18} />
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-16">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" className="h-6 w-auto" alt="dienstkompass" />
            <span className="hidden md:inline text-gray-300 mx-2">·</span>
            <span className="hidden md:inline text-xs text-gray-400">Infoportal für den öffentlichen Dienst</span>
          </div>

          <nav className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/impressum" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Datenschutz</Link>
            <Link href="/news" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">News</Link>
            <Link href="/stellen" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Jobbörse</Link>
            <Link href="/sitemap" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Sitemap</Link>
            <Link href="/pro" className="text-xs text-gray-400 hover:text-gray-700 transition-colors">Pro</Link>
          </nav>

          <p className="text-xs text-gray-400">© {new Date().getFullYear()} Dienstkompass</p>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({
  children,
  activePath,
}: {
  children: React.ReactNode;
  activePath?: string;
}) {
  const [burgerOpen, setBurgerOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: "#F7F7F5" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 h-14 flex items-center px-4 md:px-6" style={{ backgroundColor: "#1D6FB8" }}>
        <div className="max-w-screen-xl mx-auto w-full flex items-center justify-between">
          <Logo />

          {/* Desktop nav (hidden on mobile) */}
          <nav className="hidden md:flex items-center gap-6">
            {CATEGORY_NAV.map(item => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm transition-colors ${
                  activePath === item.href ? "text-white font-medium" : "text-white/70 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile right icons */}
          <div className="flex items-center gap-3 md:hidden text-white">
            <button onClick={() => { setSearchOpen(s => !s); setBurgerOpen(false); }} aria-label="Suche">
              <SearchIcon />
            </button>
            <button onClick={() => { setBurgerOpen(s => !s); setSearchOpen(false); }} aria-label="Menü">
              {burgerOpen ? <CloseIcon /> : <BurgerIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Search overlay */}
      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Category bar (mobile only) */}
      <CategoryBar activePath={activePath} />

      {/* Burger menu (mobile only) */}
      <div className="md:hidden">
        <BurgerMenu isOpen={burgerOpen} onClose={() => setBurgerOpen(false)} activePath={activePath} />
      </div>

      {/* Body */}
      <div className="max-w-screen-xl mx-auto flex flex-1 w-full">
        {/* Sidebar (desktop only) */}
        <div className="hidden md:block">
          <Sidebar activePath={activePath} />
        </div>

        {/* Main content */}
        <main className="flex-1 min-w-0 px-4 md:px-8 py-6 md:py-8">
          {children}
        </main>
      </div>

      <Footer />
    </div>
  );
}
