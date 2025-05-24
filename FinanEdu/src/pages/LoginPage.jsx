import React, { useState } from 'react';
    import { Link, useNavigate, useLocation } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Input } from '@/components/ui/input';
    import { Label } from '@/components/ui/label';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { LogIn, Mail, KeyRound } from 'lucide-react';
    import { useAuth } from '@/contexts/AuthContext';
    import { useToast } from "@/components/ui/use-toast";

    const LoginPage = () => {
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const { login } = useAuth();
      const { toast } = useToast();
      const navigate = useNavigate();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/dashboard";

      const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email || !password) {
          toast({
            title: "Campos incompletos",
            description: "Por favor, ingresa tu correo y contraseña.",
            variant: "destructive",
          });
          return;
        }
        
        // In a real app, Supabase client would be used here.
        // For now, useAuth().login handles localStorage.
        const success = login(email, password); 
        if (success) {
          // Navigation is handled by AuthContext's login method
        } else {
          // Error toast is handled by AuthContext's login method
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
                <LogIn size={32}/>
              </div>
              <CardTitle className="text-2xl font-bold">Bienvenido de Nuevo</CardTitle>
              <CardDescription>Ingresa a tu cuenta para continuar tu aprendizaje.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    <Input id="password" type="password" placeholder="••••••••" required className="pl-10" value={password} onChange={(e) => setPassword(e.target.value)} />
                  </div>
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground">
                  Ingresar
                </Button>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-2">
              <Link to="/forgot-password"className="text-sm text-primary hover:underline">
                ¿Olvidaste tu contraseña?
              </Link>
              <p className="text-sm text-muted-foreground">
                ¿No tienes una cuenta?{' '}
                <Link to="/registro" className="font-semibold text-primary hover:underline">
                  Regístrate aquí
                </Link>
              </p>
            </CardFooter>
          </Card>
        </motion.div>
      );
    };

    export default LoginPage;