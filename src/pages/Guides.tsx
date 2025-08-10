import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { BookOpen, Clock, Users, Star, PlayCircle, CheckCircle } from "lucide-react";

const Guides = () => {
  const learningPaths = [
    {
      title: "Website Building Fundamentals",
      description: "Complete beginner's guide to creating your first website",
      level: "Beginner",
      duration: "2 hours",
      lessons: 8,
      progress: 0,
      students: "5.2K"
    },
    {
      title: "Advanced Design Techniques",
      description: "Master professional design principles and advanced customization",
      level: "Advanced",
      duration: "4 hours",
      lessons: 12,
      progress: 0,
      students: "2.1K"
    },
    {
      title: "E-commerce Mastery",
      description: "Build and optimize online stores that convert",
      level: "Intermediate",
      duration: "3 hours",
      lessons: 10,
      progress: 0,
      students: "3.8K"
    }
  ];

  const quickGuides = [
    {
      title: "Setting Up Your First Website",
      description: "Get started with the basics in under 30 minutes",
      duration: "30 min",
      type: "Quick Start",
      difficulty: "Beginner",
      rating: 4.9
    },
    {
      title: "Customizing Colors and Fonts",
      description: "Make your website match your brand perfectly",
      duration: "20 min",
      type: "Design",
      difficulty: "Beginner",
      rating: 4.8
    },
    {
      title: "Adding Contact Forms",
      description: "Connect with your visitors through forms",
      duration: "25 min",
      type: "Features",
      difficulty: "Beginner",
      rating: 4.7
    },
    {
      title: "SEO Optimization Basics",
      description: "Improve your website's search engine visibility",
      duration: "45 min",
      type: "Marketing",
      difficulty: "Intermediate",
      rating: 4.8
    },
    {
      title: "Mobile Responsiveness",
      description: "Ensure your site looks great on all devices",
      duration: "35 min",
      type: "Design",
      difficulty: "Intermediate",
      rating: 4.9
    },
    {
      title: "Setting Up Analytics",
      description: "Track your website's performance and visitor behavior",
      duration: "40 min",
      type: "Analytics",
      difficulty: "Intermediate",
      rating: 4.6
    }
  ];

  const features = [
    {
      icon: PlayCircle,
      title: "Video Tutorials",
      description: "Step-by-step video guides for visual learners"
    },
    {
      icon: BookOpen,
      title: "Written Guides",
      description: "Detailed documentation you can follow at your own pace"
    },
    {
      icon: CheckCircle,
      title: "Practice Exercises",
      description: "Hands-on activities to reinforce your learning"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Learning Guides
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Master website building with our comprehensive guides and tutorials. 
            From beginner basics to advanced techniques.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
            Start Learning
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg text-center">
                <CardContent className="p-6">
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Learning Paths</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant={path.level === "Beginner" ? "default" : path.level === "Intermediate" ? "secondary" : "outline"}>
                      {path.level}
                    </Badge>
                    <div className="text-right text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        {path.students}
                      </div>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{path.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{path.description}</p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{path.progress}%</span>
                    </div>
                    <Progress value={path.progress} className="h-2" />
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {path.duration}
                      </div>
                      <span>{path.lessons} lessons</span>
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    {path.progress > 0 ? "Continue" : "Start Path"}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Guides */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Guides</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {quickGuides.map((guide, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="outline">{guide.type}</Badge>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      {guide.rating}
                    </div>
                  </div>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{guide.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {guide.duration}
                    </div>
                    <Badge variant={guide.difficulty === "Beginner" ? "secondary" : "outline"} className="text-xs">
                      {guide.difficulty}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Building?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Put your new skills to practice by creating your first website today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
              Create Website
            </Button>
            <Button size="lg" variant="outline">
              Browse Templates
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Guides;