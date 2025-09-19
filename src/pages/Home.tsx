import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Archive, Calendar, Users, Play, Map, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";
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
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <div className="min-h-screen">
      {/* Moving Festival Banner Strip */}
      <div className="relative bg-gradient-to-r from-saffron/90 to-primary/90 text-white py-2 overflow-hidden border-b border-saffron/30">
        <div className="flex animate-scroll">
          <div className="flex whitespace-nowrap space-x-8 text-sm font-medium">
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🎉 <strong>Losar Festival</strong> - Feb 10-12, 2024 | Rumtek Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🏮 <strong>Buddha Purnima</strong> - May 23, 2024 | Pemayangtse Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🎭 <strong>Mask Dance Festival</strong> - Mar 15-17, 2024 | Enchey Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🌸 <strong>Cherry Blossom Festival</strong> - Apr 5-7, 2024 | Gangtok</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🕉️ <strong>Guru Purnima</strong> - Jul 21, 2024 | Tashiding Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🎊 <strong>Dasain Festival</strong> - Oct 12-22, 2024 | Gangtok</span>
            </span>
            {/* Duplicate for seamless loop */}
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🎉 <strong>Losar Festival</strong> - Feb 10-12, 2024 | Rumtek Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🏮 <strong>Buddha Purnima</strong> - May 23, 2024 | Pemayangtse Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🎭 <strong>Mask Dance Festival</strong> - Mar 15-17, 2024 | Enchey Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🌸 <strong>Cherry Blossom Festival</strong> - Apr 5-7, 2024 | Gangtok</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🕉️ <strong>Guru Purnima</strong> - Jul 21, 2024 | Tashiding Monastery</span>
            </span>
            <span className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-white" />
              <span>🎊 <strong>Dasain Festival</strong> - Oct 12-22, 2024 | Gangtok</span>
            </span>
          </div>
        </div>
      </div>

      {/* Single Screen Landing Page - 3 Column Layout */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/60" />
        </div>
        
        <div className="relative z-10 w-full h-full flex items-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center h-full">
              
              {/* Left Side - Big Video */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  {/* Big Video Container */}
                  <div className="relative w-[300px] h-[450px] lg:w-[400px] lg:h-[600px] bg-gradient-to-br from-primary/10 to-heritage/10 rounded-2xl p-4 shadow-2xl border border-primary/20">
                    <div className="relative w-full h-full bg-black rounded-xl overflow-hidden shadow-inner">
                      <video 
                        ref={videoRef}
                        className="w-full h-full object-cover"
                        autoPlay
                        loop
                        muted
                        playsInline
                        onError={() => {
                          console.log("Video file not found. Please add your video to public/videos/monastery-tour.mp4");
                        }}
                      >
                        <source src="/videos/monastery-tour.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    
                    {/* Decorative elements */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-saffron/30 rounded-full flex items-center justify-center">
                      <Play className="h-4 w-4 text-saffron" />
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-primary/30 rounded-full"></div>
                    
                    {/* Glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-saffron/10 to-primary/10 rounded-2xl blur-xl -z-10 scale-105"></div>
                  </div>
                </div>
              </div>

              {/* Center - Main Content */}
              <div className="text-center animate-fade-in">
                <Badge variant="secondary" className="mb-3 bg-saffron/20 text-saffron border-saffron/30 text-sm">
                  Digital Heritage Platform
                </Badge>
                
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Monastery360
                  <span className="block text-xl md:text-2xl lg:text-3xl font-normal text-saffron mt-1">
                    Sikkim's Sacred Heritage
                  </span>
                </h1>
                
                <p className="text-base md:text-lg text-white/90 mb-6 max-w-lg mx-auto leading-relaxed">
                  Explore ancient monasteries, immerse in virtual tours, and preserve Sikkim's 
                  spiritual heritage through cutting-edge digital technology.
                </p>

                {/* Search Bar */}
                <div className="max-w-lg mx-auto mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                    <Input
                      placeholder="Search monasteries, locations, or festivals..."
                      className="pl-10 pr-3 py-3 text-base bg-background/95 backdrop-blur border-border/50 focus:border-saffron focus:ring-saffron/20"
                    />
                    <Button 
                      size="sm" 
                      className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-gradient-monastery hover:shadow-monastery px-4"
                    >
                      Search
                    </Button>
                  </div>
                </div>

                <Button 
                  asChild
                  size="lg" 
                  className="bg-gradient-saffron hover:shadow-gold text-saffron-foreground font-semibold px-6 py-3 text-base"
                >
                  <Link to="/explore">
                    Start Exploring
                  </Link>
                </Button>
              </div>

              {/* Right Side - Tiny Features */}
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-white mb-3 text-center lg:text-right">Features</h3>
                
                {/* Ultra Tiny Features Grid - 2x3 */}
                <div className="grid grid-cols-2 gap-1">
                  {/* Interactive Map */}
                  <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-background/95 backdrop-blur border-white/20">
                    <Link to="/map">
                      <CardContent className="p-1 text-center">
                        <div className="w-4 h-4 mx-auto mb-1 rounded-md bg-gradient-monastery flex items-center justify-center group-hover:animate-monastery-glow transition-all duration-300">
                          <Map className="h-2 w-2 text-white" />
                        </div>
                        <h4 className="font-semibold text-xs mb-1 group-hover:text-primary transition-colors text-white">
                          Map
                        </h4>
                        <Badge variant="outline" className="text-saffron border-saffron/30 text-xs px-1 py-0">
                          Explore
                        </Badge>
                      </CardContent>
                    </Link>
                  </Card>

                  {/* Virtual Tours */}
                  <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-background/95 backdrop-blur border-white/20">
                    <Link to="/virtual-tour">
                      <CardContent className="p-1 text-center">
                        <div className="w-4 h-4 mx-auto mb-1 rounded-md bg-gradient-saffron flex items-center justify-center group-hover:animate-monastery-glow transition-all duration-300">
                          <Play className="h-2 w-2 text-white" />
                        </div>
                        <h4 className="font-semibold text-xs mb-1 group-hover:text-primary transition-colors text-white">
                          360° Tour
                        </h4>
                        <Badge variant="outline" className="text-saffron border-saffron/30 text-xs px-1 py-0">
                          Start
                        </Badge>
                      </CardContent>
                    </Link>
                  </Card>

                  {/* Events & Festivals */}
                  <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-background/95 backdrop-blur border-white/20">
                    <Link to="/calendar">
                      <CardContent className="p-1 text-center">
                        <div className="w-4 h-4 mx-auto mb-1 rounded-md bg-heritage flex items-center justify-center group-hover:animate-monastery-glow transition-all duration-300">
                          <Calendar className="h-2 w-2 text-white" />
                        </div>
                        <h4 className="font-semibold text-xs mb-1 group-hover:text-primary transition-colors text-white">
                          Events
                        </h4>
                        <Badge variant="outline" className="text-saffron border-saffron/30 text-xs px-1 py-0">
                          Calendar
                        </Badge>
                      </CardContent>
                    </Link>
                  </Card>

                  {/* Digital Archive */}
                  <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-background/95 backdrop-blur border-white/20">
                    <Link to="/archive">
                      <CardContent className="p-1 text-center">
                        <div className="w-4 h-4 mx-auto mb-1 rounded-md bg-gradient-sunset flex items-center justify-center group-hover:animate-monastery-glow transition-all duration-300">
                          <Archive className="h-2 w-2 text-white" />
                        </div>
                        <h4 className="font-semibold text-xs mb-1 group-hover:text-primary transition-colors text-white">
                          Archive
                        </h4>
                        <Badge variant="outline" className="text-saffron border-saffron/30 text-xs px-1 py-0">
                          Browse
                        </Badge>
                      </CardContent>
                    </Link>
                  </Card>

                  {/* Community Hub */}
                  <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-background/95 backdrop-blur border-white/20">
                    <Link to="/community">
                      <CardContent className="p-1 text-center">
                        <div className="w-4 h-4 mx-auto mb-1 rounded-md bg-gradient-monastery flex items-center justify-center group-hover:animate-monastery-glow transition-all duration-300">
                          <Users className="h-2 w-2 text-white" />
                        </div>
                        <h4 className="font-semibold text-xs mb-1 group-hover:text-primary transition-colors text-white">
                          Community
                        </h4>
                        <Badge variant="outline" className="text-saffron border-saffron/30 text-xs px-1 py-0">
                          Join
                        </Badge>
                      </CardContent>
                    </Link>
                  </Card>

                  {/* Explore All */}
                  <Card className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 cursor-pointer bg-background/95 backdrop-blur border-white/20">
                    <Link to="/explore">
                      <CardContent className="p-1 text-center">
                        <div className="w-4 h-4 mx-auto mb-1 rounded-md bg-gradient-saffron flex items-center justify-center group-hover:animate-monastery-glow transition-all duration-300">
                          <BookOpen className="h-2 w-2 text-white" />
                        </div>
                        <h4 className="font-semibold text-xs mb-1 group-hover:text-primary transition-colors text-white">
                          Explore All
                        </h4>
                        <Badge variant="outline" className="text-saffron border-saffron/30 text-xs px-1 py-0">
                          Explore
                        </Badge>
                      </CardContent>
                    </Link>
                  </Card>
                </div>
              </div>
            </div>
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