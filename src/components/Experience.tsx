
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    name: "Edtech Platform",
    position: "Full Stack Developer",
    period: "May 2024",
    description:
      "A platform for Edtech with real-time messaging for students and instructors.",
    achievements: [
      "Developed a responsive front-end using ReactJS and a scalable backend with Node.JS/Express.JS, utilizing RESTful APIs",
      "Implemented secure authentication (JWT, Bcrypt), course management, and seamless Razorpay payments",
      "Optimized performance with Redux for state management, Tailwind for styling, and Cloudinary for media handling",
      "Integrated Multer and Cloudinary for media management and Mongoose for MongoDB interactions to ensure data integrity and security"
    ],
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Redux", "Tailwind CSS", "Cloudinary"],
    githubUrl: "https://github.com/alok2608/Edtech-platform"
  },
  {
    name: "Job Portal",
    position: "Backend Developer",
    period: "July 2024",
    description:
      "Backend for Jobsites, enabling full CRUD operations for job listings.",
    achievements: [
      "Built a powerful backend with Node.js and Express.js, enabling full CRUD operations for job listings",
      "Implemented user authentication and authorization with JWT for secure login and session management",
      "Utilized MongoDB aggregation for advanced filtering and querying functionalities",
      "Integrated Swagger UI for API documentation, improving developer experience and facilitating API exploration",
      "Designed and integrated middleware for form handling and security, implementing custom authentication and input validation",
      "Enhanced application security using built-in Node.js security packages such as helmet and express-rate-limit"
    ],
    technologies: ["Node.js", "HTML", "JavaScript", "Express.js", "MongoDB", "JWT", "Swagger UI"],
    githubUrl: "https://github.com/alok2608/job-portal"
  },
  {
    name: "PriceTrack",
    position: "Web Developer",
    period: "December 2024",
    description:
      "A Web Scraping App that extracts product data from Amazon via URLs.",
    achievements: [
      "Created a web scraping tool using Next.js, Bright Data, and Cheerio to extract product data from Amazon via URLs",
      "Stored scraped data in MongoDB and displayed products on an intuitive frontend interface",
      "Configured automated email notifications to alert users about updates or issues in the scraping process",
      "Designed custom data extraction logic to accurately capture and store product details, including prices, ratings, and reviews"
    ],
    technologies: ["TailwindCSS", "Next.js", "REST API", "MongoDB", "Cheerio", "JavaScript"],
    githubUrl: "https://github.com/alok2608/Price_track"
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium mb-2">Projects</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Notable Work
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            A showcase of my key projects and applications
          </p>
        </div>
        
        <div className="relative pl-8 border-l border-gray-200 dark:border-gray-700 space-y-12 max-w-3xl mx-auto">
          {projects.map((project, index) => (
            <div key={index} className="timeline-dot fade-in relative">
              <Card className="border shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold">{project.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        {project.position}
                      </p>
                    </div>
                    <Badge variant="outline" className="rounded-full">
                      {project.period}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Key Features:</h5>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      {project.achievements.map((achievement, i) => (
                        <li key={i}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.technologies.map((tech, i) => (
                      <Badge key={i} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-6">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex items-center gap-1.5"
                      onClick={() => window.open(project.githubUrl, "_blank")}
                    >
                      <Github className="h-4 w-4" /> 
                      <span>View on GitHub</span>
                      <ExternalLink className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
