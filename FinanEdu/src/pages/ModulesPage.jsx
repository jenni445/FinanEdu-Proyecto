
    import React from 'react';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ArrowRight, BarChart, FileText, Landmark, Calculator } from 'lucide-react';

    const modules = [
      { id: 1, title: 'Planificación Financiera Esencial', description: 'Aprende a crear un plan financiero sólido para tu emprendimiento.', icon: FileText, level: 'Básico', color: "from-blue-500 to-blue-400" },
      { id: 2, title: 'Gestión de Flujo de Caja', description: 'Domina las entradas y salidas de dinero para mantener la salud financiera.', icon: BarChart, level: 'Intermedio', color: "from-green-500 to-green-400" },
      { id: 3, title: 'Entendiendo los Impuestos para Emprendedores', description: 'Navega el panorama fiscal y cumple con tus obligaciones.', icon: Landmark, level: 'Intermedio', color: "from-yellow-500 to-yellow-400" },
      { id: 4, title: 'Toma de Decisiones Estratégicas con Datos', description: 'Utiliza la información financiera para impulsar el crecimiento.', icon: Calculator, level: 'Avanzado', color: "from-purple-500 to-purple-400" },
    ];

    const ModulesPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <header className="text-center py-8 bg-gradient-to-r from-primary/10 via-background to-secondary/10 rounded-lg">
            <h1 className="text-4xl font-bold text-gradient-blue-green mb-2">Módulos Educativos</h1>
            <p className="text-lg text-muted-foreground">Explora nuestros cursos y fortalece tus conocimientos financieros.</p>
          </header>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {modules.map((module, index) => (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col overflow-hidden hover:shadow-xl transition-shadow duration-300 glassmorphism">
                  <CardHeader className={`bg-gradient-to-br ${module.color} text-white p-6`}>
                    <div className="flex items-center space-x-3 mb-2">
                      {React.createElement(module.icon, { size: 28 })}
                      <CardTitle className="text-2xl">{module.title}</CardTitle>
                    </div>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">{module.level}</span>
                  </CardHeader>
                  <CardContent className="flex-grow pt-6">
                    <CardDescription className="text-base text-foreground/80">{module.description}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                      Comenzar Módulo <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12">
            ¡Más módulos próximamente! Estamos trabajando para expandir nuestra oferta educativa.
          </p>
        </motion.div>
      );
    };

    export default ModulesPage;
  