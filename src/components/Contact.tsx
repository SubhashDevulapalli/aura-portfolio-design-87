import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'subhash.devulapalli14@gmail.com',
      href: 'mailto:subhash.devulapalli14@gmail.com',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      cta: 'Send an email',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(407) 448-8727',
      href: 'tel:+14074488727',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      cta: 'Give me a call',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/subhash-devulapalli',
      href: 'https://linkedin.com/in/subhash-devulapalli',
      color: 'text-sky-400',
      bg: 'bg-sky-500/10',
      cta: 'Connect on LinkedIn',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/SubhashDevulapalli',
      href: 'https://github.com/SubhashDevulapalli',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      cta: 'See my code',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            I’m actively open to new roles. Whether you have a specific position in mind or just want to connect, reach out and I’ll get back to you quickly.
          </p>
        </div>

        {/* Location */}
        <div className="flex justify-center mb-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted/30 border border-white/10 px-4 py-2.5 rounded-full">
            <MapPin className="h-4 w-4 text-primary" />
            Dallas, TX — Open to Remote & Hybrid
          </div>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-2 gap-4 mb-12">
          {contactMethods.map((method) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('http') ? '_blank' : undefined}
              rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group"
            >
              <Card className="h-full card-hover bg-card/50 border border-white/10 group-hover:border-primary/30 transition-all">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className={`p-2.5 rounded-xl ${method.bg} shrink-0 group-hover:scale-110 transition-transform`}>
                    <method.icon className={`h-5 w-5 ${method.color}`} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-muted-foreground mb-0.5">{method.label}</p>
                    <p className="text-sm font-medium truncate">{method.value}</p>
                    <p className={`text-xs mt-1 ${method.color} opacity-0 group-hover:opacity-100 transition-opacity`}>{method.cta} →</p>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-br from-primary/10 to-purple-500/10 border border-primary/20 inline-block w-full max-w-lg">
            <CardContent className="p-8">
              <Send className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Ready to talk?</h3>
              <p className="text-muted-foreground text-sm mb-6">
                The fastest way to reach me is email. I typically respond within a few hours on weekdays.
              </p>
              <Button
                size="lg"
                className="w-full max-w-xs bg-primary hover:bg-primary/90"
                asChild
              >
                <a href="mailto:subhash.devulapalli14@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  subhash.devulapalli14@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
