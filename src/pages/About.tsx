import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Heart, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            About Our Mission
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're passionate about empowering entrepreneurs and small businesses to create stunning websites without the technical complexity.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Community First",
                description: "We believe in building a supportive community where everyone succeeds together."
              },
              {
                icon: Target,
                title: "Simplicity",
                description: "Complex problems deserve simple solutions. We make website building effortless."
              },
              {
                icon: Heart,
                title: "Passion",
                description: "We're passionate about helping small businesses thrive in the digital world."
              },
              {
                icon: Award,
                title: "Excellence",
                description: "We strive for excellence in every feature, design, and customer interaction."
              }
            ].map((value, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <value.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Founded in 2024, we started with a simple vision: make professional website creation accessible to everyone. 
            Today, we're proud to serve thousands of entrepreneurs and small businesses worldwide.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
            Join Our Team
          </Button>
        </div>
      </section>
    </div>
  );
};

export default About;