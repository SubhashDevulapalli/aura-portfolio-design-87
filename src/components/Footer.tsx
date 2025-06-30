
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-1">
            © {currentYear} John Developer. Made with{' '}
            <Heart className="h-4 w-4 text-red-500 fill-current" />{' '}
            using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
