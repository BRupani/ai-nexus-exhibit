
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon."
      });
      // Reset form after a delay
      setTimeout(() => {
        setIsSubmitted(false);
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-tech-dark relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-tech-purple opacity-5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-tech-teal opacity-5 blur-3xl rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
            Get In Touch
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Let's discuss how AI can transform your business. Whether you're looking for
            consultation, collaboration, or just want to connect, I'd love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex flex-col space-y-2">
              <h3 className="text-xl font-bold text-white">Contact Information</h3>
              <p className="text-gray-400">
                Feel free to reach out through any of these channels. I'm always
                open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-4 pt-4">
              <div className="flex items-start space-x-4">
                <div className="bg-tech-light-gray/30 p-3 rounded-full">
                  <Mail className="text-tech-teal w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">Email</h4>
                  <p className="text-white">bhawna.rupani@plaksha.edu.in</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tech-light-gray/30 p-3 rounded-full">
                  <Phone className="text-tech-teal w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">LinkedIn</h4>
                  <p className="text-white">
                    <a 
                      href="https://www.linkedin.com/in/bhawnarupani/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      linkedin.com/in/bhawnarupani/
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-tech-light-gray/30 p-3 rounded-full">
                  <MapPin className="text-tech-teal w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-300">Location</h4>
                  <p className="text-white">Available globally or for remote work</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-tech-light-gray/10 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-gray-300">
                    Your Name
                  </label>
                  <Input id="name" name="name" value={formState.name} onChange={handleChange} placeholder="John Doe" required className="bg-tech-light-gray/30 border-gray-700 focus:border-tech-teal" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-300">
                    Your Email
                  </label>
                  <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="john@example.com" required className="bg-tech-light-gray/30 border-gray-700 focus:border-tech-teal" />
                </div>
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                  Subject
                </label>
                <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} placeholder="How can I help you?" required className="bg-tech-light-gray/30 border-gray-700 focus:border-tech-teal" />
              </div>

              <div className="space-y-2 mb-6">
                <label htmlFor="message" className="text-sm font-medium text-gray-300">
                  Message
                </label>
                <Textarea id="message" name="message" value={formState.message} onChange={handleChange} placeholder="Write your message here..." rows={6} required className="bg-tech-light-gray/30 border-gray-700 focus:border-tech-teal resize-none" />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-tech-teal to-tech-blue hover:from-tech-blue hover:to-tech-teal transition-all duration-300" disabled={isSubmitting || isSubmitted}>
                {isSubmitting ? (
                  <span className="flex items-center">
                    <span className="animate-spin mr-2">
                      <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    </span>
                    Sending...
                  </span>
                ) : isSubmitted ? (
                  <span className="flex items-center">
                    <CheckCircle2 className="mr-2 w-5 h-5" />
                    Message Sent!
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
