import { Clock, Star, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface CourseCardProps {
  course: Courses.CourseCard;
  featured?: boolean;
}

export const CourseCard = ({ course, featured }: CourseCardProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  return (
    <Card
      className={`h-full flex flex-col overflow-hidden transition-all duration-200 hover:shadow-md group ${
        featured ? "border-primary/20" : ""
      }`}
    >
      <div className="relative aspect-video overflow-hidden">
        {!isImageLoaded && (
          <img
            src={`/placeholder.svg?height=200&width=350&text=${encodeURIComponent(
              course.title
            )}`}
            alt={`Placeholder for ${course.title}`}
            className="object-cover w-full h-full"
          />
        )}

        <img
          src={
            course.image ||
            `/placeholder.svg?height=200&width=350&text=${encodeURIComponent(
              course.title
            )}`
          }
          alt={course.title}
          className="object-cover w-full h-full transition-transform duration-300"
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
          onError={() => setIsImageLoaded(false)}
        />
        <Badge variant="secondary" className="absolute top-2 right-2">
          {course.level}
        </Badge>
      </div>
      <CardHeader className="p-4">
        <div className="flex justify-between items-start gap-2">
          <div>
            <Badge variant="outline" className="mb-2">
              {course.category}
            </Badge>
            <h3 className="text-lg font-semibold line-clamp-2">
              {course.title}
            </h3>
          </div>
          {featured && (
            <Badge variant="default" className="shrink-0 bg-[#BA68C8]">
              Featured
            </Badge>
          )}
        </div>
        <div className="text-sm text-muted-foreground">{course.instructor}</div>
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
          {course.description}
        </p>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{course.rating.toFixed(1)}</span>
            <span className="text-muted-foreground ml-1">
              ({course.reviews.toLocaleString()})
            </span>
          </div>
          <div className="flex items-center ml-auto">
            <Users className="h-4 w-4 mr-1 text-muted-foreground" />
            <span className="text-muted-foreground">
              {course.students.toLocaleString()}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-sm mt-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <span className="text-muted-foreground">{course.duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="font-bold text-lg">Rs {course.price.toFixed(2)}</div>
        <Button asChild size="sm" className="bg-[#39b2ad] hover:bg-[#366d6b]">
          <a href={`/course/${course.id}`}>View Course</a>
        </Button>
      </CardFooter>
    </Card>
  );
};
