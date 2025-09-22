import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ArrowRight, Tag } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../contexts/AppContext";

export function ServicesList() {
  const { services, setSelectedService, setCurrentView } = useApp();

  const handleServiceClick = (service: any) => {
    setSelectedService(service);
    setCurrentView('service-detail');
  };

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Nuestros <span className="text-primary">Servicios</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra amplia gama de servicios profesionales diseñados para impulsar tu negocio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card key={service.id} className="relative overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer">
              {service.onPromotion && (
                <Badge className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600">
                  <Tag className="size-3 mr-1" />
                  Promoción
                </Badge>
              )}
              
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={service.image}
                  alt={service.name}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="line-clamp-2 group-hover:text-primary transition-colors">
                    {service.name}
                  </CardTitle>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl text-primary">
                    €{service.price.toLocaleString()}
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {service.category}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent>
                <CardDescription className="line-clamp-3 mb-4">
                  {service.description}
                </CardDescription>
                
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-muted-foreground">
                    Disponibles: {service.quantity}
                  </span>
                  {service.onPromotion && (
                    <span className="text-sm text-red-600 font-medium">
                      ¡Oferta especial!
                    </span>
                  )}
                </div>
                
                <Button 
                  className="w-full group"
                  onClick={() => handleServiceClick(service)}
                >
                  Ver Detalles
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            ¿No encuentras lo que buscas? Contáctanos para servicios personalizados.
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => setCurrentView('contact')}
          >
            Solicitar Consulta
          </Button>
        </div>
      </div>
    </section>
  );
}