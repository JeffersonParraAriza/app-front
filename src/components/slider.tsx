"use client"

import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useApp } from '../contexts/AppContext';

const slides = [
  {
    id: 1,
    title: "Transformamos tu negocio con tecnología",
    subtitle: "Consultoría empresarial de vanguardia",
    description: "Implementamos soluciones tecnológicas personalizadas que impulsan el crecimiento y la eficiencia de tu empresa.",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGNvbnN1bHRpbmclMjBtZWV0aW5nfGVufDF8fHx8MTc1NzIyNzcxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cta: "Conocer más"
  },
  {
    id: 2,
    title: "Marketing digital que genera resultados",
    subtitle: "Estrategias probadas y efectivas",
    description: "Aumenta tu presencia online y convierte más visitantes en clientes con nuestras estrategias de marketing digital.",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NzIxNjMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cta: "Ver servicios"
  },
  {
    id: 3,
    title: "Desarrollo web de clase mundial",
    subtitle: "Sitios web que convierten",
    description: "Creamos experiencias digitales únicas que destacan tu marca y generan mayor engagement con tus clientes.",
    image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTcxNzI2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    cta: "Solicitar cotización"
  }
];

export function Slider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { setCurrentView } = useApp();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-[70vh] overflow-hidden bg-gradient-to-b from-background to-secondary/20">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative h-full">
              <ImageWithFallback
                src={slide.image}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
              
              {/* Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 lg:px-8">
                  <div className="max-w-2xl text-white">
                    <p className="text-lg mb-2 text-white/80">{slide.subtitle}</p>
                    <h1 className="text-4xl lg:text-6xl mb-6 leading-tight text-white">
                      {slide.title}
                    </h1>
                    <p className="text-xl mb-8 text-white/90">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg" 
                        className="group bg-primary text-primary-foreground hover:bg-primary/90"
                        onClick={() => setCurrentView('services')}
                      >
                        {slide.cta}
                        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                        onClick={() => setCurrentView('contact')}
                      >
                        Contactar ahora
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
      >
        <ChevronLeft className="size-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
      >
        <ChevronRight className="size-6" />
      </button>

      {/* Dots indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}