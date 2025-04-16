import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Code2, Mail, Phone, MapPin, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    title: "Email",
    value: "alokpatel2608@gmail.com",
    link: "mailto:alokpatel2608@gmail.com",
  },
  {
    icon: <Phone className="h-5 w-5" />,
    title: "Phone",
    value: "+91 9044260803",
    link: "tel:+919044260803",
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    title: "Location",
    value: "Nagpur, Maharashtra, India",
    link: null,
  },
];

const socialLinks = [
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    url: "https://github.com/alok2608",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    url: "https://www.linkedin.com/in/alok-patel-6788a526b/",
  },
  {
    name: "LeetCode",
    icon: <Code2 className="h-5 w-5" />,
    url: "https://leetcode.com/u/Alokpatel18/",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formError, setFormError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear any previous errors when user starts typing again
    if (formError) setFormError("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormError("");
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setFormError("Please fill in all fields");
      setIsSubmitting(false);
      return;
    }
    
    try {
      // Direct form submission to formsubmit.co
      const form = e.target as HTMLFormElement;
      form.submit();
      
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Note: We don't reset the form here as the page will refresh after submit
    } catch (error) {
      console.error("Error sending email:", error);
      setFormError("Failed to send message. Please try again or contact directly via email.");
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section bg-white dark:bg-gray-950">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-primary font-medium mb-2">Contact Me</h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Get In Touch
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Have a project in mind or want to discuss opportunities? Reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h4 className="text-xl font-bold mb-6">Contact Information</h4>
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="bg-primary/10 text-primary p-2 rounded-full">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">{item.title}</p>
                        {item.link ? (
                          <a
                            href={item.link}
                            className="font-medium hover:text-primary transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="font-medium">{item.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="border shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h4 className="text-xl font-bold mb-6">Connect With Me</h4>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 dark:bg-gray-800 hover:bg-primary/10 hover:text-primary p-4 rounded-full transition-colors"
                      aria-label={link.name}
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-3">
            <Card className="border shadow-sm">
              <CardContent className="p-6 md:p-8">
                <h4 className="text-xl font-bold mb-6">Send Me a Message</h4>
                
                {formError && (
                  <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{formError}</AlertDescription>
                  </Alert>
                )}
                
                <form 
                  action="https://formsubmit.co/alokpatel2608@gmail.com" 
                  method="POST"
                  onSubmit={handleSubmit} 
                  className="space-y-4"
                >
                  {/* formsubmit.co configuration fields */}
                  <input type="hidden" name="_subject" value="New message from your portfolio website!" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={window.location.href} />
                  <input type="hidden" name="_template" value="table" />
                  
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="John Smith"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or opportunity..."
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                    />
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
