import React, { useState } from 'react';
    import { Link, useNavigate } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { UserPlus, Mail, KeyRound, User as UserIcon } from 'lucide-react';
    import { useAuth } from '@/contexts/AuthContext';
    import { useToast } from "@/components/ui/use-toast";

    const RegisterPage = () => {
      const [fullName, setFullName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [confirmPassword, setConfirmPassword] = useState('');
      const { register } = useAuth();
      const { toast } = useToast();
      const navigate = useNavigate();

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!fullName || !email || !password || !confirmPassword) {
          toast({
            title: "Campos incompletos",
            description: "Por favor, completa todos los campos.",
            variant: "destructive",
          });
          return;
        }
        if (password !== confirmPassword) {
          toast({
            title: "Error de Contraseña",
            description: "Las contraseñas no coinciden.",
            variant: "destructive",
          });
          return;
        }
        
        // In a real app, Supabase client would be used here for user creation.
        // For now, useAuth().register handles localStorage.
        const success = register(fullName, email, password);
        if (success) {
          // Navigation is handled by AuthContext's register method
        } else {
          // Error toast is handled by AuthContext's register method
        }
      };

      return (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center justify-center py-12"
        >
          <Card className="w-full max-w-md glassmorphism">
            <CardHeader className="text-center">
              <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
                <UserPlus size={32}/>
              </div>
              <CardTitle className="text-2xl font-bold">Crea tu Cuenta en FinanEdu</CardTitle>
              <CardDescription>Comienza tu camino hacia el éxito financiero.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Nombre Completo</Label>
                  <div className="relative">
                    <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="fullName" type="text" placeholder="Tu Nombre Completo" required className="pl-10" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Correo Electrónico</Label>
                   <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="email" type="email" placeholder="tu@ejemplo.com" required className="pl-10" value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Contraseña</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="password" type="password" placeholder="Mínimo 6 caracteres" required className="pl-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
                  <div className="relative">
                    <KeyRound className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input id="confirmPassword" type="password" placeholder="Repite tu contraseña" required className="pl-10" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground">
                  Crear Cuenta
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-muted-foreground w-full">
                ¿Ya tienes una cuenta?{' '}
                <Link to="/login" className="font-semibold text-primary hover:underline">
                  Ingresa aquí
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default RegisterPage;