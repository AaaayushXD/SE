"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface CategoryFilterProps {
  courses: Courses.CourseCard[];
  selectedCategories: string[];
  selectedLevels: string[];
  selectedRatings: number[];
  priceRange: number[];
  onCategoryChange: (categories: string[]) => void;
  onLevelChange: (levels: string[]) => void;
  onRatingChange: (ratings: number[]) => void;
  onPriceChange: (range: number[]) => void;
  onReset: () => void;
}

export const CategoryFilter = ({
  courses,
  selectedCategories,
  selectedLevels,
  selectedRatings,
  priceRange,
  onCategoryChange,
  onLevelChange,
  onRatingChange,
  onPriceChange,
  onReset,
}: CategoryFilterProps) => {
  // Extract unique categories, levels, and ratings from courses
  const categories = Array.from(
    new Set(courses.map((course) => course.category))
  );
  const levels = Array.from(new Set(courses.map((course) => course.level)));
  const ratings = [4.5, 4.0, 3.5, 3.0];

  // Toggle category selection
  const toggleCategory = (category: string) => {
    if (selectedCategories.includes(category)) {
      onCategoryChange(selectedCategories.filter((c) => c !== category));
    } else {
      onCategoryChange([...selectedCategories, category]);
    }
  };

  // Toggle level selection
  const toggleLevel = (level: string) => {
    if (selectedLevels.includes(level)) {
      onLevelChange(selectedLevels.filter((l) => l !== level));
    } else {
      onLevelChange([...selectedLevels, level]);
    }
  };

  // Toggle rating selection
  const toggleRating = (rating: number) => {
    if (selectedRatings.includes(rating)) {
      onRatingChange(selectedRatings.filter((r) => r !== rating));
    } else {
      onRatingChange([...selectedRatings, rating]);
    }
  };

  // Handle price range change
  const handlePriceChange = (value: number[]) => {
    onPriceChange(value);
  };

  // Apply filters
  const applyFilters = () => {
    // Filters are applied automatically via state changes
  };

  return (
    <div className="bg-card rounded-lg border p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-semibold text-lg">Filter Courses</h2>
        {(selectedCategories.length > 0 ||
          selectedLevels.length > 0 ||
          selectedRatings.length > 0 ||
          priceRange[0] > 0 ||
          priceRange[1] < 100) && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onReset}
            className="h-8 px-2"
          >
            Reset
          </Button>
        )}
      </div>

      {/* Active filters */}
      {(selectedCategories.length > 0 ||
        selectedLevels.length > 0 ||
        selectedRatings.length > 0) && (
        <div className="mb-4">
          <h3 className="text-sm font-medium mb-2">Active filters:</h3>
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => (
              <Badge
                key={`active-${category}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {category}
                <button
                  onClick={() => toggleCategory(category)}
                  className="ml-1 hover:bg-muted rounded-full h-4 w-4 inline-flex items-center justify-center"
                >
                  ×
                </button>
              </Badge>
            ))}
            {selectedLevels.map((level) => (
              <Badge
                key={`active-${level}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {level}
                <button
                  onClick={() => toggleLevel(level)}
                  className="ml-1 hover:bg-muted rounded-full h-4 w-4 inline-flex items-center justify-center"
                >
                  ×
                </button>
              </Badge>
            ))}
            {selectedRatings.map((rating) => (
              <Badge
                key={`active-${rating}`}
                variant="secondary"
                className="flex items-center gap-1"
              >
                {rating}+ stars
                <button
                  onClick={() => toggleRating(rating)}
                  className="ml-1 hover:bg-muted rounded-full h-4 w-4 inline-flex items-center justify-center"
                >
                  ×
                </button>
              </Badge>
            ))}
          </div>
        </div>
      )}

      <Accordion
        type="multiple"
        defaultValue={["category", "level", "rating", "price"]}
      >
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {categories.map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={selectedCategories.includes(category)}
                    onCheckedChange={() => toggleCategory(category)}
                  />
                  <label
                    htmlFor={`category-${category}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {category}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="level">
          <AccordionTrigger>Level</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {levels.map((level) => (
                <div key={level} className="flex items-center space-x-2">
                  <Checkbox
                    id={`level-${level}`}
                    checked={selectedLevels.includes(level)}
                    onCheckedChange={() => toggleLevel(level)}
                  />
                  <label
                    htmlFor={`level-${level}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {level}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {ratings.map((rating) => (
                <div key={rating} className="flex items-center space-x-2">
                  <Checkbox
                    id={`rating-${rating}`}
                    checked={selectedRatings.includes(rating)}
                    onCheckedChange={() => toggleRating(rating)}
                  />
                  <label
                    htmlFor={`rating-${rating}`}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {rating}+ stars
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider
                value={priceRange}
                max={100}
                step={1}
                onValueChange={handlePriceChange}
              />
              <div className="flex items-center justify-between">
                <span className="text-sm">
                  Rs{" "}
                  {(
                    Math.min(...courses.map((c) => c.price)) +
                    (priceRange[0] / 100) *
                      (Math.max(...courses.map((c) => c.price)) -
                        Math.min(...courses.map((c) => c.price)))
                  ).toFixed(2)}
                </span>
                <span className="text-sm">
                  Rs{" "}
                  {(
                    Math.min(...courses.map((c) => c.price)) +
                    (priceRange[1] / 100) *
                      (Math.max(...courses.map((c) => c.price)) -
                        Math.min(...courses.map((c) => c.price)))
                  ).toFixed(2)}
                </span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mt-6">
        <Button className="w-full" onClick={applyFilters}>
          Apply Filters
        </Button>
      </div>
    </div>
  );
};
