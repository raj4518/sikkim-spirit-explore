import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mountain, Users, Target, Award, Heart, Globe } from "lucide-react";

export default function About() {
  const team = [
    {
      name: "Dr. Karma Tshering",
      role: "Cultural Heritage Director",
      description: "Buddhist scholar and monastery preservation expert",
      avatar: "/placeholder.svg"
    },
    {
      name: "Pemba Sherpa",
      role: "Digital Technology Lead",
      description: "VR/AR specialist and digital preservation architect",
      avatar: "/placeholder.svg"
    },
    {
      name: "Yangchen Dolma",
      role: "Community Outreach Manager",
      description: "Local community liaison and cultural ambassador",
      avatar: "/placeholder.svg"
    }
  ];

  const stats = [
    { icon: Mountain, label: "Monasteries Mapped", value: "28" },
    { icon: Users, label: "Community Members", value: "1,200+" },
    { icon: Globe, label: "Virtual Visitors", value: "15,000+" },
    { icon: Award, label: "Heritage Awards", value: "3" }
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-lg bg-gradient-monastery text-primary-foreground animate-monastery-glow">
              <Mountain className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 bg-gradient-monastery bg-clip-text text-transparent">
            About Monastery360
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Preserving and sharing Sikkim's spiritual heritage through cutting-edge digital technology, 
            making ancient wisdom accessible to the world while respecting cultural traditions.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <Card className="hover:shadow-monastery transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Target className="h-6 w-6 text-primary" />
                <CardTitle>Our Mission</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                To create an immersive digital platform that preserves, documents, and shares the rich 
                cultural heritage of Sikkim's monasteries, making spiritual wisdom and architectural 
                beauty accessible to global audiences while supporting local communities.
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-monastery transition-all duration-300">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <Heart className="h-6 w-6 text-primary" />
                <CardTitle>Our Vision</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                A world where Sikkim's monastery heritage thrives through digital innovation, 
                fostering cross-cultural understanding, spiritual growth, and sustainable tourism 
                that benefits local communities and preserves traditions for future generations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} className="text-center hover:shadow-monastery transition-all duration-300">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-2">
                  <stat.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Passionate individuals dedicated to preserving Sikkim's spiritual heritage
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="text-center hover:shadow-monastery transition-all duration-300">
                <CardHeader>
                  <div className="w-24 h-24 mx-auto bg-gradient-monastery rounded-full mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <Badge variant="secondary">{member.role}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Values */}
        <Card className="mb-16">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl">Our Core Values</CardTitle>
            <CardDescription>The principles that guide our work</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-monastery rounded-full mb-4 flex items-center justify-center">
                  <Heart className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Cultural Respect</h3>
                <p className="text-sm text-muted-foreground">
                  Deep reverence for Buddhist traditions and local customs
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-monastery rounded-full mb-4 flex items-center justify-center">
                  <Globe className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Global Access</h3>
                <p className="text-sm text-muted-foreground">
                  Making heritage accessible to people worldwide
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto bg-gradient-monastery rounded-full mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Community First</h3>
                <p className="text-sm text-muted-foreground">
                  Supporting local communities through sustainable tourism
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-monastery text-primary-foreground">
            <CardContent className="py-12">
              <h2 className="text-3xl font-bold mb-4">Join Our Mission</h2>
              <p className="text-xl mb-6 opacity-90">
                Help us preserve Sikkim's spiritual heritage for future generations
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="secondary" size="lg">
                  Support Our Work
                </Button>
                <Button variant="outline" size="lg" className="text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Volunteer With Us
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}