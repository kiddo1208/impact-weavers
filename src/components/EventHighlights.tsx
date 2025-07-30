import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Heart, Target, ArrowRight } from "lucide-react";
import accessibilityWorkshop from "@/assets/accessibility-workshop.jpg";
import volunteerOrganizing from "@/assets/volunteer-organizing.jpg";
import communityHands from "@/assets/community-hands.jpg";

const EventHighlights = () => {
  const highlights = [
    {
      id: 1,
      title: "Assistive Technology Expo 2024",
      image: accessibilityWorkshop,
      description: "A groundbreaking exhibition showcasing the latest in assistive technologies, bringing together innovators, users, and advocates.",
      impact: {
        participants: 300,
        technologies: 25,
        partnerships: 8
      },
      date: "February 2024",
      featured: true
    },
    {
      id: 2,
      title: "Community Volunteer Drive",
      image: volunteerOrganizing,
      description: "Our largest volunteer mobilization event, connecting passionate individuals with meaningful community service opportunities.",
      impact: {
        volunteers: 150,
        hours: 600,
        projects: 12
      },
      date: "January 2024",
      featured: false
    },
    {
      id: 3,
      title: "Inclusive Workplace Summit",
      image: communityHands,
      description: "Bringing together industry leaders to discuss and implement inclusive practices for people with disabilities in the workplace.",
      impact: {
        companies: 50,
        employees: 500,
        policies: 20
      },
      date: "December 2023",
      featured: true
    }
  ];

  const formatImpactValue = (value: number) => {
    return value >= 1000 ? `${(value / 1000).toFixed(1)}K` : value.toString();
  };

  return (
    <section className="py-20 gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Event Highlights
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Celebrating our most impactful events that have created lasting change 
            in communities and advanced disability inclusion.
          </p>
        </div>

        {/* Featured Event */}
        <div className="mb-16">
          {highlights
            .filter(event => event.featured)
            .slice(0, 1)
            .map((event) => (
              <div key={event.id} className="relative overflow-hidden rounded-2xl shadow-xl">
                <div 
                  className="h-96 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
                  <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-8">
                      <div className="max-w-2xl text-white">
                        <Badge className="mb-4 bg-accent text-accent-foreground">
                          Featured Event • {event.date}
                        </Badge>
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                          {event.title}
                        </h3>
                        <p className="text-lg mb-6 text-white/90">
                          {event.description}
                        </p>
                        
                        {/* Impact Stats */}
                        <div className="flex flex-wrap gap-6 mb-6">
                          <div className="flex items-center gap-2">
                            <Users className="w-5 h-5 text-accent" />
                            <span className="font-semibold">
                              {formatImpactValue(Object.values(event.impact)[0])}
                            </span>
                            <span className="text-white/80 text-sm">
                              {Object.keys(event.impact)[0]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-5 h-5 text-accent" />
                            <span className="font-semibold">
                              {formatImpactValue(Object.values(event.impact)[1])}
                            </span>
                            <span className="text-white/80 text-sm">
                              {Object.keys(event.impact)[1]}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Heart className="w-5 h-5 text-accent" />
                            <span className="font-semibold">
                              {formatImpactValue(Object.values(event.impact)[2])}
                            </span>
                            <span className="text-white/80 text-sm">
                              {Object.keys(event.impact)[2]}
                            </span>
                          </div>
                        </div>
                        
                        <Button variant="accent" className="group">
                          Learn More
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {highlights
            .filter(event => !event.featured || highlights.filter(h => h.featured).indexOf(event) > 0)
            .map((event) => (
              <Card key={event.id} className="overflow-hidden hover-lift border-2 border-transparent hover:border-secondary/30">
                <div 
                  className="h-48 bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${event.image})` }}
                >
                  <div className="absolute inset-0 bg-primary/40"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-primary">
                      {event.date}
                    </Badge>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-3">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  
                  {/* Impact Grid */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(event.impact).map(([key, value], index) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-secondary">
                          {formatImpactValue(value)}
                        </div>
                        <div className="text-xs text-muted-foreground capitalize">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="outline" className="w-full group">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>
    </section>
  );
};

export default EventHighlights;
