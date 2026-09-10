import React, { useState, useEffect } from 'react';
import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Gallery from './components/Gallery'; // 1. Already Imported
import PricingPlans from './components/PricingPlans';
import Process from './components/Process';
import Locations from './components/Locations';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

/**
 * Custom Site Loader Component.
 * This displays on a full screen until the application is ready.
 * Customize this to match your brand (e.g., logo, specific animation).
 */
const SiteLoader = () => (
  <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-950 text-white select-none">
    {/* EXAMPLE LOADER: Customize this SVG/Animation */}
    <div className="flex flex-col items-center gap-6">
      <div className="w-16 h-16 border-t-4 border-amber-500 rounded-full animate-spin"></div>
      <span className="font-serif text-3xl font-bold text-amber-500">
        Labbaik
      </span>
      <span className="text-xs uppercase tracking-widest text-stone-400">
        Home Project
      </span>
    </div>
  </div>
);

export default function App() {
  // 1. Define a loading state, default to true.
  const [isLoading, setIsLoading] = useState(true);

  // 2. Add an effect to handle the loader hide event.
  // We use a simple setTimeout to simulate a loading duration and animation.
  useEffect(() => {
    // Customize the timeout duration (1800ms) as needed.
    const loaderTimeout = setTimeout(() => {
      setIsLoading(false); // Hide the loader and show main app
    }, 1800); // 1.8 seconds

    // Cleanup function to avoid memory leaks
    return () => clearTimeout(loaderTimeout);
  }, []);

  // 3. Conditional Rendering: Show loader or main content
  if (isLoading) {
    // If we are still loading, only return the loader screen.
    return <SiteLoader />;
  }

  // 4. Return your main application content when not loading.
  // Your existing selection colors and component hierarchy are preserved.
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-900 selection:bg-amber-200 selection:text-stone-900">
      <TopBanner />
      <Navbar />
      <Hero />
      <Services />
      <Gallery /> {/* Gallery Rendered in position 5 */}
      <PricingPlans />
      <Process />
      <Locations />
      <AboutUs />
      <ContactForm />
      <Footer />
      <FloatingActions />
    </div>
  );
}