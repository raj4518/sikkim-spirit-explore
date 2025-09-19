import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  RotateCw, 
  Maximize, 
  Info, 
  Map,
  Camera,
  Languages,
  Calendar as CalendarIcon
} from "lucide-react";
import { useParams, Link } from "react-router-dom";

const tourData = {
  rumtek: {
    name: "Rumtek Monastery",
    location: "East Sikkim",
    description: "Experience the grandeur of Sikkim's largest monastery with our immersive 360° virtual tour.",
    scenes: [
      { id: "entrance", name: "Main Entrance", description: "Traditional monastery gates with prayer wheels" },
      { id: "courtyard", name: "Central Courtyard", description: "Sacred space for ceremonies and gatherings" },
      { id: "main-hall", name: "Main Prayer Hall", description: "Golden Buddha statue and intricate murals" },
      { id: "shrine", name: "Golden Shrine", description: "Sacred relics and offerings" },
      { id: "meditation", name: "Meditation Hall", description: "Quiet space for contemplation" }
    ],
    audioTracks: [
      { id: "narration", name: "English Narration", language: "en" },
      { id: "tibetan", name: "Tibetan Chanting", language: "bo" },
      { id: "nepali", name: "Nepali Guide", language: "ne" }
    ]
  }
};

export default function VirtualTour() {
  const { id } = useParams();
  const [currentScene, setCurrentScene] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(true);
  const [showInfo, setShowInfo] = useState(true);
  const [selectedAudio, setSelectedAudio] = useState("narration");

  const tour = tourData[id as keyof typeof tourData] || tourData.rumtek;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-monastery text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <div>
              <Badge variant="secondary" className="mb-2 bg-saffron/20 text-saffron border-saffron/30">
                360° Virtual Experience
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{tour.name}</h1>
              <p className="opacity-90">{tour.location}</p>
            </div>
            <div className="flex gap-2">
              <Button asChild variant="secondary" size="sm">
                <Link to="/map" className="gap-2">
                  <Map className="h-4 w-4" />
                  View on Map
                </Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="border-primary-foreground text-primary-foreground">
                <Link to="/explore" className="gap-2">
                  Back to Explore
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Tour Viewer */}
      <section className="relative">
        <div className="aspect-video bg-gradient-to-br from-heritage to-primary relative overflow-hidden">
          {/* 360° Viewer Placeholder */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-primary-foreground animate-fade-in">
              <Camera className="h-16 w-16 mx-auto mb-4 opacity-60" />
              <h3 className="text-2xl font-bold mb-2">360° Virtual Tour</h3>
              <p className="text-lg opacity-80 mb-6">
                {tour.scenes[currentScene].description}
              </p>
              <Button 
                size="lg" 
                onClick={() => setIsPlaying(!isPlaying)}
                className="bg-saffron hover:bg-gold text-saffron-foreground gap-2"
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                {isPlaying ? "Pause Tour" : "Start Tour"}
              </Button>
            </div>
          </div>

          {/* Control Overlay */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={() => setAudioEnabled(!audioEnabled)}
            >
              {audioEnabled ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
            </Button>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-black/50 hover:bg-black/70 text-white border-0"
            >
              <RotateCw className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-black/50 hover:bg-black/70 text-white border-0"
            >
              <Maximize className="h-4 w-4" />
            </Button>
            <Button 
              size="sm" 
              variant="secondary" 
              className="bg-black/50 hover:bg-black/70 text-white border-0"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info className="h-4 w-4" />
            </Button>
          </div>

          {/* Info Panel */}
          {showInfo && (
            <div className="absolute bottom-4 left-4 right-4 md:left-4 md:right-auto md:w-80 animate-fade-in">
              <Card className="bg-black/80 border-white/20 text-white">
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">{tour.scenes[currentScene].name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-90 mb-3">
                    {tour.scenes[currentScene].description}
                  </p>
                  <div className="flex items-center gap-2">
                    <Languages className="h-4 w-4 opacity-60" />
                    <select 
                      value={selectedAudio}
                      onChange={(e) => setSelectedAudio(e.target.value)}
                      className="bg-transparent border border-white/20 rounded px-2 py-1 text-xs"
                    >
                      {tour.audioTracks.map((track) => (
                        <option key={track.id} value={track.id} className="bg-black">
                          {track.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>

        {/* Scene Navigation */}
        <div className="bg-muted/30 border-t py-4">
          <div className="container mx-auto px-4">
            <div className="flex gap-4 overflow-x-auto">
              {tour.scenes.map((scene, index) => (
                <Button
                  key={scene.id}
                  variant={currentScene === index ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentScene(index)}
                  className={`flex-shrink-0 ${
                    currentScene === index 
                      ? "bg-gradient-monastery text-primary-foreground shadow-monastery" 
                      : "hover:bg-muted"
                  }`}
                >
                  {scene.name}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tour Information */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl">About This Virtual Tour</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">
                    {tour.description}
                  </p>
                  <p className="text-muted-foreground">
                    This immersive experience allows you to explore the monastery's sacred spaces at your own pace. 
                    Navigate through different areas, listen to guided narration in multiple languages, and learn 
                    about the rich history and spiritual significance of each location.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <Badge variant="secondary">360° Photography</Badge>
                    <Badge variant="secondary">Multi-language Audio</Badge>
                    <Badge variant="secondary">Interactive Hotspots</Badge>
                    <Badge variant="secondary">Cultural Context</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="animate-scale-in" style={{ animationDelay: "0.1s" }}>
                <CardHeader>
                  <CardTitle>Tour Features</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Camera className="h-5 w-5 text-saffron" />
                    <span className="text-sm">High-resolution 360° imagery</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Volume2 className="h-5 w-5 text-saffron" />
                    <span className="text-sm">Guided audio narration</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Languages className="h-5 w-5 text-saffron" />
                    <span className="text-sm">Multiple language support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-saffron" />
                    <span className="text-sm">Interactive information points</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <CardHeader>
                  <CardTitle>Explore More</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <Link to="/archive">
                      <Map className="h-4 w-4" />
                      View Historical Documents
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <Link to="/calendar">
                      <CalendarIcon className="h-4 w-4" />
                      Upcoming Events
                    </Link>
                  </Button>
                  <Button asChild variant="outline" className="w-full justify-start gap-2">
                    <Link to="/map">
                      <Map className="h-4 w-4" />
                      Find on Map
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}