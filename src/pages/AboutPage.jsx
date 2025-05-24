import React from 'react';
    import { motion } from 'framer-motion';
    import { Lightbulb, Target, BarChartBig, Users, ShieldCheck } from 'lucide-react';

    const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/31b12deb-32dd-4c4b-a3a0-e04ffe5b3229/9f1a7f0e612aecbd1ef34cc880f3e1a9.png";

    const AboutPage = () => {
      return (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-12 py-8"
        >
          <header className="text-center space-y-4">
            <img-replace src={logoUrl} alt="FinanEdu Logo" className="h-20 mx-auto"/>
            <h1 className="text-4xl md:text-5xl font-bold text-gradient-blue-green">Acerca de FinanEdu</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empoderando a emprendedores de América Latina a través de la educación financiera innovadora y accesible.
            </p>
          </header>

          <section className="container mx-auto px-4">
            <CardInfo 
              icon={Lightbulb}
              title="El Diagnóstico: La Brecha de Conocimiento Financiero"
              description="En América Latina, una gran cantidad de emprendedores con ideas brillantes y gran potencial se ven frenados por una falta de conocimientos financieros sólidos. Esta carencia se traduce en dificultades para gestionar el flujo de caja, tomar decisiones de inversión acertadas, comprender las obligaciones fiscales y, en última instancia, limita el crecimiento y la sostenibilidad de sus negocios. Muchos operan por intuición más que por estrategia financiera, lo que aumenta su vulnerabilidad en un mercado competitivo."
              color="text-primary"
              animationDelay={0.1}
            />
          </section>

          <section className="container mx-auto px-4">
            <CardInfo 
              icon={Target}
              title="Nuestra Solución Estratégica: Educación Práctica y Tecnológica"
              description="FinanEdu nace para cerrar esta brecha. No somos solo cursos teóricos; ofrecemos una plataforma integral que combina:
              Módulos educativos interactivos y gamificados, diseñados para ser atractivos y fáciles de asimilar.
              Simuladores financieros que permiten practicar en un entorno seguro la creación de presupuestos, análisis de inversiones y gestión de deudas.
              Un asistente virtual con Inteligencia Artificial (IA) que responde preguntas, ofrece consejos personalizados y guía a los usuarios.
              Una comunidad de networking para conectar con otros emprendedores, compartir experiencias y acceder a mentorías."
              color="text-secondary"
              animationDelay={0.2}
            />
          </section>
          
          <section className="container mx-auto px-4">
            <CardInfo 
              icon={BarChartBig}
              title="Propuesta de Valor y Ventaja Competitiva"
              description="La promesa de FinanEdu es transformar la manera en que los emprendedores latinos interactúan con sus finanzas. Nuestra ventaja competitiva radica en:
              Contenido hiper-relevante: Adaptado a las realidades económicas y fiscales de la región.
              Innovación tecnológica: Uso de IA, gamificación y simuladores para un aprendizaje efectivo y moderno.
              Accesibilidad: Una plataforma intuitiva y disponible en cualquier dispositivo.
              Comunidad: Fomentamos el aprendizaje colaborativo y el apoyo mutuo.
              Resultados medibles: Capacitamos para tomar decisiones financieras que impulsan el crecimiento real del negocio."
              color="text-yellow-500"
              animationDelay={0.3}
            />
          </section>

          <section className="container mx-auto px-4 text-center">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-3xl font-bold mb-6"
            >
              Únete a la Revolución <span className="text-gradient-blue-green">FinanEdu</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-muted-foreground text-lg max-w-xl mx-auto"
            >
              Estamos comprometidos con el éxito de los emprendedores. Creemos que con las herramientas y el conocimiento adecuado, cada idea puede convertirse en un negocio próspero y sostenible.
            </motion.p>
          </section>
        </motion.div>
      );
    };

    const CardInfo = ({ icon, title, description, color, animationDelay }) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, delay: animationDelay }}
        className="bg-card p-6 md:p-8 rounded-xl shadow-lg border border-border/50 glassmorphism mb-8"
      >
        <div className="flex items-start space-x-4">
          <div className={`p-3 bg-muted rounded-full ${color}`}>
            {React.createElement(icon, { size: 32, className: "text-white"})}
          </div>
          <div>
            <h3 className={`text-2xl font-semibold mb-3 ${color}`}>{title}</h3>
            <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{description}</p>
          </div>
        </div>
      </motion.div>
    );

    export default AboutPage;