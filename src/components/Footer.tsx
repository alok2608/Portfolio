
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#" className="font-bold text-xl text-primary">
              Alok Patel
            </a>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              Professional web developer portfolio
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <a
              href="#about"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            © {currentYear} Alok Patel. All rights reserved.
          </p>
          
          <div className="flex gap-4">
            <a
              href="https://github.com/alok2608"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="GitHub"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/alok-patel-6788a526b/"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="LinkedIn"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:alokpatel2608@gmail.com"
              className="text-gray-500 hover:text-primary transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
