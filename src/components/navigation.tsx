"use client"

import { Button } from "./ui/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "./ui/navigation-menu";
import { Menu, X, LogOut, Settings, User } from "lucide-react";
import { useState } from "react";
import { useApp } from "../contexts/AppContext";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { ThemeToggle } from "../components/theme-toggle";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentView, setCurrentView, isAdmin, setIsAdmin } = useApp();

  const handleNavigation = (view: string) => {
    setCurrentView(view);
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setCurrentView('home');
  };

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => handleNavigation('home')}
              className="hover:text-primary transition-colors"
            >
              <h1>TechServices Pro</h1>
            </button>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavigation('home')}
                  className={`px-4 py-2 hover:text-primary transition-colors cursor-pointer ${currentView === 'home' ? 'text-primary' : ''}`}
                >
                  Inicio
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavigation('services')}
                  className={`px-4 py-2 hover:text-primary transition-colors cursor-pointer ${currentView === 'services' ? 'text-primary' : ''}`}
                >
                  Servicios
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavigation('about')}
                  className={`px-4 py-2 hover:text-primary transition-colors cursor-pointer ${currentView === 'about' ? 'text-primary' : ''}`}
                >
                  Nosotros
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink 
                  onClick={() => handleNavigation('contact')}
                  className={`px-4 py-2 hover:text-primary transition-colors cursor-pointer ${currentView === 'contact' ? 'text-primary' : ''}`}
                >
                  Contacto
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            {isAdmin ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <User className="size-4" />
                    Admin
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => handleNavigation('admin')}>
                    <Settings className="size-4 mr-2" />
                    Panel Admin
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout}>
                    <LogOut className="size-4 mr-2" />
                    Cerrar Sesión
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <>
                <Button 
                  variant="outline"
                  onClick={() => handleNavigation('login')}
                >
                  Admin Login
                </Button>
                <Button onClick={() => handleNavigation('contact')}>
                  Comenzar Ahora
                </Button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-2 md:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => handleNavigation('home')}
                className={`text-left hover:text-primary transition-colors ${currentView === 'home' ? 'text-primary' : ''}`}
              >
                Inicio
              </button>
              <button 
                onClick={() => handleNavigation('services')}
                className={`text-left hover:text-primary transition-colors ${currentView === 'services' ? 'text-primary' : ''}`}
              >
                Servicios
              </button>
              <button 
                onClick={() => handleNavigation('about')}
                className={`text-left hover:text-primary transition-colors ${currentView === 'about' ? 'text-primary' : ''}`}
              >
                Nosotros
              </button>
              <button 
                onClick={() => handleNavigation('contact')}
                className={`text-left hover:text-primary transition-colors ${currentView === 'contact' ? 'text-primary' : ''}`}
              >
                Contacto
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                {isAdmin ? (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleNavigation('admin')}
                    >
                      Panel Admin
                    </Button>
                    <Button 
                      variant="destructive" 
                      size="sm"
                      onClick={handleLogout}
                    >
                      Cerrar Sesión
                    </Button>
                  </>
                ) : (
                  <>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleNavigation('login')}
                    >
                      Admin Login
                    </Button>
                    <Button 
                      size="sm"
                      onClick={() => handleNavigation('contact')}
                    >
                      Comenzar Ahora
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}