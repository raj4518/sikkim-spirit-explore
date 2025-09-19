import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Download, 
  Eye, 
  FileText, 
  Image, 
  Scroll,
  Calendar,
  MapPin,
  ZoomIn
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import manuscriptImage from "@/assets/manuscript-sample.jpg";

const archiveItems = [
  {
    id: "1",
    title: "Prajnaparamita Sutra",
    type: "Manuscript",
    monastery: "Rumtek",
    era: "16th Century",
    language: "Tibetan",
    description: "Ancient Buddhist text on the perfection of wisdom, written on palm leaves with gold ink.",
    imageUrl: manuscriptImage,
    pages: 108,
    condition: "Well Preserved"
  },
  {
    id: "2", 
    title: "Monastery Construction Plans",
    type: "Document",
    monastery: "Pemayangtse",
    era: "17th Century",
    language: "Tibetan",
    description: "Original architectural drawings and construction guidelines for monastery buildings.",
    imageUrl: manuscriptImage,
    pages: 24,
    condition: "Fragile"
  },
  {
    id: "3",
    title: "Tara Mandala Painting",
    type: "Artwork",
    monastery: "Tashiding",
    era: "18th Century",
    language: "Visual",
    description: "Sacred mandala depicting the goddess Tara, painted with natural pigments on cloth.",
    imageUrl: manuscriptImage,
    pages: 1,
    condition: "Restored"
  },
  {
    id: "4",
    title: "Ritual Calendar Scroll",
    type: "Manuscript",
    monastery: "Enchey",
    era: "19th Century",
    language: "Tibetan/Sanskrit",
    description: "Annual festival and ritual calendar with astronomical calculations.",
    imageUrl: manuscriptImage,
    pages: 36,
    condition: "Good"
  },
  {
    id: "5",
    title: "Meditation Instructions",
    type: "Manuscript",
    monastery: "Dubdi",
    era: "17th Century",
    language: "Tibetan",
    description: "Detailed instructions for various meditation practices and techniques.",
    imageUrl: manuscriptImage,
    pages: 72,
    condition: "Well Preserved"
  },
  {
    id: "6",
    title: "Monastery History Chronicle",
    type: "Document",
    monastery: "Phensang",
    era: "18th Century",
    language: "Tibetan",
    description: "Historical account of monastery founding and important events.",
    imageUrl: manuscriptImage,
    pages: 156,
    condition: "Partially Damaged"
  }
];

const typeIcons = {
  Manuscript: Scroll,
  Document: FileText,
  Artwork: Image
};

const conditionColors = {
  "Well Preserved": "bg-green-100 text-green-800",
  "Good": "bg-blue-100 text-blue-800",
  "Restored": "bg-purple-100 text-purple-800",
  "Fragile": "bg-yellow-100 text-yellow-800",
  "Partially Damaged": "bg-red-100 text-red-800"
};

export default function Archive() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedMonastery, setSelectedMonastery] = useState("All Monasteries");
  const [selectedEra, setSelectedEra] = useState("All Eras");

  const filteredItems = archiveItems.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All Types" || item.type === selectedType;
    const matchesMonastery = selectedMonastery === "All Monasteries" || item.monastery === selectedMonastery;
    const matchesEra = selectedEra === "All Eras" || item.era === selectedEra;

    return matchesSearch && matchesType && matchesMonastery && matchesEra;
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sunset text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              1,200+ Digitized Items
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Digital Archive
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Explore our extensive collection of digitized manuscripts, historical documents, 
              and sacred artworks from Sikkim's monastery heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Search & Filters */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search archive..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Types">All Types</SelectItem>
                  <SelectItem value="Manuscript">Manuscripts</SelectItem>
                  <SelectItem value="Document">Documents</SelectItem>
                  <SelectItem value="Artwork">Artworks</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedMonastery} onValueChange={setSelectedMonastery}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Monasteries">All Monasteries</SelectItem>
                  <SelectItem value="Rumtek">Rumtek</SelectItem>
                  <SelectItem value="Pemayangtse">Pemayangtse</SelectItem>
                  <SelectItem value="Tashiding">Tashiding</SelectItem>
                  <SelectItem value="Enchey">Enchey</SelectItem>
                  <SelectItem value="Dubdi">Dubdi</SelectItem>
                  <SelectItem value="Phensang">Phensang</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedEra} onValueChange={setSelectedEra}>
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="All Eras">All Eras</SelectItem>
                  <SelectItem value="16th Century">16th Century</SelectItem>
                  <SelectItem value="17th Century">17th Century</SelectItem>
                  <SelectItem value="18th Century">18th Century</SelectItem>
                  <SelectItem value="19th Century">19th Century</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredItems.length} of {archiveItems.length} items
            </p>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Advanced Search
            </Button>
          </div>
        </div>
      </section>

      {/* Archive Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredItems.map((item, index) => {
              const IconComponent = typeIcons[item.type as keyof typeof typeIcons];
              
              return (
                <Card 
                  key={item.id} 
                  className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-background/90 text-foreground gap-1">
                        <IconComponent className="h-3 w-3" />
                        {item.type}
                      </Badge>
                    </div>
                    <div className="absolute top-3 right-3">
                      <Badge className={`${conditionColors[item.condition as keyof typeof conditionColors]} border-0`}>
                        {item.condition}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="secondary" className="gap-1">
                              <Eye className="h-4 w-4" />
                              View
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="max-w-4xl">
                            <DialogHeader>
                              <DialogTitle>{item.title}</DialogTitle>
                            </DialogHeader>
                            <div className="space-y-4">
                              <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full rounded-lg"
                              />
                              <div className="grid grid-cols-2 gap-4 text-sm">
                                <div>
                                  <span className="font-medium">Monastery:</span> {item.monastery}
                                </div>
                                <div>
                                  <span className="font-medium">Era:</span> {item.era}
                                </div>
                                <div>
                                  <span className="font-medium">Language:</span> {item.language}
                                </div>
                                <div>
                                  <span className="font-medium">Pages:</span> {item.pages}
                                </div>
                              </div>
                              <p className="text-muted-foreground">{item.description}</p>
                              <div className="flex gap-2">
                                <Button className="gap-1">
                                  <Download className="h-4 w-4" />
                                  Download
                                </Button>
                                <Button variant="outline" className="gap-1">
                                  <ZoomIn className="h-4 w-4" />
                                  High Resolution
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                        <Button size="sm" variant="secondary" className="gap-1">
                          <Download className="h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-4">
                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {item.monastery}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {item.era}
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
                      {item.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {item.pages} pages • {item.language}
                      </span>
                      <div className="flex gap-1">
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}