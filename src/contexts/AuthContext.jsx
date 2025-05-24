import React, { createContext, useState, useEffect, useContext } from 'react';
    import { useToast } from '@/components/ui/use-toast';
    import { useNavigate } from 'react-router-dom';

    const AuthContext = createContext(null);

    // This component will wrap the part of AuthProvider that uses useNavigate
    const AuthProviderContent = ({ children }) => {
      const [user, setUser] = useState(null);
      const [loading, setLoading] = useState(true);
      const { toast } = useToast();
      const navigate = useNavigate(); // useNavigate can be called here

      useEffect(() => {
        const storedUser = localStorage.getItem('finaneduUser');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        setLoading(false);
      }, []);

      const login = (email, password) => {
        // TODO: Replace with Supabase auth
        if (email && password) { // Basic validation for demo
          const userData = { email, name: email.split('@')[0] }; // Mock user data
          localStorage.setItem('finaneduUser', JSON.stringify(userData));
          setUser(userData);
          toast({
            title: "Inicio de Sesión Exitoso",
            description: `Bienvenido de nuevo, ${userData.name}!`,
            variant: "default",
          });
          navigate('/dashboard');
          return true;
        }
        toast({
          title: "Error de Inicio de Sesión",
          description: "Correo o contraseña incorrectos.",
          variant: "destructive",
        });
        return false;
      };

      const register = (fullName, email, password) => {
        // TODO: Replace with Supabase auth
        if (fullName && email && password) { // Basic validation for demo
          const userData = { email, name: fullName };
          localStorage.setItem('finaneduUser', JSON.stringify(userData));
          setUser(userData);
          toast({
            title: "Registro Exitoso",
            description: `Bienvenido a FinanEdu, ${userData.name}!`,
            variant: "default",
          });
          navigate('/dashboard');
          return true;
        }
        toast({
          title: "Error de Registro",
          description: "Por favor, completa todos los campos.",
          variant: "destructive",
        });
        return false;
      };

      const logout = () => {
        localStorage.removeItem('finaneduUser');
        setUser(null);
        toast({
          title: "Sesión Cerrada",
          description: "Has cerrado sesión exitosamente.",
        });
        navigate('/');
      };
      
      return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
          {children}
        </AuthContext.Provider>
      );
    }


    export const AuthProvider = ({ children }) => {
      // We need to ensure AuthProviderContent is a child of Router for useNavigate to work.
      // The Router is in App.jsx, and AuthProvider wraps App.jsx in main.jsx.
      // So, AuthProviderContent, which uses useNavigate, is correctly placed within Router's context.
      return <AuthProviderContent>{children}</AuthProviderContent>;
    };

    export const useAuth = () => {
      const context = useContext(AuthContext);
      if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
      }
      return context;
    };