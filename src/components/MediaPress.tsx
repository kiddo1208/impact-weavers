import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Calendar, Newspaper, Award, TrendingUp, Download } from "lucide-react";

const MediaPress = () => {
  const pressReleases = [
    {
      id: 1,
      title: "Cognizant Launches Largest Accessibility Initiative in India",
      date: "March 12, 2024",
      excerpt: "New program aims to train 1,000 people with disabilities in emerging technologies",
      category: "Press Release",
      featured: true
    },
    {
      id: 2,
      title: "Technology for Good: Cognizant's Community Impact Report 2024",
      date: "February 28, 2024",
      excerpt: "Annual report reveals 500% increase in community engagement initiatives",
      category: "Report",
      featured: false
    },
    {
      id: 3,
      title: "Partnership Announcement: Cognizant & National Disability Council",
      date: "February 15, 2024",
      excerpt: "Strategic alliance to promote inclusive employment practices across industries",
      category: "Partnership",
      featured: true
    }
  ];

  const mediaArticles = [
    {
      id: 1,
      title: "How Cognizant is Changing Lives Through Technology",
      publication: "Economic Times",
      date: "March 10, 2024",
      type: "Feature Article",
      url: "#",
      featured: true
    },
    {
      id: 2,
      title: "Corporate Social Responsibility: Best Practices in Tech",
      publication: "Business Standard",
      date: "March 5, 2024",
      type: "Industry Analysis",
      url: "#",
      featured: false
    },
    {
      id: 3,
      title: "Disability Inclusion in the Workplace: A Success Story",
      publication: "Forbes India",
      date: "February 22, 2024",
      type: "Case Study",
      url: "#",
      featured: true
    },
    {
      id: 4,
      title: "Tech Companies Leading Social Change",
      publication: "LiveMint",
      date: "February 18, 2024",
      type: "Opinion Piece",
      url: "#",
      featured: false
    }
  ];

  const socialMediaHighlights = [
    {
      platform: "LinkedIn",
      post: "Proud to announce our latest accessibility workshop graduated 50 participants!",
      engagement: "2.5K likes, 180 comments",
      date: "March 8, 2024",
      trending: true
    },
    {
      platform: "Instagram",
      post: "Behind the scenes at our community sports day - inclusion in action! 🏃‍♀️♿",
      engagement: "1.8K likes, 95 comments",
      date: "March 6, 2024",
      trending: false
    },
    {
      platform: "Twitter",
      post: "Technology should empower everyone. Our latest initiative reaches 500+ individuals with disabilities.",
      engagement: "890 retweets, 1.2K likes",
      date: "March 4, 2024",
      trending: true
    }
  ];

  const awards = [
    {
      title: "CSR Excellence Award 2024",
      organization: "Indian Chamber of Commerce",
      category: "Community Impact",
      date: "March 2024"
    },
    {
      title: "Best Employer for Disability Inclusion",
      organization: "Diversity & Inclusion Council",
      category: "Workplace Diversity",
      date: "February 2024"
    },
    {
      title: "Technology for Good Recognition",
      organization: "National Tech Foundation",
      category: "Social Innovation",
      date: "January 2024"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Media & Press
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay updated with our latest news, media coverage, and recognition. 
            Discover how our community impact initiatives are making headlines.
          </p>
        </div>

        {/* Featured Press Release */}
        <div className="mb-16">
          {pressReleases
            .filter(release => release.featured)
            .slice(0, 1)
            .map((release) => (
              <div key={release.id} className="gradient-card rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  <div className="lg:col-span-2">
                    <Badge className="mb-4 bg-secondary text-secondary-foreground">
                      Latest Release • {release.category}
                    </Badge>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                      {release.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      {release.excerpt}
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {release.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-center lg:text-right">
                    <div className="bg-white rounded-xl p-6 shadow-lg inline-block">
                      <Newspaper className="w-12 h-12 text-secondary mx-auto mb-4" />
                      <Button variant="cta" className="mb-3">
                        <Download className="w-4 h-4" />
                        Download PDF
                      </Button>
                      <Button variant="outline" className="w-full">
                        <ExternalLink className="w-4 h-4" />
                        Share Release
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Media Coverage & Press Releases Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Recent Press Releases */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-secondary" />
              Press Releases
            </h3>
            <div className="space-y-4">
              {pressReleases
                .filter(release => !release.featured || pressReleases.filter(r => r.featured).indexOf(release) > 0)
                .map((release) => (
                <Card key={release.id} className="hover-lift">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant="outline">{release.category}</Badge>
                      <span className="text-xs text-muted-foreground">{release.date}</span>
                    </div>
                    <h4 className="font-semibold text-primary mb-2 hover:text-secondary transition-colors">
                      {release.title}
                    </h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      {release.excerpt}
                    </p>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <Download className="w-3 h-3" />
                        Download
                      </Button>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-3 h-3" />
                        Share
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Media Articles */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-2">
              <ExternalLink className="w-6 h-6 text-secondary" />
              Media Coverage
            </h3>
            <div className="space-y-4">
              {mediaArticles.map((article) => (
                <Card key={article.id} className={`hover-lift border-2 ${
                  article.featured 
                    ? 'border-secondary shadow-glow' 
                    : 'border-transparent hover:border-secondary/30'
                }`}>
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge variant={article.featured ? 'default' : 'outline'}>
                        {article.type}
                      </Badge>
                      {article.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <h4 className="font-semibold text-primary mb-2 hover:text-secondary transition-colors">
                      {article.title}
                    </h4>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                      <span className="font-medium">{article.publication}</span>
                      <span>{article.date}</span>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      <ExternalLink className="w-3 h-3" />
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Social Media Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-2">
            <TrendingUp className="w-6 h-6 text-secondary" />
            Social Media Highlights
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {socialMediaHighlights.map((highlight, index) => (
              <Card key={index} className={`hover-lift ${
                highlight.trending ? 'border-2 border-secondary shadow-glow' : ''
              }`}>
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <Badge variant="outline">{highlight.platform}</Badge>
                    {highlight.trending && (
                      <Badge className="bg-warning text-warning-foreground">
                        Trending
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {highlight.post}
                  </p>
                  <div className="text-xs text-muted-foreground mb-2">
                    {highlight.engagement}
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">
                      {highlight.date}
                    </span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-2">
            <Award className="w-6 h-6 text-warning" />
            Awards & Recognition
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardContent className="p-6">
                  <Award className="w-10 h-10 text-warning mx-auto mb-4" />
                  <h4 className="font-semibold text-primary mb-2">
                    {award.title}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">
                    {award.organization}
                  </p>
                  <div className="text-xs text-muted-foreground mb-2">
                    {award.category}
                  </div>
                  <Badge variant="outline">{award.date}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Media Contact */}
        <div className="text-center bg-muted/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Media Inquiries
          </h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            For press inquiries, interview requests, or additional information about our initiatives,
            please contact our media relations team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta">
              Contact Media Team
            </Button>
            <Button variant="outline">
              Download Media Kit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaPress;