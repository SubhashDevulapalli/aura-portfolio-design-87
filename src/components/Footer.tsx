
import { Heart } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground flex items-center justify-center md:justify-start gap-1">
              © {currentYear} Subhash Devulapalli. Made with{' '}
              <Heart className="h-4 w-4 text-red-500 fill-current" />{' '}
              using React & TypeScript
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Software Engineer | Master's Student at UCF
            </p>
          </div>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <div className="text-sm text-muted-foreground">
              Dallas, TX
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
