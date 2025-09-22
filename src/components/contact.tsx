import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Label } from "./ui/label";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl mb-4">
            ¿Listo para <span className="text-primary">comenzar?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre cómo podemos impulsar tu negocio
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle>Solicita una Consulta Gratuita</CardTitle>
              <CardDescription>
                Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nombre">Nombre *</Label>
                  <Input id="nombre" placeholder="Tu nombre completo" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="empresa">Empresa</Label>
                  <Input id="empresa" placeholder="Nombre de tu empresa" />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="tu@email.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="telefono">Teléfono</Label>
                  <Input id="telefono" placeholder="+34 600 000 000" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="servicio">Servicio de Interés *</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="consultoria">Consultoría Empresarial</SelectItem>
                    <SelectItem value="marketing">Marketing Digital</SelectItem>
                    <SelectItem value="desarrollo">Desarrollo Web</SelectItem>
                    <SelectItem value="todo">Todos los servicios</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="presupuesto">Presupuesto Estimado</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecciona un rango" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1000-5000">€1,000 - €5,000</SelectItem>
                    <SelectItem value="5000-10000">€5,000 - €10,000</SelectItem>
                    <SelectItem value="10000-25000">€10,000 - €25,000</SelectItem>
                    <SelectItem value="25000+">€25,000+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="mensaje">Mensaje</Label>
                <Textarea 
                  id="mensaje" 
                  placeholder="Cuéntanos más sobre tu proyecto y objetivos..."
                  className="min-h-[120px]"
                />
              </div>

              <Button className="w-full">
                Enviar Solicitud
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Al enviar este formulario, aceptas nuestros términos y condiciones.
              </p>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Información de Contacto</CardTitle>
                <CardDescription>
                  Múltiples formas de ponerte en contacto con nosotros
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-lg p-2">
                    <Phone className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4>Teléfono</h4>
                    <p className="text-muted-foreground">+34 912 345 678</p>
                    <p className="text-muted-foreground">+34 600 123 456</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-lg p-2">
                    <Mail className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4>Email</h4>
                    <p className="text-muted-foreground">info@servicespro.com</p>
                    <p className="text-muted-foreground">ventas@servicespro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-lg p-2">
                    <MapPin className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4>Oficina</h4>
                    <p className="text-muted-foreground">
                      Calle Gran Vía 123<br />
                      28013 Madrid, España
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary rounded-lg p-2">
                    <Clock className="size-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4>Horario</h4>
                    <p className="text-muted-foreground">
                      Lunes - Viernes: 9:00 - 18:00<br />
                      Sábados: 10:00 - 14:00
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="p-6">
                <h3 className="mb-4">¿Necesitas ayuda urgente?</h3>
                <p className="mb-6 opacity-90">
                  Nuestro equipo de soporte está disponible 24/7 para atender emergencias empresariales.
                </p>
                <Button variant="secondary" className="w-full">
                  Contacto de Emergencia
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}