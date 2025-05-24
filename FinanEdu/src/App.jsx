import React, { Suspense, lazy } from 'react';
    import { Routes, Route } from 'react-router-dom'; // Removed BrowserRouter as it's now in main.jsx
    import Layout from '@/components/shared/Layout';
    import ProtectedRoute from '@/components/shared/ProtectedRoute';
    import { Loader2 } from 'lucide-react';

    const HomePage = lazy(() => import('@/pages/HomePage'));
    const LoginPage = lazy(() => import('@/pages/LoginPage'));
    const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
    const ModulesPage = lazy(() => import('@/pages/ModulesPage'));
    const SimulatorPage = lazy(() => import('@/pages/SimulatorPage'));
    const DashboardPage = lazy(() => import('@/pages/DashboardPage'));
    const AboutPage = lazy(() => import('@/pages/AboutPage'));
    const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'));
    const SubscriptionPage = lazy(() => import('@/pages/SubscriptionPage'));

    const LoadingFallback = () => (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );

    function App() {
      return (
        // Router is removed from here, it's now wrapping AuthProvider in main.jsx
          <Layout>
            <Suspense fallback={<LoadingFallback />}>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/registro" element={<RegisterPage />} />
                <Route path="/modulos" element={<ModulesPage />} />
                <Route path="/simuladores" element={<SimulatorPage />} />
                <Route path="/acerca-de" element={<AboutPage />} />
                
                <Route 
                  path="/dashboard" 
                  element={
                    <ProtectedRoute>
                      <DashboardPage />
                    </ProtectedRoute>
                  } 
                />
                <Route 
                  path="/suscripcion" 
                  element={
                    <ProtectedRoute>
                      <SubscriptionPage />
                    </ProtectedRoute>
                  } 
                />

                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </Suspense>
          </Layout>
      );
    }

    export default App;