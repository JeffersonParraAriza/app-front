"use client"

import { AppProvider, useApp } from "../contexts/AppContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Navigation } from "../components/navigation";
import { Slider } from "../components/slider";
import { Hero } from "../components/hero";
import { ServicesList } from "../components/services-list";
import { ServiceDetail } from "../components/service-detail";
import { Testimonials } from "../components/testimonials";
import { Contact } from "../components/contact";
import { About } from "../components/about";
import { Login } from "../components/login";
import { AdminPanel } from "../components/admin-panel";
import { Footer } from "../components/footer";

function AppContent() {
  const { currentView } = useApp();

  const renderContent = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Slider />
            <Hero />
            <Testimonials />
          </>
        );
      case 'services':
        return <ServicesList />;
      case 'service-detail':
        return <ServiceDetail />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'login':
        return <Login />;
      case 'admin':
        return <AdminPanel />;
      default:
        return (
          <>
            <Slider />
            <Hero />
            <Testimonials />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </ThemeProvider>
  );
}