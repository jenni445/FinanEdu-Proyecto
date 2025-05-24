
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { AlertTriangle } from 'lucide-react';

    const NotFoundPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-200px)]"
        >
          <AlertTriangle className="w-24 h-24 text-destructive mb-8 animate-bounce" />
          <h1 className="text-6xl font-bold text-destructive mb-4">404</h1>
          <h2 className="text-3xl font-semibold mb-4">Página No Encontrada</h2>
          <p className="text-muted-foreground mb-8 max-w-md">
            Lo sentimos, la página que buscas no existe o ha sido movida.
            Verifica la URL o regresa al inicio.
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-green-600 hover:from-primary/90 hover:to-green-600/90 text-primary-foreground">
            <Link to="/">Volver al Inicio</Link>
          </Button>
        </motion.div>
      );
    };

    export default NotFoundPage;
  