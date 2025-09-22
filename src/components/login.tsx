"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Alert, AlertDescription } from "./ui/alert";
import { Lock, User, AlertCircle } from "lucide-react";
import { useApp } from "../contexts/AppContext";

export function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { setIsAdmin, setCurrentView } = useApp();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulamos una validación (en una app real sería con backend)
    setTimeout(() => {
      if (username === 'admin' && password === 'admin123') {
        setIsAdmin(true);
        setCurrentView('admin');
      } else {
        setError('Credenciales incorrectas. Usa admin/admin123 para acceder.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center py-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-md">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary rounded-full p-3 w-fit mb-4">
              <Lock className="size-6 text-primary-foreground" />
            </div>
            <CardTitle className="text-2xl">Acceso Administrador</CardTitle>
            <CardDescription>
              Ingresa tus credenciales para acceder al panel de administración
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="size-4" />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-2">
                <Label htmlFor="username">Usuario</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="username"
                    type="text"
                    placeholder="Ingresa tu usuario"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Contraseña</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Ingresa tu contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading}
              >
                {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentView('home')}
                className="text-sm"
              >
                Volver al inicio
              </Button>
            </div>

            {/* Demo credentials info */}
            <div className="mt-6 p-4 bg-secondary/50 rounded-lg">
              <h4 className="text-sm mb-2">Credenciales de prueba:</h4>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>Usuario: <code className="bg-background px-1 rounded">admin</code></div>
                <div>Contraseña: <code className="bg-background px-1 rounded">admin123</code></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}