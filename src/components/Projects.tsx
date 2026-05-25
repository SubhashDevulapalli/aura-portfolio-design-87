import { ExternalLink, Github, ShieldCheck, Calendar, Activity } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Authentication & Identity Server',
      subtitle: 'Centralized OAuth 2.0 / OIDC Identity Platform',
      description: 'Built a centralized identity platform supporting Single Sign-On (SSO) and Role-Based Access Control (RBAC) across microservices. The system issues scoped JWT tokens, integrates ML-based anomaly detection to flag suspicious login patterns in real time, and includes a comprehensive automated test harness to validate edge cases across authentication flows.',
      highlights: [
        'Architected OAuth 2.0/OIDC Identity Server with SSO and RBAC, reducing auth-related defects by 60%.',
        'Integrated an ML.NET anomaly detection model to flag suspicious login patterns before production escalation.',
        'Built Python-based automated test harnesses simulating diverse auth scenarios for production-grade reliability.',
      ],
      technologies: ['C#', 'ASP.NET Core', 'OAuth 2.0', 'OIDC', 'JWT', 'ML.NET', 'Python', 'xUnit'],
      icon: ShieldCheck,
      iconBg: 'bg-blue-500/20',
      iconColor: 'text-blue-400',
      gradient: 'from-blue-500/10 to-indigo-500/10',
      githubUrl: 'https://github.com/SubhashDevulapalli/AuthAndIdentityServer',
      wide: true,
    },
    {
      id: 2,
      title: 'Event Management Portal',
      subtitle: 'Full-Stack Event Platform with Real-Time Monitoring',
      description: 'A full-stack event management portal handling high-volume concurrent registrations. Used React with GraphQL to minimize API payload size through query-level optimization, and deployed RESTful APIs on IIS with Datadog monitoring for real-time alerting on performance anomalies.',
      highlights: [
        'Built with React, GraphQL, and MySQL — query-level optimization significantly reduced API payload size.',
        'Deployed RESTful APIs on IIS with Datadog real-time monitoring, achieving 99.9% transaction success rates.',
        'Enabled proactive detection of performance anomalies before they reached end users.',
      ],
      technologies: ['React.js', 'GraphQL', 'MySQL', 'IIS', 'Datadog', 'REST APIs', 'TypeScript'],
      icon: Calendar,
      iconBg: 'bg-purple-500/20',
      iconColor: 'text-purple-400',
      gradient: 'from-purple-500/10 to-pink-500/10',
      githubUrl: 'https://github.com/SubhashDevulapalli',
      wide: false,
    },
    {
      id: 3,
      title: 'ML Application (.NET)',
      subtitle: 'ML.NET Model Integration for .NET Applications',
      description: 'Explored integrating pre-trained ML models into .NET applications using ML.NET. Demonstrates how teams can bring machine learning capabilities directly into their existing .NET backend without leaving the ecosystem.',
      highlights: [
        'Consumed and served ML.NET prediction models within an ASP.NET Core application.',
        'Structured as a practical reference for .NET teams adopting ML features in production.',
      ],
      technologies: ['C#', '.NET', 'ML.NET', 'ASP.NET Core'],
      icon: Activity,
      iconBg: 'bg-green-500/20',
      iconColor: 'text-green-400',
      gradient: 'from-green-500/10 to-emerald-500/10',
      githubUrl: 'https://github.com/SubhashDevulapalli/MLApp',
      wide: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Things I’ve built outside of work — mostly to solve real problems or explore something technically interesting.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className={`card-hover bg-gradient-to-br ${project.gradient} border border-white/10 animate-fade-in ${project.wide ? 'lg:col-span-2' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl ${project.iconBg}`}>
                      <project.icon className={`h-6 w-6 ${project.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted/50 hover:bg-muted transition-colors shrink-0"
                    aria-label="GitHub"
                  >
                    <Github className="h-4 w-4" />
                  </a>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.description}</p>

                <ul className="space-y-2 mb-5">
                  {project.highlights.map((h, i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs px-2 py-0.5 bg-background/50 text-foreground/80 border border-white/10">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="https://github.com/SubhashDevulapalli"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors border border-white/10 px-4 py-2 rounded-lg hover:border-primary/40"
          >
            <Github className="h-4 w-4" />
            See all repositories on GitHub
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
