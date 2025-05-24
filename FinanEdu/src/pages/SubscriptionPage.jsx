import React from 'react';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { CheckCircle, Star, Zap } from 'lucide-react';
    import { useToast } from "@/components/ui/use-toast";
    // import { loadStripe } from '@stripe/stripe-js'; // Uncomment when Stripe PK is available

    // Placeholder for Stripe Publishable Key
    // const stripePromise = loadStripe('YOUR_STRIPE_PUBLISHABLE_KEY');

    const SubscriptionPage = () => {
      const { toast } = useToast();

      const handleSubscription = async (planId) => {
        toast({
          title: "Procesando Suscripción...",
          description: "Esto es una demostración. Se requiere configuración de Stripe.",
        });
        // TODO: Implement Stripe Checkout
        // 1. Get Stripe Publishable Key and Price ID from user.
        // 2. Uncomment loadStripe and use stripePromise.
        // 3. const stripe = await stripePromise;
        // 4. stripe.redirectToCheckout({ lineItems: [{ price: 'PRICE_ID_FROM_USER', quantity: 1 }], mode: 'subscription', successUrl: window.location.origin + '/dashboard?session_id={CHECKOUT_SESSION_ID}', cancelButtonUrl: window.location.href });
        // 5. On success, Supabase function (or client-side call if secure) should update user's subscription_status.
        console.log(`Attempting to subscribe to plan: ${planId}`);
        
        // Simulate a successful payment for demo purposes
        setTimeout(() => {
          toast({
            title: "¡Suscripción Exitosa! (Simulado)",
            description: "Gracias por suscribirte a FinanEdu. Tu acceso ha sido activado.",
            variant: "default"
          });
          // Here you would typically redirect or update UI based on actual Stripe success
        }, 2000);
      };

      const plans = [
        {
          id: 'basic_monthly',
          name: 'Plan Básico Mensual',
          price: '$9.99',
          period: '/mes',
          features: [
            'Acceso a todos los módulos educativos',
            'Uso ilimitado de simuladores',
            'Soporte por correo electrónico',
            'Actualizaciones de contenido',
          ],
          icon: Star,
          color: 'from-primary to-blue-400',
          priceId: 'price_basic_placeholder' // Replace with actual Stripe Price ID
        },
        // {
        //   id: 'premium_monthly',
        //   name: 'Plan Premium Mensual',
        //   price: '$19.99',
        //   period: '/mes',
        //   features: [
        //     'Todo lo del Plan Básico',
        //     'Acceso prioritario al Asistente IA',
        //     'Sesiones de mentoría grupal (próximamente)',
        //     'Contenido exclusivo',
        //   ],
        //   icon: Zap,
        //   color: 'from-secondary to-green-400',
        //   priceId: 'price_premium_placeholder' // Replace with actual Stripe Price ID
        // },
      ];

      return (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="py-12"
        >
          <header className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient-blue-green">Elige tu Plan FinanEdu</h1>
            <p className="text-lg text-muted-foreground mt-2">Desbloquea todo el potencial de tu aprendizaje financiero.</p>
          </header>

          <div className="grid md:grid-cols-1 lg:grid-cols-1 gap-8 max-w-md mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full flex flex-col glassmorphism overflow-hidden shadow-xl border-2 border-primary">
                  <CardHeader className={`text-center py-8 bg-gradient-to-br ${plan.color} text-white`}>
                    {React.createElement(plan.icon, { size: 48, className: "mx-auto mb-4" })}
                    <CardTitle className="text-3xl">{plan.name}</CardTitle>
                    <div className="text-4xl font-extrabold mt-2">
                      {plan.price} <span className="text-xl font-normal">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow pt-8">
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter className="p-6">
                    <Button 
                      size="lg" 
                      className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-primary-foreground"
                      onClick={() => handleSubscription(plan.priceId)}
                    >
                      Suscribirme Ahora
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-muted-foreground mt-12 text-sm">
            La integración con Stripe está pendiente. Se requieren claves de API y configuración de producto/precio en Stripe.
          </p>
        </motion.div>
      );
    };

    export default SubscriptionPage;