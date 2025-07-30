import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, Users, Clock, Award, Quote, Play } from "lucide-react";
import { useState } from "react";

const PastEventsImpact = () => {
  const [selectedYear, setSelectedYear] = useState("2024");

  const impactStats = {
    total: {
      fundsRaised: 250000,
      peopleHelped: 1200,
      volunteerHours: 3500,
      eventsCompleted: 45
    },
    "2024": {
      fundsRaised: 85000,
      peopleHelped: 420,
      volunteerHours: 1200,
      eventsCompleted: 15
    },
    "2023": {
      fundsRaised: 95000,
      peopleHelped: 450,
      volunteerHours: 1300,
      eventsCompleted: 18
    },
    "2022": {
      fundsRaised: 70000,
      peopleHelped: 330,
      volunteerHours: 1000,
      eventsCompleted: 12
    }
  };

  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Accessibility Workshop Participant",
      quote: "The assistive technology workshop changed my perspective on what's possible. I learned to use tools that have made my work life so much more productive.",
      image: "/api/placeholder/60/60",
      event: "Tech Workshop 2024"
    },
    {
      id: 2,
      name: "Raj Kumar",
      role: "Volunteer Coordinator",
      quote: "Being part of this initiative has been incredibly rewarding. Seeing the direct impact we make in communities motivates me every day.",
      image: "/api/placeholder/60/60",
      event: "Community Drive 2023"
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      role: "Inclusion Expert",
      quote: "Cognizant's commitment to disability inclusion goes beyond events - they're creating lasting systemic change in how we think about accessibility.",
      image: "/api/placeholder/60/60",
      event: "Workplace Summit 2023"
    }
  ];

  const timelineEvents = [
    {
      year: "2024",
      title: "Digital Accessibility Drive",
      description: "Launched comprehensive digital literacy programs",
      impact: "420 people trained in digital skills",
      type: "education"
    },
    {
      year: "2023",
      title: "Inclusive Sports Festival",
      description: "Organized the largest inclusive sports event in the region",
      impact: "300 participants across all abilities",
      type: "sports"
    },
    {
      year: "2023",
      title: "Workplace Inclusion Summit",
      description: "Industry-wide conference on disability employment",
      impact: "50 companies adopted new inclusion policies",
      type: "conference"
    },
    {
      year: "2022",
      title: "Community Outreach Program",
      description: "Established permanent support centers",
      impact: "5 centers serving 200+ families monthly",
      type: "community"
    }
  ];

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return num >= 10000 ? `${(num / 1000).toFixed(0)}K` : `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const stats = impactStats[selectedYear as keyof typeof impactStats];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Our Impact Story
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Together, we've created meaningful change. Explore our journey of impact,
            the lives we've touched, and the communities we've strengthened.
          </p>
        </div>

        {/* Year Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-muted rounded-lg p-1 inline-flex">
            {["2024", "2023", "2022", "Total"].map((year) => (
              <button
                key={year}
                onClick={() => setSelectedYear(year.toLowerCase())}
                className={`px-4 py-2 rounded-md font-medium transition-all ${
                  selectedYear === year.toLowerCase()
                    ? "bg-secondary text-secondary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <Card className="text-center p-6 hover-lift">
            <CardContent className="p-0">
              <DollarSign className="w-8 h-8 text-success mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                ${formatNumber(stats.fundsRaised)}
              </div>
              <div className="text-sm text-muted-foreground">Funds Raised</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover-lift">
            <CardContent className="p-0">
              <Users className="w-8 h-8 text-secondary mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                {formatNumber(stats.peopleHelped)}
              </div>
              <div className="text-sm text-muted-foreground">People Helped</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover-lift">
            <CardContent className="p-0">
              <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                {formatNumber(stats.volunteerHours)}
              </div>
              <div className="text-sm text-muted-foreground">Volunteer Hours</div>
            </CardContent>
          </Card>

          <Card className="text-center p-6 hover-lift">
            <CardContent className="p-0">
              <Award className="w-8 h-8 text-warning mx-auto mb-3" />
              <div className="text-3xl font-bold text-primary mb-1">
                {stats.eventsCompleted}
              </div>
              <div className="text-sm text-muted-foreground">Events Completed</div>
            </CardContent>
          </Card>
        </div>

        {/* Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Milestone Timeline
          </h3>
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-border"></div>
            <div className="space-y-8">
              {timelineEvents.map((event, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-background"></div>
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}>
                    <Card className="hover-lift">
                      <CardContent className="p-6">
                        <Badge className="mb-2">{event.year}</Badge>
                        <h4 className="text-lg font-semibold text-primary mb-2">
                          {event.title}
                        </h4>
                        <p className="text-muted-foreground mb-3">
                          {event.description}
                        </p>
                        <div className="text-sm font-medium text-secondary">
                          {event.impact}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Stories from Our Community
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="hover-lift">
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-accent mb-4" />
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                      <span className="text-accent-foreground font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-primary">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </div>
                      <div className="text-xs text-secondary">
                        {testimonial.event}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Video Gallery Placeholder */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Watch Our Impact in Action
          </h3>
          <p className="text-muted-foreground mb-6">
            See how our events are creating real change in communities
          </p>
          <Button variant="cta" size="lg" className="group">
            <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
            View Video Gallery
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PastEventsImpact;