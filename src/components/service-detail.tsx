import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { ArrowLeft, Package, Tag, CheckCircle, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useApp } from "../contexts/AppContext";

export function ServiceDetail() {
  const { selectedService, setCurrentView } = useApp();

  if (!selectedService) {
    return (
      <div className="py-20 text-center">
        <p>Servicio no encontrado</p>
        <Button 
          onClick={() => setCurrentView('services')}
          className="mt-4"
        >
          Volver a Servicios
        </Button>
      </div>
    );
  }

  const features = [
    "Consultoría personalizada",
    "Soporte técnico 24/7",
    "Implementación guiada",
    "Documentación completa",
    "Garantía de satisfacción",
    "Seguimiento post-implementación"
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Back button */}
        <Button 
          variant="ghost" 
          className="mb-8 group"
          onClick={() => setCurrentView('services')}
        >
          <ArrowLeft className="mr-2 size-4 transition-transform group-hover:-translate-x-1" />
          Volver a Servicios
        </Button>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Image Section */}
          <div className="space-y-4">
            <div className="relative">
              {selectedService.onPromotion && (
                <Badge className="absolute top-4 right-4 z-10 bg-red-500 hover:bg-red-600">
                  <Tag className="size-3 mr-1" />
                  Promoción Especial
                </Badge>
              )}
              <ImageWithFallback
                src={selectedService.image}
                alt={selectedService.name}
                className="w-full h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>
            
            {/* Additional info cards */}
            <div className="grid grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <Package className="size-6 mx-auto mb-2 text-primary" />
                  <div className="font-medium">Disponibles</div>
                  <div className="text-2xl text-primary">{selectedService.quantity}</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4 text-center">
                  <Star className="size-6 mx-auto mb-2 text-yellow-500" />
                  <div className="font-medium">Calificación</div>
                  <div className="text-2xl">4.8/5</div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">{selectedService.category}</Badge>
                {selectedService.onPromotion && (
                  <Badge className="bg-red-500 hover:bg-red-600">
                    Oferta Limitada
                  </Badge>
                )}
              </div>
              <h1 className="text-3xl lg:text-4xl mb-4">{selectedService.name}</h1>
              <div className="flex items-baseline gap-4 mb-6">
                <div className="text-4xl text-primary">
                  €{selectedService.price.toLocaleString()}
                </div>
                {selectedService.onPromotion && (
                  <div className="text-lg text-muted-foreground line-through">
                    €{Math.round(selectedService.price * 1.2).toLocaleString()}
                  </div>
                )}
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4">Descripción del Servicio</h3>
              <p className="text-muted-foreground leading-relaxed">
                {selectedService.description}
              </p>
            </div>

            <Separator />

            <div>
              <h3 className="mb-4">¿Qué incluye este servicio?</h3>
              <div className="grid gap-3">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Availability Status */}
            <Card className={`${selectedService.quantity > 0 ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'}`}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className={selectedService.quantity > 0 ? 'text-green-800' : 'text-red-800'}>
                      {selectedService.quantity > 0 ? 'Disponible' : 'Agotado'}
                    </h4>
                    <p className={`text-sm ${selectedService.quantity > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {selectedService.quantity > 0 
                        ? `${selectedService.quantity} servicios disponibles`
                        : 'Actualmente no disponible'
                      }
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full ${selectedService.quantity > 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="space-y-4">
              <Button 
                className="w-full" 
                size="lg"
                disabled={selectedService.quantity === 0}
                onClick={() => setCurrentView('contact')}
              >
                {selectedService.quantity > 0 ? 'Solicitar Servicio' : 'Notificarme cuando esté disponible'}
              </Button>
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setCurrentView('contact')}
              >
                Solicitar Información
              </Button>
            </div>

            {selectedService.onPromotion && (
              <Card className="border-red-200 bg-red-50">
                <CardContent className="p-4">
                  <h4 className="text-red-800 mb-2">¡Promoción especial!</h4>
                  <p className="text-red-600 text-sm">
                    Aprovecha esta oferta limitada y ahorra un 20% en este servicio. 
                    La promoción es válida hasta fin de mes.
                  </p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Related Services */}
        <div className="mt-20">
          <h3 className="text-center mb-8">Servicios Relacionados</h3>
          <div className="text-center">
            <Button 
              variant="outline"
              onClick={() => setCurrentView('services')}
            >
              Ver Todos los Servicios
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}