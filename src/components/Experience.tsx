
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Research Assistant',
      company: 'University of Central Florida',
      location: 'Orlando, FL',
      period: 'Jan 2025 - May 2025',
      description: 'Working on advanced research projects integrating modern web technologies with data visualization and real-time systems.',
      achievements: [
        'Integrated RESTful and GraphQL APIs with React for real-time dashboards',
        'Collaborated on UI/UX iterations achieving 95% positive user feedback',
        'Developed responsive data visualization components',
        'Contributed to research publications on web technology integration'
      ],
      technologies: ['React.js', 'GraphQL', 'RESTful APIs', 'Data Visualization'],
      logo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop'
    },
    {
      id: 2,
      title: 'Software Engineer',
      company: 'Techigai',
      location: 'Remote',
      period: 'Apr 2022 - Dec 2023',
      description: 'Led development of enterprise-scale applications and mentored junior developers in modern software development practices.',
      achievements: [
        'Migrated legacy systems to .NET Core and Angular, improving load times by 40%',
        'Built scalable APIs using Domain-Driven Design and clean architecture',
        'Optimized freight charge logic using Entity Framework Core',
        'Mentored 3+ junior developers and established coding standards',
        'Automated HR operations using background services and SMTP integration'
      ],
      technologies: ['.NET Core', 'Angular', 'Entity Framework', 'Clean Architecture', 'Azure'],
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=60&h=60&fit=crop'
    },
    {
      id: 3,
      title: 'Associate Software Engineer',
      company: 'Techigai',
      location: 'Remote',
      period: 'Jan 2021 - Apr 2022',
      description: 'Focused on building secure, scalable systems and implementing modern authentication mechanisms for enterprise applications.',
      achievements: [
        'Designed secure batch processing systems for high-volume APIs',
        'Implemented OAuth 2.0 authentication and authorization',
        'Reduced support workload by building intelligent HR chatbot',
        'Improved UI performance by 25% through Redux state optimization',
        'Collaborated with cross-functional teams in Agile environment'
      ],
      technologies: ['C#', 'OAuth 2.0', 'Redux', 'API Development', 'Chatbot'],
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=60&h=60&fit=crop'
    },
    {
      id: 4,
      title: 'Software Development Intern',
      company: 'Verzeo',
      location: 'Remote',
      period: 'Apr 2020 - Jul 2020',
      description: 'Gained hands-on experience in web development and data visualization for healthcare applications.',
      achievements: [
        'Built Flask web application for medical data visualization',
        'Improved clinical decision-making through interactive dashboards',
        'Implemented secure data handling for healthcare compliance',
        'Created responsive UI components for medical professionals'
      ],
      technologies: ['Python', 'Flask', 'Data Visualization', 'Healthcare', 'Web Development'],
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=60&h=60&fit=crop'
    }
  ];

  const certifications = [
    'Career Essentials in GitHub (GitHub)',
    'Oracle Relational Database Management System',
    'Docker Foundations Professional Certificate'
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey through various roles, showcasing continuous growth, 
            technical achievements, and leadership in software development.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 md:-ml-0.5 top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={experience.id}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 md:-ml-2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card 
                    className="ml-16 md:ml-0 card-hover animate-slide-in-left bg-card/50 backdrop-blur"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <CardContent className="p-6">
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <img
                            src={experience.logo}
                            alt={experience.company}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <h3 className="text-xl font-semibold">{experience.title}</h3>
                            <p className="text-primary font-medium">{experience.company}</p>
                          </div>
                        </div>
                      </div>

                      {/* Meta info */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" />
                          {experience.period}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="h-4 w-4 mr-1" />
                          {experience.location}
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {experience.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-4">
                        <h4 className="font-semibold mb-2">Key Achievements:</h4>
                        <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                          {experience.achievements.map((achievement, achIndex) => (
                            <li key={achIndex}>{achievement}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-semibold mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <Card 
                key={cert} 
                className="card-hover bg-card/50 backdrop-blur animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <h4 className="font-semibold text-primary">{cert}</h4>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
