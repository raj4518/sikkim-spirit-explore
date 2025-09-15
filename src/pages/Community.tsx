import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Heart, MessageCircle, Share2, BookOpen, Camera, Users } from "lucide-react";

export default function Community() {
  const stories = [
    {
      id: 1,
      author: "Tenzin Norbu",
      avatar: "/placeholder.svg",
      title: "My First Visit to Rumtek Monastery",
      excerpt: "The spiritual energy at Rumtek was overwhelming. The monks' chanting during morning prayers...",
      image: "/placeholder.svg",
      likes: 24,
      comments: 8,
      category: "Experience"
    },
    {
      id: 2,
      author: "Sarah Chen",
      avatar: "/placeholder.svg",
      title: "Photography Tips for Monastery Architecture",
      excerpt: "Capturing the intricate details of monastery architecture requires patience and respect...",
      image: "/placeholder.svg",
      likes: 45,
      comments: 12,
      category: "Photography"
    },
    {
      id: 3,
      author: "Lama Dorje",
      avatar: "/placeholder.svg",
      title: "The History Behind Pemayangtse's Ancient Murals",
      excerpt: "These 300-year-old murals tell stories of Buddhist teachings and Sikkim's royal history...",
      image: "/placeholder.svg",
      likes: 67,
      comments: 15,
      category: "History"
    }
  ];

  const categories = [
    { name: "All Stories", icon: BookOpen, count: 156 },
    { name: "Photography", icon: Camera, count: 45 },
    { name: "Cultural Heritage", icon: Users, count: 78 },
    { name: "Personal Experience", icon: Heart, count: 33 }
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-monastery bg-clip-text text-transparent">
            Community Stories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Share your monastery experiences, contribute to our cultural archive, and connect with fellow heritage enthusiasts
          </p>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Button className="bg-gradient-monastery text-primary-foreground hover:opacity-90">
              Share Your Story
            </Button>
            <Button variant="outline">
              Upload Photos
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    className="w-full justify-start"
                  >
                    <category.icon className="h-4 w-4 mr-2" />
                    {category.name}
                    <Badge variant="secondary" className="ml-auto">
                      {category.count}
                    </Badge>
                  </Button>
                ))}
              </CardContent>
            </Card>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Join the Archive</CardTitle>
                <CardDescription>
                  Help preserve Sikkim's monastery heritage
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-monastery text-primary-foreground hover:opacity-90">
                  Become a Contributor
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {stories.map((story) => (
              <Card key={story.id} className="hover:shadow-monastery transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage src={story.avatar} />
                      <AvatarFallback>{story.author[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold">{story.author}</h3>
                      <Badge variant="secondary">{story.category}</Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h2 className="text-xl font-bold">{story.title}</h2>
                  <p className="text-muted-foreground">{story.excerpt}</p>
                  <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                    <img 
                      src={story.image} 
                      alt={story.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-4">
                      <Button variant="ghost" size="sm">
                        <Heart className="h-4 w-4 mr-1" />
                        {story.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {story.comments}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Share2 className="h-4 w-4 mr-1" />
                        Share
                      </Button>
                    </div>
                    <Button variant="outline" size="sm">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}