import { Code2, Database, Cloud, Globe, Zap, Users, Server, Layers } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const About = () => {
  const skillCategories = [
    {
      title: 'Backend',
      icon: Server,
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      skills: ['ASP.NET Core', '.NET Framework', 'ML.NET', 'Entity Framework Core', 'Node.js', 'SignalR'],
    },
    {
      title: 'Frontend',
      icon: Globe,
      color: 'text-cyan-400',
      bg: 'bg-cyan-500/10',
      skills: ['React.js', 'Angular', 'Redux', 'Blazor', 'Bootstrap', 'TypeScript', 'JavaScript'],
    },
    {
      title: 'Database',
      icon: Database,
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      skills: ['MS SQL Server', 'T-SQL', 'Stored Procedures', 'Indexing', 'MongoDB', 'MySQL', 'Redis', 'GraphQL'],
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      color: 'text-green-400',
      bg: 'bg-green-500/10',
      skills: ['Azure (Service Bus, Functions, SQL DB)', 'AWS', 'Docker', 'Kubernetes', 'Jenkins', 'CI/CD'],
    },
    {
      title: 'Languages',
      icon: Code2,
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      skills: ['C#', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Tools & Practices',
      icon: Layers,
      color: 'text-pink-400',
      bg: 'bg-pink-500/10',
      skills: ['Git', 'Postman', 'Visual Studio', 'xUnit', 'NUnit', 'TDD', 'Agile/Scrum', 'Confluence'],
    },
  ];

  const highlights = [
    {
      icon: Zap,
      title: '5+ Years Experience',
      description: 'Built production systems across healthcare, ERP, e-commerce, and academic platforms.',
      color: 'text-yellow-400',
      bg: 'bg-yellow-500/10',
    },
    {
      icon: Server,
      title: 'Full-Stack .NET',
      description: 'Deep expertise from database queries to React UIs, with a strong foundation in clean architecture.',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
    },
    {
      icon: Cloud,
      title: 'Cloud-Native',
      description: 'Shipped containerized microservices on Azure and AWS, with proper CI/CD and zero-downtime deployments.',
      color: 'text-green-400',
      bg: 'bg-green-500/10',
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Led sprint planning for 12-person engineering teams and mentored junior devs through code reviews.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I write software that ships, scales, and holds up when it matters most.
          </p>
        </div>

        {/* Bio */}
        <div className="grid lg:grid-cols-5 gap-10 items-start mb-16">
          <div className="lg:col-span-3 space-y-5 animate-fade-in">
            <h3 className="text-2xl font-bold">My Story</h3>
            <p className="text-muted-foreground leading-relaxed text-base">
              I’m a Full-Stack .NET Engineer with 5+ years of experience designing backend systems, leading Agile teams, and owning delivery end to end. I bring strong technical foundations across .NET, React, Azure, and SQL, but what I value more is understanding <em>why</em> something is being built and making sure it’s built right.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              My journey started at Techigai, where I grew from building secure APIs and containerized services to architecting full microservices migrations and leading sprint ceremonies for cross-functional teams. More recently I’ve been at MTM Health, working in a HIPAA-compliant healthcare environment where the stakes are real and the code has to be right.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              I completed my Master’s in Computer Science at the University of Central Florida with a 3.9 GPA, which pushed me deeper into GraphQL, performance engineering, and scalable system design. I contribute best to environments that value clean engineering, cross-functional collaboration, and continuous improvement.
            </p>
          </div>

          {/* Highlights */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 animate-fade-in">
            {highlights.map((item) => (
              <div key={item.title} className={`flex gap-3 p-4 rounded-xl ${item.bg} border border-white/5`}>
                <div className={`mt-0.5 shrink-0 ${item.color}`}>
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-sm">{item.title}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Core Skills</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillCategories.map((category) => (
              <Card key={category.title} className={`card-hover ${category.bg} border border-white/10`}>
                <CardContent className="p-5">
                  <div className="flex items-center gap-2.5 mb-4">
                    <category.icon className={`h-5 w-5 ${category.color}`} />
                    <h4 className="font-semibold text-sm">{category.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs px-2 py-0.5 bg-background/50 text-foreground/80 border border-white/10">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
