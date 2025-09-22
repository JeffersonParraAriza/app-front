import { Button } from "../components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../contexts/AppContext";

export function Hero() {
  const { setCurrentView } = useApp();

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center rounded-full border px-4 py-1.5 bg-secondary/50">
              <Star className="size-4 mr-2 fill-yellow-400 text-yellow-400" />
              <span className="text-sm">Más de 500 clientes satisfechos</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl tracking-tight">
              Bienvenido a{" "}
              <span className="text-primary">TechServices Pro</span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Somos una empresa líder en soluciones tecnológicas empresariales, especializada en 
              consultoría, marketing digital, desarrollo web y servicios integrales para impulsar 
              el crecimiento de tu negocio en la era digital.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="group"
              onClick={() => setCurrentView('services')}
            >
              Explorar Servicios
              <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => setCurrentView('contact')}
            >
              Contactar Ahora
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="text-center">
              <div className="text-3xl text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Satisfacción del Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-3xl text-primary mb-2">5+</div>
              <div className="text-muted-foreground">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}