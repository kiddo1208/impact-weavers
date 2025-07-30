import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Image, Share2, Eye, Calendar } from "lucide-react";

const EventResources = () => {
  const resourceCategories = [
    {
      title: "Event Brochures",
      icon: FileText,
      color: "text-secondary",
      bgColor: "bg-secondary/10",
      resources: [
        {
          name: "Accessibility Workshop Guide 2024",
          type: "PDF",
          size: "2.3 MB",
          description: "Comprehensive guide for organizing inclusive tech workshops",
          downloads: 245,
          featured: true
        },
        {
          name: "Community Volunteer Handbook",
          type: "PDF",
          size: "1.8 MB",
          description: "Essential information for new volunteers",
          downloads: 189,
          featured: false
        },
        {
          name: "Inclusive Sports Event Planning",
          type: "PDF",
          size: "3.1 MB",
          description: "Step-by-step guide for adaptive sports events",
          downloads: 156,
          featured: false
        }
      ]
    },
    {
      title: "Promotional Materials",
      icon: Image,
      color: "text-accent",
      bgColor: "bg-accent/20",
      resources: [
        {
          name: "Event Poster Templates",
          type: "ZIP",
          size: "12.5 MB",
          description: "Customizable poster designs for various events",
          downloads: 320,
          featured: true
        },
        {
          name: "Social Media Graphics Pack",
          type: "ZIP",
          size: "8.7 MB",
          description: "Ready-to-use graphics for Instagram, Facebook, LinkedIn",
          downloads: 298,
          featured: false
        },
        {
          name: "Logo and Brand Assets",
          type: "ZIP",
          size: "5.2 MB",
          description: "Official logos and brand guidelines",
          downloads: 167,
          featured: false
        }
      ]
    },
    {
      title: "Social Media Kit",
      icon: Share2,
      color: "text-success",
      bgColor: "bg-success/10",
      resources: [
        {
          name: "Hashtag Campaign Guide",
          type: "PDF",
          size: "1.2 MB",
          description: "Best practices for social media engagement",
          downloads: 203,
          featured: false
        },
        {
          name: "Content Calendar Template",
          type: "XLSX",
          size: "0.8 MB",
          description: "Pre-planned social media content schedule",
          downloads: 178,
          featured: true
        },
        {
          name: "Video Story Templates",
          type: "ZIP",
          size: "25.4 MB",
          description: "Instagram and Facebook story templates",
          downloads: 234,
          featured: false
        }
      ]
    }
  ];

  const quickActions = [
    {
      title: "Request Custom Materials",
      description: "Need something specific? We can create custom resources for your event.",
      action: "Contact Design Team"
    },
    {
      title: "Brand Guidelines",
      description: "Ensure consistent branding across all your communications.",
      action: "View Guidelines"
    },
    {
      title: "Resource Updates",
      description: "Get notified when new resources are available.",
      action: "Subscribe to Updates"
    }
  ];

  const socialHighlights = [
    {
      platform: "LinkedIn",
      metric: "50K+",
      label: "Impressions",
      growth: "+25%"
    },
    {
      platform: "Instagram",
      metric: "15K+",
      label: "Engagements",
      growth: "+40%"
    },
    {
      platform: "Facebook",
      metric: "30K+",
      label: "Reach",
      growth: "+35%"
    },
    {
      platform: "Twitter",
      metric: "8K+",
      label: "Shares",
      growth: "+20%"
    }
  ];

  return (
    <section className="py-20 gradient-card">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Event Resources
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to promote, organize, and amplify your community impact events. 
            Download professional materials and access our comprehensive resource library.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12 mb-16">
          {resourceCategories.map((category, index) => (
            <div key={index}>
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-full ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`w-6 h-6 ${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-primary">
                  {category.title}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.resources.map((resource, idx) => (
                  <Card key={idx} className={`hover-lift border-2 ${
                    resource.featured 
                      ? 'border-secondary shadow-glow' 
                      : 'border-transparent hover:border-secondary/30'
                  }`}>
                    <CardHeader className="pb-3">
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant={resource.featured ? 'default' : 'outline'}>
                          {resource.type}
                        </Badge>
                        {resource.featured && (
                          <Badge className="bg-accent text-accent-foreground">
                            Popular
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-lg font-bold text-primary">
                        {resource.name}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground text-sm mb-4">
                        {resource.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                        <span>Size: {resource.size}</span>
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          <span>{resource.downloads} downloads</span>
                        </div>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="cta" size="sm" className="flex-1">
                          <Download className="w-4 h-4" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Social Media Performance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8">
            Social Media Impact
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialHighlights.map((highlight, index) => (
              <Card key={index} className="text-center p-6 hover-lift">
                <CardContent className="p-0">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {highlight.metric}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {highlight.label}
                  </div>
                  <div className="text-sm font-medium text-success">
                    {highlight.growth} this month
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {highlight.platform}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {quickActions.map((action, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-primary mb-2">
                  {action.title}
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  {action.description}
                </p>
                <Button variant="outline" size="sm">
                  {action.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Resource Request */}
        <div className="text-center bg-primary text-primary-foreground rounded-2xl p-8">
          <Calendar className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">
            Need Additional Resources?
          </h3>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto">
            Can't find what you're looking for? Our team can create custom materials 
            tailored to your specific event needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="accent" size="lg">
              Request Custom Materials
            </Button>
            <Button variant="outline" size="lg" className="bg-transparent border-white text-white hover:bg-white hover:text-primary">
              Browse All Resources
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventResources;