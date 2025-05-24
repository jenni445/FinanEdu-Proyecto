
    import React from 'react';
    import Navbar from '@/components/shared/Navbar';
    import Footer from '@/components/shared/Footer';
    import { Toaster } from '@/components/ui/toaster';

    const Layout = ({ children }) => {
      return (
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
        </div>
      );
    };

    export default Layout;
  