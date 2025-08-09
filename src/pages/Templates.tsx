import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Heart, Star } from "lucide-react";

const Templates = () => {
  const templateCategories = [
    { name: "Business", count: 25, color: "bg-blue-500" },
    { name: "E-commerce", count: 18, color: "bg-green-500" },
    { name: "Portfolio", count: 15, color: "bg-purple-500" },
    { name: "Restaurant", count: 12, color: "bg-orange-500" },
    { name: "Blog", count: 20, color: "bg-pink-500" },
    { name: "Agency", count: 14, color: "bg-cyan-500" }
  ];

  const featuredTemplates = [
    {
      id: 1,
      name: "Modern Business",
      category: "Business",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
      preview: "4.8k",
      likes: "1.2k",
      rating: 4.9
    },
    {
      id: 2,
      name: "Creative Portfolio",
      category: "Portfolio", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      preview: "3.2k",
      likes: "890",
      rating: 4.8
    },
    {
      id: 3,
      name: "Food Delivery",
      category: "Restaurant",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop",
      preview: "2.8k",
      likes: "650",
      rating: 4.7
    },
    {
      id: 4,
      name: "Fashion Store",
      category: "E-commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      preview: "5.1k",
      likes: "1.5k",
      rating: 4.9
    },
    {
      id: 5,
      name: "Tech Startup",
      category: "Business",
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop",
      preview: "3.9k",
      likes: "1.1k",
      rating: 4.8
    },
    {
      id: 6,
      name: "Travel Blog",
      category: "Blog",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop",
      preview: "2.5k",
      likes: "720",
      rating: 4.6
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-hero">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Choose Your Perfect Template
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Browse our collection of 100+ professionally designed templates. 
              Each one is fully customizable and mobile-ready.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {templateCategories.map((category) => (
                <Badge 
                  key={category.name}
                  variant="secondary" 
                  className="px-4 py-2 text-sm bg-white/20 text-white hover:bg-white/30 transition-colors"
                >
                  {category.name} ({category.count})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Templates Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredTemplates.map((template) => (
            <Card key={template.id} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2">
              <div className="relative overflow-hidden rounded-t-lg">
                <img 
                  src={template.image} 
                  alt={template.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90 text-foreground">
                    {template.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="hero" size="sm" className="w-full">
                    Use This Template
                  </Button>
                </div>
              </div>
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{template.name}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {template.preview}
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      {template.likes}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    {template.rating}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Templates
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Templates;