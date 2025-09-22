import { Card, CardContent } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "María González",
    role: "CEO, TechStart",
    content: "ServicesPro transformó completamente nuestra estrategia digital. En solo 6 meses, nuestras ventas online aumentaron un 150%. Su equipo es excepcional.",
    rating: 5,
    avatar: "MG"
  },
  {
    id: 2,
    name: "Carlos Rodríguez",
    role: "Director Marketing, RetailPlus",
    content: "La consultoría empresarial que recibimos nos ayudó a optimizar nuestros procesos y reducir costos en un 30%. Altamente recomendados.",
    rating: 5,
    avatar: "CR"
  },
  {
    id: 3,
    name: "Ana López",
    role: "Fundadora, EcoShop",
    content: "El desarrollo de nuestro e-commerce superó todas nuestras expectativas. La plataforma es intuitiva, rápida y ha mejorado significativamente la experiencia de nuestros clientes.",
    rating: 5,
    avatar: "AL"
  },
  {
    id: 4,
    name: "Roberto Silva",
    role: "Gerente General, Constructora Silva",
    content: "Su estrategia de marketing digital nos posicionó como líderes en nuestro sector. El ROI ha sido excepcional desde el primer mes.",
    rating: 5,
    avatar: "RS"
  },
  {
    id: 5,
    name: "Laura Martínez",
    role: "Directora, Clínica Dental+",
    content: "Profesionales comprometidos que entienden las necesidades específicas de cada negocio. Su soporte técnico es excepcional.",
    rating: 5,
    avatar: "LM"
  },
  {
    id: 6,
    name: "Diego Herrera",
    role: "CEO, FitnessPro",
    content: "Trabajar con ServicesPro ha sido la mejor decisión para nuestro crecimiento. Han sido verdaderos socios estratégicos.",
    rating: 5,
    avatar: "DH"
  }
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            Lo que dicen nuestros <span className="text-primary">clientes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            La confianza de más de 500 empresas nos respalda
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center">
                  <Avatar className="mr-3">
                    <AvatarImage src="" alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-medium">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-secondary/50 rounded-full px-6 py-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="size-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span>4.9/5 basado en 200+ reseñas</span>
          </div>
        </div>
      </div>
    </section>
  );
}