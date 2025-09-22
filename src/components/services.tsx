import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { TrendingUp, Code, Users, ArrowRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const services = [
  {
    id: 1,
    title: "Consultoría Empresarial",
    description: "Optimizamos tus procesos empresariales y estrategias de negocio para maximizar la eficiencia y rentabilidad.",
    image: "https://images.unsplash.com/photo-1657727534676-cac1bb160d64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjb25zdWx0YW50JTIwd29ya2luZ3xlbnwxfHx8fDE3NTcyODI2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Users,
    price: "Desde $2,500/mes",
    features: ["Análisis de procesos", "Estrategia de negocio", "Optimización de recursos", "Consultoría personalizada"],
    badge: "Más Popular"
  },
  {
    id: 2,
    title: "Marketing Digital",
    description: "Aumenta tu presencia online y genera más leads con nuestras estrategias de marketing digital personalizadas.",
    image: "https://images.unsplash.com/photo-1599658880436-c61792e70672?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwYW5hbHl0aWNzfGVufDF8fHx8MTc1NzIxNjMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: TrendingUp,
    price: "Desde $1,800/mes",
    features: ["SEO y SEM", "Redes sociales", "Email marketing", "Analytics y reportes"],
    badge: null
  },
  {
    id: 3,
    title: "Desarrollo Web",
    description: "Creamos sitios web modernos, responsivos y optimizados que convierten visitantes en clientes.",
    image: "https://images.unsplash.com/photo-1546900703-cf06143d1239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NTcxNzI2OTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    icon: Code,
    price: "Desde $3,500",
    features: ["Diseño responsivo", "E-commerce", "CMS personalizado", "Mantenimiento incluido"],
    badge: "Nuevo"
  }
];

export function Services() {
  return (
    <section id="servicios" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Nuestros Servicios <span className="text-primary">Profesionales</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para impulsar tu negocio al siguiente nivel
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <Card key={service.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                {service.badge && (
                  <Badge className="absolute top-4 right-4 z-10">
                    {service.badge}
                  </Badge>
                )}
                
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-primary rounded-lg p-2">
                      <IconComponent className="size-6 text-primary-foreground" />
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{service.title}</CardTitle>
                    <div className="text-primary">{service.price}</div>
                  </div>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Button className="w-full group">
                    Solicitar Información
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <Button variant="outline" size="lg">
            Ver Todos los Servicios
          </Button>
        </div>
      </div>
    </section>
  );
}