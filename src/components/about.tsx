import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Users, Target, Award, Lightbulb } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Target,
      title: "Orientados a Resultados",
      description: "Nos enfocamos en generar resultados medibles y tangibles para nuestros clientes."
    },
    {
      icon: Users,
      title: "Equipo Experto",
      description: "Contamos con profesionales altamente capacitados en cada área de especialización."
    },
    {
      icon: Award,
      title: "Calidad Garantizada",
      description: "Mantenemos los más altos estándares de calidad en todos nuestros servicios."
    },
    {
      icon: Lightbulb,
      title: "Innovación Constante",
      description: "Adoptamos las últimas tecnologías y metodologías para estar a la vanguardia."
    }
  ];

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4">Sobre Nosotros</Badge>
          <h1 className="text-3xl lg:text-4xl mb-6">
            Conoce a <span className="text-primary">TechServices Pro</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Desde 2019, hemos estado transformando empresas a través de soluciones tecnológicas innovadoras 
            y estrategias de negocio efectivas.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Empoderar a las empresas mediante la implementación de soluciones tecnológicas 
                integrales que optimicen sus procesos, incrementen su competitividad y generen 
                un crecimiento sostenible en el mercado digital actual.
              </p>
            </div>
            <div>
              <h2 className="text-2xl mb-4">Nuestra Visión</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconocidos como la empresa líder en servicios tecnológicos empresariales, 
                siendo el socio estratégico preferido para la transformación digital de 
                organizaciones de todos los tamaños.
              </p>
            </div>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNTcxOTY5NzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Oficina moderna de TechServices Pro"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl text-center mb-12">Nuestros Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="bg-primary rounded-full p-3 w-fit mx-auto mb-4">
                      <IconComponent className="size-6 text-primary-foreground" />
                    </div>
                    <h3 className="mb-3">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <div className="bg-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="text-center mb-12">
            <h2 className="text-2xl mb-4">TechServices Pro en Números</h2>
            <p className="text-primary-foreground/80">
              Nuestro track record habla por sí solo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-2">500+</div>
              <div className="text-primary-foreground/80">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">50+</div>
              <div className="text-primary-foreground/80">Empresas Atendidas</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">98%</div>
              <div className="text-primary-foreground/80">Satisfacción del Cliente</div>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-2">24/7</div>
              <div className="text-primary-foreground/80">Soporte Técnico</div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <h2 className="text-2xl text-center mb-12">Nuestro Equipo</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">JR</span>
                </div>
                <h3 className="mb-2">Juan Rodríguez</h3>
                <p className="text-muted-foreground mb-3">CEO & Fundador</p>
                <p className="text-sm text-muted-foreground">
                  15+ años de experiencia en transformación digital empresarial.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">ML</span>
                </div>
                <h3 className="mb-2">María López</h3>
                <p className="text-muted-foreground mb-3">Directora de Marketing</p>
                <p className="text-sm text-muted-foreground">
                  Especialista en estrategias de marketing digital y growth hacking.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-20 h-20 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-primary-foreground text-xl">CS</span>
                </div>
                <h3 className="mb-2">Carlos Silva</h3>
                <p className="text-muted-foreground mb-3">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Arquitecto de software con expertise en desarrollo full-stack.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}