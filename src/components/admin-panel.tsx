"use client"

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { Switch } from "./ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Plus, Edit, Trash2, Settings, BarChart3 } from "lucide-react";
import { useApp, Service } from "../contexts/AppContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AdminPanel() {
  const { services, setServices } = useApp();
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    price: 0,
    image: '',
    description: '',
    quantity: 0,
    onPromotion: false,
    category: ''
  });

  const resetForm = () => {
    setFormData({
      name: '',
      price: 0,
      image: '',
      description: '',
      quantity: 0,
      onPromotion: false,
      category: ''
    });
    setEditingService(null);
  };

  const handleEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      name: service.name,
      price: service.price,
      image: service.image,
      description: service.description,
      quantity: service.quantity,
      onPromotion: service.onPromotion,
      category: service.category
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar este servicio?')) {
      setServices(services.filter(service => service.id !== id));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingService) {
      // Editar servicio existente
      setServices(services.map(service => 
        service.id === editingService.id 
          ? { ...service, ...formData }
          : service
      ));
    } else {
      // Crear nuevo servicio
      const newService: Service = {
        id: Math.max(...services.map(s => s.id)) + 1,
        ...formData
      };
      setServices([...services, newService]);
    }
    
    setIsDialogOpen(false);
    resetForm();
  };

  const openCreateDialog = () => {
    resetForm();
    setIsDialogOpen(true);
  };

  const categories = ['Consultoría', 'Marketing', 'Desarrollo', 'Branding', 'Tecnología', 'Análisis', 'Capacitación', 'Seguridad', 'E-commerce', 'Social Media'];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl mb-2">Panel de Administración</h1>
            <p className="text-muted-foreground">Gestiona los servicios de tu empresa</p>
          </div>
          <Button onClick={openCreateDialog} className="gap-2">
            <Plus className="size-4" />
            Nuevo Servicio
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Servicios</p>
                  <p className="text-2xl">{services.length}</p>
                </div>
                <Settings className="size-8 text-primary" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">En Promoción</p>
                  <p className="text-2xl">{services.filter(s => s.onPromotion).length}</p>
                </div>
                <BarChart3 className="size-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Stock Total</p>
                  <p className="text-2xl">{services.reduce((acc, s) => acc + s.quantity, 0)}</p>
                </div>
                <BarChart3 className="size-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Precio Promedio</p>
                  <p className="text-2xl">€{Math.round(services.reduce((acc, s) => acc + s.price, 0) / services.length).toLocaleString()}</p>
                </div>
                <BarChart3 className="size-8 text-purple-500" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Services Table */}
        <Card>
          <CardHeader>
            <CardTitle>Lista de Servicios</CardTitle>
            <CardDescription>Administra todos los servicios disponibles</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Imagen</TableHead>
                  <TableHead>Nombre</TableHead>
                  <TableHead>Categoría</TableHead>
                  <TableHead>Precio</TableHead>
                  <TableHead>Cantidad</TableHead>
                  <TableHead>Estado</TableHead>
                  <TableHead>Acciones</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {services.map((service) => (
                  <TableRow key={service.id}>
                    <TableCell>
                      <ImageWithFallback
                        src={service.image}
                        alt={service.name}
                        className="w-12 h-12 object-cover rounded"
                      />
                    </TableCell>
                    <TableCell className="font-medium">{service.name}</TableCell>
                    <TableCell>
                      <Badge variant="secondary">{service.category}</Badge>
                    </TableCell>
                    <TableCell>€{service.price.toLocaleString()}</TableCell>
                    <TableCell>{service.quantity}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        {service.onPromotion && (
                          <Badge className="bg-red-500">Promoción</Badge>
                        )}
                        <Badge variant={service.quantity > 0 ? "default" : "destructive"}>
                          {service.quantity > 0 ? 'Disponible' : 'Agotado'}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => handleEdit(service)}
                        >
                          <Edit className="size-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => handleDelete(service.id)}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Create/Edit Dialog */}
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>
                {editingService ? 'Editar Servicio' : 'Crear Nuevo Servicio'}
              </DialogTitle>
              <DialogDescription>
                {editingService ? 'Modifica los datos del servicio' : 'Completa la información del nuevo servicio'}
              </DialogDescription>
            </DialogHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Nombre del Servicio *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej: Consultoría Empresarial"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Categoría *</Label>
                  <Select 
                    value={formData.category} 
                    onValueChange={(value) => setFormData({ ...formData, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Selecciona una categoría" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price">Precio (€) *</Label>
                  <Input
                    id="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: parseInt(e.target.value) || 0 })}
                    placeholder="2500"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="quantity">Cantidad Disponible *</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: parseInt(e.target.value) || 0 })}
                    placeholder="10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">URL de la Imagen</Label>
                <Input
                  id="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  placeholder="https://ejemplo.com/imagen.jpg"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Describe el servicio y sus beneficios..."
                  className="min-h-[100px]"
                  required
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="promotion"
                  checked={formData.onPromotion}
                  onCheckedChange={(checked) => setFormData({ ...formData, onPromotion: checked })}
                />
                <Label htmlFor="promotion">Servicio en promoción</Label>
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="flex-1">
                  {editingService ? 'Actualizar Servicio' : 'Crear Servicio'}
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}