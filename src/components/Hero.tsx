import { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ROLES = [
  'Full-Stack .NET Engineer',
  'Backend Systems Architect',
  'Cloud-Native Developer',
  'Agile Team Lead',
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    const speed = deleting ? 40 : 80;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.length) {
        setDisplayText(current.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (!deleting && charIndex === current.length) {
        setTimeout(() => setDeleting(true), 1800);
      } else if (deleting && charIndex > 0) {
        setDisplayText(current.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else {
        setDeleting(false);
        setRoleIndex((roleIndex + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, roleIndex]);

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const stats = [
    { value: '5+', label: 'Years Experience' },
    { value: '10k+', label: 'Daily Transactions Handled' },
    { value: '99.9%', label: 'Uptime Delivered' },
    { value: '3.9', label: 'GPA (MS CS, UCF)' },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 py-20">
        {/* Location badge */}
        <div className="inline-flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/50 border border-white/10 px-3 py-1.5 rounded-full mb-6">
          <MapPin className="h-3.5 w-3.5" />
          Dallas, TX — Open to Remote
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-fade-in">
          Hi, I’m{' '}
          <span className="gradient-text">Subhash Devulapalli</span>
        </h1>

        {/* Typing animation */}
        <div className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 h-10 flex items-center justify-center">
          <span className="border-r-2 border-primary pr-1">{displayText}</span>
        </div>

        {/* Summary */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in">
          I build backend systems that handle real load, ship React UIs that people actually use, and own delivery from design to prod. Currently at MTM Health building HIPAA-compliant healthcare infrastructure. MS Computer Science, UCF — GPA 3.9.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-14 animate-fade-in">
          <Button
            size="lg"
            onClick={() => scrollTo('projects')}
            className="text-base px-7 py-3 bg-primary hover:bg-primary/90"
          >
            See My Work
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('experience')}
            className="text-base px-7 py-3 border-primary/40 hover:border-primary hover:bg-primary/5"
          >
            View Experience
          </Button>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4 mb-16 animate-fade-in">
          {[
            { icon: Github, href: 'https://github.com/SubhashDevulapalli', label: 'GitHub' },
            { icon: Linkedin, href: 'https://linkedin.com/in/subhash-devulapalli', label: 'LinkedIn' },
            { icon: Mail, href: 'mailto:subhash.devulapalli14@gmail.com', label: 'Email' },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-muted/30 border border-white/10 text-sm text-muted-foreground hover:text-primary hover:border-primary/40 transition-all"
              aria-label={label}
            >
              <Icon className="h-4 w-4" />
              {label}
            </a>
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto animate-fade-in">
          {stats.map(({ value, label }) => (
            <div key={label} className="bg-muted/30 border border-white/10 rounded-xl p-4">
              <div className="text-2xl font-bold gradient-text">{value}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-5 w-5 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
