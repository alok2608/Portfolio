
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Code2 } from "lucide-react";
import { useRef } from "react";

const Hero = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    // Scroll to about section when card is clicked
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-32 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-8">
        <div 
          className="w-full md:w-1/2 space-y-6 transition-all duration-300 cursor-pointer" 
          ref={cardRef}
          onClick={handleCardClick}
          role="button"
          tabIndex={0}
          aria-label="View about section"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleCardClick();
            }
          }}
        >
          <div className="space-y-2">
            <h2 className="text-primary font-medium">Hello, I'm</h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white">
              Alok Patel
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300">
              Computer Science Engineer
            </p>
          </div>
          
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-xl">
            Specialized in Data Science and Analytics with expertise in full-stack development, 
            database management, and web applications.
          </p>
          
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button asChild variant="default" className="transition-all duration-300 hover:shadow-lg">
              <a href="#contact">Contact Me</a>
            </Button>
            <div className="flex items-center gap-3 ml-2">
              <a 
                href="https://github.com/alok2608" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-md group"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://www.linkedin.com/in/alok-patel-6788a526b/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-md group"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://leetcode.com/u/Alokpatel18/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-gray-100 dark:bg-gray-800 p-2 rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 hover:shadow-md group"
                aria-label="LeetCode Profile"
              >
                <Code2 className="h-5 w-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          <div className="mt-4 text-sm text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <a href="mailto:alokpatel2608@gmail.com" className="hover:text-primary flex items-center gap-1 transition-all duration-300 hover:translate-y-[-2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              alokpatel2608@gmail.com
            </a>
            <a href="tel:+919044260803" className="hover:text-primary flex items-center gap-1 transition-all duration-300 hover:translate-y-[-2px]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              +91 9044260803
            </a>
          </div>
        </div>
        
        <div className="w-full md:w-2/5">
          <div className="aspect-square rounded-full bg-primary/10 p-3 transition-all duration-300">
            <div className="w-full h-full rounded-full bg-primary/20 p-2">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-blue-400 overflow-hidden border-4 border-white/20 shadow-xl">
                <img
                  src="/lovable-uploads/d36f596e-d890-4fd5-bd30-721f70741551.png"
                  alt="Alok Patel"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
