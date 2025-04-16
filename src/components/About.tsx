
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium mb-2">About Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Professional Profile
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            A brief introduction to who I am and what I do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border shadow-sm">
            <CardContent className="p-6 md:p-8">
              <h4 className="text-xl font-bold mb-3">My Background</h4>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                I'm a Computer Science Engineer with a B.Tech in Computer Science and Engineering,
                specializing in Data Science and Analytics from Indian Institute of Information Technology Nagpur.
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                I'm passionate about building scalable applications, solving complex problems, and creating 
                intuitive user experiences. My expertise spans across full-stack development, database management, 
                and implementing secure authentication systems.
              </p>
            </CardContent>
          </Card>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="text-3xl text-primary font-bold mb-2">1467</div>
                  <h4 className="text-xl font-bold mb-2">LeetCode Rating</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Maximum contest rating
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border shadow-sm">
                <CardContent className="p-6">
                  <div className="text-3xl text-primary font-bold mb-2">600+</div>
                  <h4 className="text-xl font-bold mb-2">DSA Problems</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Solved across platforms
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h4 className="text-xl font-bold mb-3">Achievements</h4>
                <ul className="text-gray-600 dark:text-gray-400 space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Captain and Overall Leading Scorer of the 6th Inter IIIT Cricket Tournament</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Created a website for a college technical event, enhancing event visibility</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Successfully solved 600+ problems related to data structures and algorithms</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
