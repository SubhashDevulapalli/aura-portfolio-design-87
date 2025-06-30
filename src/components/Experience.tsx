
import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications serving 100K+ users. Mentor junior developers and architect cloud-native solutions.',
      achievements: [
        'Reduced application load time by 40% through optimization',
        'Led migration to microservices architecture',
        'Mentored 5+ junior developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'PostgreSQL'],
      logo: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=60&h=60&fit=crop'
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2020 - 2022',
      description: 'Built and maintained multiple client-facing applications. Collaborated with design team to implement pixel-perfect UIs.',
      achievements: [
        'Developed 3 major features that increased user engagement by 25%',
        'Integrated payment systems processing $2M+ annually',
        'Built responsive web applications for mobile and desktop',
        'Collaborated with cross-functional teams in Agile environment'
      ],
      technologies: ['React', 'Express.js', 'MongoDB', 'Stripe', 'Heroku'],
      logo: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=60&h=60&fit=crop'
    },
    {
      id: 3,
      title: 'Frontend Developer',
      company: 'Digital Agency Pro',
      location: 'Remote',
      period: '2019 - 2020',
      description: 'Specialized in creating high-performance frontend applications. Worked with multiple clients across various industries.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Improved website performance scores by average 35%',
        'Implemented modern CSS frameworks and design systems',
        'Created reusable component libraries'
      ],
      technologies: ['React', 'Vue.js', 'SASS', 'Webpack', 'Figma'],
      logo: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=60&h=60&fit=crop'
    },
    {
      id: 4,
      title: 'Junior Web Developer',
      company: 'Local Web Studio',
      location: 'Denver, CO',
      period: '2018 - 2019',
      description: 'Started my professional journey building websites for small businesses. Gained experience in full-stack development.',
      achievements: [
        'Built 20+ responsive websites from scratch',
        'Learned modern JavaScript frameworks and tools',
        'Collaborated with designers to implement custom designs',
        'Provided technical support and maintenance'
      ],
      technologies: ['HTML/CSS', 'JavaScript', 'PHP', 'WordPress', 'MySQL'],
      logo: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=60&h=60&fit=crop'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey through various roles, showcasing growth, 
            achievements, and the impact I've made at each organization.
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
                        <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
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
      </div>
    </section>
  );
};

export default Experience;
