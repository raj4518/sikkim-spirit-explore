import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MonasteryCard } from "@/components/monastery-card";
import { Search, Filter, MapPin, Calendar } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const monasteries = [
  {
    id: "rumtek",
    name: "Rumtek Monastery",
    location: "East Sikkim",
    type: "Kagyu",
    era: "16th Century",
    description: "The largest monastery in Sikkim and seat of the Karmapa. Famous for its golden stupa and traditional architecture.",
    visitorsCount: 2500,
    nextEvent: "Losar Festival"
  },
  {
    id: "pemayangtse",
    name: "Pemayangtse Monastery",
    location: "West Sikkim",
    type: "Nyingma",
    era: "17th Century", 
    description: "One of the oldest and most important monasteries in Sikkim, meaning 'Perfect Sublime Lotus'.",
    visitorsCount: 1800,
    nextEvent: "Chaam Dance"
  },
  {
    id: "tashiding",
    name: "Tashiding Monastery",
    location: "West Sikkim",
    type: "Nyingma",
    era: "17th Century",
    description: "Sacred monastery on a hilltop between Rathong and Rangeet rivers, known for holy water ceremony.",
    visitorsCount: 1200,
    nextEvent: "Bhumchu Festival"
  },
  {
    id: "enchey",
    name: "Enchey Monastery",
    location: "East Sikkim",
    type: "Nyingma",
    era: "19th Century",
    description: "Located in Gangtok, known for its peaceful atmosphere and beautiful mountain views.",
    visitorsCount: 900,
    nextEvent: "Chaam Dance"
  },
  {
    id: "dubdi",
    name: "Dubdi Monastery",
    location: "West Sikkim", 
    type: "Nyingma",
    era: "17th Century",
    description: "The oldest monastery in Sikkim, also known as Yuksom Monastery, surrounded by dense forests.",
    visitorsCount: 600,
    nextEvent: "Meditation Retreat"
  },
  {
    id: "phensang",
    name: "Phensang Monastery",
    location: "North Sikkim",
    type: "Gelug",
    era: "18th Century",
    description: "Remote monastery in the high Himalayas, known for its ancient murals and manuscripts.",
    visitorsCount: 300,
    nextEvent: "Prayer Festival"
  }
];

const regions = ["All Regions", "East Sikkim", "West Sikkim", "North Sikkim", "South Sikkim"];
const types = ["All Types", "Nyingma", "Kagyu", "Gelug", "Sakya"];
const eras = ["All Eras", "16th Century", "17th Century", "18th Century", "19th Century"];

export default function Explore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedEra, setSelectedEra] = useState("All Eras");

  const filteredMonasteries = monasteries.filter((monastery) => {
    const matchesSearch = monastery.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monastery.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         monastery.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesRegion = selectedRegion === "All Regions" || monastery.location === selectedRegion;
    const matchesType = selectedType === "All Types" || monastery.type === selectedType;
    const matchesEra = selectedEra === "All Eras" || monastery.era === selectedEra;

    return matchesSearch && matchesRegion && matchesType && matchesEra;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-monastery text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-saffron/20 text-saffron border-saffron/30">
              47 Sacred Sites
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Monasteries
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Discover the spiritual heritage of Sikkim through our comprehensive collection 
              of Buddhist monasteries, each with unique history and traditions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters & Search */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search monasteries..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-3 items-center">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {regions.map((region) => (
                      <SelectItem key={region} value={region}>
                        {region}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {types.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <Select value={selectedEra} onValueChange={setSelectedEra}>
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {eras.map((era) => (
                      <SelectItem key={era} value={era}>
                        {era}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredMonasteries.length} of {monasteries.length} monasteries
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </div>
        </div>
      </section>

      {/* Monastery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {filteredMonasteries.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredMonasteries.map((monastery, index) => (
                <div
                  key={monastery.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <MonasteryCard {...monastery} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🏛️</div>
              <h3 className="text-2xl font-bold text-foreground mb-2">No monasteries found</h3>
              <p className="text-muted-foreground mb-6">
                Try adjusting your search criteria or filters
              </p>
              <Button 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedRegion("All Regions");
                  setSelectedType("All Types");
                  setSelectedEra("All Eras");
                }}
                variant="outline"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}