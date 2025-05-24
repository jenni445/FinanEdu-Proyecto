
    import React from 'react';
    import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { PlayCircle, TrendingUp as TrendingUpIcon, PiggyBank, CreditCard } from 'lucide-react';

    const simulators = [
      { id: 1, title: 'Planificador de Presupuesto', description: 'Crea y gestiona presupuestos detallados para tu negocio.', icon: PiggyBank, status: 'Disponible' },
      { id: 2, title: 'Análisis de Inversiones', description: 'Evalúa diferentes escenarios de inversión y sus posibles retornos.', icon: TrendingUpIcon, status: 'Próximamente' },
      { id: 3, title: 'Gestor de Deudas Inteligente', description: 'Simula estrategias para manejar y reducir deudas eficazmente.', icon: CreditCard, status: 'Próximamente' },
    ];

    const SimulatorPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <header className="text-center py-8 bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-lg">
            <h1 className="text-4xl font-bold text-gradient-blue-green mb-2">Simuladores Financieros</h1>
            <p className="text-lg text-muted-foreground">Pon en práctica tus conocimientos en un entorno interactivo y sin riesgos.</p>
          </header>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8">
            {simulators.map((sim, index) => (
              <motion.div
                key={sim.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={`overflow-hidden hover:shadow-xl transition-shadow duration-300 glassmorphism ${sim.status === 'Próximamente' ? 'opacity-70' : ''}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        {React.createElement(sim.icon, { size: 28, className:"text-primary"})}
                        <CardTitle className="text-2xl">{sim.title}</CardTitle>
                      </div>
                      <span className={`text-xs px-3 py-1 rounded-full font-medium ${sim.status === 'Disponible' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                        {sim.status}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base text-foreground/80">{sim.description}</CardDescription>
                  </CardContent>
                  <CardFooter className="bg-muted/30 p-4">
                    <Button 
                      variant={sim.status === 'Disponible' ? 'default' : 'outline'} 
                      className={`w-full ${sim.status === 'Disponible' ? 'bg-gradient-to-r from-primary to-green-600 text-primary-foreground' : ''}`}
                      disabled={sim.status === 'Próximamente'}
                    >
                      {sim.status === 'Disponible' ? 'Iniciar Simulador' : 'Notificarme'}
                      {sim.status === 'Disponible' && <PlayCircle className="ml-2 h-4 w-4" />}
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      );
    };

    export default SimulatorPage;
  