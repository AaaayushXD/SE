"use client";

import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CourseCard } from "@/common";

interface CourseGridProps {
  courses: Courses.CourseCard[];
}

export const CourseGrid = ({ courses }: CourseGridProps) => {
  const [sortBy, setSortBy] = useState("popular");
  const [showAll, setShowAll] = useState<boolean>(false);

  const sortedCourses = [...courses].sort((a, b) => {
    switch (sortBy) {
      case "popular":
        return b.students - a.students;
      case "rating":
        return b.rating - a.rating;
      case "newest":
        return (
          new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime()
        );
      case "price-low":
        return a.price - b.price;
      case "price-high":
        return b.price - a.price;
      default:
        return 0;
    }
  });

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">All Courses</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="popular">Most Popular</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="newest">Newest</SelectItem>
              <SelectItem value="price-low">Price: Low to High</SelectItem>
              <SelectItem value="price-high">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {courses.length === 0 ? (
        <div className="text-center py-16 border rounded-lg">
          <h3 className="text-xl font-medium mb-2">No courses found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search criteria
          </p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {showAll ? (
              <>
                {sortedCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </>
            ) : (
              <>
                {sortedCourses.slice(0, 6).map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </>
            )}
          </div>
          {sortedCourses.length > 5 && (
            <div
              className="mt-4 w-full flex justify-center items-center transition ease-in-out duration-200"
              onClick={() => setShowAll((prev) => !prev)}
            >
              <button className="p-3 bg-[#BA68C8] text-white rounded hover:bg-[#6e3c77] cursor-pointer ">
                {showAll ? "View Less" : "Show More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};
