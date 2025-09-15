import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Archive, Calendar, Users, Play, Map, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-monastery.jpg";

const quickLinks = [
  {
    title: "Virtual Tours",
    description: "Experience 360° monastery visits",
    icon: Play,
    href: "/virtual-tour",
    color: "bg-gradient-monastery"
  },
  {
    title: "Explore Map",
    description: "Interactive heritage locations",
    icon: Map,
    href: "/map",
    color: "bg-gradient-saffron"
  },
  {
    title: "Events & Festivals",
    description: "Cultural calendar & bookings",
    icon: Calendar,
    href: "/calendar",
    color: "bg-heritage"
  },
  {
    title: "Digital Archive",
    description: "Ancient manuscripts & artifacts",
    icon: Archive,
    href: "/archive",
    color: "bg-gradient-sunset"
  }
];

const stats = [
  { label: "Monasteries", value: "47", icon: MapPin },
  { label: "Virtual Tours", value: "23", icon: Play },
  { label: "Manuscripts", value: "1,200+", icon: BookOpen },
  { label: "Active Visitors", value: "15K+", icon: Users }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-saffron/20 text-saffron border-saffron/30">
            Digital Heritage Platform
          </Badge>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Monastery360
            <span className="block text-2xl md:text-3xl lg:text-4xl font-normal text-saffron mt-2">
              Sikkim's Sacred Heritage
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
            Explore ancient monasteries, immerse in virtual tours, and preserve Sikkim's 
            spiritual heritage for future generations through cutting-edge digital technology.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                placeholder="Search monasteries, locations, or festivals..."
                className="pl-12 pr-4 py-4 text-lg bg-background/95 backdrop-blur border-border/50 focus:border-saffron focus:ring-saffron/20"
              />
              <Button 
                size="lg" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-monastery hover:shadow-monastery"
              >
                Search
              </Button>
            </div>
          </div>

          <Button 
            asChild
            size="lg" 
            className="bg-gradient-saffron hover:shadow-gold text-saffron-foreground font-semibold px-8 py-4 text-lg"
          >
            <Link to="/explore">
              Start Exploring
            </Link>
          </Button>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Discover Sacred Heritage
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Multiple pathways to explore and experience Sikkim's monastery culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickLinks.map((link, index) => (
              <Card 
                key={link.title} 
                className="group hover:shadow-elevated hover:-translate-y-2 transition-all duration-300 cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Link to={link.href}>
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${link.color} flex items-center justify-center group-hover:animate-monastery-glow transition-all duration-300`}>
                      <link.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {link.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {link.description}
                    </p>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-monastery text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <stat.icon className="h-8 w-8 mx-auto mb-3 text-saffron" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Join the Heritage Preservation Movement
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help us document and preserve Sikkim's monastery heritage through community contributions and digital archiving.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-monastery hover:shadow-monastery px-8"
            >
              <Link to="/community">Join Community</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-saffron text-saffron hover:bg-saffron hover:text-saffron-foreground px-8"
            >
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}