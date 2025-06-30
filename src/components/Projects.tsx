
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
      title: 'E-Commerce Platform',
      summary: 'Full-stack e-commerce solution with modern UI',
      description: 'Built a comprehensive e-commerce platform using React, Node.js, and PostgreSQL. Features include user authentication, product catalog, shopping cart, payment integration with Stripe, and admin dashboard for inventory management.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Designed and implemented RESTful APIs',
        'Integrated Stripe payment processing',
        'Built responsive React components',
        'Optimized database queries for performance'
      ]
    },
    {
      id: 2,
      title: 'Task Management App',
      summary: 'Collaborative project management tool',
      description: 'Developed a real-time collaborative task management application with drag-and-drop functionality, team collaboration features, and comprehensive reporting. Built with React, Express.js, and Socket.io for real-time updates.',
      image: 'https://images.unsplash.com/photo-1483058712412-4245e9b90334?w=600&h=400&fit=crop',
      technologies: ['React', 'Express.js', 'MongoDB', 'Socket.io', 'JWT'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Implemented real-time collaboration with Socket.io',
        'Created drag-and-drop interface with React DnD',
        'Built authentication system with JWT',
        'Designed responsive mobile-first UI'
      ]
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      summary: 'Data visualization and reporting platform',
      description: 'Created an interactive analytics dashboard for business intelligence with customizable charts, real-time data updates, and export functionality. Used D3.js for custom visualizations and implemented efficient data caching.',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop',
      technologies: ['React', 'D3.js', 'Python', 'FastAPI', 'Redis'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Built interactive charts with D3.js',
        'Implemented data caching with Redis',
        'Created Python ETL pipelines',
        'Optimized frontend performance'
      ]
    },
    {
      id: 4,
      title: 'Social Media App',
      summary: 'Modern social networking platform',
      description: 'Developed a social media platform with features like posts, comments, likes, real-time messaging, and user profiles. Implemented image upload functionality and optimized for mobile devices.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop',
      technologies: ['React Native', 'Firebase', 'Node.js', 'CloudFront'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      responsibilities: [
        'Built cross-platform mobile app',
        'Implemented real-time messaging',
        'Set up image processing pipeline',
        'Integrated push notifications'
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
            full-stack development, UI/UX design, and modern technologies.
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
