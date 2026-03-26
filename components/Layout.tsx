"use client";

import { useState } from "react";
import Link from "next/link";

const NAVIGATION = [
  {
    label: "TVöD",
    href: "/tvoed",
    children: [
      { label: "Bund", href: "/tvoed/bund" },
      { label: "Kommunen (VKA)", href: "/tvoed/vka" },
      { label: "TVöD-SuE", href: "/tvoed/sue" },
      { label: "TVöD-P (Pflege)", href: "/tvoed/p" },
      { label: "TVöD-S (Sparkassen)", href: "/tvoed/s" },
      { label: "TVöD-E/F/V", href: "/tvoed/bt" },
      { label: "TV-N (Nahverkehr)", href: "/tvoed/tv-n" },
      { label: "TV-V (Versorgung)", href: "/tvoed/tv-v" },
      { label: "TV-Autobahn", href: "/tvoed/tv-autobahn" },
      { label: "Tarifrunden", href: "/tvoed/tarifrunden" },
    ],
  },
  {
    label: "TV-L, TV-H",
    href: "/tv-l",
    children: [
      { label: "TV-L allgemein", href: "/tv-l/allgemein" },
      { label: "TV-L KR (Pflege)", href: "/tv-l/kr" },
      { label: "TV-L S (Soziales)", href: "/tv-l/s" },
      { label: "TV-H (Hessen)", href: "/tv-h" },
      { label: "Tarifrunden", href: "/tv-l/tarifrunden" },
    ],
  },
  {
    label: "Beamte",
    href: "/beamte",
    children: [
      { label: "Bundesbeamte", href: "/beamte/bund" },
      {
        label: "Länder",
        href: "/beamte/laender",
        subchildren: [
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
        ],
      },
      { label: "Besoldungsvergleich", href: "/beamte/vergleich" },
    ],
  },
  {
    label: "Ärzte",
    href: "/aerzte",
    children: [
      { label: "Unikliniken", href: "/aerzte/unikliniken" },
      { label: "Krankenhäuser", href: "/aerzte/krankenhaeuser" },
      { label: "TV-L Ärzte", href: "/aerzte/tv-l" },
    ],
  },
  {
    label: "Kirchen & Wohlfahrt",
    href: "/wohlfahrt",
    children: [
      { label: "Caritas", href: "/wohlfahrt/caritas" },
      { label: "Diakonie", href: "/wohlfahrt/diakonie" },
      { label: "AWO", href: "/wohlfahrt/awo" },
      { label: "DRK", href: "/wohlfahrt/drk" },
    ],
  },
  {
    label: "Sozialversicherungen",
    href: "/sozialversicherungen",
    children: [
      { label: "Bundesagentur f. Arbeit", href: "/sozialversicherungen/ba" },
      { label: "Deutsche Rentenversicherung", href: "/sozialversicherungen/drv" },
      { label: "AOK", href: "/sozialversicherungen/aok" },
    ],
  },
];

const TOP_NAV = [
  { label: "Rechner", href: "/rechner" },
  { label: "News", href: "/news" },
  { label: "Pro", href: "/pro" },
];

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
      <div className="w-7 h-7 bg-blue-600 rounded-md flex items-center justify-center">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <circle cx="8" cy="8" r="3" fill="white" />
          <line x1="8" y1="1" x2="8" y2="4" stroke="white" strokeWidth="1.5" />
          <line x1="8" y1="12" x2="8" y2="15" stroke="white" strokeWidth="1.5" />
          <line x1="1" y1="8" x2="4" y2="8" stroke="white" strokeWidth="1.5" />
          <line x1="12" y1="8" x2="15" y2="8" stroke="white" strokeWidth="1.5" />
        </svg>
      </div>
      <span className="font-medium text-gray-900">Dienstkompass</span>
    </Link>
  );
}

function Sidebar({ activePath }: { activePath?: string }) {
  const [openSections, setOpenSections] = useState<string[]>(["TVöD"]);

  function toggleSection(label: string) {
    setOpenSections(prev =>
      prev.includes(label) ? prev.filter(l => l !== label) : [...prev, label]
    );
  }

  return (
    <aside className="w-52 flex-shrink-0 border-r border-gray-100 min-h-screen pt-6 pr-4">
      {NAVIGATION.map((section) => {
        const isOpen = openSections.includes(section.label);
        return (
          <div key={section.label} className="mb-1">
            <button
              onClick={() => toggleSection(section.label)}
              className={`w-full text-left text-sm font-medium px-2 py-1.5 rounded-md transition-colors flex items-center justify-between ${
                activePath?.startsWith(section.href)
                  ? "text-blue-600"
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-50"
              }`}
            >
              {section.label}
              <span className="text-gray-400 text-xs">{isOpen ? "▾" : "▸"}</span>
            </button>

            {isOpen && section.children && (
              <div className="ml-3 mt-0.5 mb-1">
                {section.children.map((child) => (
                  <div key={child.label}>
                    <Link
                      href={child.href}
                      className={`block text-sm px-2 py-1 rounded transition-colors ${
                        activePath === child.href
                          ? "text-blue-600 font-medium"
                          : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                      }`}
                    >
                      {child.label}
                    </Link>
                    {"subchildren" in child && child.subchildren && (
                      <div className="ml-3 flex flex-wrap gap-x-2 py-1">
                        {child.subchildren.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.href}
                            className="text-xs text-gray-400 hover:text-blue-600 transition-colors"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </aside>
  );
}

function MobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 bg-black/40" onClick={onClose}>
      <div
        className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-xl overflow-y-auto p-6"
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-6">
          <Logo />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>
        {NAVIGATION.map((section) => (
          <div key={section.label} className="mb-4">
            <div className="text-sm font-medium text-gray-900 mb-2">{section.label}</div>
            <div className="ml-3 space-y-1">
              {section.children?.map((child) => (
                <div key={child.label}>
                  <Link
                    href={child.href}
                    onClick={onClose}
                    className="block text-sm text-gray-500 hover:text-blue-600 py-0.5"
                  >
                    {child.label}
                  </Link>
                  {"subchildren" in child && child.subchildren && (
                    <div className="ml-3 flex flex-wrap gap-x-3 py-1">
                      {child.subchildren.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={onClose}
                          className="text-xs text-gray-400 hover:text-blue-600"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        <div className="border-t border-gray-100 pt-4 mt-4 space-y-2">
          {TOP_NAV.map(item => (
            <Link key={item.label} href={item.href} onClick={onClose} className="block text-sm text-gray-600 hover:text-blue-600">
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Layout({
  children,
  activePath,
}: {
  children: React.ReactNode;
  activePath?: string;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navigation */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-100">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Left: Burger (mobile) + Logo */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden text-gray-500 hover:text-gray-900"
              onClick={() => setMobileOpen(true)}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            </button>
            <Logo />
          </div>

          {/* Center: Top Nav Links (desktop) */}
          <nav className="hidden md:flex items-center gap-6">
            {TOP_NAV.map(item => (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm transition-colors ${
                  activePath === item.href
                    ? "text-blue-600 font-medium"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right: CTA */}
          <Link
            href="/pro"
            className="bg-blue-600 text-white text-sm px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Kostenlos starten
          </Link>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />

      {/* Body: Sidebar + Content */}
      <div className="max-w-screen-xl mx-auto flex">
        {/* Sidebar (desktop only) */}
        <div className="hidden md:block">
          <Sidebar activePath={activePath} />
        </div>

        {/* Main Content */}
        <main className="flex-1 min-w-0 px-8 py-8">
          {children}
        </main>
      </div>
    </div>
  );
}