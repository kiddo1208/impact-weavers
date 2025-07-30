import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Handshake, Users, ArrowRight, Calendar, DollarSign } from "lucide-react";
import communityHands from "@/assets/community-hands.jpg";

const GetInvolved = () => {
  const involvementOptions = [
    {
      icon: Heart,
      title: "Volunteer",
      description: "Join our passionate community of volunteers and directly impact lives through hands-on support.",
      benefits: [
        "Flexible scheduling options",
        "Skills-based volunteering opportunities",
        "Community recognition program",
        "Professional development workshops"
      ],
      cta: "Start Volunteering",
      color: "text-secondary",
      bgColor: "bg-secondary/10"
    },
    {
      icon: DollarSign,
      title: "Donate",
      description: "Your contribution helps fund accessibility tools, training programs, and community support initiatives.",
      benefits: [
        "100% transparent fund usage",
        "Tax-deductible contributions",
        "Regular impact reports",
        "Donor appreciation events"
      ],
      cta: "Make a Donation",
      color: "text-success",
      bgColor: "bg-success/10"
    },
    {
      icon: Handshake,
      title: "Partner With Us",
      description: "Collaborate with us to expand our reach and create more inclusive opportunities in your organization.",
      benefits: [
        "Corporate social responsibility alignment",
        "Employee engagement programs",
        "Brand partnership opportunities",
        "Custom program development"
      ],
      cta: "Become a Partner",
      color: "text-accent",
      bgColor: "bg-accent/20"
    }
  ];

  const quickActions = [
    {
      title: "Upcoming Volunteer Orientation",
      description: "Join our next volunteer orientation session",
      date: "March 20, 2024",
      action: "Register Now"
    },
    {
      title: "Monthly Giving Program",
      description: "Set up recurring donations for sustained impact",
      date: "Start Anytime",
      action: "Learn More"
    },
    {
      title: "Corporate Partnership Meeting",
      description: "Schedule a consultation for your organization",
      date: "Book Available Slots",
      action: "Schedule Call"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-5"
        style={{ backgroundImage: `url(${communityHands})` }}
      ></div>
      <div className="absolute inset-0 gradient-card"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every action creates ripples of change. Choose how you'd like to contribute 
            to building a more inclusive world for people with disabilities.
          </p>
        </div>

        {/* Main Involvement Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {involvementOptions.map((option, index) => (
            <Card key={index} className="hover-lift border-2 border-transparent hover:border-secondary/30 relative overflow-hidden">
              <div className={`absolute top-0 right-0 w-20 h-20 ${option.bgColor} transform rotate-45 translate-x-10 -translate-y-10`}></div>
              
              <CardHeader className="text-center pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${option.bgColor} flex items-center justify-center`}>
                  <option.icon className={`w-8 h-8 ${option.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {option.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-6">
                  {option.description}
                </p>
                
                <div className="space-y-2 mb-6 text-left">
                  {option.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm">
                      <div className={`w-1.5 h-1.5 rounded-full ${option.color.replace('text-', 'bg-')}`}></div>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="cta" className="w-full group">
                  {option.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 mb-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Quick Actions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActions.map((action, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-border hover-lift">
                <h4 className="font-semibold text-primary mb-2">
                  {action.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-3">
                  {action.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-secondary">
                    <Calendar className="w-3 h-3" />
                    {action.date}
                  </div>
                  <Button variant="outline" size="sm">
                    {action.action}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Preview */}
        <div className="text-center bg-primary text-primary-foreground rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">
            Your Impact Starts Today
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Join over 1,000 volunteers, donors, and partners who are already making a difference. 
            Together, we've impacted 500+ lives and counting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg" className="group">
              <Users className="w-5 h-5" />
              Join Our Community
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              View Impact Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;