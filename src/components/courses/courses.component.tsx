/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { CategoryFilter } from "../category";
import { SearchBar } from "../search";
import { FeaturedCourses } from "../features";
import { CourseGrid } from "../course";

export const CoursesPage = ({ courses }: { courses: Courses.CourseCard[] }) => {
  const [filteredCourses, setFilteredCourses] = useState(courses);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);
  const [selectedRatings, setSelectedRatings] = useState<number[]>([]);
  const [priceRange, setPriceRange] = useState([0, 100]);

  // Apply filters whenever filter state changes
  useEffect(() => {
    let result = [...courses];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(query) ||
          course.description.toLowerCase().includes(query) ||
          course.instructor.toLowerCase().includes(query) ||
          course.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Apply category filter
    if (selectedCategories.length > 0) {
      result = result.filter((course) =>
        selectedCategories.includes(course.category)
      );
    }

    // Apply level filter
    if (selectedLevels.length > 0) {
      result = result.filter((course) => selectedLevels.includes(course.level));
    }

    // Apply rating filter
    if (selectedRatings.length > 0) {
      result = result.filter((course) => {
        return selectedRatings.some((minRating) => course.rating >= minRating);
      });
    }

    // Apply price filter
    const minPrice = Math.min(...courses.map((c) => c.price));
    const maxPrice = Math.max(...courses.map((c) => c.price));
    const normalizedMinPrice =
      minPrice + (priceRange[0] / 100) * (maxPrice - minPrice);
    const normalizedMaxPrice =
      minPrice + (priceRange[1] / 100) * (maxPrice - minPrice);

    result = result.filter(
      (course) =>
        course.price >= normalizedMinPrice && course.price <= normalizedMaxPrice
    );

    setFilteredCourses(result);
  }, [
    searchQuery,
    selectedCategories,
    selectedLevels,
    selectedRatings,
    priceRange,
  ]);

  // Handle search
  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  // Handle filter changes
  const handleCategoryChange = (categories: string[]) => {
    setSelectedCategories(categories);
  };

  const handleLevelChange = (levels: string[]) => {
    setSelectedLevels(levels);
  };

  const handleRatingChange = (ratings: number[]) => {
    setSelectedRatings(ratings);
  };

  const handlePriceChange = (range: number[]) => {
    setPriceRange(range);
  };

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
    setSelectedLevels([]);
    setSelectedRatings([]);
    setPriceRange([0, 100]);
  };

  return (
    <div className="container mx-auto px-4 py-12" id="courses">
      <div className="flex flex-col md:flex-row gap-6 mb-8">
        <div className="md:w-1/4">
          <CategoryFilter
            courses={courses}
            selectedCategories={selectedCategories}
            selectedLevels={selectedLevels}
            selectedRatings={selectedRatings}
            priceRange={priceRange}
            onCategoryChange={handleCategoryChange}
            onLevelChange={handleLevelChange}
            onRatingChange={handleRatingChange}
            onPriceChange={handlePriceChange}
            onReset={resetFilters}
          />
        </div>
        <div className="md:w-3/4">
          <SearchBar value={searchQuery} onChange={handleSearch} />
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-muted-foreground">
              Showing {filteredCourses.length} of {courses.length} courses
            </p>
            {(searchQuery ||
              selectedCategories.length > 0 ||
              selectedLevels.length > 0 ||
              selectedRatings.length > 0 ||
              priceRange[0] > 0 ||
              priceRange[1] < 100) && (
              <button
                onClick={resetFilters}
                className="text-sm text-primary hover:underline"
              >
                Clear all filters
              </button>
            )}
          </div>
          <CourseGrid courses={filteredCourses} />
        </div>
      </div>
      <FeaturedCourses
        courses={courses.filter((course) => course.rating >= 4.8)}
      />
    </div>
  );
};
