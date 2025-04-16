
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const educationItems = [
  {
    degree: "B.Tech in Computer Science and Engineering",
    specialization: "Data Science and Analytics",
    institution: "Indian Institute of Information Technology Nagpur",
    location: "Maharashtra, India",
    period: "Nov 2022 - May 2026",
    description:
      "Currently pursuing my bachelor's degree with a focus on Data Science and Analytics.",
    courses: [
      "Data Structures and Algorithms",
      "Operating Systems",
      "Object Oriented Programming",
      "Computer Networks",
      "Database Management Systems",
      "Machine Learning",
      "Artificial Intelligence",
      "Data Handling and Visualization"
    ],
  },
];

const Skills = () => {
  return (
    <section id="education" className="section bg-gray-50 dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium mb-2">Education</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Academic Background
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            My educational journey and qualifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {educationItems.map((item, index) => (
              <Card key={index} className="border shadow-sm">
                <CardContent className="p-6 md:p-8">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-4">
                    <div>
                      <h4 className="text-xl font-bold">{item.degree}</h4>
                      <p className="text-primary font-semibold">
                        {item.specialization}
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.institution}, {item.location}
                      </p>
                    </div>
                    <Badge variant="outline" className="rounded-full">
                      {item.period}
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {item.description}
                  </p>
                  
                  <div>
                    <h5 className="font-semibold mb-2">Relevant Courses:</h5>
                    <div className="flex flex-wrap gap-1.5">
                      {item.courses.map((course, i) => (
                        <Badge key={i} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h4 className="text-xl font-bold mb-6 text-center">Skills and Competencies</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h5 className="font-bold text-lg mb-4">Languages</h5>
                <div className="flex flex-wrap gap-2">
                  {["Python", "C, C++", "SQL", "JavaScript", "Bash", "Java (Basic)"].map((skill, i) => (
                    <Badge key={i} variant="outline" className="py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm">
              <CardContent className="p-6">
                <h5 className="font-bold text-lg mb-4">Frameworks & Tools</h5>
                <div className="flex flex-wrap gap-2">
                  {["Git", "GitHub", "Linux", "Numpy", "Pandas", "Postman", "REST API", "CronJobs"].map((skill, i) => (
                    <Badge key={i} variant="outline" className="py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
