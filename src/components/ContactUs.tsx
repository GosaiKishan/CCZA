import React from "react";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="py-24 bg-black scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-white text-[10px] font-mono uppercase tracking-widest mb-6">
            <MapPin className="w-3.5 h-3.5 text-zinc-300" />
            Visit Our Studio
          </div>
          <h2 className="text-3xl sm:text-4xl font-display font-black text-white uppercase tracking-tight mb-4">
            Contact & Location
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Ready to elevate your vehicle's aesthetic? Reach out to us to schedule an appointment or visit our premier detailing studio in Johannesburg.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Contact Details */}
          <div className="space-y-8">
            <div className="group p-6 rounded-2xl bg-[#111113] border border-white/5 transition-colors hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold uppercase tracking-wider mb-2">Location</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Cartelclean<br />
                    Johannesburg, South Africa
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-[#111113] border border-white/5 transition-colors hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold uppercase tracking-wider mb-2">Call Us</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    +27 64 656 8846<br />
                    <span className="text-zinc-500 text-xs">Mon-Fri: 8am-5pm | Sat: 8am-1pm</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-6 rounded-2xl bg-[#111113] border border-white/5 transition-colors hover:border-white/20">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/5 text-white">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-display font-bold uppercase tracking-wider mb-2">Email</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed">
                    Cartelcleanza@gmail.com<br />
                    <span className="text-zinc-500 text-xs">Response within 24 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[400px] lg:h-full min-h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-[#111113]">
            <iframe
              src="https://maps.google.com/maps?t=m&q=Cartelclean,+Johannesburg&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cartelclean Location"
              className="grayscale contrast-125 opacity-80 hover:opacity-100 transition-all duration-500"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
