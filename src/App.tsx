import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { DecorativeElements } from './components/DecorativeElements';

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Decorative background elements */}
      <DecorativeElements />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ContactSection />
      </main>
    </div>
  );
}
