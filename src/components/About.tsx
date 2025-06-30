
import { Code, Database, Globe, Smartphone, Zap, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    { name: 'C# / .NET', level: 95, color: 'bg-purple-500' },
    { name: 'React.js', level: 90, color: 'bg-blue-500' },
    { name: 'Node.js', level: 85, color: 'bg-green-500' },
    { name: 'Python', level: 80, color: 'bg-yellow-500' },
    { name: 'Azure', level: 85, color: 'bg-blue-600' },
    { name: 'SQL Server', level: 90, color: 'bg-orange-500' },
  ];

  const techStack = [
    { category: 'Languages', items: ['C#', 'Java', 'Python', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks', items: ['ASP.NET Core', 'React.js', 'Angular', 'Node.js', 'MVC'] },
    { category: 'Databases', items: ['SQL Server', 'PostgreSQL', 'MongoDB', 'T-SQL'] },
    { category: 'Tools & Cloud', items: ['Azure', 'Docker', 'Git', 'CI/CD', 'Postman'] },
  ];

  const highlights = [
    {
      icon: Code,
      title: 'Full-Stack Development',
      description: 'Expert in building scalable web applications using modern frameworks',
    },
    {
      icon: Globe,
      title: 'Cloud Architecture',
      description: 'Experienced with Azure services and containerization with Docker',
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Proficient in designing efficient database systems and optimization',
    },
    {
      icon: Smartphone,
      title: 'API Development',
      description: 'Building robust RESTful and GraphQL APIs with clean architecture',
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Improving application performance and reducing load times significantly',
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Mentoring junior developers and collaborating in Agile environments',
    },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Software Engineer with 4+ years of experience building robust applications
            and leading development teams. Currently pursuing Master's in Computer Science at UCF.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Personal Story */}
          <div className="space-y-6">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-4">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Currently pursuing my Master's in Computer Science at the University of Central Florida 
                with a stellar 3.875 GPA, I bring a unique blend of academic excellence and practical 
                industry experience to every project I undertake.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                My professional journey includes significant contributions at Techigai, where I successfully 
                migrated legacy systems to modern .NET Core and Angular frameworks, achieving remarkable 
                40% improvements in load times. I've built scalable APIs, mentored junior developers, 
                and automated critical business processes.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I'm passionate about clean architecture, performance optimization, and creating 
                innovative solutions that make a real difference. When I'm not coding, I'm exploring 
                new technologies and contributing to open-source projects.
              </p>
            </div>
          </div>

          {/* Skills Progress */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center">Technical Stack</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {techStack.map((category) => (
              <Card key={category.category} className="card-hover bg-card/50 backdrop-blur">
                <CardContent className="p-6">
                  <h4 className="font-semibold mb-3 text-primary">{category.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((highlight, index) => (
            <Card
              key={highlight.title}
              className="card-hover animate-scale-in bg-card/50 backdrop-blur"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
