import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { BookOpen, BarChart2, Award, MessageSquare, CreditCard, Send } from 'lucide-react';
    import { useAuth } from '@/contexts/AuthContext';
    import { Link } from 'react-router-dom';
    import { Input } from '@/components/ui/input';

    const DashboardPage = () => {
      const { user } = useAuth();
      // Placeholder data - replace with actual user data from Supabase later
      const userData = {
        name: user ? user.name : 'Emprendedor',
        email: user ? user.email : 'usuario@finan.edu',
        completedModules: 2, // Example data
        totalModules: 10,    // Example data
        currentLevel: 'Aprendiz Financiero', // Example data
        nextBadge: 'Planificador Experto', // Example data
        subscriptionStatus: 'activo', // Example: 'activo', 'inactivo', 'prueba'
      };

      const [aiMessage, setAiMessage] = React.useState('');
      const [aiResponses, setAiResponses] = React.useState([]);

      const handleAiSubmit = (e) => {
        e.preventDefault();
        if (!aiMessage.trim()) return;
        // Placeholder for OpenAI API call
        setAiResponses([...aiResponses, { q: aiMessage, a: "Respuesta del Asistente IA (próximamente)..." }]);
        setAiMessage('');
        // TODO: Integrate OpenAI API call here
      };

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <header className="mb-8">
            <h1 className="text-3xl font-bold">¡Bienvenido de nuevo, {userData.name}!</h1>
            <p className="text-muted-foreground">Este es tu centro de control en FinanEdu.</p>
          </header>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{opacity:1, scale:1}} transition={{delay:0.1}}>
              <Card className="glassmorphism">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Módulos Completados</CardTitle>
                  <BookOpen className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userData.completedModules} / {userData.totalModules}</div>
                  <p className="text-xs text-muted-foreground">Sigue aprendiendo para alcanzar tus metas.</p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{opacity:1, scale:1}} transition={{delay:0.2}}>
              <Card className="glassmorphism">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Nivel Actual</CardTitle>
                  <Award className="h-5 w-5 text-secondary" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{userData.currentLevel}</div>
                  <p className="text-xs text-muted-foreground">Próxima medalla: {userData.nextBadge}</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div initial={{ opacity:0, scale:0.9 }} animate={{opacity:1, scale:1}} transition={{delay:0.3}}>
              <Card className="glassmorphism">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Estado de Suscripción</CardTitle>
                  <CreditCard className="h-5 w-5 text-green-500" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold capitalize">{userData.subscriptionStatus}</div>
                  {userData.subscriptionStatus !== 'activo' && (
                    <Button size="sm" asChild className="mt-2">
                      <Link to="/suscripcion">Activar Suscripción</Link>
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>

          <motion.div initial={{ opacity:0 }} animate={{opacity:1}} transition={{delay:0.4}}>
            <Card className="glassmorphism">
              <CardHeader>
                <CardTitle className="flex items-center"><MessageSquare className="mr-2 h-6 w-6 text-primary" /> Asistente Virtual FinanEdu</CardTitle>
                <CardDescription>Haz tus preguntas sobre finanzas. (Integración con OpenAI próximamente)</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 overflow-y-auto p-4 border rounded-md mb-4 bg-background/50 space-y-2">
                  {aiResponses.length === 0 && <p className="text-muted-foreground text-sm">El historial de chat aparecerá aquí.</p>}
                  {aiResponses.map((entry, index) => (
                    <div key={index}>
                      <p className="text-sm font-semibold text-primary">Tú: {entry.q}</p>
                      <p className="text-sm text-muted-foreground">FinanEdu AI: {entry.a}</p>
                    </div>
                  ))}
                </div>
                <form onSubmit={handleAiSubmit} className="flex space-x-2">
                  <Input 
                    type="text" 
                    placeholder="Escribe tu pregunta financiera aquí..." 
                    value={aiMessage}
                    onChange={(e) => setAiMessage(e.target.value)}
                    className="flex-grow"
                  />
                  <Button type="submit" variant="default" size="icon" className="bg-gradient-to-r from-primary to-secondary">
                    <Send className="h-5 w-5" />
                  </Button>
                </form>
                <p className="text-xs text-muted-foreground mt-2">
                  Nota: El asistente virtual requiere una API Key de OpenAI para funcionar. Esta es una demostración.
                </p>
              </CardContent>
            </Card>
          </motion.div>

        </motion.div>
      );
    };

    export default DashboardPage;