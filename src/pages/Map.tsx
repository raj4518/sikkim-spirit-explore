import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  MapPin, 
  Navigation, 
  Route,
  Mountain,
  Camera,
  Calendar
} from "lucide-react";
import { Link } from "react-router-dom";

const monasteries = [
  { id: "rumtek", name: "Rumtek Monastery", lat: 27.3389, lng: 88.5583, region: "East Sikkim", type: "Kagyu" },
  { id: "pemayangtse", name: "Pemayangtse Monastery", lat: 27.2167, lng: 88.2833, region: "West Sikkim", type: "Nyingma" },
  { id: "tashiding", name: "Tashiding Monastery", lat: 27.2667, lng: 88.2500, region: "West Sikkim", type: "Nyingma" },
  { id: "enchey", name: "Enchey Monastery", lat: 27.3314, lng: 88.6138, region: "East Sikkim", type: "Nyingma" },
  { id: "dubdi", name: "Dubdi Monastery", lat: 27.2000, lng: 88.2000, region: "West Sikkim", type: "Nyingma" },
  { id: "phensang", name: "Phensang Monastery", lat: 27.7000, lng: 88.5000, region: "North Sikkim", type: "Gelug" }
];

export default function Map() {
  const [selectedMonastery, setSelectedMonastery] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredMonasteries = monasteries.filter(monastery =>
    monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    monastery.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-saffron text-saffron-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-saffron-foreground border-white/30">
              Interactive Heritage Map
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Monastery Locations
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explore the geographical distribution of Sikkim's sacred sites with 
              interactive maps, travel routes, and nearby attractions.
            </p>
          </div>
        </div>
      </section>

      {/* Map Interface */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Search */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Search Locations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Input
                    placeholder="Search monasteries..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="mb-4"
                  />
                  <div className="space-y-2">
                    {filteredMonasteries.map((monastery) => (
                      <Button
                        key={monastery.id}
                        variant={selectedMonastery === monastery.id ? "default" : "ghost"}
                        size="sm"
                        className="w-full justify-start text-left h-auto p-3"
                        onClick={() => setSelectedMonastery(monastery.id)}
                      >
                        <div>
                          <div className="font-medium">{monastery.name}</div>
                          <div className="text-xs text-muted-foreground">
                            {monastery.region} • {monastery.type}
                          </div>
                        </div>
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Legend */}
              <Card>
                <CardHeader>
                  <CardTitle>Map Legend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary"></div>
                    <span className="text-sm">Kagyu Monasteries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-saffron"></div>
                    <span className="text-sm">Nyingma Monasteries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded-full bg-heritage"></div>
                    <span className="text-sm">Gelug Monasteries</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Route className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Pilgrimage Routes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mountain className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm">Sacred Mountains</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Map Container */}
            <div className="lg:col-span-3">
              <Card className="h-[600px]">
                <CardContent className="p-0 h-full">
                  {/* Map Placeholder */}
                  <div className="relative w-full h-full bg-gradient-to-br from-heritage/20 to-saffron/20 rounded-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center animate-fade-in">
                        <MapPin className="h-16 w-16 mx-auto mb-4 text-primary" />
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          Interactive Map
                        </h3>
                        <p className="text-muted-foreground mb-6 max-w-md">
                          Interactive map showing monastery locations, pilgrimage routes, 
                          and nearby attractions across Sikkim.
                        </p>
                        <div className="flex gap-2 justify-center">
                          <Button variant="outline" size="sm" className="gap-1">
                            <Navigation className="h-4 w-4" />
                            Get Directions
                          </Button>
                          <Button variant="outline" size="sm" className="gap-1">
                            <Route className="h-4 w-4" />
                            Plan Route
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Map Controls */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                        +
                      </Button>
                      <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                        -
                      </Button>
                    </div>

                    {/* Sample Pins */}
                    <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-primary rounded-full border-2 border-white shadow-lg animate-monastery-glow cursor-pointer"></div>
                    </div>
                    <div className="absolute top-2/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-saffron rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
                    </div>
                    <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-6 h-6 bg-heritage rounded-full border-2 border-white shadow-lg cursor-pointer"></div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Selected Monastery Info */}
              {selectedMonastery && (
                <Card className="mt-4 animate-scale-in">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-lg">
                          {monasteries.find(m => m.id === selectedMonastery)?.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {monasteries.find(m => m.id === selectedMonastery)?.region}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <Button asChild size="sm" variant="default">
                          <Link to={`/virtual-tour/${selectedMonastery}`} className="gap-1">
                            <Camera className="h-4 w-4" />
                            Virtual Tour
                          </Link>
                        </Button>
                        <Button asChild size="sm" variant="outline">
                          <Link to="/calendar" className="gap-1">
                            <Calendar className="h-4 w-4" />
                            Events
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interactive Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Navigate and explore with comprehensive mapping tools
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center animate-scale-in">
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-monastery flex items-center justify-center">
                  <Navigation className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">GPS Navigation</h3>
                <p className="text-muted-foreground text-sm">
                  Get precise directions to any monastery with real-time navigation support.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-saffron flex items-center justify-center">
                  <Route className="h-6 w-6 text-saffron-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Pilgrimage Routes</h3>
                <p className="text-muted-foreground text-sm">
                  Discover traditional pilgrimage paths connecting sacred sites.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6">
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-heritage flex items-center justify-center">
                  <Mountain className="h-6 w-6 text-heritage-foreground" />
                </div>
                <h3 className="font-bold text-lg mb-2">Points of Interest</h3>
                <p className="text-muted-foreground text-sm">
                  Find nearby attractions, accommodations, and cultural sites.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}