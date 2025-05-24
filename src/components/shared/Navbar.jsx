import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Menu, X, LogOut, UserCircle, LayoutDashboard } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { useAuth } from '@/contexts/AuthContext';

    const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/31b12deb-32dd-4c4b-a3a0-e04ffe5b3229/9f1a7f0e612aecbd1ef34cc880f3e1a9.png";

    const Navbar = () => {
      const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
      const { user, logout } = useAuth();

      const navLinks = [
        { to: '/', text: 'Inicio' },
        { to: '/modulos', text: 'Módulos' },
        { to: '/simuladores', text: 'Simuladores' },
        { to: '/acerca-de', text: 'Acerca de' },
      ];

      const activeStyle = "text-secondary font-semibold";
      const inactiveStyle = "text-foreground/80 hover:text-secondary transition-colors";

      return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <div className="container flex h-20 items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <img-replace src={logoUrl} alt="FinanEdu Logo" className="h-14"/>
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => isActive ? activeStyle : inactiveStyle}
                >
                  {link.text}
                </NavLink>
              ))}
            </nav>

            <div className="hidden md:flex items-center space-x-3">
              {user ? (
                <>
                  <Button variant="ghost" asChild>
                    <Link to="/dashboard" className="flex items-center">
                      <LayoutDashboard className="mr-2 h-5 w-5" />
                      Dashboard
                    </Link>
                  </Button>
                  <Button variant="outline" onClick={logout} className="flex items-center">
                    <LogOut className="mr-2 h-5 w-5" />
                    Salir
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="outline" asChild>
                    <Link to="/login">Ingresar</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                    <Link to="/registro">Registrarse</Link>
                  </Button>
                </>
              )}
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="md:hidden absolute top-20 left-0 right-0 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 shadow-lg pb-4"
              >
                <nav className="flex flex-col items-center space-y-4 pt-4">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.to}
                      to={link.to}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) => `text-lg py-2 ${isActive ? activeStyle : inactiveStyle}`}
                    >
                      {link.text}
                    </NavLink>
                  ))}
                  {user ? (
                    <>
                      <Button variant="ghost" asChild className="w-3/4 justify-start py-2 text-lg">
                        <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
                          <LayoutDashboard className="mr-2 h-5 w-5" /> Dashboard
                        </Link>
                      </Button>
                      <Button variant="outline" onClick={() => { logout(); setMobileMenuOpen(false); }} className="w-3/4 py-2 text-lg flex items-center">
                        <LogOut className="mr-2 h-5 w-5" /> Salir
                      </Button>
                    </>
                  ) : (
                    <>
                      <Button variant="outline" asChild className="w-3/4 py-2 text-lg">
                        <Link to="/login" onClick={() => setMobileMenuOpen(false)}>Ingresar</Link>
                      </Button>
                      <Button asChild className="w-3/4 py-2 text-lg bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                        <Link to="/registro" onClick={() => setMobileMenuOpen(false)}>Registrarse</Link>
                      </Button>
                    </>
                  )}
                </nav>
              </motion.div>
            )}
          </AnimatePresence>
        </header>
      );
    };

    export default Navbar;