import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon,
  MapPin,
  Clock,
  Users,
  Star,
  BookOpen,
  Filter
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const events = [
  {
    id: "losar-2024",
    title: "Losar Festival",
    type: "Major Festival",
    monastery: "Rumtek Monastery",
    date: "2024-02-10",
    endDate: "2024-02-12",
    time: "6:00 AM - 8:00 PM",
    description: "Tibetan New Year celebration with traditional dances, prayers, and community feasts.",
    capacity: 500,
    registered: 234,
    price: "Free",
    features: ["Traditional Dance", "Community Feast", "Prayer Ceremonies", "Cultural Programs"]
  },
  {
    id: "chaam-dance",
    title: "Chaam Sacred Dance",
    type: "Ritual Ceremony",
    monastery: "Pemayangtse Monastery",
    date: "2024-03-15",
    endDate: "2024-03-15",
    time: "10:00 AM - 4:00 PM",
    description: "Sacred mask dance performed by monks, depicting the victory of good over evil.",
    capacity: 200,
    registered: 156,
    price: "₹100",
    features: ["Sacred Masks", "Traditional Music", "Spiritual Teaching", "Photography Allowed"]
  },
  {
    id: "bhumchu",
    title: "Bhumchu Festival",
    type: "Sacred Ceremony",
    monastery: "Tashiding Monastery",
    date: "2024-02-24",
    endDate: "2024-02-24", 
    time: "5:00 AM - 12:00 PM",
    description: "Holy water ceremony and blessing ritual at the sacred monastery.",
    capacity: 300,
    registered: 89,
    price: "Free",
    features: ["Holy Water Ceremony", "Blessing Ritual", "Meditation Session", "Community Prayer"]
  },
  {
    id: "meditation-retreat",
    title: "Spring Meditation Retreat",
    type: "Workshop",
    monastery: "Dubdi Monastery",
    date: "2024-04-20",
    endDate: "2024-04-22",
    time: "6:00 AM - 6:00 PM",
    description: "Three-day intensive meditation retreat in the peaceful mountain setting.",
    capacity: 50,
    registered: 31,
    price: "₹2,500",
    features: ["Guided Meditation", "Dharma Talks", "Silent Practice", "Vegetarian Meals"]
  },
  {
    id: "buddha-purnima",
    title: "Buddha Purnima",
    type: "Major Festival",
    monastery: "Enchey Monastery",
    date: "2024-05-23",
    endDate: "2024-05-23",
    time: "4:00 AM - 10:00 PM",
    description: "Celebration of Buddha's birth, enlightenment, and parinirvana.",
    capacity: 400,
    registered: 178,
    price: "Free",
    features: ["Prayer Ceremonies", "Candle Lighting", "Community Service", "Cultural Programs"]
  },
  {
    id: "manuscript-workshop",
    title: "Traditional Art Workshop",
    type: "Cultural Workshop",
    monastery: "Phensang Monastery",
    date: "2024-06-10",
    endDate: "2024-06-12",
    time: "9:00 AM - 5:00 PM",
    description: "Learn traditional Tibetan manuscript writing and thangka painting techniques.",
    capacity: 25,
    registered: 18,
    price: "₹5,000",
    features: ["Manuscript Writing", "Thangka Painting", "Traditional Tools", "Expert Guidance"]
  }
];

const eventTypes = ["All Types", "Major Festival", "Ritual Ceremony", "Sacred Ceremony", "Workshop", "Cultural Workshop"];
const months = ["All Months", "February", "March", "April", "May", "June"];

export default function Calendar() {
  const [selectedType, setSelectedType] = useState("All Types");
  const [selectedMonth, setSelectedMonth] = useState("All Months");

  const filteredEvents = events.filter((event) => {
    const matchesType = selectedType === "All Types" || event.type === selectedType;
    const eventMonth = new Date(event.date).toLocaleString('default', { month: 'long' });
    const matchesMonth = selectedMonth === "All Months" || eventMonth === selectedMonth;
    return matchesType && matchesMonth;
  });

  const getEventStatusColor = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return "bg-red-100 text-red-800";
    if (percentage >= 70) return "bg-yellow-100 text-yellow-800";
    return "bg-green-100 text-green-800";
  };

  const getEventStatusText = (registered: number, capacity: number) => {
    const percentage = (registered / capacity) * 100;
    if (percentage >= 90) return "Almost Full";
    if (percentage >= 70) return "Filling Fast";
    return "Available";
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-sunset text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center animate-fade-in">
            <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
              Cultural Calendar 2024
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Festivals & Events
            </h1>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Join sacred festivals, cultural workshops, and spiritual ceremonies 
              throughout the year at Sikkim's monastery heritage sites.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30 sticky top-16 z-40 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3 items-center">
              <Select value={selectedType} onValueChange={setSelectedType}>
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {eventTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedMonth} onValueChange={setSelectedMonth}>
                <SelectTrigger className="w-36">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {months.map((month) => (
                    <SelectItem key={month} value={month}>
                      {month}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-4">
              <p className="text-sm text-muted-foreground">
                Showing {filteredEvents.length} of {events.length} events
              </p>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                More Filters
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.map((event, index) => (
              <Card 
                key={event.id} 
                className="group hover:shadow-elevated hover:-translate-y-1 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="border-saffron text-saffron">
                          {event.type}
                        </Badge>
                        <Badge 
                          className={`${getEventStatusColor(event.registered, event.capacity)} border-0`}
                        >
                          {getEventStatusText(event.registered, event.capacity)}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {event.title}
                      </CardTitle>
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {event.monastery}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-primary">
                        {new Date(event.date).getDate()}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(event.date).toLocaleString('default', { month: 'short' })}
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  <p className="text-muted-foreground text-sm">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.date === event.endDate 
                          ? new Date(event.date).toLocaleDateString()
                          : `${new Date(event.date).toLocaleDateString()} - ${new Date(event.endDate).toLocaleDateString()}`
                        }
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>{event.registered}/{event.capacity} registered</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{event.price}</span>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1">
                    {event.features.map((feature) => (
                      <Badge key={feature} variant="secondary" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button 
                      className="flex-1 bg-gradient-monastery hover:shadow-monastery"
                    >
                      Reserve Spot
                    </Button>
                    <Button 
                      asChild
                      variant="outline" 
                      className="flex-1 border-saffron text-saffron hover:bg-saffron hover:text-saffron-foreground"
                    >
                      <Link to={`/monastery/${event.monastery.toLowerCase().replace(/\s+/g, '-')}`} className="gap-1">
                        <BookOpen className="h-4 w-4" />
                        Learn More
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Plan Your Spiritual Journey
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of visitors experiencing the rich cultural heritage and 
            spiritual traditions of Sikkim's monasteries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild
              size="lg" 
              className="bg-gradient-monastery hover:shadow-monastery px-8"
            >
              <Link to="/explore">Explore Monasteries</Link>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-saffron text-saffron hover:bg-saffron hover:text-saffron-foreground px-8"
            >
              <Link to="/map">View Map</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}