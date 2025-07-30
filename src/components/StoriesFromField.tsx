import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, BookOpen, ArrowRight, Heart, Calendar, User } from "lucide-react";
import { useState } from "react";

const StoriesFromField = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const stories = [
    {
      id: 1,
      type: "video",
      category: "beneficiary",
      title: "From Barriers to Breakthroughs: Rahul's Journey",
      preview: "How assistive technology training transformed my career in software development",
      author: "Rahul Patel",
      role: "Software Developer",
      date: "March 10, 2024",
      duration: "5:30",
      tags: ["Technology", "Career", "Success Story"],
      featured: true
    },
    {
      id: 2,
      type: "blog",
      category: "volunteer",
      title: "Why I Volunteer: A Corporate Executive's Perspective",
      preview: "Discovering purpose beyond profit through community service and inclusive advocacy",
      author: "Meera Krishnan",
      role: "Volunteer Coordinator",
      date: "March 8, 2024",
      readTime: "4 min read",
      tags: ["Volunteering", "Leadership", "Impact"],
      featured: false
    },
    {
      id: 3,
      type: "video",
      category: "beneficiary",
      title: "Building Confidence Through Inclusive Sports",
      preview: "How our adaptive sports program helped me compete at the national level",
      author: "Anjali Sharma",
      role: "Paralympic Athlete",
      date: "March 5, 2024",
      duration: "7:15",
      tags: ["Sports", "Achievement", "Inspiration"],
      featured: true
    },
    {
      id: 4,
      type: "blog",
      category: "volunteer",
      title: "Teaching Digital Skills: A Rewarding Experience",
      preview: "My experience conducting digital literacy workshops in rural communities",
      author: "Dr. Suresh Kumar",
      role: "Tech Volunteer",
      date: "March 3, 2024",
      readTime: "6 min read",
      tags: ["Education", "Technology", "Rural Impact"],
      featured: false
    },
    {
      id: 5,
      type: "video",
      category: "beneficiary",
      title: "Workplace Inclusion: My Success Story",
      preview: "How Cognizant's inclusive hiring practices changed my life and career trajectory",
      author: "Priya Mehta",
      role: "Business Analyst",
      date: "February 28, 2024",
      duration: "6:45",
      tags: ["Employment", "Inclusion", "Corporate"],
      featured: false
    },
    {
      id: 6,
      type: "blog",
      category: "volunteer",
      title: "From Participant to Organizer: My Evolution",
      preview: "How participating in events led me to become a community organizer",
      author: "Arjun Singh",
      role: "Community Organizer",
      date: "February 25, 2024",
      readTime: "5 min read",
      tags: ["Leadership", "Community", "Growth"],
      featured: false
    }
  ];

  const filters = [
    { id: "all", label: "All Stories" },
    { id: "beneficiary", label: "Beneficiary Stories" },
    { id: "volunteer", label: "Volunteer Stories" },
    { id: "video", label: "Video Stories" },
    { id: "blog", label: "Written Stories" }
  ];

  const filteredStories = stories.filter(story => {
    if (activeFilter === "all") return true;
    return story.category === activeFilter || story.type === activeFilter;
  });

  const featuredStory = stories.find(story => story.featured);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Stories from the Field
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real voices, real impact. Hear directly from the people who have been touched by 
            our initiatives and the volunteers who make it all possible.
          </p>
        </div>

        {/* Featured Story */}
        {featuredStory && (
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-2xl shadow-xl gradient-card">
              <div className="p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <Badge className="mb-4 bg-secondary text-secondary-foreground">
                      Featured Story • {featuredStory.type === 'video' ? 'Video' : 'Article'}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                      {featuredStory.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {featuredStory.preview}
                    </p>
                    
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                        <span className="text-accent-foreground font-semibold">
                          {featuredStory.author.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <div className="font-semibold text-primary">
                          {featuredStory.author}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {featuredStory.role}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredStory.tags.map((tag, index) => (
                        <Badge key={index} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button variant="cta" size="lg" className="group">
                      {featuredStory.type === 'video' ? (
                        <Play className="w-5 h-5" />
                      ) : (
                        <BookOpen className="w-5 h-5" />
                      )}
                      {featuredStory.type === 'video' ? 'Watch Story' : 'Read Story'}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>

                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                      <div className="text-center text-white">
                        {featuredStory.type === 'video' ? (
                          <>
                            <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                            <div className="text-sm opacity-70">
                              {featuredStory.duration}
                            </div>
                          </>
                        ) : (
                          <>
                            <BookOpen className="w-16 h-16 mx-auto mb-4 opacity-80" />
                            <div className="text-sm opacity-70">
                              {featuredStory.readTime}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter.id
                  ? "bg-secondary text-secondary-foreground shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-secondary/20 hover:text-primary"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredStories
            .filter(story => !story.featured || story.id !== featuredStory?.id)
            .map((story) => (
            <Card key={story.id} className="overflow-hidden hover-lift border-2 border-transparent hover:border-secondary/30">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative">
                {story.type === 'video' ? (
                  <>
                    <Play className="w-12 h-12 text-secondary opacity-70" />
                    <Badge className="absolute top-3 right-3 bg-black/50 text-white">
                      {story.duration}
                    </Badge>
                  </>
                ) : (
                  <>
                    <BookOpen className="w-12 h-12 text-secondary opacity-70" />
                    <Badge className="absolute top-3 right-3 bg-black/50 text-white">
                      {story.readTime}
                    </Badge>
                  </>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Badge variant={story.category === 'beneficiary' ? 'default' : 'outline'}>
                    {story.category === 'beneficiary' ? 'Beneficiary' : 'Volunteer'}
                  </Badge>
                  <Badge variant="outline">{story.type === 'video' ? 'Video' : 'Article'}</Badge>
                </div>
                
                <h3 className="text-lg font-bold text-primary mb-2 line-clamp-2">
                  {story.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {story.preview}
                </p>
                
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-accent-foreground text-xs font-semibold">
                      {story.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-primary truncate">
                      {story.author}
                    </div>
                    <div className="text-xs text-muted-foreground truncate">
                      {story.role}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    {story.date}
                  </div>
                  <Button variant="outline" size="sm" className="group">
                    {story.type === 'video' ? 'Watch' : 'Read'}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center bg-muted/50 rounded-2xl p-8">
          <Heart className="w-12 h-12 text-secondary mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-primary mb-4">
            Share Your Story
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Have you been impacted by our initiatives? We'd love to hear your story 
            and share it with our community to inspire others.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" className="group">
              <User className="w-4 h-4" />
              Submit Your Story
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline">
              View Submission Guidelines
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoriesFromField;