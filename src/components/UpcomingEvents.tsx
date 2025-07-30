import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      name: "Accessibility Tech Workshop",
      date: "March 15, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Cognizant Campus, Bangalore",
      description: "Learn about assistive technologies and inclusive design principles",
      spots: "25 spots left",
      type: "Workshop",
      featured: true
    },
    {
      id: 2,
      name: "Community Sports Day",
      date: "March 22, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Central Park, Chennai",
      description: "Inclusive sports activities for people of all abilities",
      spots: "Open registration",
      type: "Sports",
      featured: false
    },
    {
      id: 3,
      name: "Digital Literacy Drive",
      date: "March 29, 2024",
      time: "2:00 PM - 6:00 PM",
      location: "Community Center, Hyderabad",
      description: "Teaching digital skills to underserved communities",
      spots: "15 spots left",
      type: "Education",
      featured: true
    },
    {
      id: 4,
      name: "Awareness Campaign Walk",
      date: "April 5, 2024",
      time: "7:00 AM - 10:00 AM",
      location: "Marina Beach, Chennai",
      description: "Raising awareness for disability rights and inclusion",
      spots: "Open registration",
      type: "Awareness",
      featured: false
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Upcoming Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in making a difference. Discover upcoming opportunities to volunteer, 
            learn, and support our inclusive community initiatives.
          </p>
        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {events.map((event) => (
            <Card 
              key={event.id} 
              className={`hover-lift cursor-pointer border-2 transition-all ${
                event.featured 
                  ? 'border-secondary shadow-glow' 
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.featured 
                      ? 'bg-secondary text-secondary-foreground' 
                      : 'bg-muted text-muted-foreground'
                  }`}>
                    {event.type}
                  </span>
                  {event.featured && (
                    <span className="bg-accent text-accent-foreground px-2 py-1 rounded text-xs font-semibold">
                      Featured
                    </span>
                  )}
                </div>
                <CardTitle className="text-xl font-bold text-primary">
                  {event.name}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  {event.description}
                </p>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar className="w-4 h-4 text-secondary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-secondary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="w-4 h-4 text-secondary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Users className="w-4 h-4 text-secondary" />
                    <span className="font-semibold">{event.spots}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 pt-4">
                  <Button variant="cta" className="flex-1">
                    Register
                  </Button>
                  <Button variant="outline" className="flex-1">
                    Volunteer
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Events */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="px-8">
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;