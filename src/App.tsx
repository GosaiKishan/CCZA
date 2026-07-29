import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import PaintProtectionFilm from "./components/PaintProtectionFilm";
import CeramicCoatings from "./components/CeramicCoatings";
import Services from "./components/Services";
import DiagonalDivider from "./components/DiagonalDivider";
import FAQ from "./components/FAQ";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import FadeInSection from "./components/FadeInSection";
import PPFDetailsPage from "./components/PPFDetailsPage";
import CeramicCoatingsDetailsPage from "./components/CeramicCoatingsDetailsPage";
import MaintenanceWash from "./components/MaintenanceWash";
import VehicleBranding from "./components/VehicleBranding";
import ServicesDetailsPage from "./components/ServicesDetailsPage";
import OtherServicesCTA from "./components/OtherServicesCTA";
import WorkGalleryShowcase from "./components/WorkGalleryShowcase";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [currentView, setCurrentView] = useState<"home" | "ppf-details" | "ceramic-details" | "services-details">("home");

  const openWhatsApp = (message: string) => {
    window.open(`https://wa.me/27646568846?text=${encodeURIComponent(message)}`, "_blank");
  };

  const handleNavigate = (sectionId: string) => {
    if (sectionId === "book-now") {
      openWhatsApp("Hi Cartel Clean 🇿🇦! I would like to inquire about your premium vehicle detailing and styling packages.");
      return;
    }
    
    if (sectionId === "services" || sectionId === "services-details") {
      setCurrentView("services-details");
      window.scrollTo(0, 0);
      return;
    }
    
    if (sectionId === "ppf") {
      setCurrentView("ppf-details");
      window.scrollTo(0, 0);
      return;
    }

    if (sectionId === "ceramic") {
      setCurrentView("ceramic-details");
      window.scrollTo(0, 0);
      return;
    }

    setCurrentView("home");
    setActiveSection(sectionId);
    
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const handleSelectService = (serviceName: string) => {
    openWhatsApp(`Hi Cartel Clean 🇿🇦! I would like to book/inquire about your "${serviceName}" service package. Let me know your available schedule!`);
  };

  return (
    <div className="min-h-screen bg-black text-[#f3f4f6] selection:bg-white selection:text-black" id="app-root">
      
      {/* Floating navigation overlay */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      <main>
        {currentView === "home" ? (
          <>
            {/* Cinematic Slide Show Hero screen */}
            <Hero 
              onExploreServices={() => handleNavigate("services")} 
              onBookNow={() => handleNavigate("book-now")} 
            />

            <DiagonalDivider />

            {/* Storytelling & Studio standards ("About Us") */}
            <FadeInSection>
              <AboutUs />
            </FadeInSection>

            {/* Paint Protection Film (PPF) Dedicated Showcase */}
            <FadeInSection>
              <PaintProtectionFilm 
                onSelectService={handleSelectService} 
                onLearnMore={() => setCurrentView("ppf-details")}
              />
            </FadeInSection>
            <DiagonalDivider />

            {/* Ceramic Coatings Dedicated Showcase */}
            <FadeInSection>
              <CeramicCoatings onLearnMore={() => setCurrentView("ceramic-details")} />
            </FadeInSection>
            <DiagonalDivider />

            {/* Maintenance Wash Section */}
            <FadeInSection>
              <MaintenanceWash onSelectService={handleSelectService} />
            </FadeInSection>
            <DiagonalDivider />

            {/* Vehicle Branding Section */}
            <FadeInSection>
              <VehicleBranding onSelectService={handleSelectService} />
            </FadeInSection>
            <DiagonalDivider />

            {/* Other Services CTA Section */}
            <FadeInSection>
              <OtherServicesCTA onLearnMore={() => handleNavigate("services-details")} />
            </FadeInSection>
            <DiagonalDivider />

            {/* Work Showcase Gallery */}
            <FadeInSection>
              <WorkGalleryShowcase />
            </FadeInSection>

            {/* Knowledge Base */}
            <FadeInSection>
              <FAQ />
            </FadeInSection>

            {/* Contact and Location */}
            <FadeInSection>
              <ContactUs />
            </FadeInSection>
          </>
        ) : currentView === "ppf-details" ? (
          <PPFDetailsPage 
            onBack={() => setCurrentView("home")} 
            onSelectService={handleSelectService} 
          />
        ) : currentView === "ceramic-details" ? (
          <CeramicCoatingsDetailsPage 
            onBack={() => setCurrentView("home")} 
            onSelectService={handleSelectService} 
          />
        ) : (
          <ServicesDetailsPage
            onBack={() => setCurrentView("home")}
            onSelectService={handleSelectService}
          />
        )}
      </main>

      {/* Comprehensive footer with business specifications */}
      <Footer onNavigate={handleNavigate} />

      {/* Dynamic Floating Action Button for prompt live inquiries */}
      <WhatsAppFAB />

    </div>
  );
}
