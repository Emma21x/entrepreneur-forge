import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, TrendingUp } from "lucide-react";

const Blog = () => {
  const featuredPost = {
    title: "10 Essential Design Tips for Small Business Websites",
    excerpt: "Learn how to create a professional-looking website that converts visitors into customers with these proven design strategies.",
    author: "Sarah Johnson",
    date: "March 20, 2024",
    readTime: "8 min read",
    category: "Design",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop"
  };

  const blogPosts = [
    {
      title: "How AI is Revolutionizing Website Creation",
      excerpt: "Discover how artificial intelligence is making it easier than ever to build beautiful, functional websites.",
      author: "Mike Chen",
      date: "March 18, 2024",
      readTime: "6 min read",
      category: "Technology",
      trending: true
    },
    {
      title: "E-commerce Trends Every Small Business Should Know",
      excerpt: "Stay ahead of the curve with these essential e-commerce trends that are shaping online retail.",
      author: "Lisa Rodriguez",
      date: "March 15, 2024",
      readTime: "7 min read",
      category: "Business"
    },
    {
      title: "SEO Basics: Getting Your Website Found",
      excerpt: "Master the fundamentals of search engine optimization to drive more traffic to your website.",
      author: "David Kim",
      date: "March 12, 2024",
      readTime: "10 min read",
      category: "Marketing"
    },
    {
      title: "The Psychology of Website Colors",
      excerpt: "Learn how different colors affect user behavior and conversion rates on your website.",
      author: "Emma Wilson",
      date: "March 10, 2024",
      readTime: "5 min read",
      category: "Design"
    },
    {
      title: "Mobile-First Design: Why It Matters",
      excerpt: "Understanding why mobile-first design is crucial for modern websites and how to implement it.",
      author: "Alex Thompson",
      date: "March 8, 2024",
      readTime: "6 min read",
      category: "Design"
    },
    {
      title: "Building Trust Through Website Design",
      excerpt: "Simple design elements that can significantly increase trust and credibility with your visitors.",
      author: "Sarah Johnson",
      date: "March 5, 2024",
      readTime: "7 min read",
      category: "Business"
    }
  ];

  const categories = ["All", "Design", "Technology", "Business", "Marketing"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary/20">
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Insights, tips, and stories about web design, business growth, and digital success.
          </p>
          
          {/* Search and Categories */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input 
                placeholder="Search articles..." 
                className="pl-10 w-72"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category) => (
                <Button key={category} variant="outline" size="sm">
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center">
                <div>
                  <Badge className="mb-4">Featured</Badge>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">{featuredPost.title}</h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
                    Read Article
                  </Button>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <div className="text-6xl opacity-20">📝</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-4 bg-secondary/10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    {post.trending && (
                      <Badge variant="outline" className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3" />
                        Trending
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <User className="h-3 w-3" />
                      {post.author}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {post.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mt-1">
                    <Calendar className="h-3 w-3" />
                    {post.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Get the latest insights and tips delivered straight to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button className="bg-gradient-to-r from-primary to-accent hover:shadow-glow">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;