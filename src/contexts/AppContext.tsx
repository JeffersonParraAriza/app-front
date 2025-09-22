"use client"

import { createContext, useContext, useState, ReactNode } from 'react';

export interface Service {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  quantity: number;
  onPromotion: boolean;
  category: string;
}

interface AppContextType {
  currentView: string;
  setCurrentView: (view: string) => void;
  isAdmin: boolean;
  setIsAdmin: (admin: boolean) => void;
  services: Service[];
  setServices: (services: Service[]) => void;
  selectedService: Service | null;
  setSelectedService: (service: Service | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

const initialServices: Service[] = [
  {
    id: 1,
    name: "Consultoría Empresarial",
    price: 2500,
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc1NzIyNzcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Consultoría integral para optimizar procesos empresariales, mejorar la eficiencia operativa y desarrollar estrategias de crecimiento sostenible.",
    quantity: 15,
    onPromotion: true,
    category: "Consultoría"
  },
  {
    id: 2,
    name: "Marketing Digital",
    price: 1800,
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NzIxNjMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Estrategias completas de marketing digital incluyendo SEO, SEM, redes sociales y análisis de datos para maximizar tu presencia online.",
    quantity: 25,
    onPromotion: false,
    category: "Marketing"
  },
  {
    id: 3,
    name: "Desarrollo Web",
    price: 3500,
    image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTcxNzI2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Desarrollo de sitios web modernos, responsivos y optimizados para conversión, incluyendo e-commerce y sistemas personalizados.",
    quantity: 8,
    onPromotion: true,
    category: "Desarrollo"
  },
  {
    id: 4,
    name: "Branding Corporativo",
    price: 2200,
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwc3RyYXRlZ3klMjBwbGFubmluZ3xlbnwxfHx8fDE3NTcyNDU4Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Creación y desarrollo de identidad corporativa completa, incluyendo logo, manual de marca y estrategia de posicionamiento.",
    quantity: 12,
    onPromotion: false,
    category: "Branding"
  },
  {
    id: 5,
    name: "Automatización de Procesos",
    price: 4200,
    image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU3MTk2OTc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Implementación de sistemas de automatización para optimizar workflows y reducir tareas manuales repetitivas.",
    quantity: 6,
    onPromotion: true,
    category: "Tecnología"
  },
  {
    id: 6,
    name: "Análisis de Datos",
    price: 2800,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NzI4MzE4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Servicios de análisis de datos empresariales para toma de decisiones informada y identificación de oportunidades de negocio.",
    quantity: 18,
    onPromotion: false,
    category: "Análisis"
  },
  {
    id: 7,
    name: "Capacitación Corporativa",
    price: 1600,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFpbmluZyUyMHdvcmtzaG9wfGVufDF8fHx8MTc1NzI4MzM4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Programas de capacitación personalizada para equipos de trabajo en habilidades digitales y metodologías ágiles.",
    quantity: 30,
    onPromotion: false,
    category: "Capacitación"
  },
  {
    id: 8,
    name: "Ciberseguridad",
    price: 3800,
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc1NzI4NDA0NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Auditorías de seguridad, implementación de protocolos de ciberseguridad y monitoreo continuo de amenazas.",
    quantity: 10,
    onPromotion: true,
    category: "Seguridad"
  },
  {
    id: 9,
    name: "E-commerce Solutions",
    price: 5200,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZ3xlbnwxfHx8fDE3NTcyODQyNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Desarrollo completo de plataformas de comercio electrónico con integración de pagos, inventario y CRM.",
    quantity: 5,
    onPromotion: false,
    category: "E-commerce"
  },
  {
    id: 10,
    name: "Gestión de Redes Sociales",
    price: 1200,
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZW1lbnR8ZW58MXx8fHwxNzU3Mjg0NDcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Gestión integral de redes sociales, creación de contenido, community management y análisis de engagement.",
    quantity: 40,
    onPromotion: true,
    category: "Social Media"
  }
];

export function AppProvider({ children }: { children: ReactNode }) {
  const [currentView, setCurrentView] = useState('home');
  const [isAdmin, setIsAdmin] = useState(false);
  const [services, setServices] = useState<Service[]>(initialServices);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <AppContext.Provider value={{
      currentView,
      setCurrentView,
      isAdmin,
      setIsAdmin,
      services,
      setServices,
      selectedService,
      setSelectedService
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}