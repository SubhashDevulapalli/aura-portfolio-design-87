import { Github, Linkedin, Mail, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-t border-white/10 bg-muted/10 py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-primary/10">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <div>
              <span className="font-bold gradient-text">Subhash Devulapalli</span>
              <p className="text-xs text-muted-foreground">Full-Stack .NET Engineer • Dallas, TX</p>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {links.map(({ label, id }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {label}
              </button>
            ))}
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[
              { icon: Github, href: 'https://github.com/SubhashDevulapalli', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/subhash-devulapalli', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:subhash.devulapalli14@gmail.com', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="p-2 rounded-lg bg-muted/30 border border-white/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
                aria-label={label}
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} Subhash Devulapalli. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="h-3 w-3 text-red-400 fill-red-400" /> React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
