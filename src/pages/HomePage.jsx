import React from 'react';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { TrendingUp, BookOpen, DollarSign, Users, Award, Bot, Lightbulb, Target } from 'lucide-react';

    const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/31b12deb-32dd-4c4b-a3a0-e04ffe5b3229/9f1a7f0e612aecbd1ef34cc880f3e1a9.png";

    const FeatureCard = ({ icon, title, description, delay }) => (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay }}
      >
        <Card className="h-full text-center glassmorphism hover:shadow-xl transition-shadow duration-300">
          <CardHeader>
            <div className="mx-auto bg-primary/10 text-primary p-3 rounded-full mb-4 w-fit">
              {React.createElement(icon, { size: 32 })}
            </div>
            <CardTitle className="text-xl font-semibold">{title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{description}</p>
          </CardContent>
        </Card>
      </motion.div>
    );

    const HomePage = () => {
      const features = [
        { icon: BookOpen, title: 'Contenido Educativo Integral', description: 'Módulos interactivos sobre planificación, flujo de caja, impuestos y decisiones estratégicas.', delay: 0.1 },
        { icon: DollarSign, title: 'Simuladores Financieros Prácticos', description: 'Practica presupuestos, inversiones y gestión de deudas en un entorno seguro y realista.', delay: 0.2 },
        { icon: Bot, title: 'Asistente Virtual con IA', description: 'Resuelve dudas al instante y obtén consejos financieros personalizados de nuestra IA.', delay: 0.3 },
        { icon: Award, title: 'Gamificación Motivadora', description: 'Gana logros, medallas y sube de nivel mientras avanzas en tu aprendizaje financiero.', delay: 0.4 },
        { icon: Users, title: 'Red Colaborativa de Emprendedores', description: 'Conecta con otros emprendedores, comparte experiencias valiosas y recibe mentoría.', delay: 0.5 },
      ];

      return (
        <div className="space-y-16 md:space-y-24">
          <motion.section
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center py-16 md:py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5 rounded-xl overflow-hidden"
          >
            <div className="container mx-auto px-4 relative">
              <motion.div 
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1, duration: 0.7, type: "spring", stiffness: 100 }}
                className="mb-8"
              >
                <img-replace src={logoUrl} alt="FinanEdu Logo Grande" className="h-24 md:h-32 mx-auto"/>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="inline-block bg-secondary/10 text-secondary text-sm font-medium px-4 py-1 rounded-full mb-4"
              >
                Tu Aliado en Educación Financiera para Emprendedores
              </motion.div>
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
                Domina tus Finanzas, Impulsa tu <span className="text-gradient-blue-green">Emprendimiento</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10">
                FinanEdu te ofrece las herramientas y conocimientos para superar la brecha de educación financiera y tomar decisiones estratégicas que aseguren el crecimiento de tu negocio en América Latina.
              </p>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button size="lg" asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
                  <Link to="/registro">Comienza tu Viaje Financiero Hoy</Link>
                </Button>
              </motion.div>
            </div>
          </motion.section>

          <section id="problema-solucion" className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7 }}
              >
                <Lightbulb className="w-16 h-16 text-primary mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">El Desafío: Falta de Educación Financiera</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  Muchos emprendedores en América Latina enfrentan obstáculos debido a una limitada comprensión de conceptos financieros clave. Esto puede llevar a una mala gestión del flujo de caja, dificultades con los impuestos y decisiones de inversión poco informadas, frenando el potencial de sus negocios.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <Target className="w-16 h-16 text-secondary mb-4" />
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Nuestra Solución: FinanEdu Innovador</h2>
                <p className="text-muted-foreground text-lg mb-6">
                  FinanEdu ataca este problema de raíz con una plataforma integral que combina módulos educativos interactivos, simuladores financieros realistas, un asistente virtual con IA para respuestas instantáneas, y elementos de gamificación para un aprendizaje continuo y motivador.
                </p>
              </motion.div>
            </div>
          </section>
          
          <section id="beneficios" className="container mx-auto px-4">
            <motion.h2 
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Propuesta de Valor y Ventaja <span className="text-gradient-blue-green">Competitiva</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-center max-w-3xl mx-auto mb-12"
            >
              FinanEdu no es solo otra plataforma de cursos. Te empoderamos con conocimiento práctico y herramientas interactivas diseñadas específicamente para el contexto emprendedor de LATAM, dándote una ventaja real.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <BenefitItem title="Aprendizaje Aplicado" description="Contenido relevante y accionable que puedes implementar de inmediato en tu negocio." delay={0.1} />
              <BenefitItem title="Tecnología Innovadora" description="IA, gamificación y simuladores para una experiencia de aprendizaje única y efectiva." delay={0.2} />
              <BenefitItem title="Enfoque LATAM" description="Adaptado a las realidades fiscales, culturales y económicas de América Latina." delay={0.3} />
              <BenefitItem title="Comunidad y Soporte" description="Conéctate, aprende de otros y recibe mentoría en nuestra red colaborativa." delay={0.4} />
              <BenefitItem title="Decisiones Inteligentes" description="Transforma datos financieros en estrategias de crecimiento sólidas." delay={0.5} />
              <BenefitItem title="Confianza Financiera" description="Construye la seguridad para navegar el mundo financiero y liderar tu empresa al éxito." delay={0.6} />
            </div>
          </section>

          <section id="funcionalidades" className="container mx-auto px-4">
             <motion.h2 
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Funcionalidades <span className="text-gradient-blue-green">Clave</span>
            </motion.h2>
             <motion.p 
              initial={{ opacity: 0, y:20 }}
              whileInView={{ opacity:1, y:0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay:0.2 }}
              className="text-muted-foreground text-center max-w-2xl mx-auto mb-12"
            >
              Todo lo que necesitas para dominar tus finanzas y potenciar tu emprendimiento, en un solo lugar.
            </motion.p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </section>

          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto px-4 py-16 my-16 bg-gradient-to-r from-primary to-secondary rounded-xl text-center text-primary-foreground shadow-2xl"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Listo para Transformar tu Realidad Financiera?</h2>
            <p className="text-lg md:text-xl max-w-2xl mx-auto mb-10">
              Únete a la comunidad de FinanEdu y adquiere las habilidades para construir un futuro financiero próspero para tu emprendimiento.
            </p>
            <Button size="lg" variant="outline" className="bg-white text-primary hover:bg-white/90 border-2 border-white hover:border-white/90 transform hover:scale-105 transition-transform duration-300 shadow-lg" asChild>
              <Link to="/registro">Regístrate Gratis y Comienza Ahora</Link>
            </Button>
          </motion.section>
        </div>
      );
    };
    
    const BenefitItem = ({ title, description, delay }) => (
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, delay }}
        className="flex items-start space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
      >
        <div className="flex-shrink-0">
          <TrendingUp className="h-8 w-8 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-1">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </motion.div>
    );

    export default HomePage;