import { Calendar, MapPin, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer I',
      company: 'MTM Health',
      location: 'Remote',
      period: 'Jul 2025 – Present',
      context: 'Healthcare technology — HIPAA-compliant, multi-system enterprise environment',
      achievements: [
        'Engineered HIPAA-compliant REST APIs using ASP.NET Core and React.js to enable secure, real-time data interoperability across 3+ integrated enterprise systems, directly accelerating feature delivery velocity by 2x per sprint cycle.',
        'Architected a distributed caching solution combining IMemoryCache with heartbeat-based invalidation and Redis, eliminating cross-server data inconsistency and reducing cache staleness incidents by 20% across mission-critical claims workflows.',
        'Led Agile sprint planning and backlog grooming for a 12-engineer team, introducing structured grooming ceremonies that reduced sprint carryover by 25% and improved on-time delivery across quarterly release cycles.',
        'Implemented SignalR-based real-time push notifications across claims and trip management workflows, achieving sub-120ms notification latency and improving end-user engagement across high-volume operational queues.',
        'Automated end-to-end CI/CD pipelines in Jenkins, cutting manual release effort by 40% and enabling consistent, zero-downtime deployments across development and production environments.',
      ],
      technologies: ['ASP.NET Core', 'React.js', 'SignalR', 'Redis', 'Jenkins', 'HIPAA', 'CI/CD'],
      dotColor: 'bg-blue-500',
      gradientFrom: 'from-blue-500/10',
      gradientTo: 'to-cyan-500/10',
    },
    {
      id: 2,
      title: 'Research Assistant',
      company: 'University of Central Florida',
      location: 'Orlando, FL',
      period: 'Jan 2025 – May 2025',
      context: 'Academic CMS platform modernization — API scalability and frontend performance research',
      achievements: [
        'Modernized a legacy CMS platform by migrating REST endpoints to GraphQL, eliminating over-fetching and increasing concurrent user capacity by 20% through optimized, schema-driven API design patterns.',
        'Engineered modular shared service libraries and standardized UI component architecture, reducing component duplication by 35% and delivering a verified 35% improvement in page load performance validated through Lighthouse audits.',
      ],
      technologies: ['GraphQL', 'React.js', 'REST APIs', 'Lighthouse', 'TypeScript'],
      dotColor: 'bg-purple-500',
      gradientFrom: 'from-purple-500/10',
      gradientTo: 'to-pink-500/10',
    },
    {
      id: 3,
      title: 'Software Engineer',
      company: 'Techigai Pvt. Ltd.',
      location: 'Hyderabad, India',
      period: 'Apr 2022 – Dec 2023',
      context: 'ERP & E-commerce platform engineering — Microservices architecture, cloud-native design, Azure',
      achievements: [
        'Spearheaded migration of legacy ERP and e-commerce monoliths to .NET Core microservices and Angular, applying SOLID principles and domain-driven design to reduce page load times by 30% and cut deployment cycle time significantly.',
        'Optimized high-traffic T-SQL stored procedures, views, and triggers through index tuning and execution plan analysis, reducing average query runtime by 30% and cutting database CPU utilization.',
        'Designed high-throughput batch processing pipelines and .NET background services powered by Azure Functions, increasing API transaction throughput by 60% under peak load conditions while maintaining SLA compliance.',
        'Orchestrated integration of 5+ third-party services processing 10,000+ daily transactions, ensuring 99.9% uptime through robust error handling, retry policies, and circuit-breaker design patterns.',
        'Championed TDD using xUnit and NUnit, raising automated test coverage from 40% to 90% and reducing post-release defects, enabling confident continuous deployment.',
      ],
      technologies: ['.NET Core', 'Angular', 'Azure Functions', 'T-SQL', 'Docker', 'TDD', 'xUnit'],
      dotColor: 'bg-green-500',
      gradientFrom: 'from-green-500/10',
      gradientTo: 'to-emerald-500/10',
    },
    {
      id: 4,
      title: 'Associate Software Engineer',
      company: 'Techigai Pvt. Ltd.',
      location: 'Hyderabad, India',
      period: 'Sep 2020 – Apr 2022',
      context: 'Foundation engineering — Backend services, API security, React UI, container orchestration',
      achievements: [
        'Built .NET background services and SMTP-based notification pipelines to automate HR workflows, processing 50,000+ records per day at 99.99% uptime while cutting manual support overhead by 80%.',
        'Secured REST APIs with OAuth2/JWT authentication, eliminating all unauthorized access incidents across production services and establishing a reusable identity security pattern team-wide.',
        'Redesigned high-traffic React UIs using Bootstrap and jQuery, improving page load performance and increasing user engagement by 30% as measured by session duration analytics.',
        'Containerized microservices using Docker and Kubernetes, reducing deployment errors by 20% and enabling infrastructure to reliably scale under concurrent peak-load traffic scenarios.',
        'Introduced Redux for centralized state management across 7+ high-traffic React components, eliminating prop-drilling complexity and improving UI predictability.',
      ],
      technologies: ['C#', '.NET', 'OAuth2', 'JWT', 'React.js', 'Redux', 'Docker', 'Kubernetes'],
      dotColor: 'bg-orange-500',
      gradientFrom: 'from-orange-500/10',
      gradientTo: 'to-amber-500/10',
    },
  ];

  const education = {
    degree: 'Master of Science, Computer Science',
    school: 'University of Central Florida',
    location: 'Orlando, FL',
    period: 'Jan 2024 – May 2025',
    gpa: '3.9 / 4.0',
  };

  const certifications = [
    { name: 'Docker Professional Certificate', issuer: 'Docker' },
    { name: 'Career Essentials in GitHub Professional Certificate', issuer: 'GitHub' },
    { name: 'Microsoft Azure AI Essentials Professional Certificate', issuer: 'Microsoft' },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            5+ years building things that actually work at scale — from 10k daily transactions to HIPAA-compliant healthcare systems.
          </p>
        </div>

        <div className="relative space-y-8 mb-20">
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/60 via-primary/20 to-transparent" />

          {experiences.map((exp, index) => (
            <div key={exp.id} className="relative pl-12 md:pl-20">
              <div className={`absolute left-2 md:left-6 top-6 w-5 h-5 rounded-full ${exp.dotColor} border-4 border-background shadow-lg z-10`} />

              <Card className={`card-hover bg-gradient-to-br ${exp.gradientFrom} ${exp.gradientTo} border border-white/10 backdrop-blur animate-fade-in`} style={{ animationDelay: `${index * 0.15}s` }}>
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                        <span className="text-primary font-semibold text-base">{exp.company}</span>
                        <span className="text-muted-foreground flex items-center gap-1 text-sm">
                          <MapPin className="h-3.5 w-3.5" /> {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="flex items-center gap-1.5 text-sm text-muted-foreground bg-muted/50 px-3 py-1.5 rounded-full shrink-0">
                      <Calendar className="h-3.5 w-3.5" /> {exp.period}
                    </span>
                  </div>

                  <p className="text-sm italic text-muted-foreground mb-4 border-l-2 border-primary/40 pl-3">{exp.context}</p>

                  <ul className="space-y-2.5 mb-5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2.5 text-sm text-muted-foreground leading-relaxed">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                        {achievement}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2.5 py-1 bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <Card className="card-hover bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-blue-500/20">
                  <Award className="h-5 w-5 text-blue-400" />
                </div>
                <h3 className="text-lg font-bold">Education</h3>
              </div>
              <h4 className="font-semibold text-base">{education.degree}</h4>
              <p className="text-primary font-medium mt-1">{education.school}</p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {education.location}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {education.period}</span>
              </div>
              <div className="mt-3">
                <Badge className="bg-green-500/20 text-green-400 border border-green-500/30 text-sm px-3 py-1">
                  GPA: {education.gpa}
                </Badge>
              </div>
            </CardContent>
          </Card>

          <Card className="card-hover bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-white/10">
            <CardContent className="p-6">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  <Award className="h-5 w-5 text-yellow-400" />
                </div>
                <h3 className="text-lg font-bold">Certifications</h3>
              </div>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yellow-400 shrink-0" />
                    <div>
                      <p className="text-sm font-medium">{cert.name}</p>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
