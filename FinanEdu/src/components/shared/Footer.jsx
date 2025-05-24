import React from 'react';
    import { Link } from 'react-router-dom';
    import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

    const logoUrl = "https://storage.googleapis.com/hostinger-horizons-assets-prod/31b12deb-32dd-4c4b-a3a0-e04ffe5b3229/9f1a7f0e612aecbd1ef34cc880f3e1a9.png";

    const Footer = () => {
      const currentYear = new Date().getFullYear();

      return (
        <footer className="bg-muted/50 border-t border-border/40 text-muted-foreground">
          <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
              <div className="md:col-span-1 lg:col-span-1">
                <Link to="/" className="flex items-center space-x-2 mb-4">
                  <img-replace src={logoUrl} alt="FinanEdu Logo" className="h-12"/>
                </Link>
                <p className="text-sm">
                  Empoderando emprendedores en América Latina con educación financiera accesible y práctica.
                </p>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-3">Navegación</p>
                <ul className="space-y-2">
                  <li><Link to="/modulos" className="hover:text-primary transition-colors">Módulos Educativos</Link></li>
                  <li><Link to="/simuladores" className="hover:text-primary transition-colors">Simuladores</Link></li>
                  <li><Link to="/acerca-de" className="hover:text-primary transition-colors">Acerca de</Link></li>
                  <li><Link to="/#funcionalidades" className="hover:text-primary transition-colors">Funcionalidades</Link></li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-foreground mb-3">Legal</p>
                <ul className="space-y-2">
                  <li><Link to="/terminos" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
                  <li><Link to="/privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
                </ul>
              </div>
              
              <div>
                <p className="font-semibold text-foreground mb-3">Síguenos</p>
                <div className="flex space-x-4">
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin size={20} /></a>
                  <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border/60 text-center text-sm">
              <p>&copy; {currentYear} FinanEdu. Todos los derechos reservados.</p>
              <p>Hecho con <span className="text-red-500">❤</span> para emprendedores de LATAM.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;