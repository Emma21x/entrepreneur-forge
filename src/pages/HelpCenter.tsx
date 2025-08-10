import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, Book, Video, MessageCircle, HelpCircle, Zap, Shield, Palette } from "lucide-react";

const HelpCenter = () => {
  const categories = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Learn the basics of creating your first website",
      articles: 12,
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: Palette,
      title: "Design & Customization",
      description: "Customize your website's look and feel",
      articles: 18,
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: Shield,
      title: "Account & Billing",
      description: "Manage your account settings and payments",
      articles: 8,
      color: "bg-green-100 text-green-600"
    },
    {
      icon: Book,
      title: "Advanced Features",
      description: "Explore powerful tools and integrations",
      articles: 15,
      color: "bg-orange-100 text-orange-600"
    }
  ];

  const popularArticles = [
    {
      title: "How to create your first website",
      category: "Getting Started",
      readTime: "5 min read",
      views: "12.5K"
    },
    {
      title: "Customizing your website colors and fonts",
      category: "Design",
      readTime: "8 min read",
      views: "9.2K"
    },
    {
      title: "Setting up your custom domain",
      category: "Advanced",
      readTime: "6 min read",
      views: "7.8K"
    },
    {
      title: "Understanding pricing and billing",
      category: "Billing",
      readTime: "4 min read",
      views: "6.1K"
    }
  ];

  const resources = [
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video guides for visual learners",
      count: "25+ videos"
    },
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and API documentation",
      count: "50+ articles"
    },
    {
      icon: MessageCircle,
      title: "Community Forum",
      description: "Connect with other users and get help",
      count: "1000+ members"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Help Center
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Find answers to your questions and learn how to make the most of our platform.
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input 
              placeholder="Search for help articles..." 
              className="pl-10 h-12 text-lg"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 rounded-full ${category.color} flex items-center justify-center mx-auto mb-4`}>
                    <category.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                  <p className="text-muted-foreground mb-3">{category.description}</p>
                  <Badge variant="secondary">{category.articles} articles</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Articles</h2>
          <div className="grid gap-4">
            {popularArticles.map((article, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                      <div className="flex gap-4 text-sm text-muted-foreground">
                        <span>{article.category}</span>
                        <span>{article.readTime}</span>
                        <span>{article.views} views</span>
                      </div>
                    </div>
                    <HelpCircle className="h-5 w-5 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <resource.icon className="h-8 w-8 text-primary" />
                    <div>
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <Badge variant="outline">{resource.count}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{resource.description}</p>
                  <Button variant="outline" className="w-full">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Still Need Help?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Can't find what you're looking for? Our support team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
              Contact Support
            </Button>
            <Button size="lg" variant="outline">
              Join Community
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;