import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, Zap } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-glow/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-background/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 text-primary-foreground">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Trusted by 10,000+ entrepreneurs</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight">
              Build Your
              <span className="bg-gradient-to-r from-accent to-primary-glow bg-clip-text text-transparent">
                {" "}Dream Website
              </span>
              <br />
              In Minutes
            </h1>
            
            <p className="text-xl lg:text-2xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              Create stunning, professional websites without code. Perfect for entrepreneurs, 
              shops, and small businesses ready to grow online.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                variant="hero" 
                size="lg" 
                className="text-lg px-8 py-6 animate-slide-up"
              >
                Start Building Free
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 animate-slide-up"
              >
                <Zap className="w-5 h-5" />
                See Examples
              </Button>
            </div>
            
            <div className="flex items-center gap-8 text-primary-foreground/60 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                No credit card required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                Free forever plan
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full" />
                Launch in 5 minutes
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-large">
              <img 
                src={heroImage} 
                alt="Entrepreneurs building websites" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-accent rounded-xl p-4 shadow-medium animate-bounce">
              <Sparkles className="w-6 h-6 text-accent-foreground" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-gradient-card border border-border rounded-lg p-3 shadow-soft">
              <div className="flex items-center gap-2 text-sm font-medium text-card-foreground">
                <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
                Live in 2 mins
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;