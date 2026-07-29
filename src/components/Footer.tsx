import React from "react";
import { MapPin, Phone, Mail, Star, Heart, ExternalLink, Instagram } from "lucide-react";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-black text-zinc-400 pb-8 pt-12 md:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/5 pb-12">
          
          {/* Brand Meta */}
          <div className="md:col-span-1 space-y-4 flex flex-col items-start">
            <p className="text-xs leading-relaxed text-zinc-500">
              Johannesburg's premier bespoke multi-stage detailing, premium vinyl wrapping, and expert surface protection studio. Preserving vehicle value through precision care.
            </p>

            <div className="flex items-center gap-2 text-xs text-white font-mono">
              <span className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />
                ))}
              </span>
              <span className="text-zinc-500">5/5 Google Standard</span>
            </div>
          </div>

          {/* Quick Section Nav */}
          <div className="space-y-4 text-xs">
            <h4 className="font-display font-extrabold text-white text-xs uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {["about", "ppf", "services", "contact"].map((id) => (
                <li key={id}>
                  <button
                    onClick={() => onNavigate(id)}
                    className="hover:text-white uppercase font-mono tracking-wider transition-colors text-[10px] text-left cursor-pointer"
                  >
                    {id === "ppf" ? "paint protection film" : id.replace("-", " ")}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 text-xs">
            <h4 className="font-display font-extrabold text-white text-xs uppercase tracking-widest">Connect Directly</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-zinc-400">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span>
                  22 Chrysanthemum St, Lenasia, 1820, Johannesburg, South Africa
                </span>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-400">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href="tel:+27646568846" className="hover:text-white transition-colors">+27 64 656 8846</a>
              </li>
              <li className="flex items-center gap-2.5 text-zinc-400">
                <Mail className="w-4 h-3.5 text-white shrink-0" />
                <a href="mailto:Cartelcleanza@gmail.com" className="hover:text-white transition-colors">Cartelcleanza@gmail.com</a>
              </li>
              <li className="pt-2 flex items-center gap-3">
                <a
                  href="https://www.instagram.com/cartelclean_za/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  title="Follow us on Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-300 hover:text-white hover:bg-white/15 hover:border-cyan-400/50 transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </li>
            </ul>
          </div>

          {/* Operating Hours & Google link */}
          <div className="space-y-4 text-xs">
            <h4 className="font-display font-extrabold text-white text-xs uppercase tracking-widest">Studio Hours</h4>
            <ul className="space-y-2 text-zinc-500">
              <li className="flex justify-between">
                <span>Weekdays:</span>
                <span className="text-zinc-300">08:00 - 17:00</span>
              </li>
              <li className="flex justify-between">
                <span>Saturdays:</span>
                <span className="text-zinc-300">By Bookings Only</span>
              </li>
              <li className="flex justify-between text-white font-semibold">
                <span>Sundays:</span>
                <span>Prior Booking Only</span>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="https://share.google/b7m5chbF6AGwkA1Gk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-white hover:underline font-mono"
              >
                <span>Google Business Location</span>
                <ExternalLink className="w-3.5 h-3.5 text-white" />
              </a>
            </div>
          </div>

        </div>

        {/* Lower Disclaimer */}
        <div className="pt-8 flex justify-center items-center gap-4 text-[10px] text-zinc-600 font-mono uppercase tracking-wider text-center">
          <p>© {new Date().getFullYear()} CARTEL CLEAN ZA. ALL RIGHTS RESERVED.</p>
        </div>

      </div>
    </footer>
  );
}
