import { MetadataRoute } from "next";

const BASE = "https://dienstkompass.de";

function url(path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] = "monthly"): MetadataRoute.Sitemap[number] {
  return { url: `${BASE}${path}`, lastModified: new Date(), priority, changeFrequency };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core
    url("/", 1.0, "weekly"),
    url("/rechner", 0.9, "monthly"),
    url("/news", 0.8, "daily"),
    url("/stellen", 0.7, "daily"),
    url("/pro", 0.8, "monthly"),

    // TVöD VKA
    url("/tvoed/vka", 0.9, "monthly"),
    url("/tvoed/vka/2026", 0.8, "monthly"),
    url("/tvoed/vka/2025", 0.9, "monthly"),
    url("/tvoed/vka/2024", 0.7, "monthly"),
    url("/tvoed/vka/tarifrunden/2025", 0.8, "monthly"),
    url("/tvoed/vka/tarifrunden/2023", 0.7, "monthly"),

    // TVöD Bund
    url("/tvoed/bund", 0.9, "monthly"),
    url("/tvoed/bund/2026", 0.8, "monthly"),
    url("/tvoed/bund/2025", 0.9, "monthly"),
    url("/tvoed/bund/2024", 0.7, "monthly"),
    url("/tvoed/bund/tarifrunden/2025", 0.8, "monthly"),
    url("/tvoed/bund/tarifrunden/2023", 0.7, "monthly"),

    // TVöD SuE
    url("/tvoed/sue", 0.9, "monthly"),
    url("/tvoed/sue/2026", 0.8, "monthly"),
    url("/tvoed/sue/2025", 0.9, "monthly"),
    url("/tvoed/sue/2024", 0.7, "monthly"),
    url("/tvoed/sue/tarifrunden/2025", 0.8, "monthly"),
    url("/tvoed/sue/tarifrunden/2023", 0.7, "monthly"),

    // TVöD-P Pflege
    url("/tvoed/p", 0.9, "monthly"),
    url("/tvoed/p/2026", 0.8, "monthly"),
    url("/tvoed/p/2025", 0.9, "monthly"),
    url("/tvoed/p/2024", 0.7, "monthly"),

    // TVöD-S Sparkassen
    url("/tvoed/s", 0.8, "monthly"),
    url("/tvoed/s/2026", 0.7, "monthly"),
    url("/tvoed/s/2025", 0.8, "monthly"),
    url("/tvoed/s/2024", 0.7, "monthly"),

    // TV-L
    url("/tv-l", 0.9, "monthly"),
    url("/tv-l/allgemein", 0.9, "monthly"),
    url("/tv-l/allgemein/2026", 0.8, "monthly"),
    url("/tv-l/allgemein/2025", 0.9, "monthly"),
    url("/tv-l/allgemein/2024", 0.7, "monthly"),
    url("/tv-l/tarifrunden/2025", 0.8, "monthly"),
    url("/tv-l/tarifrunden/2023", 0.7, "monthly"),

    // Beamte
    url("/beamte", 0.9, "monthly"),
    url("/beamte/bund", 0.9, "monthly"),
    url("/beamte/bund/tarifrunden/2024", 0.8, "monthly"),
    url("/beamte/bund/tarifrunden/2022", 0.7, "monthly"),
    url("/beamte/bw", 0.8, "monthly"),
    url("/beamte/by", 0.8, "monthly"),
    url("/beamte/be", 0.8, "monthly"),
    url("/beamte/bb", 0.8, "monthly"),
    url("/beamte/hb", 0.8, "monthly"),
    url("/beamte/hh", 0.8, "monthly"),
    url("/beamte/he", 0.8, "monthly"),
    url("/beamte/mv", 0.8, "monthly"),
    url("/beamte/ni", 0.8, "monthly"),
    url("/beamte/nw", 0.8, "monthly"),
    url("/beamte/rp", 0.8, "monthly"),
    url("/beamte/sl", 0.8, "monthly"),
    url("/beamte/sn", 0.8, "monthly"),
    url("/beamte/st", 0.8, "monthly"),
    url("/beamte/sh", 0.8, "monthly"),
    url("/beamte/th", 0.8, "monthly"),

    // Kirchen & Wohlfahrt
    url("/wohlfahrt", 0.8, "monthly"),
    url("/wohlfahrt/caritas", 0.8, "monthly"),
    url("/wohlfahrt/diakonie", 0.8, "monthly"),

    // Legal
    url("/impressum", 0.3, "yearly"),
    url("/datenschutz", 0.3, "yearly"),
  ];
}
