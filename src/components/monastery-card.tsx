import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import monasteryImage from "@/assets/monastery-card.jpg";

interface MonasteryCardProps {
  id: string;
  name: string;
  location: string;
  type: string;
  era: string;
  description: string;
  visitorsCount?: number;
  nextEvent?: string;
  imageUrl?: string;
}

export function MonasteryCard({
  id,
  name,
  location,
  type,
  era,
  description,
  visitorsCount,
  nextEvent,
  imageUrl = monasteryImage
}: MonasteryCardProps) {
  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 animate-scale-in">
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name} monastery`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/90 text-foreground">
            {type}
          </Badge>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors">
              {name}
            </h3>
            <div className="flex items-center text-sm text-muted-foreground mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              {location}
            </div>
          </div>
          <Badge variant="outline" className="text-xs border-saffron text-saffron">
            {era}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground line-clamp-2">
          {description}
        </p>

        <div className="flex items-center justify-between text-xs text-muted-foreground">
          {visitorsCount && (
            <div className="flex items-center">
              <Users className="h-3 w-3 mr-1" />
              {visitorsCount} visitors
            </div>
          )}
          {nextEvent && (
            <div className="flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              {nextEvent}
            </div>
          )}
        </div>

        <div className="flex gap-2 pt-2">
          <Button 
            asChild
            variant="default" 
            size="sm" 
            className="flex-1 bg-gradient-monastery hover:shadow-monastery transition-all duration-200"
          >
            <Link to={`/virtual-tour/${id}`}>
              Virtual Tour
            </Link>
          </Button>
          <Button 
            asChild
            variant="outline" 
            size="sm" 
            className="flex-1 border-saffron text-saffron hover:bg-saffron hover:text-saffron-foreground"
          >
            <Link to={`/monastery/${id}`}>
              Learn More
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}