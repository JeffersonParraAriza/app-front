import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";
import { Facebook, Twitter, Instagram, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-16 text-center">
          <h3 className="text-2xl mb-4">Mantente al día con nuestras novedades</h3>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe tips exclusivos, casos de estudio y ofertas especiales.
          </p>
          <div className="flex max-w-md mx-auto">
            <Input 
              placeholder="Tu email"
              className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
            />
            <Button variant="secondary" className="ml-2 flex-shrink-0">
              <Mail className="size-4 mr-2" />
              Suscribirse
            </Button>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl mb-4">ServicesPro</h2>
              <p className="text-primary-foreground/80 mb-6">
                Impulsamos el crecimiento de tu negocio con soluciones digitales innovadoras y consultoría estratégica personalizada.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="p-2">
                  <Facebook className="size-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="size-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Instagram className="size-5" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="size-5" />
                </Button>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="mb-6">Servicios</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Consultoría Empresarial</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Marketing Digital</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Desarrollo Web</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">SEO & SEM</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">E-commerce</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Branding</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="mb-6">Empresa</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobre Nosotros</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Nuestro Equipo</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Casos de Éxito</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Prensa</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="mb-6">Soporte</h4>
              <ul className="space-y-3 text-primary-foreground/80">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Centro de Ayuda</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">FAQ</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Política de Privacidad</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Términos de Servicio</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Cookies</a></li>
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-primary-foreground/80 mb-4 md:mb-0">
              © 2024 ServicesPro. Todos los derechos reservados.
            </div>
            <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
              <span>🇪🇸 Español</span>
              <span>•</span>
              <span>Madrid, España</span>
              <span>•</span>
              <span>+34 912 345 678</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}