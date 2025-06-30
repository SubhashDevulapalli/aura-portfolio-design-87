
import { useState } from 'react';
import { ExternalLink, Github, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Event Management Portal',
      summary: 'Full-stack event management system with SSO and notifications',
      description: 'Built a comprehensive event management portal using React.js, .NET Core, and MySQL. Features include SSO login integration, real-time toast and email notifications, and a GraphQL API for efficient data fetching. Successfully reduced user onboarding time by 30% through streamlined UX design and automated workflows.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React.js', '.NET Core', 'MySQL', 'GraphQL', 'SSO'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Designed and implemented full-stack architecture using .NET Core and React.js',
        'Integrated SSO authentication for seamless user experience',
        'Built GraphQL API for efficient data fetching and real-time updates',
        'Implemented toast and email notification systems',
        'Reduced user onboarding time by 30% through UX optimization'
      ]
    },
    {
      id: 2,
      title: 'Food Tracker Microservices',
      summary: 'Microservices architecture for meal tracking and recommendations',
      description: 'Developed a scalable food tracking application using Node.js, Angular, and MongoDB with Docker containerization. Built microservices architecture for meal tracking, nutritional analysis, and personalized recommendations. Achieved 30% improvement in response time through efficient service design and database optimization.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['Node.js', 'Angular', 'MongoDB', 'Docker', 'Microservices'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Architected microservices using Node.js and Docker containers',
        'Built Angular frontend with responsive design and real-time updates',
        'Implemented MongoDB for efficient data storage and retrieval',
        'Created recommendation engine for personalized meal suggestions',
        'Achieved 30% response time improvement through optimization'
      ]
    },
    {
      id: 3,
      title: 'Legacy System Migration',
      summary: 'Migrated legacy systems to modern .NET Core and Angular',
      description: 'Led the migration of legacy systems to modern .NET Core and Angular frameworks at Techigai. Applied Domain-Driven Design principles and clean architecture patterns. Successfully improved application load times by 40% and enhanced system maintainability. Mentored junior developers throughout the migration process.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['.NET Core', 'Angular', 'Entity Framework', 'Clean Architecture', 'DDD'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Led legacy system migration to .NET Core and Angular',
        'Applied Domain-Driven Design and clean architecture principles',
        'Optimized freight charge logic using Entity Framework Core',
        'Improved application load times by 40%',
        'Mentored junior developers and established coding standards'
      ]
    },
    {
      id: 4,
      title: 'Medical Visualization Web App',
      summary: 'Flask-based medical data visualization platform',
      description: 'Developed a Flask web application for medical data visualization during my internship at Verzeo. The platform helps healthcare professionals make better clinical decisions through interactive data visualization and analysis tools. Built with Python Flask, implemented secure data handling, and created intuitive user interfaces for medical professionals.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop',
      technologies: ['Python', 'Flask', 'Data Visualization', 'Healthcare', 'Analytics'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Built Flask web application for medical data visualization',
        'Implemented secure data handling for healthcare compliance',
        'Created interactive dashboards for clinical decision-making',
        'Designed intuitive UI for medical professionals',
        'Improved clinical decision-making process through data insights'
      ]
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise across 
            full-stack development, microservices architecture, and modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="group cursor-pointer card-hover animate-fade-in bg-card/50 backdrop-blur overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                  <div className="flex space-x-2">
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur text-white border-white/20 hover:bg-white/30">
                      <Github className="h-4 w-4 mr-1" />
                      Code
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white/20 backdrop-blur text-white border-white/20 hover:bg-white/30">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Live
                    </Button>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 line-clamp-2">
                  {project.summary}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologies.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{project.technologies.length - 3} more
                    </Badge>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold mb-4">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>
                
                <div className="space-y-6">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-2">Description</h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Key Responsibilities</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {selectedProject.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <Button asChild>
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Projects;
