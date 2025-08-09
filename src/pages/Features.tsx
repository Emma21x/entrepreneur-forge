import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Palette, 
  Smartphone, 
  Zap, 
  Shield, 
  BarChart3, 
  Headphones,
  Code,
  Cloud,
  Users,
  Search,
  CreditCard,
  Globe,
  ArrowRight,
  Check
} from "lucide-react";

const Features = () => {
  const featureCategories = [
    {
      title: "Design & Customization",
      description: "Beautiful, professional designs that you can customize to match your brand",
      features: [
        {
          icon: Palette,
          title: "100+ Premium Templates",
          description: "Industry-specific templates designed for conversion and user engagement."
        },
        {
          icon: Code,
          title: "No-Code Builder",
          description: "Drag-and-drop interface that anyone can use, no technical skills required."
        },
        {
          icon: Smartphone,
          title: "Mobile-First Design",
          description: "Every website automatically looks perfect on all devices and screen sizes."
        }
      ]
    },
    {
      title: "Performance & Reliability",
      description: "Fast, secure, and reliable websites that your customers can trust",
      features: [
        {
          icon: Zap,
          title: "Lightning Fast Loading",
          description: "Optimized for speed with global CDN and advanced caching technologies."
        },
        {
          icon: Shield,
          title: "Enterprise Security",
          description: "SSL encryption, automatic backups, and 99.9% uptime guarantee."
        },
        {
          icon: Cloud,
          title: "Cloud Hosting",
          description: "Reliable cloud infrastructure that scales with your business growth."
        }
      ]
    },
    {
      title: "Business Growth",
      description: "Tools and features designed to help your business succeed online",
      features: [
        {
          icon: BarChart3,
          title: "Built-in Analytics",
          description: "Track visitors, conversions, and performance with detailed insights."
        },
        {
          icon: Search,
          title: "SEO Optimization",
          description: "Built-in SEO tools to help your website rank higher in search results."
        },
        {
          icon: CreditCard,
          title: "E-commerce Ready",
          description: "Accept payments, manage inventory, and sell products online seamlessly."
        }
      ]
    },
    {
      title: "Support & Integration",
      description: "Get help when you need it and connect with your favorite tools",
      features: [
        {
          icon: Headphones,
          title: "24/7 Expert Support",
          description: "Get help from our team of website building experts whenever you need it."
        },
        {
          icon: Users,
          title: "Team Collaboration",
          description: "Work together with your team to build and manage your website."
        },
        {
          icon: Globe,
          title: "Third-party Integrations",
          description: "Connect with 1000+ apps including Google Analytics, Mailchimp, and more."
        }
      ]
    }
  ];

  const benefits = [
    "Save 90% of development time",
    "No monthly hosting fees",
    "Free SSL certificate included",
    "24/7 customer support",
    "99.9% uptime guarantee",
    "Mobile-responsive design",
    "SEO optimization tools",
    "E-commerce capabilities"
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-hero">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Everything You Need to Build a 
              <span className="block">Successful Website</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              From stunning designs to powerful business tools, we provide everything 
              entrepreneurs and businesses need to succeed online.
            </p>
            <Button variant="secondary" size="lg" className="text-lg px-8 py-6">
              Start Building Free
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-gradient-card rounded-lg border border-border/50">
              <Check className="w-5 h-5 text-primary flex-shrink-0" />
              <span className="text-sm font-medium text-foreground">{benefit}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Feature Categories */}
      <div className="container mx-auto px-6 pb-16">
        {featureCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                {category.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {category.description}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 bg-gradient-card border-border/50"
                >
                  <CardHeader>
                    <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-card border-t border-border/50">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Ready to Build Your Dream Website?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of entrepreneurs who've already launched their websites with our platform. 
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
      </div>
    </div>
  );
};

export default Features;