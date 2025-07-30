import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Phone, Mail, MapPin, Clock, User, Calendar, HelpCircle } from "lucide-react";
import { useState } from "react";

const ContactSupport = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);

  const coordinators = [
    {
      name: "Priya Nair",
      role: "Community Events Coordinator",
      specialization: "Accessibility Workshops & Tech Training",
      email: "priya.nair@cognizant.com",
      phone: "+91 98765 43210",
      availability: "Mon-Fri, 9 AM - 6 PM IST",
      image: "PN",
      location: "Bangalore"
    },
    {
      name: "Rajesh Kumar",
      role: "Volunteer Program Manager",
      specialization: "Volunteer Coordination & Community Outreach",
      email: "rajesh.kumar@cognizant.com",
      phone: "+91 98765 43211",
      availability: "Mon-Fri, 10 AM - 7 PM IST",
      image: "RK",
      location: "Chennai"
    },
    {
      name: "Meera Sharma",
      role: "Partnership Development Lead",
      specialization: "Corporate Partnerships & Strategic Alliances",
      email: "meera.sharma@cognizant.com",
      phone: "+91 98765 43212",
      availability: "Mon-Fri, 9 AM - 5 PM IST",
      image: "MS",
      location: "Mumbai"
    }
  ];

  const supportOptions = [
    {
      title: "Quick Chat Support",
      description: "Get instant answers to common questions about events and volunteering",
      icon: MessageCircle,
      action: "Start Chat",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      title: "Phone Support",
      description: "Speak directly with our team for detailed assistance and guidance",
      icon: Phone,
      action: "Call Now",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      title: "Email Support",
      description: "Send detailed inquiries and receive comprehensive responses",
      icon: Mail,
      action: "Send Email",
      color: "text-accent",
      bgColor: "bg-accent/20"
    }
  ];

  const faqItems = [
    {
      question: "How can I register for upcoming events?",
      answer: "You can register through our events page or contact our coordinators directly."
    },
    {
      question: "What volunteer opportunities are available?",
      answer: "We offer various roles from event coordination to specialized technical support."
    },
    {
      question: "How do I become a corporate partner?",
      answer: "Contact our Partnership Development team to discuss collaboration opportunities."
    },
    {
      question: "Are events accessible for people with disabilities?",
      answer: "Yes, all our events are designed with full accessibility and inclusion in mind."
    }
  ];

  const officeLocations = [
    {
      city: "Bangalore",
      address: "Embassy Golf Links Business Park, Intermediate Ring Road, Domlur",
      phone: "+91 80 4022 8000",
      email: "bangalore.events@cognizant.com"
    },
    {
      city: "Chennai", 
      address: "Cognizant Technology Solutions, Rajiv Gandhi Salai, Navalur",
      phone: "+91 44 4224 5000",
      email: "chennai.events@cognizant.com"
    },
    {
      city: "Mumbai",
      address: "Godrej Eternia, Old Mumbai Pune Highway, Shivaji Nagar",
      phone: "+91 22 4949 7000", 
      email: "mumbai.events@cognizant.com"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contact & Support
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have questions about our events, need assistance, or want to get involved? 
            Our dedicated team is here to help you every step of the way.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {supportOptions.map((option, index) => (
            <Card key={index} className="hover-lift text-center border-2 border-transparent hover:border-secondary/30">
              <CardHeader>
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${option.bgColor} flex items-center justify-center`}>
                  <option.icon className={`w-8 h-8 ${option.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {option.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  {option.description}
                </p>
                <Button 
                  variant="cta" 
                  className="w-full"
                  onClick={() => option.title.includes('Chat') && setChatbotOpen(true)}
                >
                  {option.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Event Coordinators */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Meet Our Event Coordinators
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coordinators.map((coordinator, index) => (
              <Card key={index} className="hover-lift">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-accent-foreground text-xl font-bold">
                      {coordinator.image}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-bold text-primary">
                    {coordinator.name}
                  </CardTitle>
                  <p className="text-sm text-secondary font-medium">
                    {coordinator.role}
                  </p>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Specialization:</strong> {coordinator.specialization}
                    </p>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <MapPin className="w-4 h-4 text-secondary" />
                      <span>{coordinator.location}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span>{coordinator.availability}</span>
                    </div>
                    
                    <div className="pt-3 space-y-2">
                      <Button variant="outline" size="sm" className="w-full">
                        <Mail className="w-4 h-4" />
                        Email
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        <Phone className="w-4 h-4" />
                        Call
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Office Locations
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeLocations.map((office, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-primary mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-secondary" />
                    {office.city}
                  </h4>
                  <div className="space-y-3 text-sm">
                    <p className="text-muted-foreground">
                      {office.address}
                    </p>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span>{office.phone}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-secondary" />
                      <span className="text-secondary">{office.email}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-2">
            <HelpCircle className="w-6 h-6 text-secondary" />
            Frequently Asked Questions
          </h3>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index} className="hover-lift">
                <CardContent className="p-6">
                  <h4 className="font-semibold text-primary mb-2">
                    {item.question}
                  </h4>
                  <p className="text-muted-foreground">
                    {item.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Contact Form CTA */}
        <div className="text-center bg-gradient-to-r from-primary to-secondary text-white rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Still Have Questions?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Send us a detailed message and we'll get back to you 
            within 24 hours with personalized assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              <User className="w-5 h-5" />
              Send Detailed Inquiry
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Calendar className="w-5 h-5" />
              Schedule a Call
            </Button>
          </div>
        </div>

        {/* Chatbot Widget */}
        {chatbotOpen && (
          <div className="fixed bottom-4 right-4 w-80 h-96 bg-white rounded-lg shadow-xl border border-border z-50">
            <div className="bg-secondary text-secondary-foreground p-4 rounded-t-lg">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Event Support Chat</span>
                <button 
                  onClick={() => setChatbotOpen(false)}
                  className="text-secondary-foreground hover:opacity-70"
                >
                  ×
                </button>
              </div>
            </div>
            <div className="p-4 h-80 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <MessageCircle className="w-12 h-12 mx-auto mb-4 text-secondary" />
                <p>Chat support coming soon!</p>
                <p className="text-sm">For now, please use our contact options above.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactSupport;