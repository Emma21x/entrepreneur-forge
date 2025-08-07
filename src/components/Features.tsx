import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Shield, 
  BarChart3, 
  Headphones,
  ArrowRight 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Palette,
      title: "Beautiful Templates",
      description: "Choose from 100+ stunning, industry-specific templates designed for conversion.",
      highlight: "50+ new templates monthly"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Every website automatically looks perfect on all devices. No extra work required.",
      highlight: "100% responsive"
    },
    {
      icon: Zap,
      title: "Lightning Fast Setup",
      description: "Get your website live in minutes, not weeks. Our AI helps you build faster than ever.",
      highlight: "5-minute deployment"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level SSL encryption, automatic backups, and 99.9% uptime guarantee.",
      highlight: "SOC 2 compliant"
    },
    {
      icon: BarChart3,
      title: "Built-in Analytics",
      description: "Track visitors, sales, and performance with our integrated analytics dashboard.",
      highlight: "Real-time insights"
    },
    {
      icon: Headphones,
      title: "24/7 Expert Support",
      description: "Get help when you need it from our team of website building experts.",
      highlight: "< 2hr response time"
    }
  ];

  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Everything You Need to 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Succeed Online
            </span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From stunning designs to powerful features, we've got everything covered 
            so you can focus on growing your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-14 h-14 bg-gradient-hero rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-xs font-medium px-3 py-1 rounded-full">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full animate-pulse" />
                    {feature.highlight}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-gradient-card rounded-2xl p-12 shadow-soft border border-border/50 animate-fade-in">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Build Your Website?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of entrepreneurs who've already launched their dream websites. 
            Start building today with our free plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Get Started Free
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-6">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;