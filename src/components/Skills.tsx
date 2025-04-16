
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "JavaScript", "C/C++", "SQL", "Java (Basic)"],
  },
  {
    title: "Frontend Development",
    skills: ["ReactJS", "HTML", "CSS", "NextJS", "TailwindCSS"],
  },
  {
    title: "Backend Development",
    skills: ["Node.js", "Express.js", "Django", "REST API", "MongoDB"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium mb-2">My Skills</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Technical Expertise
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            A comprehensive overview of my technical skills and proficiencies
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h4 className="text-xl font-bold mb-6">{category.title}</h4>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="default" 
                      className="text-sm py-1.5 px-3 bg-primary/10 hover:bg-primary/20 text-primary hover:text-primary transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h4 className="text-xl font-bold mb-6">Frameworks & Tools</h4>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Git", "GitHub", "Linux", "NumPy", "Pandas", "Postman", "REST API", "CronJobs",
              "JWT", "MongoDB", "MySQL", "Redux", "Express", "TailwindCSS", "Cheerio",
              "Bash", "Cloudinary", "Mongoose", "Bcrypt", "Razorpay"
            ].map((skill, index) => (
              <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
