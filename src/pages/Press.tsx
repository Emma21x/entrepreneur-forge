import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Calendar } from "lucide-react";

const Press = () => {
  const pressReleases = [
    {
      title: "Company Launches Revolutionary Website Builder for Small Businesses",
      date: "March 15, 2024",
      excerpt: "New platform simplifies website creation for entrepreneurs with drag-and-drop functionality and AI-powered design suggestions.",
      type: "Press Release"
    },
    {
      title: "Secured $10M Series A Funding to Expand Platform",
      date: "February 8, 2024",
      excerpt: "Funding round led by top-tier VCs will accelerate product development and international expansion.",
      type: "Funding News"
    },
    {
      title: "Named 'Best Website Builder' by TechCrunch",
      date: "January 22, 2024",
      excerpt: "Platform recognized for innovative approach to democratizing web design for small businesses.",
      type: "Award"
    }
  ];

  const mediaKit = [
    { name: "Company Logo (PNG)", size: "2.1 MB" },
    { name: "Company Logo (SVG)", size: "156 KB" },
    { name: "Brand Guidelines", size: "4.8 MB" },
    { name: "Executive Photos", size: "12.3 MB" },
    { name: "Product Screenshots", size: "8.7 MB" }
  ];

  const stats = [
    { number: "50K+", label: "Websites Created" },
    { number: "150+", label: "Countries Served" },
    { number: "99%", label: "Customer Satisfaction" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Press & Media
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Latest news, press releases, and media resources. Get in touch for interviews and media inquiries.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
            Contact Press Team
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid gap-6">
            {pressReleases.map((release, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{release.type}</Badge>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4 mr-1" />
                      {release.date}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{release.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                  <Button variant="outline" className="gap-2">
                    Read More <ExternalLink className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Media Kit</h2>
          <div className="grid gap-4">
            {mediaKit.map((item, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-4 flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-sm text-muted-foreground">{item.size}</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Download className="h-4 w-4" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Media Inquiries</h2>
          <p className="text-lg text-muted-foreground mb-8">
            For press inquiries, interviews, or additional information, please contact our media team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
              press@company.com
            </Button>
            <Button size="lg" variant="outline">
              Download Media Kit
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;